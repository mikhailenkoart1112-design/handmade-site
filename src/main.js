import './style.css'

function render() {
  document.querySelector('#app').innerHTML = `
    <main
      style="
        min-height:100vh;
        color:white;
        background:
          linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
          url('/handmade-site/images/bg.jpg');
        background-size: cover;
        background-position: center;
      "
    >

      <section style="padding:80px 20px; text-align:center;">
        <h1 style="font-size:40px;">В’язані вироби ручної роботи</h1>
        <p>Пледи, іграшки та інші handmade-вироби</p>
      </section>

      <section style="padding:40px;">
        <h2 style="text-align:center;">Наші вироби</h2>

        <div style="display:flex; gap:20px; flex-wrap:wrap; justify-content:center;">

          <div>
            <img src="/handmade-site/images/blanket.jpg" width="250">
            <p>Пледи</p>
          </div>

          <div>
            <img src="/handmade-site/images/toy.jpg" width="250">
            <p>Іграшки</p>
          </div>

          <div>
            <img src="/handmade-site/images/other.jpg" width="250">
            <p>Інші</p>
          </div>

        </div>
      </section>

      <section style="padding:40px;">
        <h2 style="text-align:center;">Галерея</h2>

        <div style="display:flex; flex-wrap:wrap; gap:10px; justify-content:center;">

          <img src="/handmade-site/images/g1.jpg" width="200">
          <img src="/handmade-site/images/g2.jpg" width="200">
          <img src="/handmade-site/images/g3.jpg" width="200">
          <img src="/handmade-site/images/g4.jpg" width="200">
          <img src="/handmade-site/images/g5.jpg" width="200">
          <img src="/handmade-site/images/g6.jpg" width="200">

        </div>
      </section>

      <section style="padding:40px; text-align:center;">
        <h2>Контакти</h2>

        <p>Телефон: +38082063627</p>
        <p>Telegram: @Tanua_Mih</p>
        <p>Instagram: @tanya_mukhajlenko</p>

        <br>

        <a href="https://t.me/Tanua_Mih" target="_blank">Telegram</a>
      </section>

    </main>
  `
}

render()