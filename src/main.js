import './style.css'
import { defaultData } from './data'

let lang = 'ua'

const texts = {
  ua: {
    handmade: 'Ручна робота',
    title: 'В’язані вироби ручної роботи',
    desc: 'Пледи, іграшки та інші handmade-вироби',
    view: 'Переглянути',
    order: 'Замовити',
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
    orderTitle: 'Оформити замовлення',
  },
  en: {
    handmade: 'Handmade',
    title: 'Handmade knitted products',
    desc: 'Blankets, toys and handmade items',
    view: 'View',
    order: 'Order',
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
    orderTitle: 'Place an order',
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
            <a href="#order" class="btn outline">${t.order}</a>
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

      <section id="order" class="order-section reveal reveal-bottom">
        <h2 class="section-title">${t.orderTitle}</h2>

        <div class="order-card">
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
            Коментар до замовлення
            <textarea id="orderComment" placeholder="Що саме хочете замовити?"></textarea>
          </label>

          <button id="sendOrderBtn" class="order-btn">
            Надіслати замовлення
          </button>
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
  `

  document.getElementById('langBtn').onclick = () => {
    lang = lang === 'ua' ? 'en' : 'ua'
    render()
  }

  const sendOrderBtn = document.getElementById('sendOrderBtn')

  if (sendOrderBtn) {
    sendOrderBtn.onclick = () => {
  const firstName = document.getElementById('orderFirstName').value
  const lastName = document.getElementById('orderLastName').value
  const middleName = document.getElementById('orderMiddleName').value
  const phone = document.getElementById('orderPhone').value
  const region = document.getElementById('orderRegion').value
  const city = document.getElementById('orderCity').value
  const post = document.getElementById('orderPost').value
  const comment = document.getElementById('orderComment').value

  const text = `
🧶 НОВЕ ЗАМОВЛЕННЯ

👤 ${lastName} ${firstName} ${middleName}
📞 ${phone}

📍 ${region}, ${city}
📦 НП: ${post}

📝 ${comment}
  `

  const telegramUrl = `https://t.me/Tanua_Mih?text=${encodeURIComponent(text)}`
  window.open(telegramUrl, '_blank')
}
  }

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