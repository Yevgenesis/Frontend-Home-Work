const previews = document.querySelectorAll('.images')
const mainImg = document.querySelector(".mainImg")

previews.forEach(function(img){
    img.addEventListener("click",function(event){
        mainImg.setAttribute("src",img.getAttribute("src") )
})
})