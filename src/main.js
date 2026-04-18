import './style.css'

let currentLang = 'uk'

const translations = {
  uk: {
    handMade: 'Ручна робота',
    title: 'В’язані вироби ручної роботи',
    subtitle: 'Пледи, іграшки та інші handmade-вироби',
    viewProducts: 'Переглянути',
    order: 'Замовити',

    productsTitle: 'Наші вироби',
    blankets: 'Пледи',
    blanketsText: 'Теплі і затишні',
    toys: 'Іграшки',
    toysText: 'М’які handmade',
    other: 'Інші вироби',
    otherText: 'Під замовлення',

    galleryTitle: 'Галерея',

    contactsTitle: 'Контакти',
    phone: 'Телефон',
    telegram: 'Telegram',
    instagram: 'Instagram',
    callBtn: 'Подзвонити',

    langBtn: 'English',
  },
  en: {
    handMade: 'Handmade',
    title: 'Handmade knitted products',
    subtitle: 'Blankets, toys and other handmade items',
    viewProducts: 'View products',
    order: 'Order now',

    productsTitle: 'Our products',
    blankets: 'Blankets',
    blanketsText: 'Warm and cozy',
    toys: 'Toys',
    toysText: 'Soft handmade',
    other: 'Other products',
    otherText: 'Made to order',

    galleryTitle: 'Gallery',

    contactsTitle: 'Contacts',
    phone: 'Phone',
    telegram: 'Telegram',
    instagram: 'Instagram',
    callBtn: 'Call now',

    langBtn: 'Українська',
  },
}

function initScrollAnimations() {
  const items = document.querySelectorAll('.reveal')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const ratio = entry.intersectionRatio

        if (ratio >= 0.5) {
          entry.target.classList.add('show')
        } else if (ratio < 0.2) {
          entry.target.classList.remove('show')
        }
      })
    },
    {
      threshold: [0, 0.2, 0.5, 0.8, 1],
    }
  )

  items.forEach((item) => observer.observe(item))
}

