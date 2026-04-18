(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`ua`,t={ua:{handmade:`Ручна робота`,title:`В’язані вироби ручної роботи`,desc:`Пледи, іграшки та інші handmade-вироби`,view:`Переглянути`,order:`Замовити`,products:`Наші вироби`,blankets:`Пледи`,blanketsDesc:`Теплі і затишні`,toys:`Іграшки`,toysDesc:`М’які handmade`,other:`Інші вироби`,otherDesc:`Під замовлення`,gallery:`Галерея`,contacts:`Контакти`,phone:`Телефон`,telegram:`Telegram`,instagram:`Instagram`,call:`Подзвонити`,langBtn:`English`},en:{handmade:`Handmade`,title:`Handmade knitted products`,desc:`Blankets, toys and handmade items`,view:`View`,order:`Order`,products:`Our products`,blankets:`Blankets`,blanketsDesc:`Warm and cozy`,toys:`Toys`,toysDesc:`Soft handmade`,other:`Other`,otherDesc:`Custom made`,gallery:`Gallery`,contacts:`Contacts`,phone:`Phone`,telegram:`Telegram`,instagram:`Instagram`,call:`Call`,langBtn:`Українська`}};function n(){let r=t[e];document.querySelector(`#app`).innerHTML=`
  <main class="site">

    <button id="langBtn" class="lang-btn">${r.langBtn}</button>

    <section class="hero">
      <div class="hero-left">
        <p class="tag">${r.handmade}</p>
        <h1>${r.title}</h1>
        <p>${r.desc}</p>

        <div class="btns">
          <a href="#products" class="btn white">${r.view}</a>
          <a href="#contacts" class="btn outline">${r.order}</a>
        </div>
      </div>

      <div class="hero-right">
        <img src="/handmade-site/images/hero.jpg" />
      </div>
    </section>

    <section id="products">
      <h2>${r.products}</h2>

      <div class="cards">
        <div class="card">
          <img src="/handmade-site/images/blanket.jpg" />
          <h3>${r.blankets}</h3>
          <p>${r.blanketsDesc}</p>
        </div>

        <div class="card">
          <img src="/handmade-site/images/toy.jpg" />
          <h3>${r.toys}</h3>
          <p>${r.toysDesc}</p>
        </div>

        <div class="card">
          <img src="/handmade-site/images/other.jpg" />
          <h3>${r.other}</h3>
          <p>${r.otherDesc}</p>
        </div>
      </div>
    </section>

    <section>
      <h2>${r.gallery}</h2>

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
      <h2>${r.contacts}</h2>

      <p>${r.phone}: +38082063627</p>
      <p>${r.telegram}: @Tanua_Mih</p>
      <p>${r.instagram}: @tanya_mukhajlenko</p>

      <div class="btns">
        <a href="https://t.me/Tanua_Mih" class="btn white">Telegram</a>
        <a href="https://instagram.com/tanya_mukhajlenko" class="btn pink">Instagram</a>
        <a href="tel:+38082063627" class="btn green">${r.call}</a>
      </div>
    </section>

  </main>
  `,document.getElementById(`langBtn`).onclick=()=>{e=e===`ua`?`en`:`ua`,n()}}n();