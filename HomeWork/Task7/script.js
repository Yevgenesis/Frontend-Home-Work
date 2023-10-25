// Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
function getMinNum(a, b) {
	if (a > b) {
		return b
	}
	return a
}



// Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
function printEvenNumbers(a, b) {
	let min = a
	let max = b

	if (a > b) {
		min = b
		max = a
	}
	for (let i = max; i > min; i--) {
		console.log(i)
	}
}

printEvenNumbers(29, 11)



// Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень)
// и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
function power(num, pow = 2) {
	return num ** pow
}



// Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.
function getSum(num) {
	let sum = 0
	for (let n = 1; n < num; n++) {
		sum += n
	}
	return sum
}

console.log(getSum(4))



// Напишите функцию, которая принимает два числовых аргумента n и m, и считает сумму четных чисел
// и нечетных чисел от n до m. Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).
function oddEvenSum(n, m) {
	let evenSum = 0
	let oddSum = 0

	for (let i = n; i < m; i++) {
		if (i % 2 == 0) {
			evenSum += i
		} else {
			oddSum += i
		}
	}
	console.log(evenSum);
	console.log(oddSum);
}

oddEvenSum(2, 5)



// Напишите функцию, которая принимает в качестве аргументов массив строк, 
// а возвращает первый самый длинный элемент массива. Если входной массив пуст,
// функция возвращает null. Если есть несколько одинаковых по длине элементов
//  - функция возвращает первый из этих элементов. 
// Пример: [ 'one', 'two', 'three' ] => 'three'
function getMaxLengthElement(strArray) {
	if (strArray.length == 0) {
		return null	
	}

	let lengthMaxElem = 0
	let maxElem

	for (let i = 0; i < array.length; i++) {

		if(strArray[i].length>lengthMaxElem){
			lengthMaxElem = strArray[i].length
			maxElem = strArray[i]
		}
	}
	return maxElem
}

const array = [ 'one', 'two', 'three']
console.log(getMaxLengthElement(array));