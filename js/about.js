$(document).ready(function()
{
	
	
	$("#ispis table tbody tr").each(function(i)
	{
		if((i%2)!=0)
		{
			$(this).css({'backgroundColor':'lightgray'});
		}
		else
		{
			$(this).css({'backgroundColor':'white'});
		}
	});
});
	