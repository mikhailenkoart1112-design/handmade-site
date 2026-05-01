import './style.css'
import { defaultData } from './data'

let lang = 'ua'

const texts = {
  ua: {
    handmade: 'Ручна робота',
    title: 'В’язані вироби ручної роботи',
    desc: 'Пледи, іграшки та інші handmade-вироби',
    view: 'Переглянути',
    order: 'Замовити зараз',
    products: 'Наші вироби',
    gallery: 'Галерея',
    contacts: 'Контакти',
    phone: 'Телефон',
    telegram: 'Telegram',
    instagram: 'Instagram',
    call: 'Подзвонити',
    langBtn: 'English',
    loadingTitle: 'Ручна робота',
    loadingText: 'Завантаження сайту...',
  },
  en: {
    handmade: 'Handmade',
    title: 'Handmade knitted products',
    desc: 'Blankets, toys and handmade items',
    view: 'View',
    order: 'Order now',
    products: 'Our products',
    gallery: 'Gallery',
    contacts: 'Contacts',
    phone: 'Phone',
    telegram: 'Telegram',
    instagram: 'Instagram',
    call: 'Call',
    langBtn: 'Українська',
    loadingTitle: 'Handmade',
    loadingText: 'Loading website...',
  },
}

function getData() {
  const saved = localStorage.getItem('siteData')

  if (!saved) return defaultData

  try {
    return JSON.parse(saved)
  } catch {
    return defaultData
  }
}

function saveOrder(order) {
  const saved = localStorage.getItem('orders')
  const orders = saved ? JSON.parse(saved) : []

  orders.unshift(order)
  localStorage.setItem('orders', JSON.stringify(orders))
}

function openOrderModal(productName = '') {
  const modal = document.getElementById('orderModal')
  const productInput = document.getElementById('orderProduct')

  if (productInput) {
    productInput.value = productName
  }

  modal.classList.add('active')
  document.body.style.overflow = 'hidden'
}

function closeOrderModal() {
  const modal = document.getElementById('orderModal')
  modal.classList.remove('active')
  document.body.style.overflow = ''
}

function showSuccessMessage() {
  const toast = document.getElementById('successToast')
  toast.classList.add('active')

  setTimeout(() => {
    toast.classList.remove('active')
  }, 2600)
}

function submitOrder() {
  const firstName = document.getElementById('orderFirstName').value.trim()
  const lastName = document.getElementById('orderLastName').value.trim()
  const middleName = document.getElementById('orderMiddleName').value.trim()
  const phone = document.getElementById('orderPhone').value.trim()
 const contact = document.getElementById('orderContact').value.trim()
  const region = document.getElementById('orderRegion').value.trim()
  const city = document.getElementById('orderCity').value.trim()
  const post = document.getElementById('orderPost').value.trim()
  const product = document.getElementById('orderProduct').value.trim()
  const comment = document.getElementById('orderComment').value.trim()

  if (!firstName || !lastName || !phone || !region || !city || !post)if (!firstName || !lastName || !phone || !contact || !region || !city || !post) {
    alert('Заповніть ім’я, прізвище, телефон, область, місто та відділення Нової Пошти')
    return
  }

  saveOrder({
    id: Date.now(),
    firstName,
    lastName,
    middleName,
    phone,
contact,
    viber,
telegram,
instagram,
    region,
    city,
    post,
    product,
    comment,
    status: 'Нове',
    createdAt: new Date().toLocaleString('uk-UA'),
  })

  closeOrderModal()
  showSuccessMessage()

  document.getElementById('orderForm').reset()
}

