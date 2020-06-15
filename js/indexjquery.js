$(document).ready(function()
{
	
		
	$(".telo_glavni img").hover(function(){

       $(this).animate({ width: '+=40px'}, 1000);

   }, function(){
       $(this).animate({ width: '-=40px'}, 1000);

   });	
   
		
});

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