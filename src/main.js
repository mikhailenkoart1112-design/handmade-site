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
      class="min-h-screen text-white"
      style="
        background:
          linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
          url('/handmade-site/images/bg.jpg');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
      "
    >
      <div class="fixed top-5 right-5 z-50">
        <button id="langBtn" class="bg-white text-black px-4 py-2 rounded-2xl shadow hover:scale-105 transition">
          ${t.langBtn}
        </button>
      </div>

      <section class="px-6 py-16 md:px-12 lg:px-20 fade-in">
        <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p class="uppercase text-sm text-gray-300 mb-4">${t.handmade}</p>

            <h1 class="text-4xl md:text-5xl font-bold mb-6 glow">
              ${t.title}
            </h1>

            <p class="text-lg mb-8 text-gray-200">
              ${t.desc}
            </p>

            <div class="flex gap-4 flex-wrap">
              <a href="#products" class="bg-white text-black px-6 py-3 rounded-2xl hover:scale-105 transition">
                ${t.view}
              </a>

              <a href="#contacts" class="border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition">
                ${t.order}
              </a>
            </div>
          </div>

          <div class="bg-white rounded-3xl p-4 reveal reveal-right">
            <img
              src="/handmade-site/images/hero.jpg"
              class="w-full h-[420px] object-cover rounded-2xl"
              alt="Hero"
            />
          </div>
        </div>
      </section>

      <section id="products" class="px-6 py-16">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl text-center mb-10 glow">${t.products}</h2>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="card reveal reveal-left">
              <img src="/handmade-site/images/blanket.jpg" alt="${t.blankets}" />
              <h3>${t.blankets}</h3>
              <p>${t.blanketsDesc}</p>
              <a href="#contacts">${t.order}</a>
            </div>

            <div class="card reveal reveal-bottom">
              <img src="/handmade-site/images/toy.jpg" alt="${t.toys}" />
              <h3>${t.toys}</h3>
              <p>${t.toysDesc}</p>
              <a href="#contacts">${t.order}</a>
            </div>

            <div class="card reveal reveal-right">
              <img src="/handmade-site/images/other.jpg" alt="${t.other}" />
              <h3>${t.other}</h3>
              <p>${t.otherDesc}</p>
              <a href="#contacts">${t.order}</a>
            </div>
          </div>
        </div>
      </section>

      <section class="px-6 py-16">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl text-center mb-10 glow">${t.gallery}</h2>

          <div class="grid md:grid-cols-3 gap-6">
            <img src="/handmade-site/images/g1.jpg" class="gallery-img reveal reveal-left" alt="Gallery 1" />
            <img src="/handmade-site/images/g2.jpg" class="gallery-img reveal reveal-right" alt="Gallery 2" />
            <img src="/handmade-site/images/g3.jpg" class="gallery-img reveal reveal-bottom" alt="Gallery 3" />
            <img src="/handmade-site/images/g4.jpg" class="gallery-img reveal reveal-left" alt="Gallery 4" />
            <img src="/handmade-site/images/g5.jpg" class="gallery-img reveal reveal-right" alt="Gallery 5" />
            <img src="/handmade-site/images/g6.jpg" class="gallery-img reveal reveal-bottom" alt="Gallery 6" />
          </div>
        </div>
      </section>

      <section id="contacts" class="px-6 py-16 text-center reveal reveal-bottom">
        <h2 class="text-3xl mb-6 glow">${t.contacts}</h2>

        <p class="mb-2">${t.phone}: +38082063627</p>
        <p class="mb-2">${t.telegram}: +38082063627</p>
        <p class="mb-2">${t.instagram}: @tanya_mukhajlenko</p>

        <div class="flex justify-center gap-4 mt-6 flex-wrap">
          <a href="https://t.me/38082063627" target="_blank" class="btn white">
            Telegram
          </a>

          <a href="https://instagram.com/tanya_mukhajlenko" target="_blank" class="btn pink">
            Instagram
          </a>

          <a href="tel:+38082063627" class="btn green">
            ${t.call}
          </a>
        </div>
      </section>
    </main>
  `

  document.getElementById('langBtn').addEventListener('click', () => {
    lang = lang === 'ua' ? 'en' : 'ua'
    render()
  })

  setAnimations()
}

function setAnimations() {
  const elements = document.querySelectorAll('.reveal')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.5) {
          entry.target.classList.add('active')
        } else if (entry.intersectionRatio < 0.2) {
          entry.target.classList.remove('active')
        }
      })
    },
    {
      threshold: [0.2, 0.5, 0.8],
    }
  )

  elements.forEach((el) => observer.observe(el))
}

render()