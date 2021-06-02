$(document).ready(function(){
  $('.slider').slick({
  autoplay: true,
  adaptiveHeight: true,
  autoplaySpeed: 4000,
  dots: true,
  prevArrow: '<button class="slide-arrow prev-arrow"></button>',
  nextArrow: '<button class="slide-arrow next-arrow"></button>',
  dotsClass: 'slick-dots',
  });
});