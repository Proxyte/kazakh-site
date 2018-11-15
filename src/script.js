$(document).ready(function(){

  var array = document.getElementsByClassName('card');
  $('.cards').slick({
    dots: true,
    infinite:false,
    speed: 300,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide:0,
    centerMode: false,
    variableWidth: true,
    variableHeight: true,
    touchMove:false,
  });

  $('.left').click(function(){
    $('.cards').slick('slickPrev');
  })

  $('.right').click(function(){
    $('.cards').slick('slickNext');
  });

  $('.slick-dots').appendTo(".line");
});
