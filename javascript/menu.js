let menu = document.querySelector(".menu-icon");
let menuTitle = document.querySelector(".menu-title");
let menuLinks = document.querySelector(".menu-links");
let menuOpen = false;
menuTitle.style.display="none";
menuLinks.style.display="none";

menu.addEventListener('click',()=>{
    if(!menuOpen){
        menu.classList.add('open');
        menuOpen = true;
        document.getElementsByClassName("menu")[0].style.width = "100%";
        $(menuTitle).slideDown(1200);
        $(menuLinks).slideDown(1200);
    } else{
        menuTitle.style.display="none";
        menuLinks.style.display="none";
        menu.classList.remove('open');
        menuOpen = false;
        document.getElementsByClassName("menu")[0].style.width = "0%";
    }
})



