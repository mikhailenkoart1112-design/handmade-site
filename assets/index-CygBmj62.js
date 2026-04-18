(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`ua`,t={ua:{handmade:`Ручна робота`,title:`В’язані вироби ручної роботи`,desc:`Пледи, іграшки та інші handmade-вироби`,view:`Переглянути`,order:`Замовити`,products:`Наші вироби`,blankets:`Пледи`,blanketsDesc:`Теплі і затишні`,toys:`Іграшки`,toysDesc:`М’які handmade`,other:`Інші вироби`,otherDesc:`Під замовлення`,gallery:`Галерея`,contacts:`Контакти`,phone:`Телефон`,telegram:`Telegram`,instagram:`Instagram`,call:`Подзвонити`,langBtn:`English`},en:{handmade:`Handmade`,title:`Handmade knitted products`,desc:`Blankets, toys and other handmade items`,view:`View`,order:`Order`,products:`Our products`,blankets:`Blankets`,blanketsDesc:`Warm and cozy`,toys:`Toys`,toysDesc:`Soft handmade`,other:`Other products`,otherDesc:`Made to order`,gallery:`Gallery`,contacts:`Contacts`,phone:`Phone`,telegram:`Telegram`,instagram:`Instagram`,call:`Call`,langBtn:`Українська`}};function n(){let r=t[e];document.querySelector(`#app`).innerHTML=`
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
          ${r.langBtn}
        </button>
      </div>

      <section class="px-6 py-16 md:px-12 lg:px-20">
        <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p class="uppercase text-sm text-gray-300 mb-4">${r.handmade}</p>

            <h1 class="text-4xl md:text-5xl font-bold mb-6">
              ${r.title}
            </h1>

            <p class="text-lg mb-8 text-gray-200">
              ${r.desc}
            </p>

            <div class="flex gap-4 flex-wrap">
              <a href="#products" class="bg-white text-black px-6 py-3 rounded-2xl">
                ${r.view}
              </a>

              <a href="#contacts" class="border border-white px-6 py-3 rounded-2xl">
                ${r.order}
              </a>
            </div>
          </div>

          <div class="bg-white rounded-3xl p-4">
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
          <h2 class="text-3xl text-center mb-10">${r.products}</h2>

          <div class="grid md:grid-cols-3 gap-8">
            <div>
              <img src="/handmade-site/images/blanket.jpg" />
              <h3>${r.blankets}</h3>
              <p>${r.blanketsDesc}</p>
            </div>

            <div>
              <img src="/handmade-site/images/toy.jpg" />
              <h3>${r.toys}</h3>
              <p>${r.toysDesc}</p>
            </div>

            <div>
              <img src="/handmade-site/images/other.jpg" />
              <h3>${r.other}</h3>
              <p>${r.otherDesc}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" class="px-6 py-16 text-center">
        <h2 class="text-3xl mb-6">${r.contacts}</h2>

        <p class="mb-2">${r.phone}: +38082063627</p>
        <p class="mb-2">${r.telegram}: @Tanua_Mih</p>
        <p class="mb-2">${r.instagram}: @tanya_mukhajlenko</p>

        <div class="flex justify-center gap-4 mt-6 flex-wrap">

          <a href="https://t.me/Tanua_Mih"
             target="_blank"
             class="bg-white text-black px-6 py-3 rounded-2xl">
            Telegram
          </a>

          <a href="https://instagram.com/tanya_mukhajlenko"
             target="_blank"
             class="bg-pink-500 text-white px-6 py-3 rounded-2xl">
            Instagram
          </a>

          <a href="tel:+38082063627"
             class="bg-green-500 text-white px-6 py-3 rounded-2xl">
            ${r.call}
          </a>

        </div>
      </section>

    </main>
  `,document.getElementById(`langBtn`).addEventListener(`click`,()=>{e=e===`ua`?`en`:`ua`,n()})}n();