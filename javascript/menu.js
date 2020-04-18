let menu = document.querySelector(".menu-icon");
let menuOpen = false;
menu.addEventListener('click',()=>{
    if(!menuOpen){
        menu.classList.add('open');
        menuOpen = true;
        document.getElementsByClassName("menu")[0].style.width = "100%";
    } else{
        menu.classList.remove('open');
        menuOpen = false;
        document.getElementsByClassName("menu")[0].style.width = "0%";
    }
})

