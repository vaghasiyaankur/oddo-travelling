// Hide navbar when scroll
$(document).ready(function () {
  $(document).scroll(function () {
      $('.navbar-collapse').collapse('hide');
  });
});

// hide navbar when click outside 
$(document).on('click', function () {
  $('.collapse').collapse('hide');
});





$('.product-main-image').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000,
  asNavFor: '.product-thumb-image'
});
$('.product-thumb-image').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.product-main-image',
  dots: false,
  centerMode: false,
  focusOnSelect: true
});