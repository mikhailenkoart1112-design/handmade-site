import { defaultData } from './data'

const USERS = [
  { login: 'artem', password: '564k2kev' },
  { login: 'tanya', password: '0682063627' },
]

function showAdmin() {
  document.getElementById('loginScreen').style.display = 'none'
  document.getElementById('adminPanel').classList.add('active')
}

function showLogin() {
  document.getElementById('loginScreen').style.display = 'flex'
  document.getElementById('adminPanel').classList.remove('active')
}

function checkAuth() {
  const isAuth = localStorage.getItem('adminAuth')

  if (isAuth === 'true') {
    showAdmin()
  } else {
    showLogin()
  }
}

checkAuth()

window.login = function () {
  const login = document.getElementById('loginInput').value.trim()
  const password = document.getElementById('passwordInput').value.trim()
  const error = document.getElementById('errorMsg')

  const user = USERS.find(
    (u) => u.login === login && u.password === password
  )

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

  if (!saved) {
    return structuredClone(defaultData)
  }

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

  if (!image.startsWith('/images/')) {
    alert('Шлях до фото має бути типу: /images/назва.jpg')
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

window.addGallery = function () {
  const data = getData()
  const image = document.getElementById('galleryImg').value.trim()

  if (!image) {
    alert('Введи шлях до фото')
    return
  }

  if (!image.startsWith('/images/')) {
    alert('Шлях має бути типу: /images/g7.jpg')
    return
  }

  if (data.gallery.includes(image)) {
    alert('Таке фото вже є в галереї')
    return
  }

  data.gallery.push(image)

  saveData(data)
  alert('Фото додано!')

  document.getElementById('galleryImg').value = ''
  document.getElementById('galleryPreview').src = ''
}

window.deleteImage = function () {
  const data = getData()
  const image = document.getElementById('deleteImage').value.trim()

  if (!image) {
    alert('Введи шлях фото для видалення')
    return
  }

  const oldLength = data.gallery.length

  data.gallery = data.gallery.filter((img) => img !== image)

  saveData(data)

  if (data.gallery.length === oldLength) {
    alert('Такого фото не знайдено')
  } else {
    alert('Фото видалено!')
  }

  document.getElementById('deleteImage').value = ''
}

window.cleanGallery = function () {
  const data = getData()

  data.gallery = data.gallery.filter(
    (image) => image && image.trim() !== '' && image.startsWith('/images/')
  )

  saveData(data)
  alert('Галерею очищено від битих записів!')
}

window.resetData = function () {
  const ok = confirm('Точно скинути всі зміни?')

  if (!ok) return

  localStorage.removeItem('siteData')
  alert('Дані скинуто до стандартних!')
}

const galleryInput = document.getElementById('galleryImg')
const galleryPreview = document.getElementById('galleryPreview')

if (galleryInput && galleryPreview) {
  galleryInput.addEventListener('input', () => {
    galleryPreview.src = galleryInput.value.trim()
  })
}window.openAdminTab = function (tabName, button) {
  document.querySelectorAll('.admin-section').forEach((section) => {
    section.classList.remove('active')
  })

  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.classList.remove('active')
  })

  document.getElementById(`tab-${tabName}`).classList.add('active')
  button.classList.add('active')
}

function getOrders() {
  const saved = localStorage.getItem('orders')
  return saved ? JSON.parse(saved) : []
}

function saveOrders(orders) {
  localStorage.setItem('orders', JSON.stringify(orders))
}

function renderOrders() {
  const ordersList = document.getElementById('ordersList')
  if (!ordersList) return

  const orders = getOrders()

  if (orders.length === 0) {
    ordersList.innerHTML = '<p class="empty">Замовлень поки немає</p>'
    return
  }

  ordersList.innerHTML = orders
    .map((order) => {
      const isDone = order.status === 'Виконано'

      return `
        <div class="order-card-admin">
          <span class="order-status ${isDone ? 'done' : ''}">
            ${order.status || 'Нове'}
          </span>

          <h3>${order.lastName || ''} ${order.firstName || ''} ${order.middleName || ''}</h3>

          <p><b>Телефон:</b> ${order.phone || '-'}</p>
          <p><b>Звʼязок:</b> ${order.contact || '-'}</p>
          <p><b>Область:</b> ${order.region || '-'}</p>
          <p><b>Місто / село:</b> ${order.city || '-'}</p>
          <p><b>Відділення НП:</b> ${order.post || '-'}</p>
          <p><b>Що замовляє:</b> ${order.product || '-'}</p>
          <p><b>Коментар:</b> ${order.comment || '-'}</p>
          <p><b>Дата:</b> ${order.createdAt || '-'}</p>

          <button onclick="markOrderDone(${order.id})" class="green">Виконано</button>
          <button onclick="deleteOrder(${order.id})" class="danger">Видалити</button>
        </div>
      `
    })
    .join('')
}

window.markOrderDone = function (id) {
  const orders = getOrders()

  const updated = orders.map((order) =>
    order.id === id ? { ...order, status: 'Виконано' } : order
  )

  saveOrders(updated)
  renderOrders()
}

window.deleteOrder = function (id) {
  const ok = confirm('Видалити це замовлення?')
  if (!ok) return

  const orders = getOrders()
  const updated = orders.filter((order) => order.id !== id)

  saveOrders(updated)
  renderOrders()
}

window.clearOrders = function () {
  const ok = confirm('Очистити всі замовлення?')
  if (!ok) return

  localStorage.removeItem('orders')
  renderOrders()
}

renderOrders()