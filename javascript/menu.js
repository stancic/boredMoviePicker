let menu = document.querySelector(".menu-icon");
let menuTitle = document.querySelector(".menu-title");
let menuLinks = document.querySelector(".menu-links");
let movieContent = document.querySelector(".movie-content");
let menuOpen = false;
let nextMovie = document.querySelector(".next-movie");
let nextMovieForm = document.querySelector(".lower-form");
let nextMovieButton = document.querySelector(".lower-button");
let screen = window.matchMedia("(max-width: 700px)");
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

//creating new movie pick on mobile version
if(screen.matches){
    let text = document.createElement("p");
    let textT = document.createTextNode("Pick another movie")
    let newMovie = document.createElement("SPAN");
    let icon = document.createTextNode("keyboard_arrow_up")
    newMovie.appendChild(icon);
    text.appendChild(textT);
    newMovie.classList.add("material-icons");
    movieContent.appendChild(text);
    text.appendChild(newMovie);
    text.setAttribute("style","color: white; font-size: 1.4em; position: fixed; top: 90%; left: 2%; cursor: pointer")
    newMovie.setAttribute("style", "color: white; font-size: 2em; position: fixed; top: 92%; right: 3.6em;");
    console.log("button created");
    $(text).click(()=>{
        $(text).css("display", "none");
        $(nextMovie).css("height", "100%");
        $(nextMovieForm).css("display", "block");
    });
    $(nextMovieButton).click(()=>{
        $(nextMovie).css("height", "0%");
        $(nextMovieForm).css("display", "none");
        $(text).css("display", "block");
    })
}