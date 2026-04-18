(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`ua`,t={ua:{handmade:`Ручна робота`,title:`В’язані вироби ручної роботи для затишку та подарунків`,desc:`Пледи, іграшки та інші handmade-вироби, створені майстринею з любов’ю до деталей.`,view:`Переглянути вироби`,order:`Замовити`,products:`Наші вироби`,blankets:`Пледи`,blanketsDesc:`Теплі і затишні`,toys:`Іграшки`,toysDesc:`М’які handmade`,other:`Інші вироби`,otherDesc:`Під замовлення`,gallery:`Галерея`,contacts:`Контакти`,phone:`Телефон`,telegram:`Telegram`,instagram:`Instagram`,call:`Подзвонити`,langBtn:`English`},en:{handmade:`Handmade`,title:`Handmade knitted products for comfort and gifts`,desc:`Blankets, toys and other handmade products created with love and attention to detail.`,view:`View products`,order:`Order`,products:`Our products`,blankets:`Blankets`,blanketsDesc:`Warm and cozy`,toys:`Toys`,toysDesc:`Soft handmade`,other:`Other products`,otherDesc:`Made to order`,gallery:`Gallery`,contacts:`Contacts`,phone:`Phone`,telegram:`Telegram`,instagram:`Instagram`,call:`Call`,langBtn:`Українська`}};function n(){let i=t[e];document.querySelector(`#app`).innerHTML=`
    <main
      class="site text-white"
      style="
        background:
          linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)),
          url('/handmade-site/images/bg.jpg');
      "
    >
      <div class="lang-wrap">
        <button id="langBtn" class="lang-btn">${i.langBtn}</button>
      </div>

      <section class="hero section">
        <div class="container hero-grid">
          <div class="hero-copy reveal reveal-left active-on-load">
            <p class="eyebrow">${i.handmade}</p>

            <h1 class="hero-title">${i.title}</h1>

            <p class="hero-text">${i.desc}</p>

            <div class="hero-actions">
              <a href="#products" class="btn btn-light">${i.view}</a>
              <a href="#contacts" class="btn btn-outline">${i.order}</a>
            </div>
          </div>

          <div class="hero-card reveal reveal-right active-on-load">
            <img
              src="/handmade-site/images/hero.jpg"
              alt="Ручна робота"
              class="hero-image"
            />
          </div>
        </div>
      </section>

      <section id="products" class="section">
        <div class="container">
          <h2 class="section-title reveal reveal-bottom">${i.products}</h2>

          <div class="cards-grid">
            <article class="card reveal reveal-left">
              <img src="/handmade-site/images/blanket.jpg" alt="${i.blankets}" />
              <h3>${i.blankets}</h3>
              <p>${i.blanketsDesc}</p>
              <a href="#contacts">${i.order}</a>
            </article>

            <article class="card reveal reveal-bottom">
              <img src="/handmade-site/images/toy.jpg" alt="${i.toys}" />
              <h3>${i.toys}</h3>
              <p>${i.toysDesc}</p>
              <a href="#contacts">${i.order}</a>
            </article>

            <article class="card reveal reveal-right">
              <img src="/handmade-site/images/other.jpg" alt="${i.other}" />
              <h3>${i.other}</h3>
              <p>${i.otherDesc}</p>
              <a href="#contacts">${i.order}</a>
            </article>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <h2 class="section-title reveal reveal-bottom">${i.gallery}</h2>

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
          <h2 class="section-title">${i.contacts}</h2>

          <p class="contact-line">${i.phone}: +38082063627</p>
          <p class="contact-line">${i.telegram}: @Tanua_Mih</p>
          <p class="contact-line">${i.instagram}: @tanya_mukhajlenko</p>

          <div class="contacts-actions">
            <a href="https://t.me/Tanua_Mih" target="_blank" class="btn btn-light">Telegram</a>
            <a href="https://instagram.com/tanya_mukhajlenko" target="_blank" class="btn btn-pink">Instagram</a>
            <a href="tel:+38082063627" class="btn btn-green">${i.call}</a>
          </div>
        </div>
      </section>
    </main>
  `,document.getElementById(`langBtn`).addEventListener(`click`,()=>{e=e===`ua`?`en`:`ua`,n(),r()}),r()}function r(){let e=document.querySelectorAll(`.reveal`);e.forEach(e=>{e.classList.contains(`active-on-load`)?e.classList.add(`active`):e.classList.remove(`active`)});let t=new IntersectionObserver(e=>{e.forEach(e=>{e.intersectionRatio>.35?e.target.classList.add(`active`):e.intersectionRatio<.12&&!e.target.classList.contains(`active-on-load`)&&e.target.classList.remove(`active`)})},{threshold:[.12,.35,.7]});e.forEach(e=>{e.classList.contains(`active-on-load`)||t.observe(e)})}n();