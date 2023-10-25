// const number = +prompt("Input number")

// if (number > 0) {
// 	console.log('Положительное')
// } else if (number < 0) {
// 	console.log('Отрицательное')
// } else {
//     	console.log('Равно')
// }

// const array = ['abc', 'ddd', '888', 'ddf', 'fff']
// console.log(array)
// console.log(array.push("ghjk"))
// array.pop()
// console.log(array)

// const num1 = +prompt('Input first number')
// const num2 = +prompt('Input second number')
// const numbers = []

// numbers.push(num1,num2)

// const str = "asrsen"

// const str2 = str.split("r")
// console.log(str[3])

// const num1 = +prompt('Input first number')
// const num2 = +prompt('Input second number')
// const names = ['Arsen', 'Vlad', 'Olga', 'Irina', 'Jak']
// for(let i = 0; i < names.length; i++){
//     console.log(`Привет, ${names[i]}`)
// }

const numbers = [10, 17, 11, 21, 40, 501, 50, 46]
let even = 0
let odd = 0
for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] % 2 == 0) {
		even += numbers[i]
	} else {
		odd += numbers[i]
	}
}
const n = 0
if (even > odd) {
	n = even - odd
} else {
	n = odd - even
}
console.log(n)
