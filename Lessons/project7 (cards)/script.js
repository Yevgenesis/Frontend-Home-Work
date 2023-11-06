// let card = document.querySelector(".item-1")
// let card2 = document.querySelector('.item-2')

// let texts1 = document.querySelectorAll(".item-1 p")
// let texts2 = document.querySelectorAll('.item-2 p')


// card.addEventListener("click", function(){
//     console.log("Click");
//     texts1.forEach(function(text){
//            text.classList.toggle("hidden")
//     })
// })

// card2.addEventListener("click", function(){
//     console.log("Click");
//     texts2.forEach(function(text){
//            text.classList.toggle("hidden")
//     })
// })


let cards = document.querySelectorAll(".item")

cards.forEach(function(card){
    card.addEventListener("click", function(event){ 
        let items = card.querySelectorAll("p")
        items.forEach(function(item){
            item.classList.toggle('hidden')
        })
    })
})
