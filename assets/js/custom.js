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


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})