function renderSite() {
  const t = translations[currentLang]

  document.querySelector('#app').innerHTML = `
    <div id="loader" class="loader-overlay">
      <div class="loader-box">
        <div class="loader-spinner"></div>
        <p class="loader-text">Loading...</p>
      </div>
    </div>

    <main
      class="min-h-screen text-white"
      style="
        background:
          linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
          url('/images/bg.jpg');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
      "
    >
      <section class="px-6 pt-6 md:px-12 lg:px-20">
        <div class="max-w-6xl mx-auto flex justify-end reveal reveal-fade">
          <button
            id="lang-toggle"
            class="bg-white text-black px-5 py-2 rounded-2xl font-medium shadow-lg hover:scale-105 transition"
          >
            ${t.langBtn}
          </button>
        </div>
      </section>

      <section class="px-6 py-12 md:px-12 lg:px-20">
        <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div class="reveal reveal-left">
            <p class="uppercase text-sm text-gray-300 mb-4">${t.handMade}</p>

            <h1 class="section-title-main text-4xl md:text-5xl font-bold mb-6 leading-tight">
              ${t.title}
            </h1>

            <p class="text-lg mb-8 text-gray-200">
              ${t.subtitle}
            </p>

            <div class="flex gap-4 flex-wrap">
              <a href="#products" class="bg-white text-black px-6 py-3 rounded-2xl hover:scale-105 transition">
                ${t.viewProducts}
              </a>

              <a href="#contacts" class="border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition">
                ${t.order}
              </a>
            </div>
          </div>

          <div class="bg-white rounded-3xl p-4 shadow-xl reveal reveal-right">
            <img
              src="/images/hero.jpg"
              class="w-full h-[420px] object-cover rounded-2xl"
              alt="Hero"
            />
          </div>
        </div>
      </section>

      <section id="products" class="px-6 py-16 md:px-12 lg:px-20">
        <div class="max-w-6xl mx-auto">
          <h2 class="section-title text-3xl text-center mb-10 reveal reveal-up">${t.productsTitle}</h2>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-white text-black rounded-3xl p-5 shadow-xl reveal reveal-up">
              <img src="/images/blanket.jpg" class="w-full h-64 object-cover rounded-2xl mb-4" alt="Blanket"/>
              <h3 class="text-xl font-semibold">${t.blankets}</h3>
              <p class="mb-4">${t.blanketsText}</p>
              <a href="#contacts" class="bg-black text-white px-4 py-2 rounded-xl inline-block">${t.order}</a>
            </div>

            <div class="bg-white text-black rounded-3xl p-5 shadow-xl reveal reveal-zoom">
              <img src="/images/toy.jpg" class="w-full h-64 object-cover rounded-2xl mb-4" alt="Toy"/>
              <h3 class="text-xl font-semibold">${t.toys}</h3>
              <p class="mb-4">${t.toysText}</p>
              <a href="#contacts" class="bg-black text-white px-4 py-2 rounded-xl inline-block">${t.order}</a>
            </div>

            <div class="bg-white text-black rounded-3xl p-5 shadow-xl reveal reveal-right">
              <img src="/images/other.jpg" class="w-full h-64 object-cover rounded-2xl mb-4" alt="Other"/>
              <h3 class="text-xl font-semibold">${t.other}</h3>
              <p class="mb-4">${t.otherText}</p>
              <a href="#contacts" class="bg-black text-white px-4 py-2 rounded-xl inline-block">${t.order}</a>
            </div>
          </div>
        </div>
      </section>

      <section class="px-6 py-16 md:px-12 lg:px-20">
        <div class="max-w-6xl mx-auto">
          <h2 class="section-title text-3xl text-center mb-10 reveal reveal-up">${t.galleryTitle}</h2>

          <div class="grid md:grid-cols-3 gap-6">
            <img src="/images/g1.jpg" class="gallery-img reveal reveal-left" alt="Gallery 1"/>
            <img src="/images/g2.jpg" class="gallery-img reveal reveal-right" alt="Gallery 2"/>
            <img src="/images/g3.jpg" class="gallery-img reveal reveal-up" alt="Gallery 3"/>
            <img src="/images/g4.jpg" class="gallery-img reveal reveal-zoom" alt="Gallery 4"/>
            <img src="/images/g5.jpg" class="gallery-img reveal reveal-rotate-left" alt="Gallery 5"/>
            <img src="/images/g6.jpg" class="gallery-img reveal reveal-rotate-right" alt="Gallery 6"/>
          </div>
        </div>
      </section>

      <section id="contacts" class="px-6 py-16 text-center">
        <div class="reveal reveal-contact">
          <h2 class="section-title text-3xl mb-6">${t.contactsTitle}</h2>

          <p class="mb-2">${t.phone}: +38082063627</p>
          <p class="mb-2">${t.telegram}: +38082063627</p>
          <p class="mb-4">${t.instagram}: @tanya_mukhajlenko</p>

          <div class="flex justify-center gap-4 mt-6 flex-wrap">
            <a
              href="https://t.me/38082063627"
              target="_blank"
              class="bg-white text-black px-6 py-3 rounded-2xl hover:scale-105 transition reveal reveal-contact-pop"
            >
              Telegram
            </a>

            <a
              href="https://instagram.com/tanya_mukhajlenko"
              target="_blank"
              class="bg-pink-500 px-6 py-3 rounded-2xl hover:scale-105 transition reveal reveal-contact-pop delay-1"
            >
              Instagram
            </a>

            <a
              href="tel:+38082063627"
              class="bg-green-500 px-6 py-3 rounded-2xl hover:scale-105 transition reveal reveal-contact-pop delay-2"
            >
              ${t.callBtn}
            </a>
          </div>
        </div>
      </section>
    </main>
  `

  document.querySelector('#lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'uk' ? 'en' : 'uk'
    renderSite()
  })

  initScrollAnimations()

  const loader = document.querySelector('#loader')
  setTimeout(() => {
    loader.classList.add('loader-hide')
  }, 1200)
}

renderSite()