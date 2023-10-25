// const product = {
// 	name: 'Iphone',
// 	model: '15 pro',
// 	price: 1199,
// }

// console.log(`В магазине нужно купить ${product.name} его цена ${product.price}`)

const products = [
	{
		name: 'ACER',
		model: 'G500',
		price: 50000,
		category: 'laptop',
	},
	{
		name: 'Samsung',
		model: 'G200',
		price: 45000,
		category: 'laptop',
	},
	{
		name: 'Samsung',
		model: 'T237',
		price: 60000,
		category: 'TV',
	},
	{
		name: 'Iphone',
		model: '15',
		price: 70000,
		category: 'phone',
	},
	{
		name: 'Lenovo',
		model: 'T700',
		price: 65000,
		category: 'TV',
	},
]
// деструктуризация

// for (let i = 0; i < products.length; i++) {
// 	const { name, price } = products[i]
// 	console.log(`${name}, цена со скидкой = ${price - price * 0.1}`)
// }

// for (let i = 0; i < products.length; i++) {
// 	const { name, price, model, category } = products[i]
// 	console.log(`Название - ${name}, Модель - ${model}, Цена - ${price}, категория - ${category}`)
// }

const productTv = []
for (let i = 0; i < products.length; i++) {
	const { name, price, model, category } = products[i]
	if (category == 'TV') {
        productTv.push(products[i])
		console.log(`
        Название - ${name}, 
        цена - ${price},
        модель - ${model},`)
	}
}

