var typingEffect = new Typed(".typedtext", {
    strings: ["Frontend Developer" ,"Artist" , "Web Developer" ],

    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,

})
//sticky navbar

const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 50)
})

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.oneclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("open");
}