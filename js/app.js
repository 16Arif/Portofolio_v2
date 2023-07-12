AOS.init();

//auto type
var typed = new Typed(".auto-type",{
    strings: ["Hi...", "Hallo..."],
    typeSpeed: 150,
    backspeed: 150,
    loop: true
})

// card corousel
$('.carousel .carousel-item').each(function () {
    var minPerSlide = 4;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i = 0; i < minPerSlide; i++) { next=next.next(); if (!next.length) { next=$(this).siblings(':first'); } next.children(':first-child').clone().appendTo($(this)); } });