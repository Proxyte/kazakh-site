// setTimeout(()=>{
//   $(document).ready(function () {
//
//     var array = document.getElementsByClassName('card');
//
//     var arrayGoTo = document.getElementsByClassName('goTo');
//
//     var slide_localstorage = localStorage.getItem('slide');
//
//     var card_description = document.getElementsByClassName('card-name');
//
//     var firstSlide;
//
//     for (var i = 0; i < arrayGoTo.length; i++) {
//       var epoch_index = localStorage.getItem('index_epoch');
//       if (i == Number(epoch_index)) {
//         arrayGoTo[i].classList.add('orange-border-top');
//       }
//     }
//
//     $('.cards').slick({
//       dots: false,
//       infinite: false,
//       speed: 300,
//       arrows: false,
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       initialSlide: slide_localstorage,
//       centerMode: false,
//       variableWidth: true,
//       variableHeight: true,
//       touchMove: false,
//     });
//
//     var currentIndex = 0;
//
//     $('.goTo').click(function () {
//       currentIndex = $(this).data('distance');
//       localStorage.setItem('slide', String(currentIndex));
//       $('.cards').slick('slickGoTo', currentIndex);
//     });
//   });
// },0);
