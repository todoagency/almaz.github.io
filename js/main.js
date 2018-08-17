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
    
    /*Initialize WOW Script*/
    
    new WOW().init();
    
    /*Catalog Shop*/
    
    $('#go-to-catalog').on( "click", function() {
        $('.page-header-catalog-sub').addClass('showm');
        var cl = $('.page-header-catalog-sub').attr("style");
        console.log(cl);
        if (cl == 'visibility: hidden; opacity: 0; height: 0px;' ) {
        $('.page-header-catalog-sub').css('visibility', 'visible').css('opacity', '1').css('height', 'auto');
        } else if (cl == 'visibility: visible; opacity: 1; height: auto;' ) {
        $('.page-header-catalog-sub').css('visibility', 'hidden').css('opacity', '0').css('height', '0');    
        }
        return false;
    });
    
    $(document).mouseup(function (e){ 
        setTimeout(function() { 
		var div = $(".page-header-catalog-sub"); 
        var div2 = $("#go-to-catalog");
		if (!div.is(e.target) 
		    && div.has(e.target).length === 0 && !div2.is(e.target)) { 
			div.css('visibility', 'hidden').css('opacity', '0').css('height', '0'); 
		}
        }, 200);            
	});
    
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