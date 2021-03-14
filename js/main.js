$(document).ready(function(){
    //owl-carousel for events
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,

        responsiveClass:true,
        responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        }
    }
    });

    $(".btn").click(function() {
        $('html, body').animate({
            scrollTop: $("#explore").offset().top
        }, 2000);
    });
    
});

