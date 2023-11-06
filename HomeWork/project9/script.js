// Создать кнопку и красный квадрат с размерами 200х200px.
// При клике на кнопку менять у квадрата цвет заднего фона
// на зеленый и уменьшать его до размеров 100х100px.
const button1 = document.querySelector('.btn-square-red')
const squareRed = document.querySelector('.red')

button1.addEventListener('click', function () {
	squareRed.style.backgroundColor = 'green'

	squareRed.style.width = '100px'
	squareRed.style.height = '100px'
	console.log(squareRed.style.height)
})

// Создать кнопку и розовый квадрат с размерами 200х200px. При клике на кнопку
// менять цвет на синий и выводить в консоль обновленный цвет квадрата.
const button2 = document.querySelector('.btn-square-pink')
const squarePink = document.querySelector('.pink')
button2.addEventListener('click', function () {
	squarePink.style.backgroundColor = 'blue'
	console.log('blue')
})

// Создать кнопку и квадрат с размерами 150х150px. При клике на
// кнопку увеличивать высоту и ширину квадрата на 20px.
const button3 = document.querySelector('.btn-150')
const square150 = document.querySelector('.square-150')

button3.addEventListener('click', function () {
	square150.style.width = square150.offsetWidth + 20 + 'px'
	square150.style.height = square150.offsetHeight + 20 + 'px'
})

// Создать кнопку и div с классом root. При клике на кнопку в div
// создается параграф синего цвета. Текст параграфа произвольный.
const button4 = document.querySelector('.btn-root')
const root = document.querySelector('.root')

button4.addEventListener('click', function () {
	root.innerHTML += '<p>Hello World!</p>'
})

// Создать кнопку и div с классом root. При клике на кнопку в div создаются
// по очереди параграфы синего и зеленого цветов. Первый цвет синий.
const button5 = document.querySelector('.btn-root2')
const root2 = document.querySelector('.root2')

button5.addEventListener('click', function () {
	root2.innerHTML += '<p>Hello World!</p>'

})
