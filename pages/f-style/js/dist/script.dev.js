"use strict";

$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 700,
    slidesToShow: 1,
    centerMode: true // variableWidth: true

  });
});