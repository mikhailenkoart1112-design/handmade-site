(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/handmade-site/`,t=`ua`,n={ua:{title:`В’язані вироби ручної роботи`,desc:`Пледи, іграшки та інші handmade-вироби`,view:`Переглянути`,order:`Замовити`,products:`Наші вироби`,gallery:`Галерея`,contacts:`Контакти`},en:{title:`Handmade knitted products`,desc:`Blankets, toys and other handmade items`,view:`View`,order:`Order`,products:`Our products`,gallery:`Gallery`,contacts:`Contacts`}};function r(){let a=n[t];document.querySelector(`#app`).innerHTML=`
  <main class="min-h-screen text-white"
    style="
      background:
        linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
        url('${e}images/bg.jpg');
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
    "
  >

    <!-- LANGUAGE BUTTON -->
    <div class="fixed top-5 right-5 z-50">
      <button id="langBtn" class="bg-white text-black px-4 py-2 rounded-2xl shadow">
        ${t===`ua`?`English`:`Українська`}
      </button>
    </div>

    <!-- HERO -->
    <section class="px-6 py-16 md:px-12 lg:px-20 fade-in">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div>
          <p class="uppercase text-sm text-gray-300 mb-4">Handmade</p>

          <h1 class="text-4xl md:text-5xl font-bold mb-6 glow">
            ${a.title}
          </h1>

          <p class="text-lg mb-8 text-gray-200">
            ${a.desc}
          </p>

          <div class="flex gap-4">
            <a href="#products" class="bg-white text-black px-6 py-3 rounded-2xl">
              ${a.view}
            </a>

            <a href="#contacts" class="border border-white px-6 py-3 rounded-2xl">
              ${a.order}
            </a>
          </div>
        </div>

        <div class="bg-white rounded-3xl p-4 reveal reveal-right">
          <img src="${e}images/hero.jpg" class="w-full h-[420px] object-cover rounded-2xl"/>
        </div>

      </div>
    </section>

    <!-- PRODUCTS -->
    <section id="products" class="px-6 py-16">
      <div class="max-w-6xl mx-auto">

        <h2 class="text-3xl text-center mb-10 glow">${a.products}</h2>

        <div class="grid md:grid-cols-3 gap-8">

          <div class="card reveal reveal-left">
            <img src="${e}images/blanket.jpg"/>
            <h3>Пледи</h3>
            <p>Теплі і затишні</p>
            <a href="#contacts">Замовити</a>
          </div>

          <div class="card reveal reveal-bottom">
            <img src="${e}images/toy.jpg"/>
            <h3>Іграшки</h3>
            <p>М’які handmade</p>
            <a href="#contacts">Замовити</a>
          </div>

          <div class="card reveal reveal-right">
            <img src="${e}images/other.jpg"/>
            <h3>Інші вироби</h3>
            <p>Під замовлення</p>
            <a href="#contacts">Замовити</a>
          </div>

        </div>
      </div>
    </section>

    <!-- GALLERY -->
    <section class="px-6 py-16">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl text-center mb-10 glow">${a.gallery}</h2>

        <div class="grid md:grid-cols-3 gap-6">

          <img src="${e}images/g1.jpg" class="gallery-img reveal reveal-left"/>
          <img src="${e}images/g2.jpg" class="gallery-img reveal reveal-right"/>
          <img src="${e}images/g3.jpg" class="gallery-img reveal reveal-bottom"/>
          <img src="${e}images/g4.jpg" class="gallery-img reveal reveal-left"/>
          <img src="${e}images/g5.jpg" class="gallery-img reveal reveal-right"/>
          <img src="${e}images/g6.jpg" class="gallery-img reveal reveal-bottom"/>

        </div>
      </div>
    </section>

    <!-- CONTACTS -->
    <section id="contacts" class="px-6 py-16 text-center reveal reveal-bottom">
      <h2 class="text-3xl mb-6 glow">${a.contacts}</h2>

      <p class="mb-2">Телефон: +38082063627</p>
      <p class="mb-2">Telegram: +38082063627</p>
      <p class="mb-2">Instagram: @tanya_mukhajlenko</p>

      <div class="flex justify-center gap-4 mt-6 flex-wrap">

        <a href="https://t.me/38082063627" target="_blank" class="btn white">
          Telegram
        </a>

        <a href="https://instagram.com/tanya_mukhajlenko" target="_blank" class="btn pink">
          Instagram
        </a>

        <a href="tel:+38082063627" class="btn green">
          Подзвонити
        </a>

      </div>
    </section>

  </main>
  `,document.getElementById(`langBtn`).onclick=()=>{t=t===`ua`?`en`:`ua`,r(),i()},i()}function i(){let e=document.querySelectorAll(`.reveal`),t=new IntersectionObserver(e=>{e.forEach(e=>{e.intersectionRatio>.5?e.target.classList.add(`active`):e.intersectionRatio<.2&&e.target.classList.remove(`active`)})},{threshold:[.2,.5,.8]});e.forEach(e=>t.observe(e))}r();