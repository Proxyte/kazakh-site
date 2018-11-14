$(document).ready(function(){

  var array = document.getElementsByClassName('card');
  $('.cards').slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows:false,
    slidesToShow: 1,
    initialSlide:2,
    centerMode: true,
    variableWidth: true,
    touchMove:false
  });

  $('.left').click(function(){
    $('.cards').slick('slickPrev');
  })

  $('.right').click(function(){
    $('.cards').slick('slickNext');
  });

  $('.slick-dots').appendTo(".line");
});
