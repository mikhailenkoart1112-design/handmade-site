import './style.css'

let lang = 'ua'

const texts = {
  ua: {
    handmade: 'Ручна робота',
    title: 'В’язані вироби ручної роботи для затишку та подарунків',
    desc: 'Пледи, іграшки та інші handmade-вироби, створені майстринею з любов’ю до деталей.',
    view: 'Переглянути вироби',
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
    collageLabel: 'Ручна робота',
  },
  en: {
    handmade: 'Handmade',
    title: 'Handmade knitted products for comfort and gifts',
    desc: 'Blankets, toys and other handmade products created with love and attention to detail.',
    view: 'View products',
    order: 'Order',
    products: 'Our products',
    blankets: 'Blankets',
    blanketsDesc: 'Warm and cozy',
    toys: 'Toys',
    toysDesc: 'Soft handmade',
    other: 'Other products',
    otherDesc: 'Made to order',
    gallery: 'Gallery',
    contacts: 'Contacts',
    phone: 'Phone',
    telegram: 'Telegram',
    instagram: 'Instagram',
    call: 'Call',
    langBtn: 'Українська',
    collageLabel: 'Handmade',
  },
}

function render() {
  const t = texts[lang]

  document.querySelector('#app').innerHTML = `
    <main
      class="site text-white"
      style="
        background:
          linear-gradient(rgba(0,0,0,0.52), rgba(0,0,0,0.52)),
          url('/handmade-site/images/bg.jpg');
      "
    >
      <div class="lang-wrap">
        <button id="langBtn" class="lang-btn">${t.langBtn}</button>
      </div>

      <section class="hero section">
        <div class="container hero-grid">
          <div class="hero-copy reveal reveal-left active-on-load">
            <p class="eyebrow">${t.handmade}</p>

            <h1 class="hero-title">${t.title}</h1>

            <p class="hero-text">${t.desc}</p>

            <div class="hero-actions">
              <a href="#products" class="btn btn-light">${t.view}</a>
              <a href="#contacts" class="btn btn-outline">${t.order}</a>
            </div>
          </div>

          <div class="hero-collage-wrap reveal reveal-right active-on-load">
            <div class="hero-collage">
              <img src="/handmade-site/images/g1.jpg" alt="Handmade photo 1" class="collage-img c1" />
              <img src="/handmade-site/images/g2.jpg" alt="Handmade photo 2" class="collage-img c2" />
              <div class="collage-center">${t.collageLabel}</div>
              <img src="/handmade-site/images/g3.jpg" alt="Handmade photo 3" class="collage-img c3" />
              <img src="/handmade-site/images/g4.jpg" alt="Handmade photo 4" class="collage-img c4" />
            </div>
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
              <img src="/handmade-site/images/other.jpg" alt="Інший handmade виріб" />
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
            <img src="/handmade-site/images/g1.jpg" class="gallery-img reveal reveal-left" alt="Gallery 1" />
            <img src="/handmade-site/images/g2.jpg" class="gallery-img reveal reveal-right" alt="Gallery 2" />
            <img src="/handmade-site/images/g3.jpg" class="gallery-img reveal reveal-bottom" alt="Gallery 3" />
            <img src="/handmade-site/images/g4.jpg" class="gallery-img reveal reveal-left" alt="Gallery 4" />
            <img src="/handmade-site/images/g5.jpg" class="gallery-img reveal reveal-right" alt="Gallery 5" />
            <img src="/handmade-site/images/g6.jpg" class="gallery-img reveal reveal-bottom" alt="Gallery 6" />
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
    if (!el.classList.contains('active-on-load')) observer.observe(el)
  })
}

render()