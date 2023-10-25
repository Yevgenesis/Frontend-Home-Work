// DOM - дерево
// const title = document.querySelector("h1")
// console.log(title);

// const myTitle = document.querySelector(".my-title")
// console.log(title.innerText);
// myTitle.innerText = "This is my title"

// const titles = document.querySelectorAll("h1")
// console.log(titles);

// for (let index = 0; index < titles.length; index++) {
//     titles[index].innerText = "New title";
// }

const texts = document.querySelectorAll('p')

for (let index = 0; index < texts.length; index++) {
	texts[index].innerText = 'Привет'
}


