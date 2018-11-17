$(document).ready(function(){

  var array = document.getElementsByClassName('card');

  var card_description = document.getElementsByClassName('card-name');
  console.log(card_description);

  var firstSlide = 0;

  $('.cards').slick({
    dots: false,
    infinite:false,
    speed: 300,
    arrows:false,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide:firstSlide,
    customPaging : function(slider, i) {
      var thumb = $(slider.$slides[i]).data();
      console.log(thumb);
      return '<a>'+card_description[i].innerText+'</a>';
    },
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


  $('#test').click(function(){
    console.log("function is working");
  });

  var currentIndex = 0;

  var number = localStorage.getItem('slide');
  console.log(number);

  // $('.cards').slick('slickGoTo',currentIndex);

  $('.goTo').click(function(){
    currentIndex = $(this).data('distance');

    $('.cards').slick('slickGoTo',currentIndex);
    console.log($(this).data('distance'));
  });
});



$('#test').click(function(){
  console.log("function is working");
})


