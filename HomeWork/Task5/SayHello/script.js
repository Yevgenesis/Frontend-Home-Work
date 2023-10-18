const userName = prompt('What your name?')
const userAge = +prompt('How old are you?')

if (userAge < 18) {
	console.log(`Hi, ${userName} `)
} else {
	console.log(`Hello, ${userName} `)
}
