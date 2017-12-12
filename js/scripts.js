$( document ).ready(function() {
  window.USER_IS_TOUCHING = null;

  //when user touches screen...
  window.addEventListener('touchstart', function onFirstTouch() {
    // or set some global variable
    window.USER_IS_TOUCHING = true;
    console.log('first touch');

    // we only need to know once that a human touched the screen, so we can stop listening now
    window.removeEventListener('touchstart', onFirstTouch, false);
  }, false);

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

 //make my previous and next chevrons on carousel Work
 $('.carousel-prev').click(function(event){
   $('.carousel').carousel('prev');
 });
 $('.carousel-next').click(function(event){
   $('.carousel').carousel('next');
 });

 $('#nav-logo').on('touchstart', function () {
   console.log('you touched nav logo');
 });


  $('#foo').on('touchstart', function () {
    console.log('you touched foo');
  });
 //'top' arrow at bottom of case studies on desktop
  $('.to-top-desktop').click(function(event){
   $('.case-study-content').animate({
     scrollTop: 0
   }, 1000);
 });

 //'top' arrow at bottom of case studies on mobile/tablet
  $('.to-top-tablet-and-down').click(function(event){
    // alert('boo');
   $('html, body').animate({
     scrollTop: 0
   }, 1000);
 });

 $('.case-study-content').scroll(function() {
   if($('.case-study-content').scrollTop()>= 100){
     $('.scroll-downs').animate({opacity: 0});
   }
 });



});
