// Создание элемента в DOM

// const title = document.createElement("h1")
// title.innerText = "My new title"
// const header = document.querySelector("header")
// header.append(title)

// const text = document.createElement("p").innerText = "Hello world"
// const item = document.querySelector(".item")
// item.append(text)

// const names = ['Arsen', 'Artem', 'Vlad', 'Alina', 'Iren']
// const item = document.querySelector('.item')

// for (let i = 0; i <h1 names.length; i++) {
// 	item.insertAdjacentHTML("beforeend", `<p>${names[i]}</p>`)
// }

// const text = "hello WORLD"
// const header = document.querySelector("header")

// header.insertAdjacentHTML('afterbegin', `<h1>${text}</h1>`)

const products = [
	{
		name: 'Молоко',
		price: 500,
	},
	{
		name: 'Гречка',
		price: 700,
	},
	{
		name: 'Масло',
		price: 600,
	},
]

const item = document.querySelector('.item')

for (each of products) {
	item.insertAdjacentHTML("beforeend",
		`<div class="product">
            <h5>${each.name}</h5>
            <p>${each.price}</p>
        </div>`
	)
}
