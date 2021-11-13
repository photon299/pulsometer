$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,  
        prevArrow:'<button type="button" class="slick-prev"><img src="icons/slider_arrows/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/slider_arrows/arrow_right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows: false
                }
            }   
        ]
      });
  });