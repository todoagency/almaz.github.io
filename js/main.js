$(function(){  
    /*Open Menu*/
    
    $('#open-menu').click(function(){
        $('.header-mobile-menu').fadeIn();
        return false;
    })
    
    $('#open-menu').click(function(){
        $('.header-mobile-menu').fadeIn();
        $('body').css('overflow', 'hidden');
        return false;
    })
    
    $('#close-menu').click(function(){
        $('.header-mobile-menu').fadeOut();
        $('body').css('overflow', 'auto');
        return false;
    })
    
    /*Sliders*/
    $('.home-products-slider').slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 478,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            }
          ]  
    });
    $('.home-promo-services').slick ({
        responsive: [
        {
          breakpoint: 99999,
          settings: "unslick"
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }]
    });
    $('.article--list').slick ({
        responsive: [
        {
          breakpoint: 99999,
          settings: "unslick"
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }]
    });
    $('.article--other').slick ({
        responsive: [
        {
          breakpoint: 99999,
          settings: "unslick"
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        }]
    });
    $('.home-articles-items').slick ({
        responsive: [
        {
          breakpoint: 99999,
          settings: "unslick"
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            infinite: true,  
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            infinite: true,
          }
        }]
    });
    $('.home-services .row').slick ({
        responsive: [
        {
          breakpoint: 99999,
          settings: "unslick"
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            infinite: true,  
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            infinite: true,
          }
        }]
    });
    $('.product-page-slider').slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1   
    });
    $('.product-page-slider-nav').slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1  
    });
    $('.compare-options-table').slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1  
    });  
    
    /*Phone Mask*/
    $(".phone-field").mask("7(999) 999-9999");
});