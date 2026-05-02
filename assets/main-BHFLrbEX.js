import{t as e}from"./data-unhnaqfr.js";var t=`ua`,n=`https://script.google.com/macros/s/AKfycbzLKMmcZKiPpLVukfqrkN9sC_lOCXstpqJNr3q6reQZaT7SJyxMkjX3WUYdQLdumPXIRQ/exec`,r={ua:{handmade:`Ручна робота`,title:`В’язані вироби ручної роботи`,desc:`Пледи, іграшки та інші handmade-вироби`,view:`Переглянути`,order:`Замовити зараз`,products:`Наші вироби`,gallery:`Галерея`,contacts:`Контакти`,phone:`Телефон`,telegram:`Telegram`,instagram:`Instagram`,call:`Подзвонити`,langBtn:`English`,loadingTitle:`Ручна робота`,loadingText:`Завантаження сайту...`},en:{handmade:`Handmade`,title:`Handmade knitted products`,desc:`Blankets, toys and handmade items`,view:`View`,order:`Order now`,products:`Our products`,gallery:`Gallery`,contacts:`Contacts`,phone:`Phone`,telegram:`Telegram`,instagram:`Instagram`,call:`Call`,langBtn:`Українська`,loadingTitle:`Handmade`,loadingText:`Loading website...`}};function i(){let t=localStorage.getItem(`siteData`);if(!t)return e;try{return JSON.parse(t)}catch{return e}}function a(e=``){let t=document.getElementById(`orderModal`),n=document.getElementById(`orderProduct`);t&&(n&&(n.value=e),t.classList.add(`active`),document.body.style.overflow=`hidden`)}function o(){let e=document.getElementById(`orderModal`);e&&(e.classList.remove(`active`),document.body.style.overflow=``)}function s(){let e=document.getElementById(`successToast`);e&&(e.classList.add(`active`),setTimeout(()=>{e.classList.remove(`active`)},2600))}async function c(){let e=document.getElementById(`orderFirstName`).value.trim(),t=document.getElementById(`orderLastName`).value.trim(),r=document.getElementById(`orderMiddleName`).value.trim(),i=document.getElementById(`orderPhone`).value.trim(),a=document.getElementById(`orderContact`).value.trim(),c=document.getElementById(`orderRegion`).value.trim(),l=document.getElementById(`orderCity`).value.trim(),u=document.getElementById(`orderPost`).value.trim(),d=document.getElementById(`orderProduct`).value.trim(),f=document.getElementById(`orderComment`).value.trim();if(!e||!t||!i||!a||!c||!l||!u){alert(`Заповніть ім’я, прізвище, телефон, зв’язок, область, місто та відділення Нової Пошти`);return}let p={firstName:e,lastName:t,middleName:r,phone:i,contact:a,region:c,city:l,post:u,product:d,comment:f};try{await fetch(n,{method:`POST`,mode:`no-cors`,headers:{"Content-Type":`text/plain;charset=utf-8`},body:JSON.stringify(p)}),o(),s(),document.getElementById(`orderForm`).reset()}catch(e){alert(`Помилка відправки замовлення`),console.error(e)}}function l(){let e=document.querySelector(`#app`),n=document.getElementById(`seoFallback`);if(!e)return;n&&(n.style.display=`none`);let s=r[t],f=i();e.innerHTML=`
    <div id="siteLoader" class="site-loader">
      <div class="loader-box">
        <div class="hook-wrap">
          <div class="hook-stick"></div>
          <div class="hook-head"></div>
          <div class="thread thread-1"></div>
          <div class="thread thread-2"></div>
          <div class="thread thread-3"></div>
        </div>
        <div class="loader-title">${s.loadingTitle}</div>
        <div class="loader-text">${s.loadingText}</div>
      </div>
    </div>

    <main class="site">
      <button id="langBtn" class="lang-btn">${s.langBtn}</button>

      <section class="hero">
        <div class="hero-left reveal reveal-left active-on-load">
          <p class="tag">${s.handmade}</p>
          <h1>${s.title}</h1>
          <p class="hero-desc">${s.desc}</p>

          <div class="btns">
            <a href="#products" class="btn white">${s.view}</a>
            <button id="openOrderBtn" class="btn outline order-open-btn">${s.order}</button>
          </div>
        </div>

        <div class="hero-right reveal reveal-right active-on-load">
          <img src="/images/hero.jpg" class="hero-img" alt="PlushByTanya" />
        </div>
      </section>

      <section id="products">
        <h2 class="section-title reveal reveal-bottom">${s.products}</h2>

        <div class="cards">
          ${f.products.map((e,n)=>`
            <div class="card reveal ${n%3==0?`reveal-left`:n%3==1?`reveal-bottom`:`reveal-right`}">
              <img src="${e.image}" alt="${t===`ua`?e.titleUa:e.titleEn}" />
              <h3>${t===`ua`?e.titleUa:e.titleEn}</h3>
              <p>${t===`ua`?e.descUa:e.descEn}</p>
              <button class="product-order-btn" data-product="${t===`ua`?e.titleUa:e.titleEn}">
                ${s.order}
              </button>
            </div>
          `).join(``)}
        </div>
      </section>

      <section class="gallery-section">
        <h2 class="section-title reveal reveal-bottom">${s.gallery}</h2>

        <div class="gallery">
          ${f.gallery.filter(e=>e&&e.trim()!==``).map((e,t)=>`
              <img
                src="${e}"
                class="gallery-img reveal ${t%3==0?`reveal-left`:t%3==1?`reveal-right`:`reveal-bottom`}"
                alt="Галерея PlushByTanya ${t+1}"
              />
            `).join(``)}
        </div>
      </section>

      <section id="contacts" class="reveal reveal-bottom">
        <h2 class="contacts-title">${s.contacts}</h2>

        <p class="contact-line">${s.phone}: +380682063627</p>
        <p class="contact-line">${s.telegram}: @Tanua_Mih</p>
        <p class="contact-line">${s.instagram}: @tanya_mukhajlenko</p>

        <div class="contacts-btns">
          <a href="https://t.me/Tanua_Mih" target="_blank" class="btn white">Telegram</a>
          <a href="https://instagram.com/tanya_mukhajlenko" target="_blank" class="btn pink">Instagram</a>
          <a href="tel:+380682063627" class="btn green">${s.call}</a>
        </div>
      </section>
    </main>

    <div id="orderModal" class="order-modal">
      <div class="order-modal-box">
        <button id="closeOrderModal" class="order-close">×</button>

        <h2>Оформити замовлення</h2>
        <p class="order-subtitle">Заповніть дані для оформлення замовлення</p>

        <form id="orderForm" class="order-form">
          <label>
            Ім’я
            <input id="orderFirstName" placeholder="Введіть ім’я" />
          </label>

          <label>
            Прізвище
            <input id="orderLastName" placeholder="Введіть прізвище" />
          </label>

          <label>
            По батькові
            <input id="orderMiddleName" placeholder="Введіть по батькові" />
          </label>

          <label>
            Телефон
            <input id="orderPhone" placeholder="+380..." />
          </label>

          <label>
            Звʼязок для зворотнього звʼязку: Viber / Telegram / Instagram
            <input id="orderContact" placeholder="+380... або @username" />
          </label>

          <label>
            Область
            <input id="orderRegion" placeholder="Напр. Київська" />
          </label>

          <label>
            Місто / село
            <input id="orderCity" placeholder="Напр. Київ" />
          </label>

          <label>
            Відділення Нової Пошти
            <input id="orderPost" placeholder="Напр. №12" />
          </label>

          <label>
            Що замовляєте
            <input id="orderProduct" placeholder="Напр. плед, іграшка, одяг" />
          </label>

          <label>
            Коментар
            <textarea id="orderComment" placeholder="Деталі замовлення"></textarea>
          </label>

          <button type="button" id="sendOrderBtn" class="order-submit">
            Замовити
          </button>
        </form>
      </div>
    </div>

    <div id="successToast" class="success-toast">
      Ваше замовлення прийнято
    </div>
  `,document.getElementById(`langBtn`).onclick=()=>{t=t===`ua`?`en`:`ua`,l()},document.getElementById(`openOrderBtn`).onclick=()=>a(),document.querySelectorAll(`.product-order-btn`).forEach(e=>{e.onclick=()=>a(e.dataset.product)}),document.getElementById(`closeOrderModal`).onclick=o,document.getElementById(`orderModal`).onclick=e=>{e.target.id===`orderModal`&&o()},document.getElementById(`sendOrderBtn`).onclick=c,u(),d()}function u(){let e=document.querySelectorAll(`.reveal`);e.forEach(e=>{e.classList.contains(`active-on-load`)?e.classList.add(`active`):e.classList.remove(`active`)});let t=new IntersectionObserver(e=>{e.forEach(e=>{e.intersectionRatio>.35?e.target.classList.add(`active`):e.intersectionRatio<.12&&!e.target.classList.contains(`active-on-load`)&&e.target.classList.remove(`active`)})},{threshold:[.12,.35,.7]});e.forEach(e=>{e.classList.contains(`active-on-load`)||t.observe(e)})}function d(){let e=document.getElementById(`siteLoader`);e&&setTimeout(()=>{e.classList.add(`hide`),setTimeout(()=>e.remove(),700)},1700)}l();