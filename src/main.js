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
    seoTitle: 'В’язані вироби ручної роботи для затишку, подарунків та декору',
    seoText1:
      'Ми створюємо в’язані вироби ручної роботи: теплі пледи, м’які іграшки, декор для дому та handmade подарунки під замовлення. Кожен виріб робиться акуратно, з любов’ю до деталей та з урахуванням ваших побажань.',
    seoText2:
      'У нас можна замовити в’язані пледи, іграшки ручної роботи, подарунки для дітей, затишні речі для інтер’єру та інші унікальні handmade-вироби. Це гарний варіант для подарунка, фотосесії, дитячої кімнати або домашнього затишку.',
    contacts: 'Контакти',
    phone: 'Телефон',
    telegram: 'Telegram',
    instagram: 'Instagram',
    call: 'Подзвонити',
    langBtn: 'English',
  },
  en: {
    handmade: 'Handmade',
    title: 'Handmade knitted products',
    desc: 'Blankets, toys and other handmade items',
    view: 'View',
    order: 'Order',
    products: 'Our products',
    blankets: 'Blankets',
    blanketsDesc: 'Warm and cozy',
    toys: 'Toys',
    toysDesc: 'Soft handmade',
    other: 'Other products',
    otherDesc: 'Made to order',
    gallery: 'Gallery',
    seoTitle: 'Handmade knitted products for comfort, gifts and decor',
    seoText1:
      'We create handmade knitted products: warm blankets, soft toys, home decor and custom gifts. Each item is made carefully, with attention to detail and your wishes in mind.',
    seoText2:
      'Here you can order knitted blankets, handmade toys, gifts for children, cozy decor items and other unique handmade products. These items are perfect for gifts, photo shoots, children’s rooms and home comfort.',
    contacts: 'Contacts',
    phone: 'Phone',
    telegram: 'Telegram',
    instagram: 'Instagram',
    call: 'Call',
    langBtn: 'Українська',
  },
}

function render() {
  const t = texts[lang]

  document.querySelector('#app').innerHTML = `
    <main
      class="site text-white"
      style="
        background:
          linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)),
          url('/handmade-site/images/bg.jpg');
      "
    >
      <div class="lang-wrap">
        <button id="langBtn" class="lang-btn">${t.langBtn}</button>
      </div>

      <section class="hero section">
        <div class="container hero-grid">
          <div class="reveal reveal-left active-on-load">
            <p class="eyebrow">${t.handmade}</p>
            <h1 class="hero-title">${t.title}</h1>
            <p class="hero-text">${t.desc}</p>

            <div class="hero-actions">
              <a href="#products" class="btn btn-light">${t.view}</a>
              <a href="#contacts" class="btn btn-outline">${t.order}</a>
            </div>
          </div>

          <div class="hero-card reveal reveal-right active-on-load">
            <img
              src="/handmade-site/images/hero.jpg"
              alt="В’язані вироби ручної роботи"
              class="hero-image"
            />
          </div>
        </div>
      </section>

      <section id="products" class="section">
        <div class="container">
          <h2 class="section-title reveal reveal-bottom">${t.products}</h2>

          <div class="cards-grid">
            <article class="card reveal reveal-left">
              <img src="/handmade-site/images/blanket.jpg" alt="В’язаний плед ручної роботи" />
              <h3>${t.blankets}</h3>
              <p>${t.blanketsDesc}</p>
              <a href="#contacts">${t.order}</a>
            </article>

            <article class="card reveal reveal-bottom">
              <img src="/handmade-site/images/toy.jpg" alt="В’язана іграшка ручної роботи" />
              <h3>${t.toys}</h3>
              <p>${t.toysDesc}</p>
              <a href="#contacts">${t.order}</a>
            </article>

            <article class="card reveal reveal-right">
              <img src="/handmade-site/images/other.jpg" alt="Інші handmade вироби" />
              <h3>${t.other}</h3>
              <p>${t.otherDesc}</p>
              <a href="#contacts">${t.order}</a>
            </article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <h2 class="section-title reveal reveal-bottom">${t.gallery}</h2>

          <div class="gallery-grid">
            <img src="/handmade-site/images/g1.jpg" class="gallery-img reveal reveal-left" alt="Галерея handmade 1" />
            <img src="/handmade-site/images/g2.jpg" class="gallery-img reveal reveal-right" alt="Галерея handmade 2" />
            <img src="/handmade-site/images/g3.jpg" class="gallery-img reveal reveal-bottom" alt="Галерея handmade 3" />
            <img src="/handmade-site/images/g4.jpg" class="gallery-img reveal reveal-left" alt="Галерея handmade 4" />
            <img src="/handmade-site/images/g5.jpg" class="gallery-img reveal reveal-right" alt="Галерея handmade 5" />
            <img src="/handmade-site/images/g6.jpg" class="gallery-img reveal reveal-bottom" alt="Галерея handmade 6" />
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="seo-box reveal reveal-bottom">
            <h2 class="section-title left">${t.seoTitle}</h2>
            <p>${t.seoText1}</p>
            <p>${t.seoText2}</p>
          </div>
        </div>
      </section>

      <section id="contacts" class="section">
        <div class="container contacts-box reveal reveal-bottom">
          <h2 class="section-title">${t.contacts}</h2>

          <p class="contact-line">${t.phone}: +38082063627</p>
          <p class="contact-line">${t.telegram}: @Tanua_Mih</p>
          <p class="contact-line">${t.instagram}: @tanya_mukhajlenko</p>

          <div class="contacts-actions">
            <a href="https://t.me/Tanua_Mih" target="_blank" class="btn btn-light">Telegram</a>
            <a href="https://instagram.com/tanya_mukhajlenko" target="_blank" class="btn btn-pink">Instagram</a>
            <a href="tel:+38082063627" class="btn btn-green">${t.call}</a>
          </div>
        </div>
      </section>
    </main>
  `

  document.getElementById('langBtn').addEventListener('click', () => {
    lang = lang === 'ua' ? 'en' : 'ua'
    render()
    initReveal()
  })

  initReveal()
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
        } else if (entry.intersectionRatio < 0.15 && !entry.target.classList.contains('active-on-load')) {
          entry.target.classList.remove('active')
        }
      })
    },
    {
      threshold: [0.15, 0.35, 0.7],
    }
  )

  elements.forEach((el) => {
    if (!el.classList.contains('active-on-load')) observer.observe(el)
  })
}

render()