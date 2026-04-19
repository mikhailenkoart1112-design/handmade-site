(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`ua`,t={ua:{handmade:`Ручна робота`,title:`В’язані вироби ручної роботи`,desc:`Пледи, іграшки та інші handmade-вироби`,view:`Переглянути`,order:`Замовити`,products:`Наші вироби`,blankets:`Пледи`,blanketsDesc:`Теплі і затишні`,toys:`Іграшки`,toysDesc:`М’які handmade`,other:`Інші вироби`,otherDesc:`Під замовлення`,gallery:`Галерея`,contacts:`Контакти`,phone:`Телефон`,telegram:`Telegram`,instagram:`Instagram`,call:`Подзвонити`,langBtn:`English`,loadingTitle:`Ручна робота`,loadingText:`Завантаження сайту...`},en:{handmade:`Handmade`,title:`Handmade knitted products`,desc:`Blankets, toys and handmade items`,view:`View`,order:`Order`,products:`Our products`,blankets:`Blankets`,blanketsDesc:`Warm and cozy`,toys:`Toys`,toysDesc:`Soft handmade`,other:`Other`,otherDesc:`Custom made`,gallery:`Gallery`,contacts:`Contacts`,phone:`Phone`,telegram:`Telegram`,instagram:`Instagram`,call:`Call`,langBtn:`Українська`,loadingTitle:`Handmade`,loadingText:`Loading website...`}};function n(){let a=t[e];document.querySelector(`#app`).innerHTML=`
    <div id="siteLoader" class="site-loader">
      <div class="loader-box">
        <div class="hook-wrap">
          <div class="hook-stick"></div>
          <div class="hook-head"></div>
          <div class="thread thread-1"></div>
          <div class="thread thread-2"></div>
          <div class="thread thread-3"></div>
        </div>
        <div class="loader-title">${a.loadingTitle}</div>
        <div class="loader-text">${a.loadingText}</div>
      </div>
    </div>

    <main class="site">
      <button id="langBtn" class="lang-btn">${a.langBtn}</button>

      <section class="hero">
        <div class="hero-left reveal reveal-left active-on-load">
          <p class="tag">${a.handmade}</p>
          <h1>${a.title}</h1>
          <p class="hero-desc">${a.desc}</p>

          <div class="btns">
            <a href="#products" class="btn white">${a.view}</a>
            <a href="#contacts" class="btn outline">${a.order}</a>
          </div>
        </div>

        <div class="hero-right reveal reveal-right active-on-load">
          <img src="/handmade-site/images/hero.jpg" class="hero-img" alt="Hero" />
        </div>
      </section>

      <section id="products">
        <h2 class="section-title reveal reveal-bottom">${a.products}</h2>

        <div class="cards">
          <div class="card reveal reveal-left">
            <img src="/handmade-site/images/blanket.jpg" alt="${a.blankets}" />
            <h3>${a.blankets}</h3>
            <p>${a.blanketsDesc}</p>
          </div>

          <div class="card reveal reveal-bottom">
            <img src="/handmade-site/images/toy.jpg" alt="${a.toys}" />
            <h3>${a.toys}</h3>
            <p>${a.toysDesc}</p>
          </div>

          <div class="card reveal reveal-right">
            <img src="/handmade-site/images/other.jpg" alt="${a.other}" />
            <h3>${a.other}</h3>
            <p>${a.otherDesc}</p>
          </div>
        </div>
      </section>

      <section class="gallery-section">
        <h2 class="section-title reveal reveal-bottom">${a.gallery}</h2>

        <div class="gallery">
          <img src="/handmade-site/images/g1.jpg" class="gallery-img reveal reveal-left" alt="Gallery 1" />
          <img src="/handmade-site/images/g2.jpg" class="gallery-img reveal reveal-right" alt="Gallery 2" />
          <img src="/handmade-site/images/g3.jpg" class="gallery-img reveal reveal-bottom" alt="Gallery 3" />
          <img src="/handmade-site/images/g4.jpg" class="gallery-img reveal reveal-left" alt="Gallery 4" />
          <img src="/handmade-site/images/g5.jpg" class="gallery-img reveal reveal-right" alt="Gallery 5" />
          <img src="/handmade-site/images/g6.jpg" class="gallery-img reveal reveal-bottom" alt="Gallery 6" />
        </div>
      </section>

      <section id="contacts" class="reveal reveal-bottom">
        <h2 class="contacts-title">${a.contacts}</h2>

        <p class="contact-line">${a.phone}: +380682063627</p>
        <p class="contact-line">${a.telegram}: @Tanua_Mih</p>
        <p class="contact-line">${a.instagram}: @tanya_mukhajlenko</p>

        <div class="contacts-btns">
          <a href="https://t.me/Tanua_Mih" target="_blank" class="btn white">Telegram</a>
          <a href="https://instagram.com/tanya_mukhajlenko" target="_blank" class="btn pink">Instagram</a>
          <a href="tel:+380682063627" class="btn green">${a.call}</a>
        </div>
      </section>
    </main>
  `,document.getElementById(`langBtn`).onclick=()=>{e=e===`ua`?`en`:`ua`,n()},r(),i()}function r(){let e=document.querySelectorAll(`.reveal`);e.forEach(e=>{e.classList.contains(`active-on-load`)?e.classList.add(`active`):e.classList.remove(`active`)});let t=new IntersectionObserver(e=>{e.forEach(e=>{e.intersectionRatio>.35?e.target.classList.add(`active`):e.intersectionRatio<.12&&!e.target.classList.contains(`active-on-load`)&&e.target.classList.remove(`active`)})},{threshold:[.12,.35,.7]});e.forEach(e=>{e.classList.contains(`active-on-load`)||t.observe(e)})}function i(){let e=document.getElementById(`siteLoader`);e&&setTimeout(()=>{e.classList.add(`hide`),setTimeout(()=>e.remove(),700)},1700)}n();