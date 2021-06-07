(function ($) {
"use strict";

// pre-loader
$(window).load(function() {
	// $("#loading").delay(3000).fadeOut(500);
	$("#loading").fadeOut(500);
})

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "991"
});

// One Page Nav
var top_offset = $('.header-area').height() - 10;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});


$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 5) {
		$(".header-area").removeClass("sticky");
	} else {
		$(".header-area").addClass("sticky");
	}
});

// slick slider(testimonial)
$('.testi-wrapper').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.testi-img'
  });
  $('.testi-img').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	asNavFor: '.testi-wrapper',
	dots: false,
	centerMode: true,
	centerPadding: '0px',
	arrows: false,
	focusOnSelect: true,
	responsive: [
		{
		  breakpoint: 766,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: false
		  }
		},
	]
  });

// slick slider(clients)
$('.clients-active').slick({
	dots: false,
	infinite: true,
	arrows: false,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
	  {
		breakpoint: 1200,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  infinite: true,
		  dots: false
		}
	  },
	  {
		breakpoint: 991,
		settings: {
		  slidesToShow: 2,
		  slidesToScroll: 1
		}
	  },
	  {
		breakpoint: 767,
		settings: {
		  slidesToShow: 1,
		  slidesToScroll: 1
		}
	  }
	]
  });

// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fas fa-chevron-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// counter 
$('.counter').counterUp({
    delay: 10,
    time: 1000
});


})(jQuery);