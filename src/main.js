function openOrderModal(product = '') {
  document.getElementById('orderModal').style.display = 'flex'
  document.getElementById('orderProduct').value = product
}

function closeOrderModal() {
  document.getElementById('orderModal').style.display = 'none'
}

function showSuccessMessage() {
  const el = document.getElementById('successMessage')
  el.style.display = 'flex'

  setTimeout(() => {
    el.style.display = 'none'
  }, 2000)
}

function submitOrder() {
  const order = {
    firstName: document.getElementById('orderFirstName').value,
    lastName: document.getElementById('orderLastName').value,
    middleName: document.getElementById('orderMiddleName').value,
    phone: document.getElementById('orderPhone').value,
    contact: document.getElementById('orderContact').value,
    region: document.getElementById('orderRegion').value,
    city: document.getElementById('orderCity').value,
    post: document.getElementById('orderPost').value,
    product: document.getElementById('orderProduct').value,
    comment: document.getElementById('orderComment').value,
    date: new Date().toLocaleString()
  }

  let orders = JSON.parse(localStorage.getItem('orders')) || []
  orders.push(order)
  localStorage.setItem('orders', JSON.stringify(orders))

  closeOrderModal()
  showSuccessMessage()
  document.getElementById('orderForm').reset()
}