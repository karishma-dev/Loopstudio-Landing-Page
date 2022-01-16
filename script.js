const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".header-nav-item");

hamburger.addEventListener("click", function(){
  hamburger.classList.toggle("fa-times")
  navMenu.classList.toggle("active");
  navLink.classList.toggle("active")
})
navLink.forEach((item) => {
     item.addEventListener("click", function(){
       hamburger.classList.remove("fa-times")
       navMenu.classList.remove("active");
     })
});
