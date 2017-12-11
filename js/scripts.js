$( document ).ready(function() {
  window.USER_IS_TOUCHING = null;

  //when user touches screen...
  window.addEventListener('touchstart', function onFirstTouch() {
    //if this var = true, different stuff will happen, becuase we will know the user is on mobile
    window.USER_IS_TOUCHING = true;
    alert('touch recognized');

    // we only need to know once that a human touched the screen, so we can stop listening now
    window.removeEventListener('touchstart', onFirstTouch, false);
  }, false);

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

 //make my previous and next chevrons on carousel Work
 $('.carousel-prev').click(function(event){
   $('.carousel').carousel('prev');
 });
 $('.carousel-next').click(function(event){
   $('.carousel').carousel('next');
 });

 // on page load, individual case studies are hidden until their corresponding view button is clicked
 $('.case-study').hide();

 //when you click a button on carousel, slide in case study
 $('.carousel-item').click(function(event){
   //slide in case studies div from the right
   $('.swapper').addClass('case-studies-visible');
   //dissappear about and contact sections
   $('header, #about, #contact').toggle([400]);
 });

 //making button show corresponding case study
  $('#button-1').click(function(event){
    $('.case-study').hide();
    $('.one').show();
  });
   $('#button-2').click(function(event){
     $('.case-study').hide();
     $('.two').show();
   });
   $('#button-3').click(function(event){
     $('.case-study').hide();
     $('.three').show();
   });
   $('#button-4').click(function(event){
     $('.case-study').hide();
     $('.four').show();
   });

 //when you click the back arrow on case study, bring back carousel
 $('.back-chevron, .back').click(function(event){
   $('.swapper').removeClass('case-studies-visible');
   $('header, #about, #contact').toggle();
  });

  console.log(window.USER_IS_TOUCHING);

});
