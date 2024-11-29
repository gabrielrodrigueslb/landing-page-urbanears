window.addEventListener("scroll", function(){
    let header = document.querySelector("#header") 
    header.classList.toggle("rolagem", window.scrollY > 60)
})

const fone = document.querySelector(".fone")

const myObserver = new IntersectionObserver((entries) =>{
    console.log(entries)
})

myObserver.observe(fone)