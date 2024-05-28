let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.querySelector('.next').addEventListener('click', () => {
    changeSlide(1);
});

document.querySelector('.prev').addEventListener('click', () => {
    changeSlide(-1);
});

function changeSlide(direction) {
    slideIndex = (slideIndex + direction + totalSlides) % totalSlides;
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Optional: Automatic slideshow
setInterval(() => {
    changeSlide(1);
}, 5000);
