
let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll('.carousel-images img');
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }
    
    const offset = -slideIndex * 100; 
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function moveSlide(n) {
    slideIndex += n;
    showSlides();
}


showSlides();
setInterval(() => moveSlide(1), 4000); 

