$(document).ready(function(){

    $(".nav-bar").click(function(){
        $(".mobile-menu").addClass("mobile-menu_active");
    });
    $(".nav-bar__clouse").click(function(){
        $(".mobile-menu").removeClass("mobile-menu_active");
        
    });

    $(".questions__item ").click(function() {
        $(this).toggleClass("questions__item_open");
        $(this).children(".p").toggleClass("questions__item-p_open");
    });

    resultSliderRollWidth = $(".results-slider__roll").width();
    alert(resultSliderRollWidth);
    resultInnerWidth = $(".results-inner").width();
    alert(resultInnerWidth);




    $(window).scroll(function(){
        let to_top = $(window).scrollTop();
    if (to_top > 500) {
        $(".navigation").addClass("fixed-bg");
    } else {
        $(".navigation").removeClass("fixed-bg");
    }

    s_top = $("body").scrollTop();
    yes = $(".results-inner").offset().top;
    if(s_top > yes){
        console.log("Yes");
    }

    });

 
    function scrollTo(element) {
        window.scroll({
          left: 0, 
          top: element.offsetTop, 
          behavior: 'smooth'
        })
      }
      
      var button = document.querySelector('.button');
      var footer = document.querySelector('#footer');
      
      button.addEventListener('click', () => {
        scrollTo(footer);
      })
    
  });