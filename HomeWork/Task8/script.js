// Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке 
// от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers.
let numbers = document.querySelector(".numbers")
for (let index = 100; index >= 50; index-=10) {
    numbers.insertAdjacentHTML('beforeend', `<p>${index}</p>`)
}


// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и
// добавляет его в div с классом strings_container. Строки взять произвольные.
let strArray = ['one', 'two', 'three', 'four','five']
let stringContainer = document.querySelector('.strings_container')
for(let str of strArray){
    stringContainer.insertAdjacentHTML("afterbegin",`<p>${str}</p>`)
}



// Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name,
// last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних 
// пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. 
// Добавить все карточки в div с классом users_container.
let users = [
	{
		first_name: 'Artem',
		last_name: 'Artemov',
		age: 19,
	},
	{
		first_name: 'Bogdan',
		last_name: 'Bogdanov',
		age: 22,
	},
	{
		first_name: 'Danil',
		last_name: 'Danilov',
		age: 13,
	},
	{
		first_name: 'Ivan',
		last_name: 'Ivanov',
		age: 18,
	},
	{
		first_name: 'Maxim',
		last_name: 'Maximov',
		age: 17,
	},
]

let usersContainer = document.querySelector('.users_container')

for(let user of users){
	if(user.age < 18) {continue}
    usersContainer.insertAdjacentHTML('afterbegin',
		`<div class="userCard">
			<p>Name: <span>${user.first_name}</span></p>
			<p>Last name: <span>${user.last_name}</span></p>
			<p>Age: <span>${user.age}</span></p>
        </div>`
		)
}