window.addEventListener("scroll", function(){
    let header = document.querySelector("#header") 
    header.classList.toggle("rolagem", window.scrollY > 60)
})

// const fone = document.querySelector(".fone")

// const myObserver = new IntersectionObserver((entries) =>{
//     console.log(entries)
// })

// myObserver.observe(fone)



// menu hamburguer
const hamburguer = document.querySelector(".hamburguer")
const nav = document.querySelector(".navbar")
const navItems = document.querySelectorAll(".menu a");

hamburguer.addEventListener('click', () =>
    nav.classList.toggle("active")
)

navItems.forEach(item => {
    item.addEventListener('click', () => {
        nav.classList.remove("active"); // Remove a classe 'active' para fechar o menu
    });
});