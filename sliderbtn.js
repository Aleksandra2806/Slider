let sliderContainer = document.getElementById('sliderContainer').offsetWidth;
let btnNext = document.getElementById('next');
let btnPrev = document.getElementById('prev');
let slider = document.querySelector('div.slider');
let btnsSlide = document.querySelectorAll('.btnSlide');
let btnSlide = 0;

btnsSlide[0].style.backgroundColor = "grey";

function nextPage() {
    btnsSlide[btnSlide].style.backgroundColor = "black";
    if (btnSlide < 4) {
        btnSlide++;
    } else {
        btnSlide = 0;
    }
    btnsSlide[btnSlide].style.backgroundColor = "grey";
    slider.style.left = -btnSlide * sliderContainer + "px";
    
}
btnNext.addEventListener('click', nextPage)

function prevPage() {
    btnsSlide[btnSlide].style.backgroundColor = "black";
    if (btnSlide > 0) {
        btnSlide--;
    } else {
        viewSlide = 4;
    }
    btnsSlide[btnSlide].style.backgroundColor = "grey";
    slider.style.left = -btnSlide * sliderContainer+ "px";
}

btnPrev.addEventListener('click', prevPage)

