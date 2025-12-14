const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

let index = 0;

function showSlide(i){
    slides.style.transform = `translateX(-${i * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[i].classList.add('active');
}

// auto slide
setInterval(() => {
    index++;
    if(index === slide.length){
        index = 0;
    }
    showSlide(index);
}, 3000);

// right arrow
right.addEventListener('click', () => {
    index++;
    if(index === slide.length){
        index = 0;
    }
    showSlide(index);
});

// left arrow
left.addEventListener('click', () => {
    index--;
    if(index < 0){
        index = slide.length - 1;
    }
    showSlide(index);
});

// dots click
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        index = i;
        showSlide(index);
    });
});
