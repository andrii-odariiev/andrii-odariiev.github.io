$(document).ready(function(){

    StartIndex = 1;
    $(".parallax-mirror").addClass("parallax_none");
    $(".parallax-mirror:eq(" + StartIndex + ")").addClass("parallax_active");
    $(".parallax-mirror:eq(" + 0 + ")").addClass("parallax_active");
    

    setInterval(function() {

        
        
        $(".parallax-mirror:eq(" + 1 + ")").removeClass("parallax_active");
        $(".parallax-mirror:eq(" + 2 + ")").removeClass("parallax_active");
        $(".parallax-mirror:eq(" + 3 + ")").removeClass("parallax_active");
        $(".parallax-mirror:eq(" + StartIndex + ")").addClass("parallax_active");
        StartIndex++;

        if(StartIndex == 4) {
            StartIndex = 1;
        }

    }, 5000);

});