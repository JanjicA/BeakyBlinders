$(document).ready(function()
{
	$('.dodatnitekst').hide();
	$('#show').on('click',function()
	{
		$('.dodatnitekst').slideToggle();
	});
})