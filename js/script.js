window.addEventListener("scroll", function(){
    let header = document.querySelector("#header") 
    header.classList.toggle("rolagem", window.scrollY > 60)
})

const hamburguer = document.querySelector(".hamburguer")
const nav = document.querySelector(".nav")

hamburguer.addEventListener("click" , () => nav.classList.toggle("active"))