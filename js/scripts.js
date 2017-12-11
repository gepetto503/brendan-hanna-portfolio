$( document ).ready(function() {

  //make room for navbar
  $('body').offset({top:100, left: 0});
  //make dropdown open and close when hamburger
  $('.hamburger').click(function(event){
    $('.dropdown-links').toggle();
  });
  //make dropdown close when you click off it
  $('html').click(function() {
    $('.dropdown-links').hide();
  });
  $('.my-nav').click(function(event){
    event.stopPropagation();
  });


  //make page scroll to section when you click nav link
  $('.my-nav a, #nav-logo').click(function(event) {
    var id = $(this).attr("href");
    var offset = 60;
    var target = $(id).offset().top - 60;
    $('html, body').animate({
      scrollTop: target
    });
    $('.dropdown-links').hide();
  });

  //initialize materialize carousel
 $('.carousel.carousel-slider').carousel({fullWidth: true});
 //make my previous and next arrows on carousel Work
 $('.carousel-prev').click(function(event){
   $('.carousel').carousel('prev');
 });
 $('.carousel-next').click(function(event){
   $('.carousel').carousel('next');
 });

});
