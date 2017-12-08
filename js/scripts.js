$( document ).ready(function() {
    $(window).scroll(function(){
    	if($(window).scrollTop() >= 300) {
        $('.my-nav').show();
    		$('.my-nav').addClass('sticky');
    	} else {
        $('.my-nav').hide();
    		$('.my-nav').removeClass('sticky');
    	}

    });

    $('.hamburger').click(function(event){
      $('.dropdown-links').toggle();
    });

    $('.my-nav a').click(function(event) {
    	var id = $(this).attr("href");
    	// var offset = 300;
    	var target = $(id).offset().top - 50;
    	$('html, body').animate({
    		scrollTop: target
      });
      $('.dropdown-links').hide();
    });

});
