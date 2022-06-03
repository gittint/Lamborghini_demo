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

