$(document).ready(function(){
    $('.owl-one').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    })
})
setInterval(function() {
    $('.owl-next').click();
    }, 200000);