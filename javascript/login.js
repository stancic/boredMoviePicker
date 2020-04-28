let linkToLogin = document.querySelector(".login");
let linkToSignUp = document.querySelector(".signup");
let password = document.querySelector('input[name="password"]');
let passwordVisibilty = document.querySelector(".password-see");
let passwordVisibiltyClicked = true;
let goBack = document.querySelectorAll(".goback");
let loginHolder = document.querySelector(".login-holder");
let loginMenu = document.querySelector(".menu");

let signupHolder = document.querySelector(".signup-holder");
let signupPassword = document.querySelector('input[name="signupPassword"]');
let passwordConfirm = document.querySelector('input[name="passwordConfirm"]');
let signupPasswordVisibilty = document.querySelector(".signup-password-seePW");
let signupConfirmPasswordVisibilty = document.querySelector(".signup-password-seeCPW");
let signupPasswordVisibiltyClicked = true;
let signupPasswordConfirmVisibiltyClicked = true;

$(linkToLogin).click(()=>{
    loginMenu.style.display = "none";
    loginMenu.style.opacity = "0";
    signupHolder.style.display = "none";
    signupHolder.style.opacity = "0";
    loginHolder.style.display = "block";
    loginHolder.style.opacity = "1";
    document.getElementsByClassName("login-container")[0].style.display = "block";
});

$(linkToSignUp).click(()=>{
    loginMenu.style.display = "none";
    loginMenu.style.opacity = "0";
    loginHolder.style.display = "none";
    loginHolder.style.opacity = "0";
    signupHolder.style.display = "block";
    signupHolder.style.opacity = "1";
    document.getElementsByClassName("signup-container")[0].style.display = "block";
});

pwVisibility(passwordVisibilty, password, passwordVisibiltyClicked);
pwVisibility(signupPasswordVisibilty, signupPassword, signupPasswordVisibiltyClicked);
pwVisibility(signupConfirmPasswordVisibilty,passwordConfirm, signupPasswordConfirmVisibiltyClicked);


$(goBack).click(()=>{
    $(loginHolder).animate({opacity: 0}, 500,()=>{ $(loginHolder).css("display","none"); });
    $(signupHolder).animate({opacity: 0}, 500,()=>{ $(signupHolder).css("display","none"); });
    $(loginMenu).delay(1000).css({
        opacity:"1",
        display: "block"
    });  
});


function pwVisibility(clicked,input, check){
    $(clicked).click(()=>{
        console.log("helo");
        if(check){
            input.type= "text";
            clicked.innerHTML = "visibility_off";
            check = false;
        }
        else{
            input.type= "password";
            clicked.innerHTML = "visibility";
            check = true;
        }
    });
}