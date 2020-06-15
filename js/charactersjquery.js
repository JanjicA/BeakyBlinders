$(window).scroll(function(){
   
		var skrolovano = $(this).scrollTop();

		if(skrolovano > 300){
			$('#scrollToTop').fadeIn();
		} else {
			$('#scrollToTop').fadeOut();
		}

	});
   $('#scrollToTop').click(function(){
         $('html').animate({
            scrollTop: 0
        }, 2000);
   });