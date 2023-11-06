const form = document.querySelector('.product-form')
const productName = document.querySelector('.product-name')
const productPrice = document.querySelector('.product-price')
const productsContainer = document.querySelector('.products')
const notification = document.querySelector('.notification')
const notificationText = document.querySelector('.notification-text')

const products = [
	{
		name: 'Велосипед',
		price: 40000,
	},
	{
		name: 'Самокат',
		price: 40000,
	},
]

form.addEventListener('submit', function (event) {
	event.preventDefault()
	const newProduct = {
		name: productName.value,
		price: productPrice.value,
	}
	products.push(newProduct)
	showProducts()
	showNotification('hello world!')
})

function showNotification(text) {
	notification.style.display = 'block'
	notificationText.innerText = text
	setTimeout(function () {
		notification.style.display = 'none'
	}, 2000)
}

function showProducts() {
	productsContainer.innerHTML = ''
	products.forEach(function (product, index) {
		productsContainer.innerHTML += `
    <div class="product-card">
     <h5 class="product-card-name">${product.name}</h5>
     <p class="product-card-price">${product.price}</p>
	 <button class="delete-btn" id="${index}">X</button>
    </div>`
	})
	deleteProduct()
}

showProducts()

function deleteProduct(){
const deleteButtons = document.querySelectorAll('.delete-btn')

deleteButtons.forEach(function (button) {
	button.addEventListener('click', function () {
		button.parentElement.remove()
		const currentId = button.id
		products.splice(currentId, 1) // удаляю 1 элемент с индексом current id из массива products
		showProducts() // после удаления перерисуй мне интерфейс
	})
})
}
// <div class="product-card">
//     <h5 class="product-card-name">Велосипед</h5>
//     <p class="product-card-price">4000</p>
// </div>
