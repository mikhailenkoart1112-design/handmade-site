import './style.css'

let lang = 'ua'

const texts = {
  ua: {
    handmade: 'Ручна робота',
    title: 'В’язані вироби ручної роботи',
    desc: 'Пледи, іграшки та інші handmade-вироби',
    view: 'Переглянути',
    order: 'Замовити',
    products: 'Наші вироби',
    blankets: 'Пледи',
    blanketsDesc: 'Теплі і затишні',
    toys: 'Іграшки',
    toysDesc: 'М’які handmade',
    other: 'Інші вироби',
    otherDesc: 'Під замовлення',
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
    order: 'Order',
    products: 'Our products',
    blankets: 'Blankets',
    blanketsDesc: 'Warm and cozy',
    toys: 'Toys',
    toysDesc: 'Soft handmade',
    other: 'Other',
    otherDesc: 'Custom made',
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

function render() {
  const t = texts[lang]

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
            <a href="#contacts" class="btn outline">${t.order}</a>
          </div>
        </div>

        <div class="hero-right reveal reveal-right active-on-load">
          <img src="/images/hero.jpg" class="hero-img" alt="В’язані вироби ручної роботи" />
        </div>
      </section>

      <section id="products">
        <h2 class="section-title reveal reveal-bottom">${t.products}</h2>

        <div class="cards">
          <div class="card reveal reveal-left">
            <img src="/images/blanket.jpg" alt="В’язаний плед ручної роботи" />
            <h3>${t.blankets}</h3>
            <p>${t.blanketsDesc}</p>
          </div>

          <div class="card reveal reveal-bottom">
            <img src="/images/toy.jpg" alt="В’язана іграшка ручної роботи" />
            <h3>${t.toys}</h3>
            <p>${t.toysDesc}</p>
          </div>

          <div class="card reveal reveal-right">
            <img src="/images/other.jpg" alt="Інші в’язані вироби ручної роботи" />
            <h3>${t.other}</h3>
            <p>${t.otherDesc}</p>
          </div>
        </div>
      </section>

      <section class="gallery-section">
        <h2 class="section-title reveal reveal-bottom">${t.gallery}</h2>

        <div class="gallery">
          <img src="/images/g1.jpg" class="gallery-img reveal reveal-left" alt="В’язані пінетки ручної роботи" />
          <img src="/images/g2.jpg" class="gallery-img reveal reveal-right" alt="В’язаний ведмедик ручної роботи" />
          <img src="/images/g3.jpg" class="gallery-img reveal reveal-bottom" alt="В’язана іграшка амігурумі" />
          <img src="/images/g4.jpg" class="gallery-img reveal reveal-left" alt="В’язана м’яка іграшка" />
          <img src="/images/g5.jpg" class="gallery-img reveal reveal-right" alt="В’язаний одяг ручної роботи" />
          <img src="/images/g6.jpg" class="gallery-img reveal reveal-bottom" alt="В’язані тапочки ручної роботи" />
        </div>
      </section>

      <section id="contacts" class="reveal reveal-bottom">
        <h2 class="contacts-title">${t.contacts}</h2>

        <p class="contact-line">${t.phone}: +380682063627</p>
        <p class="contact-line">${t.telegram}: @Tanua_Mih</p>
        <p class="contact-line">${t.instagram}: @tanya_mukhajlenko</p>

        <div class="contacts-btns">
          <a href="https://t.me/Tanua_Mih" target="_blank" class="btn white">Telegram</a>
          <a href="https://instagram.com/tanya_mukhajlenko" target="_blank" class="btn pink">Instagram</a>
          <a href="tel:+380682063627" class="btn green">${t.call}</a>
        </div>
      </section>
    </main>
  `

  document.getElementById('langBtn').onclick = () => {
    lang = lang === 'ua' ? 'en' : 'ua'
    render()
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