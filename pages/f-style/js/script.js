$(window).on('load', function() {
    
    $(".trigger").click(function(){
        numIndex = $(this).index();
        $(".display-active").removeClass("display-active");
        $("#special-items > .multiply-items:eq(" + numIndex + ")").addClass("display-active");
        $(".trigger").removeClass("active");
        $(".trigger:eq(" + numIndex + ")").addClass("active");
    });
    
    $(".hot-items-trigger").click(function(){
        numIndex = $(this).index();
        $(".hot-items-conteiner__view").removeClass("hot-items-conteiner__view");
        $(".hot-items-conteiner:eq(" + numIndex + ")").addClass("hot-items-conteiner__view");
        $(".hot-items-trigger").removeClass("active");
        $(".hot-items-trigger:eq(" + numIndex + ")").addClass("active");
    });

    $('#card__min').click(function() {
      $('.card-window').toggleClass('card-window__active');
    })

    $('.card-window-close').click(function() {
      $('.card-window').removeClass('card-window__active');
    })
    
    
    
    $('.slider').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 700,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: false
      });

      $('.inner-multiply-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
	    {
	      breakpoint: 1600,
	      settings: {
	        slidesToShow: 2,
            slidesToScroll: 2,
	      }
	    },
	    {
	      breakpoint: 720,
	      settings: {
	        slidesToShow: 1,
            slidesToScroll: 1,
	      }
	    }
        ]
      });
    $('.assemblage-slick').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 700,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: false
      });


      $('.toggle-bar').click(function(){
        $('.responsible-nav').toggleClass('responsible-nav__active')
      });
    
    
});