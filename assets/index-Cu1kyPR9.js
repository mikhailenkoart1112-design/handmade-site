(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`ua`,t={ua:{handmade:`Ручна робота`,title:`В’язані вироби ручної роботи`,desc:`Пледи, іграшки та інші handmade-вироби`,view:`Переглянути`,order:`Замовити`,products:`Наші вироби`,blankets:`Пледи`,blanketsDesc:`Теплі і затишні`,toys:`Іграшки`,toysDesc:`М’які handmade`,other:`Інші вироби`,otherDesc:`Під замовлення`,gallery:`Галерея`,contacts:`Контакти`,phone:`Телефон`,telegram:`Telegram`,instagram:`Instagram`,call:`Подзвонити`,langBtn:`English`},en:{handmade:`Handmade`,title:`Handmade knitted products`,desc:`Blankets, toys and handmade items`,view:`View`,order:`Order`,products:`Our products`,blankets:`Blankets`,blanketsDesc:`Warm and cozy`,toys:`Toys`,toysDesc:`Soft handmade`,other:`Other`,otherDesc:`Custom made`,gallery:`Gallery`,contacts:`Contacts`,phone:`Phone`,telegram:`Telegram`,instagram:`Instagram`,call:`Call`,langBtn:`Українська`}};function n(){let i=t[e];document.querySelector(`#app`).innerHTML=`
  <main class="site">

    <button id="langBtn" class="lang-btn">${i.langBtn}</button>

    <section class="hero">
      <div class="hero-left reveal reveal-left active-on-load">
        <p class="tag">${i.handmade}</p>
        <h1>${i.title}</h1>
        <p class="hero-desc">${i.desc}</p>

        <div class="btns">
          <a href="#products" class="btn white">${i.view}</a>
          <a href="#contacts" class="btn outline">${i.order}</a>
        </div>
      </div>

      <div class="hero-right reveal reveal-right active-on-load">
        <img src="/handmade-site/images/hero.jpg" />
      </div>
    </section>

    <section id="products">
      <h2 class="section-title reveal reveal-bottom">${i.products}</h2>

      <div class="cards">
        <div class="card reveal reveal-left">
          <img src="/handmade-site/images/blanket.jpg">
          <h3>${i.blankets}</h3>
          <p>${i.blanketsDesc}</p>
        </div>

        <div class="card reveal reveal-bottom">
          <img src="/handmade-site/images/toy.jpg">
          <h3>${i.toys}</h3>
          <p>${i.toysDesc}</p>
        </div>

        <div class="card reveal reveal-right">
          <img src="/handmade-site/images/other.jpg">
          <h3>${i.other}</h3>
          <p>${i.otherDesc}</p>
        </div>
      </div>
    </section>

    <section class="gallery-section">
      <h2 class="section-title reveal reveal-bottom">${i.gallery}</h2>

      <div class="gallery">
        <img src="/handmade-site/images/g1.jpg" class="gallery-img reveal reveal-left">
        <img src="/handmade-site/images/g2.jpg" class="gallery-img reveal reveal-right">
        <img src="/handmade-site/images/g3.jpg" class="gallery-img reveal reveal-bottom">
        <img src="/handmade-site/images/g4.jpg" class="gallery-img reveal reveal-left">
        <img src="/handmade-site/images/g5.jpg" class="gallery-img reveal reveal-right">
        <img src="/handmade-site/images/g6.jpg" class="gallery-img reveal reveal-bottom">
      </div>
    </section>

    <section id="contacts" class="reveal reveal-bottom">
      <h2 class="contacts-title">${i.contacts}</h2>

      <p class="contact-line">${i.phone}: +38082063627</p>
      <p class="contact-line">${i.telegram}: @Tanua_Mih</p>
      <p class="contact-line">${i.instagram}: @tanya_mukhajlenko</p>

      <div class="contacts-btns">
        <a href="https://t.me/Tanua_Mih" class="btn white">Telegram</a>
        <a href="https://instagram.com/tanya_mukhajlenko" class="btn pink">Instagram</a>
        <a href="tel:+38082063627" class="btn green">${i.call}</a>
      </div>
    </section>

  </main>
  `,document.getElementById(`langBtn`).onclick=()=>{e=e===`ua`?`en`:`ua`,n()},r()}function r(){let e=document.querySelectorAll(`.reveal`);e.forEach(e=>{e.classList.contains(`active-on-load`)?e.classList.add(`active`):e.classList.remove(`active`)});let t=new IntersectionObserver(e=>{e.forEach(e=>{e.intersectionRatio>.35?e.target.classList.add(`active`):e.intersectionRatio<.12&&!e.target.classList.contains(`active-on-load`)&&e.target.classList.remove(`active`)})},{threshold:[.12,.35,.7]});e.forEach(e=>{e.classList.contains(`active-on-load`)||t.observe(e)})}n();