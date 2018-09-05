$( document ).ready(function() {

  //animation stuff

  //for fade-in/out of page... removes the opacity: 0 class when pages loaded
  $('body').removeClass('fade-out');
  // initialize fade on scroll library
  AOS.init({
    duration: 1000,
  });

  //navbar stuff

  //make room for navbar at top
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

 //case study stuff

 //'top' arrow at bottom of case studies on desktop
  $('.to-top-desktop').click(function(event){
   $('.case-study-scrolling-screenshots').animate({
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

  //mouse scroll icon fade-out when scrolled
  $('.case-study-scrolling-screenshots').scroll(function() {
    if ($('.case-study-scrolling-screenshots').scrollTop() >= 100) {
      $('.scroll-downs').animate({opacity: 0});
    }
  });

  $(window).scroll(function() {
    if ($(window).scrollTop() >= 1) {
      $('.scroll-downs').hide();
    }
  });

});
