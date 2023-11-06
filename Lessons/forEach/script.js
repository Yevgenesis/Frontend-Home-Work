// const products = [
//     {
//         name: "Молоко",
//         price: 500
//     },
//     {
//         name: "Гречка",
//         price: 600
//     },
//     {
//         name: "Масло",
//         price: 850
//     },
// ]
// const body = document.querySelector("body")

// products.forEach(function (product) {
// 	body.innerHTML += `<div class="product">
//     <h>${product.name}</h>
//     <p>${product.price}</p>
//     </div>
//     `
// })


const todo = ['Сварить суп', 'Сделать ДЗ', 'Убраться дома', 'Поваляться']

const main = document.querySelector("main")

todo.forEach(function(each){
    main.innerHTML += `
    <div class="todo-item">
        <h5>
            ${each}
        </h5>
    </div>`
})

let cards = document.querySelectorAll('.todo-item')

cards.forEach(function(card){
    card.addEventListener("click", function(){
        // card.classList.add("active")
        card.classList.toggle("active")
    })
})

let choseAll = document.querySelector(".item")
choseAll.addEventListener("click", function(){
    cards.forEach(function(card){
        card.classList.add("active")
    })
})

let resetAll = document.querySelector(".reset")
resetAll.addEventListener('click', function () {
	cards.forEach(function (card) {
		card.classList.remove('active')
	})
})


