//xu ly slider-1

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide-item");
    let dots = document.getElementsByClassName("btn-auto-item");

    if (n > slides.length){
        slideIndex = 1;
    }    

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" btn--click", "");
    }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " btn--click";
}

//xử lý msg-box

var msgbox = document.querySelector(".msg-box");
var msgbtn = document.querySelector(".nav__item-msg");
var msgx = document.querySelector(".msg__header-icon");
console.log(msgbox);
console.log(msgbtn);
console.log(msgx);

function clickmsg(){
    msgbox.classList.add('goleft'); 
}

function clickmsgX(){
    msgbox.classList.remove('goleft'); 
}

//xử lý search-box

var searchbox = document.querySelector(".search-modal");
var searchbtn = document.querySelector(".nav__item-search");
var searchx = document.querySelector(".search__header-close");
console.log(searchbox);
console.log(searchbtn);
console.log(searchx);

function clicksearch(){
    searchbox.classList.add('godown'); 
}

function clicksearchX(){
    searchbox.classList.remove('godown'); 
}






