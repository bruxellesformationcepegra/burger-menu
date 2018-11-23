let myBurger = document.querySelector(".burger-menu");
let myNav = document.querySelector(".main-nav");

myBurger.addEventListener("click", () => {
    myBurger.classList.toggle("active");
    myNav.classList.toggle("active");
});