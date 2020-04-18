document.querySelector(".pick-page").style.opacity="0";
document.querySelector(".next-movie").style.display="none";
let genre = document.querySelector(".select");
let lowerGenre = document.querySelector(".lower-select")
let year = document.querySelector('input[name="year"]');
let lowerYear = document.querySelector('input[name="year-lower"]');
let button = document.querySelector(".button");
let movieHeader = document.querySelector(".header");
let movieParagraph = document.querySelector(".about")
let trailer = document.querySelector(".trailer-link");
let imdb = document.querySelector(".imdb-link");
let heart = document.querySelector("#heart"); 
//ITEMS ON PAGE

//API AND MOVIE VARIABLES
let genreUrl = 'https://api.themoviedb.org/3/genre/movie/list';//API
let key = '7be00fe841740644dc3f1b6a0bd11fa7';                  //API
let moviesUrl = 'https://api.themoviedb.org/3/discover/movie'; //API
let trailerUrl = 'https://api.themoviedb.org/3/movie/';        //API
let externalIDUrl = 'https://api.themoviedb.org/3/movie/';        //API
let genreId, movieTitle, movieOverview, movieBackground, movieTrailer, movieId;//MOVIE(PRINT ON SCREEN)
let imdbId;

//JQUERY
setTimeout(function(){
    $(".title").animate({left: "-50%"},1000);
    $(".pick-page").animate({opacity: "0"},600);
    $(".pick-page").animate({opacity: "1"},1000);
},1000);


$(".button").click(function(){
    console.log(year.value.length);
    console.log(genre.value);
    if(year.value.length<4 || year.value.length>4 || year.value<1874 || year.value>2020 || genre.value.length==0){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You didn\'t pick something :)'
        });
    }else{
        $(".pick-page").css("display","none");
        $(".movie-content").slideToggle();
        $(".next-movie").css("display","inline-block");
        apiCall(); 
        lowerGenre.value = genre.value;
        lowerYear.value = year.value;
    }
    
});

$(".lower-button").click(function(){
    genre = lowerGenre;
    year = lowerYear;
    if(year.value.length<4 || year.value.length>4 || year.value<1874 || year.value>2020 || genre.value.length==0){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You didn\'t pick something :)'
        });
    }else{
        apiCall();
        heart.innerHTML = "favorite_border";
    }
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

$(heart).click(function(){
    if(heart.innerHTML === "favorite_border"){
        heart.innerHTML = "favorite";
    }
    else{
        heart.innerHTML = "favorite_border"
    }
});


function getData(){
    let randomPick = Math.floor(Math.random()*19);
    $.getJSON(moviesUrl + "?api_key=" + key + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&year="+ year.value  + "&with_genres=" + genreId,function(data){
        movieTitle = data.results[randomPick].title;
        movieOverview = data.results[randomPick].overview;
        movieBackgroundURL = JSON.stringify(data.results[randomPick].backdrop_path).replace(/"/g,'');
        if(movieBackgroundURL == "null"){
            movieBackgroundURL = JSON.stringify(data.results[randomPick].poster_path).replace(/"/g,'');
        }
        movieBackground = 'https://image.tmdb.org/t/p/original'  + movieBackgroundURL ;
        movieId = data.results[randomPick].id;
        printOnScreen();
        getTrailer();
        getIMDBid();
    });
    
}
function getTrailer(){
    $.getJSON(trailerUrl + JSON.stringify(movieId) + "/videos?api_key=" + key + "&language=en-US",function(data){
        movieTrailer = data.results[0].key
        $(trailer).attr("href","https://www.youtube.com/watch?v=" + movieTrailer);
        
    });
}

function getIMDBid(){
    $.getJSON(externalIDUrl + JSON.stringify(movieId) + "external_ids?api_key=" + key,function(data){
        imdbId = data.imdb_id;
        $(imdb).attr("href","https://www.imdb.com/title/" + imdbId);
    });
}
function printOnScreen(){
    
    movieHeader.innerHTML = movieTitle;
    movieParagraph.innerHTML = movieOverview;
    $('body').css({
        "background" : "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)) , url(" + movieBackground +") no-repeat center center fixed",
        "background-size" : "cover"
    });
    $(".movie-content").css({
        "display" : "box"
    });
    genre = null;
    year = null;
}



//JQUERY END

