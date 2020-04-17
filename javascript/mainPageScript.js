document.querySelector(".pick-page").style.opacity="0";
document.querySelector(".next-movie").style.display="none";
let genre = document.querySelector(".select");
let year = document.querySelector('input[name="year"]');
let button = document.querySelector(".button");
let movieHeader = document.querySelector(".header");
let movieParagraph = document.querySelector(".about")
//ITEMS ON PAGE


//API AND MOVIE VARIABLES
let genreUrl = 'https://api.themoviedb.org/3/genre/movie/list';//API
let key = '7be00fe841740644dc3f1b6a0bd11fa7';                  //API
let moviesUrl = 'https://api.themoviedb.org/3/discover/movie'; //API
let genreId, movieTitle, movieOverview, movieBackground;//MOVIE(PRINT ON SCREEN)

//JQUERY
setTimeout(function(){
    $(".title").animate({left: "-50%"},1000);
    $(".pick-page").animate({opacity: "0"},600);
    $(".pick-page").animate({opacity: "1"},1000);
    
},1000);


$(".button").click(function(){
    $(".pick-page").css("display","none");
    $(".movie-content").slideToggle();
    $(".next-movie").css("display","inline-block");
    apiCall();
});

function apiCall(){
    $.getJSON(genreUrl + "?api_key=" + key + "&language=en-US",function(data){
        for(let i = 0; i<data.genres.length; i++){
            if(genre.value == data.genres[i].name){
                genreId=data.genres[i].id;
            }
        }
        getData();
    });
}


function getData(){
    let randomPick = Math.floor(Math.random()*19);
    $.getJSON(moviesUrl + "?api_key=" + key + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year="+ year.value  + "&with_genres=" + genreId,function(data){
        movieTitle = data.results[randomPick].title;
        movieOverview = data.results[randomPick].overview;
        movieBackgroundURL = JSON.stringify(data.results[randomPick].backdrop_path).replace(/"/g,'');
        movieBackground = 'https://image.tmdb.org/t/p/original'  + movieBackgroundURL ;

        printOnScreen();
        
        console.log(data.results[randomPick]);
        console.log(movieTitle);
        console.log(movieOverview);
        console.log(movieBackground);
    });
}

function printOnScreen(){
    movieHeader.innerHTML = movieTitle + '<span style class="material-icons heart">favorite_border</span>';
    movieParagraph.innerHTML = movieOverview;
    $('body').css({
        "background" : "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)) , url(" + movieBackground +") no-repeat center center fixed",
        "background-size" : "cover"
    });
    $(".movie-content").css({
        "display" : "box"
    });
}



//JQUERY END

