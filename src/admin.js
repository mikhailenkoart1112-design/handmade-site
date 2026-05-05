import { defaultData } from './data'

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxd_GOO4dzFA87Ks7tWGXjEIWsFyIyHCRKUilor0yfGPmZTHdWuOf4x5TI0jPse7jCnSg/exec'
const USERS = [
  { login: 'artem', password: '564k2kev' },
  { login: 'tanya', password: '0682063627' },
]

function showAdmin() {
  document.getElementById('loginScreen').style.display = 'none'
  document.getElementById('adminPanel').classList.add('active')
  renderOrders()
}

function showLogin() {
  document.getElementById('loginScreen').style.display = 'flex'
  document.getElementById('adminPanel').classList.remove('active')
}

function checkAuth() {
  const isAuth = localStorage.getItem('adminAuth')
  if (isAuth === 'true') showAdmin()
  else showLogin()
}

checkAuth()

window.login = function () {
  const login = document.getElementById('loginInput').value.trim()
  const password = document.getElementById('passwordInput').value.trim()
  const error = document.getElementById('errorMsg')

  const user = USERS.find((u) => u.login === login && u.password === password)

  if (user) {
    localStorage.setItem('adminAuth', 'true')
    error.textContent = ''
    showAdmin()
  } else {
    error.textContent = 'Невірний логін або пароль'
  }
}

window.logout = function () {
  localStorage.removeItem('adminAuth')
  showLogin()
}

function getData() {
  const saved = localStorage.getItem('siteData')
  if (!saved) return structuredClone(defaultData)

  try {
    return JSON.parse(saved)
  } catch {
    return structuredClone(defaultData)
  }
}

function saveData(data) {
  localStorage.setItem('siteData', JSON.stringify(data))
}

window.addProduct = function () {
  const data = getData()

  const titleUa = document.getElementById('titleUa').value.trim()
  const titleEn = document.getElementById('titleEn').value.trim()
  const descUa = document.getElementById('descUa').value.trim()
  const descEn = document.getElementById('descEn').value.trim()
  const image = document.getElementById('image').value.trim()

  if (!titleUa || !titleEn || !descUa || !descEn || !image) {
    alert('Заповни всі поля товару')
    return
  }

  data.products.push({
    titleUa,
    titleEn,
    descUa,
    descEn,
    image,
  })

  saveData(data)
  alert('Товар додано!')

  document.getElementById('titleUa').value = ''
  document.getElementById('titleEn').value = ''
  document.getElementById('descUa').value = ''
  document.getElementById('descEn').value = ''
  document.getElementById('image').value = ''
}

function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => {
      resolve(reader.result.split(',')[1])
    }

    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

window.addGallery = async function () {
  const fileInput = document.getElementById('galleryFile')
  const preview = document.getElementById('galleryPreview')

  if (!fileInput || !fileInput.files || !fileInput.files[0]) {
    alert('Вибери фото')
    return
  }

  const file = fileInput.files[0]

  try {
    alert('Завантаження фото...')

    const base64 = await readFileAsBase64(file)

    await fetch(SCRIPT_URL, {
  method: 'POST',
  body: JSON.stringify({
        action: 'upload',
        file: base64,
        type: file.type,
        name: file.name,
      }),
    })

    alert('Фото додано! Перевір Google Таблицю, лист Gallery')

    fileInput.value = ''
    if (preview) preview.src = ''
  } catch (error) {
    console.error(error)
    alert('Помилка завантаження фото')
  }
}

window.deleteImage = function () {
  const data = getData()
  const image = document.getElementById('deleteImage').value.trim()

  if (!image) {
    alert('Введи шлях або посилання фото для видалення')
    return
  }

  const oldLength = data.gallery.length
  data.gallery = data.gallery.filter((img) => img !== image)

  saveData(data)

  if (data.gallery.length === oldLength) alert('Такого фото не знайдено')
  else alert('Фото видалено!')

  document.getElementById('deleteImage').value = ''
}

window.cleanGallery = function () {
  const data = getData()
  data.gallery = data.gallery.filter((image) => image && image.trim() !== '')
  saveData(data)
  alert('Галерею очищено від пустих записів!')
}

window.resetData = function () {
  const ok = confirm('Точно скинути всі зміни?')
  if (!ok) return

  localStorage.removeItem('siteData')
  alert('Дані скинуто до стандартних!')
}

window.openAdminTab = function (tabName, button) {
  document.querySelectorAll('.admin-section').forEach((section) => {
    section.classList.remove('active')
  })

  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.classList.remove('active')
  })

  document.getElementById(`tab-${tabName}`).classList.add('active')
  button.classList.add('active')

  if (tabName === 'orders') renderOrders()
}

function getOrdersFromGoogleSheet(callback) {
  const callbackName = 'ordersCallback_' + Date.now()
  const script = document.createElement('script')

  window[callbackName] = function (orders) {
    callback(orders)
    delete window[callbackName]
    script.remove()
  }

  script.onerror = function () {
    const ordersList = document.getElementById('ordersList')
    if (ordersList) {
      ordersList.innerHTML = '<p class="empty">Не вдалося завантажити замовлення</p>'
    }

    delete window[callbackName]
    script.remove()
  }

  script.src = `${SCRIPT_URL}?callback=${callbackName}`
  document.body.appendChild(script)
}

async function updateOrderStatus(row, status) {
  await fetch(SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify({
      action: 'status',
      row,
      status,
    }),
  })

  setTimeout(renderOrders, 700)
}

window.updateOrderStatus = updateOrderStatus

function renderOrders() {
  const ordersList = document.getElementById('ordersList')
  if (!ordersList) return

  ordersList.innerHTML = '<p class="empty">Завантаження...</p>'

  getOrdersFromGoogleSheet((orders) => {
    if (!orders || orders.length === 0) {
      ordersList.innerHTML = '<p class="empty">Замовлень поки немає</p>'
      return
    }

    ordersList.innerHTML = orders.reverse().map((order) => {
      const status = order.status || 'Нове'
      const isDone = status === 'Виконано'

      return `
        <div class="order-card-admin ${isDone ? 'order-card-done' : ''}">
          <span class="order-status ${isDone ? 'done' : ''}">
            ${status}
          </span>

          <h3>${order.lastName || ''} ${order.firstName || ''} ${order.middleName || ''}</h3>

          <p><b>Телефон:</b> ${order.phone || '-'}</p>
          <p><b>Звʼязок:</b> ${order.contact || '-'}</p>
          <p><b>Область:</b> ${order.region || '-'}</p>
          <p><b>Місто / село:</b> ${order.city || '-'}</p>
          <p><b>Відділення НП:</b> ${order.post || '-'}</p>
          <p><b>Що замовляє:</b> ${order.product || '-'}</p>
          <p><b>Коментар:</b> ${order.comment || '-'}</p>
          <p><b>Дата:</b> ${order.date || '-'}</p>

          <div class="order-actions">
            <button class="green" onclick="updateOrderStatus(${order.id}, 'Виконано')">
              Зроблено
            </button>

            <button class="danger" onclick="updateOrderStatus(${order.id}, 'Відмовлено')">
              Відмовлено
            </button>
          </div>
        </div>
      `
    }).join('')
  })
}

window.clearOrders = function () {
  alert('Замовлення тепер зберігаються в Google Таблиці. Очистити їх можна тільки в самій таблиці.')
}

renderOrders()