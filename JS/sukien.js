
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
                items:5
            }
        }
    })
})

$(document).ready(function() {
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $('.backtop').fadeIn();
        }else{
            $('.backtop').fadeOut();
        }
    });
    $('.backtop').click(function(){
        $('html,body').animate({
            scrollTop: 0 }, 1000);
    })
})

