$(document).ready(function(){
	$('#header-contacts__button').click(function(){
		$('.overlay').show();
	});

	$('#close').click(function(){
		$('.overlay').hide();
	});
});