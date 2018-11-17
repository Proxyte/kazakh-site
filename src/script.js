$(document).ready(function(){

  var array = document.getElementsByClassName('card');

  var card_description = document.getElementsByClassName('card-name');
  console.log(card_description);

  var firstSlide = 0;

  $('.cards').slick({
    dots: true,
    infinite:false,
    speed: 300,
    arrows:false,
    slidesToShow: 1,
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

  var presentation = document.getElementsByClassName('slick-dots');
  for(var i =0;i<presentation[0].children.length;i++){
    presentation[0].children[i].classList.add('col-md-3');
    presentation[0].children[i].classList.add('div-dots')
  }
});

$('.slick-dots li').on('mouseover', function() {
  $(this).parents('.fade').slick('goTo', $(this).index());
});
