(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`ua`,t={ua:{handmade:`Ручна робота`,title:`В’язані вироби ручної роботи`,desc:`Пледи, іграшки та інші handmade-вироби`,view:`Переглянути`,order:`Замовити`,products:`Наші вироби`,blankets:`Пледи`,blanketsDesc:`Теплі і затишні`,toys:`Іграшки`,toysDesc:`М’які handmade`,other:`Інші вироби`,otherDesc:`Під замовлення`,gallery:`Галерея`,contacts:`Контакти`,phone:`Телефон`,telegram:`Telegram`,instagram:`Instagram`,call:`Подзвонити`,langBtn:`English`},en:{handmade:`Handmade`,title:`Handmade knitted products`,desc:`Blankets, toys and other handmade items`,view:`View`,order:`Order`,products:`Our products`,blankets:`Blankets`,blanketsDesc:`Warm and cozy`,toys:`Toys`,toysDesc:`Soft handmade`,other:`Other products`,otherDesc:`Made to order`,gallery:`Gallery`,contacts:`Contacts`,phone:`Phone`,telegram:`Telegram`,instagram:`Instagram`,call:`Call`,langBtn:`Українська`}};function n(){let i=t[e];document.querySelector(`#app`).innerHTML=`
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
          ${i.langBtn}
        </button>
      </div>

      <section class="px-6 py-16 md:px-12 lg:px-20 fade-in">
        <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p class="uppercase text-sm text-gray-300 mb-4">${i.handmade}</p>

            <h1 class="text-4xl md:text-5xl font-bold mb-6 glow">
              ${i.title}
            </h1>

            <p class="text-lg mb-8 text-gray-200">
              ${i.desc}
            </p>

            <div class="flex gap-4 flex-wrap">
              <a href="#products" class="bg-white text-black px-6 py-3 rounded-2xl hover:scale-105 transition">
                ${i.view}
              </a>

              <a href="#contacts" class="border border-white px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition">
                ${i.order}
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
          <h2 class="text-3xl text-center mb-10 glow">${i.products}</h2>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="card reveal reveal-left">
              <img src="/handmade-site/images/blanket.jpg" alt="${i.blankets}" />
              <h3>${i.blankets}</h3>
              <p>${i.blanketsDesc}</p>
              <a href="#contacts">${i.order}</a>
            </div>

            <div class="card reveal reveal-bottom">
              <img src="/handmade-site/images/toy.jpg" alt="${i.toys}" />
              <h3>${i.toys}</h3>
              <p>${i.toysDesc}</p>
              <a href="#contacts">${i.order}</a>
            </div>

            <div class="card reveal reveal-right">
              <img src="/handmade-site/images/other.jpg" alt="${i.other}" />
              <h3>${i.other}</h3>
              <p>${i.otherDesc}</p>
              <a href="#contacts">${i.order}</a>
            </div>
          </div>
        </div>
      </section>

      <section class="px-6 py-16">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl text-center mb-10 glow">${i.gallery}</h2>

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
        <h2 class="text-3xl mb-6 glow">${i.contacts}</h2>

        <p class="mb-2">${i.phone}: +38082063627</p>
<p class="mb-2">${i.telegram}: @Tanua_Mik</p>
        <p class="mb-2">${i.instagram}: @tanya_mukhajlenko</p>

        <div class="flex justify-center gap-4 mt-6 flex-wrap">
         <a href="https://t.me/Tanua_Mik" target="_blank" class="btn white">
  Telegram
</a>

          <a href="https://instagram.com/tanya_mukhajlenko" target="_blank" class="btn pink">
            Instagram
          </a>

          <a href="tel:+38082063627" class="btn green">
            ${i.call}
          </a>
        </div>
      </section>
    </main>
  `,document.getElementById(`langBtn`).addEventListener(`click`,()=>{e=e===`ua`?`en`:`ua`,n()}),r()}function r(){let e=document.querySelectorAll(`.reveal`),t=new IntersectionObserver(e=>{e.forEach(e=>{e.intersectionRatio>.5?e.target.classList.add(`active`):e.intersectionRatio<.2&&e.target.classList.remove(`active`)})},{threshold:[.2,.5,.8]});e.forEach(e=>t.observe(e))}n();