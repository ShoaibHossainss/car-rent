function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}



const car1 = '/Images/4fe70dea3068cbba8e35daa1d7069b11.png';
const car2 = '/Images/4c40b78be8ddd324d275273cfd6cf7ff.png';
const car3 = '/Images/4703e1818568a29e5de3e5542ec73162.png';

const cars = [
    {
        name: "Mercedes Benz C-Class",
        engine: "Petrol Engine",
        cc: "1600 cc",
        doors: "4 Door",
        drive: "All Wheel Drive",
        mainImg: car2,
        leftImg: car1,
        rightImg: car3
    },
    {
        name: "BMW 5 Series",
        engine: "Diesel Engine",
        cc: "2000 cc",
        doors: "4 Door",
        drive: "Rear Wheel Drive",
        mainImg: car1,
        leftImg: car3,
        rightImg: car2
    },
    {
        name: "Audi A6",
        engine: "Hybrid Engine",
        cc: "1800 cc",
        doors: "4 Door",
        drive: "Front Wheel Drive",
        mainImg: car3,
        leftImg: car2,
        rightImg: car1
    }
];

let currentIndex = 0;

const mainCar = document.querySelector('.main-car');
const leftCar = document.querySelector('.left-car');
const rightCar = document.querySelector('.right-car');
const details = document.querySelector('.car-details');

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cars.length;
    updateSlider();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cars.length) % cars.length;
    updateSlider();
});

function updateSlider() {
    const car = cars[currentIndex];
    mainCar.src = car.mainImg;
    leftCar.src = car.leftImg;
    rightCar.src = car.rightImg;
    details.innerHTML = `
        <h2>${car.name}</h2>
        <p>${car.engine}</p>
        <p>${car.cc}</p>
        <p>${car.doors}</p>
        <p>${car.drive}</p>
    `;
}


// slider section
$(document).ready(function(){
    $('.card-item').slick({
        infinite: true,   
        slidesToShow: 3,
        slidesToScroll: 3, 
        arrows: true,     
        dots: true,       
        autoplay: true,   
        autoplaySpeed: 2000 
    });
});

