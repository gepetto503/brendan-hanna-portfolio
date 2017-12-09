$( document ).ready(function() {
  //make room for navbar
  $('body').offset({top:100, left: 0});

  //make dropdown close when you click off it
  $('html').click(function() {
    $('.dropdown-links').hide();
  });
  $('.my-nav').click(function(event){
    event.stopPropagation();
  });

  //make dropdown close when you click hamburger
  $('.hamburger').click(function(event){
    $('.dropdown-links').toggle();
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

 //when you click a button on carousel, bring in case study
 $('.view-proj-btn').click(function(event){
   //slide in case studies div from the right
   $('.swapper').addClass('case-studies-visible');
   //dissappear about and contact sections
   $('#about, #contact').toggle([400]);
 });

 //making button show corresponding case study
  $('#button-1').click(function(event){
    $('.case-study').hide();
    $('#case-study-1').show();
  });
   $('#button-2').click(function(event){
     $('.case-study').hide();
     $('#case-study-2').show();
   });
   $('#button-3').click(function(event){
     $('.case-study').hide();
     $('#case-study-3').show();
   });
   $('#button-4').click(function(event){
     $('.case-study').hide();
     $('#case-study-4').show();
   });

 //when you click the back arrow on case study, bring back carousel
 $('.back-chevron, .back').click(function(event){
   $('.swapper').removeClass('case-studies-visible');
   $('#about, #contact').toggle([400]);
  });

});
