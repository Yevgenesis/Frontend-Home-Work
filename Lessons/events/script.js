// const button = document.querySelector(".btn")
// const button2 = document.querySelector(".minus")
// const title = document.querySelector("h1")
// let count = 0;
// title.innerText = count;

// button.addEventListener("click", function() {
//     title.innerText = ++count;
// })

// button2.addEventListener("click", function() {
//     title.innerText = --count;
// })

// const buttonRed = document.querySelector('.red')
// const buttons = document.querySelectorAll('button')
const elementDiv = document.querySelector('.item')
let count = 0
// colorArray = ['red', 'green', 'yellow', 'blue']

// buttonRed.addEventListener('click', function () {
// 	let curretCollor = colorArray[++count % 4]
	// elementDiv.style.backgroundColor = curretCollor
// })


const buttons = document.querySelectorAll("button") 
for(let i = 0; i < buttons.length; i++) {
buttons[i].addEventListener("click", function(event){
    elementDiv.style.backgroundColor = event.target.className
    console.log(event.target.className)
})
}

