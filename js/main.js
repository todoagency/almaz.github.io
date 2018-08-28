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
    
    $('#goto-tech-attr').click(function(){
        $('.attrib-page-mobile').fadeIn();
        $('body').css('overflow', 'hidden');
        return false;
    })
    
    $('#close-attr').click(function(){
        $('.attrib-page-mobile').fadeOut();
        $('body').css('overflow', 'auto');
        return false
    })
    
    /*Promo Item Hover*/
    
    $('.home-promo-service').on( "mouseenter", function() {
        console.log('dsd');
        $(this).children().children('.normal').css('opacity','0');
        $(this).children().children('.hover').css('opacity','1');
    })
    
    $('.home-promo-service').on( "mouseleave", function() {
        $(this).children().children('.normal').css('opacity','1');
        $(this).children().children('.hover').css('opacity','0');
    })
    
    /*Lightbox*/
    
    $('.popupbutton').fancybox({
        'padding': 0, 
        'overlayOpacity': 0.87,
        'overlayColor': '#fff',
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'inside',
        'centerOnScroll': true
    });
    
    $('.lightbox').fancybox({
        'padding': 0, 
        'overlayOpacity': 0.87,
        'overlayColor': '#fff',
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'inside',
        'centerOnScroll': true
    });
    
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
    
    /*Open / Close Filter*/
    
    $('#filter-page-sidebar-go').on( "click", function() {
        $('.filter-page-sidebar').fadeIn();
        $('body').css('overflow', 'hidden');
        return false;
    });
    
    $('#close-filter').on( "click", function() {
        $('.filter-page-sidebar').fadeOut();
        $('body').css('overflow', 'auto');
        return false;
    });
    
    /*Form Styler*/
    
    $('input, select').styler();
    
    /* Life Search */
    /*$('.search-highlight input').bind("change keyup input click", function() {
        if(this.value.length >= 3){            
            $.ajax({
                type: 'post',
                url: "search.php", //Path
                data: {'referal':this.value},
                response: 'text',
                success: function(data){
                    $(".search_result").html(data).fadeIn(); 
               }
             
           $(".search_result").fadeIn(); 
           if ($(window).width() <= '991'){
                $('.page-header__search-link').addClass('mob');
           }
           setTimeout(function(){ 
           classs = $('.page-header__search-link').attr('class');
           console.log(classs);
           if (classs == 'page-header__search-link mob') {
               $('.page-header__search-link mob').on( "click", function() {
                    $('.page-header__search-link.mob').removeClass('mob');
                    $(".search_result").fadeOut;
                    return false;
                });
           }
           }, 5010);
        }
    })*/
    
    /*Search*/

    $('.search-highlight > input').bind("change keyup input click", function() {
        $(this).addClass('click');
        $('.page-header__search-link').addClass('click');
        $(".search_result").fadeIn();  
    });
    
    $(".search_result").hover(function(){
        $("#search-highlight input").blur(); 
    })

    $(".search_result").on("click", "li", function(){
        s_user = $(this).text();
        $(".search_result").fadeOut();
    })
    
    $(document).mouseup(function (e) {
        var container = $(".search_result");
        if (container.has(e.target).length === 0){
            container.fadeOut();
        }
        $('.search-highlight > input').removeClass('click');
        $('.page-header__search-link').removeClass('click');
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
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
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
          slidesToScroll: 1,
          asNavFor: '.product-page-slider-nav'
    });
    $('.product-page-slider-nav').slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: '.product-page-slider'
    });
    $('.compare-options-table').slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1  
    });  
    
    /*Phone Mask*/
    $(".phone-field").mask("7(999) 999-9999");
});