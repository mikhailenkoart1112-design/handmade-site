function loadOrders() {
  const list = document.getElementById('ordersList')
  const orders = JSON.parse(localStorage.getItem('orders')) || []

  list.innerHTML = ''

  orders.forEach((o, i) => {
    list.innerHTML += `
      <div class="order">
        <b>${o.lastName} ${o.firstName}</b><br>
        📞 ${o.phone}<br>
        💬 ${o.contact}<br>
        📍 ${o.city}, ${o.region}<br>
        📦 ${o.post}<br>
        🛍️ ${o.product || '-'}<br>
        📝 ${o.comment || '-'}<br>
        🕒 ${o.date}<br>
        <button onclick="deleteOrder(${i})">Видалити</button>
      </div>
    `
  })
}

function deleteOrder(index) {
  let orders = JSON.parse(localStorage.getItem('orders')) || []
  orders.splice(index, 1)
  localStorage.setItem('orders', JSON.stringify(orders))
  loadOrders()
}

loadOrders()