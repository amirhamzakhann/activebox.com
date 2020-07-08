$(function(){

    // Sticky header jquery code start here
    $(window).scroll(function(){
        let scrolling = $(this).scrollTop();
        if(scrolling > 100) {
            $('.header').addClass('header-bg');
        }else {
            $('.header').removeClass('header-bg');
        }
    });
    // Sticky header jquery code end here

    // Back to top button jquery code start here
    $('.btt').click(function(){
        $('html, body').animate({scrollTop: 0}, 2000);
    });
    // Back to top button jquery code end here


    // Typedjs Jquery Code Start Here
    $(".typed").typed({
		strings: ["Designers", "Developers"],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 40,
		// time before typing starts
		startDelay: 1300,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 500000,
		// show cursor
		showCursor: false,
		// character for cursor
		cursorChar: "|",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
    // Typedjs Jquery Code End Here

    // Veno Box Jquery Code Start Here
    $('.venobox').venobox(); 
	// Veno Box Jquery Code End Here
	
	// Preloader jquery Start Here
	$(window).on('load', function(){
		$('.preloader').delay(2500).fadeOut(500);
	});
	// Preloader jquery End Here
});