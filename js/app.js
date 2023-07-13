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

    // back to top 
    let calcScrollValue = () =>{
        let scrollProgress = document.getElementById
        ("progress");
        let progressValue = document.getElementById
        ("progress-value");
        let pos = document.documentElement.scrollTop;
        let calcHeight = document.documentElement.clientHeight - document.documentElement.clientHeight;
        let scrollValue = Math.round((pos * 100) / calcHeight);
        if (pos > 100) {
            scrollProgress.style.display = "grid";
        }else {
            scrollProgress.style.display = "none";
        }
        scrollProgress.addEventListener("click", () =>{
            document.documentElement.scrollTop = 0;
        }); 
        scrollProgress.style.background = `conic-gradient (#3139a8 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    };
    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;