$( document ).ready(function() {
  //make room for navbar
  $('body').offset({top:100, left: 0});

  $('html').click(function() {
    $('.dropdown-links').hide();
  });

  $('.my-nav').click(function(event){
    event.stopPropagation();
  });

  $('.hamburger').click(function(event){
    $('.dropdown-links').toggle();
  });

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

 //when you click 'view' on carousel, bring in case study
 $('.view-button').click(function(event){
   $('.swapper').addClass('case-study-visible');
   $('#about, #contact').toggle([400]);
 });
 //when you click the back arrow on case study, bring back carousel
 $('.back-chevron, .back').click(function(event){
   $('.swapper').removeClass('case-study-visible');
   $('#about, #contact').toggle([400]);
  });

});
