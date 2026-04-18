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
  },
}

function render() {
  const t = texts[lang]

  document.querySelector('#app').innerHTML = `
  <main class="site">

    <button id="langBtn" class="lang-btn">${t.langBtn}</button>

    <section class="hero">
      <div class="hero-left">
        <p class="tag">${t.handmade}</p>
        <h1>${t.title}</h1>
        <p>${t.desc}</p>

        <div class="btns">
          <a href="#products" class="btn white">${t.view}</a>
          <a href="#contacts" class="btn outline">${t.order}</a>
        </div>
      </div>

      <div class="hero-right">
        <img src="/handmade-site/images/hero.jpg" />
      </div>
    </section>

    <section id="products">
      <h2>${t.products}</h2>

      <div class="cards">
        <div class="card">
          <img src="/handmade-site/images/blanket.jpg" />
          <h3>${t.blankets}</h3>
          <p>${t.blanketsDesc}</p>
        </div>

        <div class="card">
          <img src="/handmade-site/images/toy.jpg" />
          <h3>${t.toys}</h3>
          <p>${t.toysDesc}</p>
        </div>

        <div class="card">
          <img src="/handmade-site/images/other.jpg" />
          <h3>${t.other}</h3>
          <p>${t.otherDesc}</p>
        </div>
      </div>
    </section>

    <section>
      <h2>${t.gallery}</h2>

      <div class="gallery">
        <img src="/handmade-site/images/g1.jpg" />
        <img src="/handmade-site/images/g2.jpg" />
        <img src="/handmade-site/images/g3.jpg" />
        <img src="/handmade-site/images/g4.jpg" />
        <img src="/handmade-site/images/g5.jpg" />
        <img src="/handmade-site/images/g6.jpg" />
      </div>
    </section>

    <section id="contacts">
      <h2>${t.contacts}</h2>

      <p>${t.phone}: +38082063627</p>
      <p>${t.telegram}: @Tanua_Mih</p>
      <p>${t.instagram}: @tanya_mukhajlenko</p>

      <div class="btns">
        <a href="https://t.me/Tanua_Mih" class="btn white">Telegram</a>
        <a href="https://instagram.com/tanya_mukhajlenko" class="btn pink">Instagram</a>
        <a href="tel:+38082063627" class="btn green">${t.call}</a>
      </div>
    </section>

  </main>
  `

  document.getElementById('langBtn').onclick = () => {
    lang = lang === 'ua' ? 'en' : 'ua'
    render()
  }
}

render()