// Load scripts after page loads
$(document).ready(function(){

	function changeSection(dataLink) {
		$('.section').stop().fadeOut(400);
		$('#' + dataLink).delay(300).fadeIn(800);
	}

	$('.nav .link').click(function(){
		var dataLink = $(this).data('link');
		changeSection(dataLink);
		return false;
	});

	//list toggle
	$('.list').click(function(){
		$(this).toggleClass('listselect');
		$('.tracklist').toggle(400);
	});

	//track indicator
	// try to use addclass here
	$('.tracklist p').click(function(){
		$('.tracklist p').not(this).css("border-left", "none");
		$(this).css("border-left", "#d06200 solid 8px");
	});

});