document.querySelector(".pick-page").style.opacity="0";
let genre = document.querySelector(".select");
let year = document.querySelector('input[name="year"]');
let button = document.querySelector(".button");


//JQUERY
setTimeout(function(){
    $(".title").animate({left: "-50%"},1000);
    $(".pick-page").animate({opacity: "0"},600);
    $(".pick-page").animate({opacity: "1"},1000);
},1000);


$(".button").click(function(){
    $(".pick-page").css("display","none");
    $(".body-content").slideToggle();
    let genreUrl = 'https://api.themoviedb.org/3/genre/movie/list';
    let key = '7be00fe841740644dc3f1b6a0bd11fa7';
    let genreName;
    $.getJSON(genreUrl + "?api_key=" + key + "&language=en-US",function(data){
        for(let i = 0; i<data.genres.length; i++){
            if(genre.value == data.genres[i].name){
                genreName=data.genres[i].id;
            }
        }
        dataReady();
    });
    function dataReady(){
        console.log(genreName);
    }
});


//JQUERY END

