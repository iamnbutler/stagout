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
	var music = new Audio();
    if (music.canPlayType('audio/mpeg;')) {
	    music.type= 'audio/mpeg';
	    music.src= 'music/' + filepath + '.mp3';
	} else {
	    music.type= 'audio/ogg';
	    music.src= 'music/' + filepath + '.ogg';
	}

	//toggle now playing section
	var timer;
	function nowplaying() {
		var songname = $(".trackplaying").data('songname');
		var albumart = $(".trackplaying").data("albumart");
		$(".nowplaying h1").text(songname);
		$(".albumart").css('background-image', 'url(img/' + albumart + '.jpg)');
		if(music.paused == false && $(".list").hasClass("listselect")){//if playing and list open
			clearTimeout(timer);
			$(".nowplaying").stop().animate({height: "show"}, 400);
		} else if(music.paused == true && $(".list").hasClass("listselect")){//if paused and list open
			$(".nowplaying").stop().animate({height: "hide"}, 400);
		} else if(music.paused == true && !$(".list").hasClass("listselect")){//if paused and list closed
			$(".nowplaying").stop().animate({height: "hide"}, 400);
		} else {
			clearTimeout(timer);
			$(".nowplaying").stop().animate({height: "show"}, 400);
			timer = setTimeout(function() {
				$(".nowplaying").stop().animate({height: "hide"}, 400);
			}, 3000);
		}
	}

	//mp3 or ogg compatability
	function grabsong(filepath) {
		if (music.canPlayType('audio/mpeg;')) {
			music.type= 'audio/mpeg';
			music.src= 'music/' + filepath + '.mp3';
	    } else {
			music.type= 'audio/ogg';
			music.src= 'music/' + filepath + '.ogg';
	    }
	}

    //auto play
    $(document).ready(function(){
    	music.play();
    	$(".play").addClass('playing');
    	$(".tracklist p").eq(0).addClass('trackplaying');
    	nowplaying();
    })

    //load songs from list
    $(".tracklist p").click(function(){
    	var filepath = $(this).data('url');
    	$('.tracklist p').not(this).removeClass('trackplaying');
		$(this).addClass('trackplaying');
		$(".play").addClass('playing');
		grabsong(filepath);
    	music.play();
    	nowplaying()
    });

    //play and pause button
	$(".play").click(function(){
		if (music.paused == true) {
	    	music.play();
	    	$(".play").addClass('playing');
	    	nowplaying();
		} else {
	    	music.pause();
	    	$(".play").removeClass('playing');
	    	nowplaying();
		}
	});

	//next button
	$(".next").click(function(){
		if($('.trackplaying').is(":last-child")){
			var nextsong = $(".tracklist p").eq(0);
		} else {
			var nextsong = $(".trackplaying").next();
		}
    	var filepath = nextsong.data('url');
    	$('.tracklist p').not(nextsong).removeClass('trackplaying');
		$(nextsong).addClass('trackplaying');
		$(".play").addClass('playing');
		nowplaying();
		grabsong(filepath);
    	music.play();
	});

	//previous button
	$(".previous").click(function(){
		if($('.trackplaying').is(":first-child")){
			var nextsong = $(".tracklist p").last();
		} else {
			var nextsong = $(".trackplaying").prev();
		}
    	var filepath = nextsong.data('url');
    	$('.tracklist p').not(nextsong).removeClass('trackplaying');
		$(nextsong).addClass('trackplaying');
		$(".play").addClass('playing');
		nowplaying();
		grabsong(filepath);
    	music.play();
	});

	//list toggle
	$('.list').click(function(){
		$(this).toggleClass('listselect');
		if($('.tracklist').is(":visible")){
			$('.tracklist').animate({height: "hide"}, 400);
			$(".nowplaying").stop().animate({height: "hide"}, 400);
		} else {
			$('.tracklist').animate({height: "show"}, 400);
			nowplaying();
		}
	});
});











