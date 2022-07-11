// const btn1 = document.getElementById('inzileBt');
//
// let index = 0;
//
// const colors = ['#a0cc0d', '#39b34a'];
//
// btn1.addEventListener('click', function onClick() {
//     btn1.style.backgroundColor = colors[index];
//     btn1.style.color = 'white';
//
//     index = index >= colors.length - 1 ? 0 : index + 1;
// });
//

//
// const btn2 = document.getElementById('triplBt');
//
// let indext = 0;
//
// const colorst = ['#a0cc0d', '#39b34a'];
//
// btn2.addEventListener('click', function onClick() {
//     btn2.style.backgroundColor = colorst[index];
//     btn2.style.color = 'white';
//
//     indext = indext >= colorst.length - 1 ? 0 : index + 1;
// });

gsap.from('.leftContainer', {
    delay:0.2,
    duration:2,
    top:"100%",
    ease:"expo.inOut"
})

gsap.from('.rightContainer', {
    delay:0.2,
    duration:2,
    bottom:"100%",
    ease:"expo.inOut"
})

// Navigation

gsap.from('.navbar',{
    opacity:0,
    delay:1,
    duration:1.5,
    y:-20,
    ease:"expo.inOut"
})


gsap.from('.navLogo',{
    opacity:0,
    delay:1.2,
    duration:1.5,
    y:-20,
    ease:"expo.inOut"
})

gsap.from('.nav-item',{
    opacity:0,
    delay:1.2,
    duration:1.5,
    y:25,
    ease:"expo.Out",
    stagger:.2
})

gsap.from('.search_btn',{
    opacity:0,
    delay:1.2,
    duration:1.5,
    x:20,
    ease:"expo.Out",

})

gsap.from('.someItem',{
    opacity:0,
    delay:1.5,
    duration:2,
    x:-20,
    ease:"expo.Out",
    stagger:.2
})

// SlideNav
gsap.from('.directionBtn',{
    opacity:0,
    delay:1.5,
    duration:1.5,
    y:20,
    ease:"power3.Out",
    stagger:.2
})

gsap.from('.dotsWrapper',{
    opacity:0,
    delay:1.5,
    duration:1.5,
    y:20,
    ease:"power3.Out",
    stagger:.2
})

// Produkt

gsap.from('.midImg',{
    opacity:0,
    delay:2,
    duration:2,
    y:100,
    ease:"expo.inOut",
})

gsap.from('.productTitle',{
    opacity:0,
    delay:2.3,
    duration:1.5,
    ease:"expo.inOut",
})

gsap.from('.productSubTitle',{
    opacity:0,
    delay:2.5,
    duration:1.5,
    y:100,
    ease:"expo.inOut",
})

gsap.from('.productInfo',{
    opacity:0,
    delay:2.5,
    duration:1.5,
    y:100,
    ease:"expo.inOut",
})


gsap.from('.dcs',{
    opacity:0,
    delay:3.5,
    duration:1.5,
    y:140,
    ease:"expo.inOut",
})

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}