function render() {
  const t = texts[lang]
  const data = getData()

  document.querySelector('#app').innerHTML = `
    <div id="siteLoader" class="site-loader">
      <div class="loader-box">
        <div class="hook-wrap">
          <div class="hook-stick"></div>
          <div class="hook-head"></div>
          <div class="thread thread-1"></div>
          <div class="thread thread-2"></div>
          <div class="thread thread-3"></div>
        </div>
        <div class="loader-title">${t.loadingTitle}</div>
        <div class="loader-text">${t.loadingText}</div>
      </div>
    </div>

    <main class="site">
      <button id="langBtn" class="lang-btn">${t.langBtn}</button>

      <section class="hero">
        <div class="hero-left reveal reveal-left active-on-load">
          <p class="tag">${t.handmade}</p>
          <h1>${t.title}</h1>
          <p class="hero-desc">${t.desc}</p>

          <div class="btns">
            <a href="#products" class="btn white">${t.view}</a>
            <button id="openOrderBtn" class="btn outline order-open-btn">${t.order}</button>
          </div>
        </div>

        <div class="hero-right reveal reveal-right active-on-load">
          <img
            src="/images/hero.jpg"
            class="hero-img"
            alt="В’язані вироби ручної роботи PlushByTanya"
          />
        </div>
      </section>

      <section id="products">
        <h2 class="section-title reveal reveal-bottom">${t.products}</h2>

        <div class="cards">
          ${data.products
            .map(
              (product, index) => `
                <div class="card reveal ${
                  index % 3 === 0
                    ? 'reveal-left'
                    : index % 3 === 1
                      ? 'reveal-bottom'
                      : 'reveal-right'
                }">
                  <img
                    src="${product.image}"
                    alt="${lang === 'ua' ? product.titleUa : product.titleEn}"
                  />
                  <h3>${lang === 'ua' ? product.titleUa : product.titleEn}</h3>
                  <p>${lang === 'ua' ? product.descUa : product.descEn}</p>
                  <button
                    class="product-order-btn"
                    data-product="${lang === 'ua' ? product.titleUa : product.titleEn}"
                  >
                    ${t.order}
                  </button>
                </div>
              `
            )
            .join('')}
        </div>
      </section>

      <section class="gallery-section">
        <h2 class="section-title reveal reveal-bottom">${t.gallery}</h2>

        <div class="gallery">
          ${data.gallery
            .filter((image) => image && image.trim() !== '')
            .map(
              (image, index) => `
                <img
                  src="${image}"
                  class="gallery-img reveal ${
                    index % 3 === 0
                      ? 'reveal-left'
                      : index % 3 === 1
                        ? 'reveal-right'
                        : 'reveal-bottom'
                  }"
                  alt="Галерея PlushByTanya ${index + 1}"
                />
              `
            )
            .join('')}
        </div>
      </section>

      <section id="contacts" class="reveal reveal-bottom">
        <h2 class="contacts-title">${t.contacts}</h2>

        <p class="contact-line">${t.phone}: +380682063627</p>
        <p class="contact-line">${t.telegram}: @Tanua_Mih</p>
        <p class="contact-line">${t.instagram}: @tanya_mukhajlenko</p>

        <div class="contacts-btns">
          <a href="https://t.me/Tanua_Mih" target="_blank" class="btn white">
            Telegram
          </a>
          <a href="https://instagram.com/tanya_mukhajlenko" target="_blank" class="btn pink">
            Instagram
          </a>
          <a href="tel:+380682063627" class="btn green">
            ${t.call}
          </a>
        </div>
      </section>
    </main>

    <div id="orderModal" class="order-modal">
      <div class="order-modal-box">
        <button id="closeOrderModal" class="order-close">×</button>

        <h2>Оформити замовлення</h2>
        <p class="order-subtitle">Заповніть дані для оформлення замовлення</p>

        <form id="orderForm" class="order-form">
          <label>
            Ім’я
            <input id="orderFirstName" placeholder="Введіть ім’я" />
          </label>

          <label>
            Прізвище
            <input id="orderLastName" placeholder="Введіть прізвище" />
          </label>

          <label>
            По батькові
            <input id="orderMiddleName" placeholder="Введіть по батькові" />
          </label>

          <label>
            Телефон
            <input id="orderPhone" placeholder="+380..." />
          </label>
          <label>
 <label>
  Звʼязок (Viber / Telegram / Instagram)
  <input id="orderContact" placeholder="+380... або @username" />
</label>

          <label>
            Область
            <input id="orderRegion" placeholder="Напр. Київська" />
          </label>

          <label>
            Місто / село
            <input id="orderCity" placeholder="Напр. Київ" />
          </label>

          <label>
            Відділення Нової Пошти
            <input id="orderPost" placeholder="Напр. №12" />
          </label>

          <label>
            Що замовляєте
            <input id="orderProduct" placeholder="Напр. плед, іграшка, одяг" />
          </label>

          <label>
            Коментар
            <textarea id="orderComment" placeholder="Деталі замовлення"></textarea>
          </label>

          <button type="button" id="sendOrderBtn" class="order-submit">
            Замовити
          </button>
        </form>
      </div>
    </div>

    <div id="successToast" class="success-toast">
      Ваше замовлення прийнято
    </div>
  `

  document.getElementById('langBtn').onclick = () => {
    lang = lang === 'ua' ? 'en' : 'ua'
    render()
  }

  document.getElementById('openOrderBtn').onclick = () => {
    openOrderModal()
  }

  document.querySelectorAll('.product-order-btn').forEach((button) => {
    button.onclick = () => {
      openOrderModal(button.dataset.product)
    }
  })

  document.getElementById('closeOrderModal').onclick = closeOrderModal

  document.getElementById('orderModal').onclick = (event) => {
    if (event.target.id === 'orderModal') {
      closeOrderModal()
    }
  }

  document.getElementById('sendOrderBtn').onclick = submitOrder

  initReveal()
  initLoader()
}

function initReveal() {
  const elements = document.querySelectorAll('.reveal')

  elements.forEach((el) => {
    if (el.classList.contains('active-on-load')) {
      el.classList.add('active')
    } else {
      el.classList.remove('active')
    }
  })

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.35) {
          entry.target.classList.add('active')
        } else if (
          entry.intersectionRatio < 0.12 &&
          !entry.target.classList.contains('active-on-load')
        ) {
          entry.target.classList.remove('active')
        }
      })
    },
    {
      threshold: [0.12, 0.35, 0.7],
    }
  )

  elements.forEach((el) => {
    if (!el.classList.contains('active-on-load')) {
      observer.observe(el)
    }
  })
}

function initLoader() {
  const loader = document.getElementById('siteLoader')
  if (!loader) return

  setTimeout(() => {
    loader.classList.add('hide')
    setTimeout(() => loader.remove(), 700)
  }, 1700)
}

render()