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

	//audio player
	///////////////////////////
	var music = new Audio('music/stagdout.mp3');

	var filepath = $(".tracklist p").eq(0).data('url');
    if (music.canPlayType('audio/mpeg;')) {
	    music.type= 'audio/mpeg';
	    music.src= 'music/' + filepath + '.mp3';
	} else {
	    music.type= 'audio/ogg';
	    music.src= 'music/' + filepath + '.ogg';
	}

    //auto play
    $(document).ready(function(){
    	music.play();
    	$(".play").toggleClass('playing');
    })

    //load songs from list
    $(".tracklist p").click(function(){
    	var filepath = $(this).data('url');
    	$('.tracklist p').not(this).css("border-left", "none");
		$(this).css("border-left", "#d06200 solid 8px");
		$(".play").addClass('playing');
    	if (music.canPlayType('audio/mpeg;')) {
		    music.type= 'audio/mpeg';
		    music.src= 'music/' + filepath + '.mp3';
	    } else {
		    music.type= 'audio/ogg';
		    music.src= 'music/' + filepath + '.ogg';
	    }
    	music.play();
    });

    //play and pause button
	$(".play").click(function(){
	  if (music.paused == true) {
	      music.play();
	      $(".play").addClass('playing');
	  } else {
	      music.pause();
	      $(".play").removeClass('playing');
	  }
	});

	//next button
	$(".next").click(function(){
		//$(".tracklist p").find("[data-url='" + filepath + "']");
    	//var filepath = $(this).data('url');
    	if (music.canPlayType('audio/mpeg;')) {
		    music.type= 'audio/mpeg';
		    music.src= 'music/' + filepath + '.mp3';
	    } else {
		    music.type= 'audio/ogg';
		    music.src= 'music/' + filepath + '.ogg';
	    }
    	music.play();
	});

	//previous button
	$(".previous").click(function(){
		//var filepath = $(this).data('url');
    	if (music.canPlayType('audio/mpeg;')) {
		    music.type= 'audio/mpeg';
		    music.src= 'music/' + filepath + '.mp3';
	    } else {
		    music.type= 'audio/ogg';
		    music.src= 'music/' + filepath + '.ogg';
	    }
    	music.play();
	});

	//list toggle
	$('.list').click(function(){
		$(this).toggleClass('listselect');
		$('.tracklist').toggle(400);
	});




});