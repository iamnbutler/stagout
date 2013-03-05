// Load scripts after page loads
$(document).ready(function(){

	function changeSection(dataLink) {
		$('.section').stop().fadeOut(400);
		$('#' + dataLink).delay(300).fadeIn(800);
	}

	$('.nav .link').click(function(){
		var dataLink = $(this).data('link');
		changeSection(dataLink);
	});

	$('.nav .inactive').click(function(){
		return false;
	});

	//audio player
	///////////////////////////
	var filepath = $(".tracklist p").eq(0).data('url');
	var music = new Audio(filepath);
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
    	$(".play").addClass('playing');
    	$(".tracklist p").eq(0).addClass('trackselected');
    })

    //load songs from list
    $(".tracklist p").click(function(){
    	var filepath = $(this).data('url');
    	$('.tracklist p').not(this).removeClass('trackselected');
		$(this).addClass('trackselected');
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
		if($('.trackselected').is(":last-child")){
			var nextsong = $(".tracklist p").eq(0);
		} else {
			var nextsong = $(".trackselected").next();
		}
    	var filepath = nextsong.data('url');
    	console.log(filepath);
    	//$('.tracklist p').not(nextsong).removeClass('trackselected');
		//$(nextsong).addClass('trackselected');
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

	//previous button
	$(".previous").click(function(){
		if($('.trackselected').is(":first-child")){
			var nextsong = $(".tracklist p").last();
		} else {
			var nextsong = $(".trackselected").prev();
		}
    	var filepath = nextsong.data('url');
    	$('.tracklist p').not(nextsong).removeClass('trackselected');
		$(nextsong).addClass('trackselected');
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

	//list toggle
	$('.list').click(function(){
		$(this).toggleClass('listselect');
		$('.tracklist').show();
	});


	/* ============================================
	   Gallery Scripts
	   ============================================ */



});