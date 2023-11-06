const btn = document.querySelector('button')
const img = document.querySelector('img')
const title = document.querySelector('h2')

let count = 0
const imgUrl = [
	'../Galery/images/aerosmith.jpeg',
	'../Galery/images/Metallica.jpeg',
]
console.log(img)
btn.addEventListener('click', function () {
	const src = img.getAttribute('src')
	if (src == imgUrl[0]) {
		img.setAttribute('src', imgUrl[1])
	} else {
		img.setAttribute('src', imgUrl[0])
	}
    count++
    if(count == 3){
        title.innerText = "GOOOD alReady 3"
    }
    
    if (count == 8) {
        title.innerText = 'End 3..2..'
    }
    if (count == 10) {
    	title.innerText = 'FINISH'
    }
})



	
