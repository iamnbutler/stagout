//main functions
$(document).ready(function(){
	//On page load things
	$("nav").removeClass("navonpageload");
	$("#about").fadeIn(800, function(){
		setTimeout(function(){
			$("#about h3").removeClass("openingtransitionsubtitle");
			$("#about img").removeClass("openingtransitiontitle");
		}, 800);
		setTimeout(function(){
			$("#about p").removeClass("openingtransitionparagraph");
		}, 1600);
	});

	//nav links to change pages
	function changeSection(datalink) {
		$('.section').stop().fadeOut(400);
		$('#' + datalink).delay(300).fadeIn(800);
	}

	$('.nav .link').click(function(){
		if($(this).hasClass("activepage")){
		} else{
			var datalink = $(this).data('link');
			changeSection(datalink);
			//nav indicator for current page
			$(this).addClass('activepage');
			$('.link').not(this).removeClass('activepage');
			if (datalink == "events"){
				setTimeout(function(){
					$("#events h1").removeClass("openingtransitiontitle");
				}, 800);
				setTimeout(function(){
					$("#events hr").eq(0).removeClass("openingtransitionparagraph");
				}, 1200);
				setTimeout(function(){
					$("#events p").removeClass("openingtransitionparagraph");
				}, 1600);
				setTimeout(function(){
					$("#events hr").eq(1).removeClass("openingtransitionparagraph");
				}, 2000);
			} else if (datalink == "gallery"){
				setTimeout(function(){
					$("#gallery li").eq(0).removeClass("openingtransitionparagraph");
				}, 400);
				setTimeout(function(){
					$("#gallery li").eq(1).removeClass("openingtransitionparagraph");
				}, 800);
				setTimeout(function(){
					$("#gallery li").eq(2).removeClass("openingtransitionparagraph");
				}, 1200);
			}
		}
	});

	//scrolling on page to image for desktop and text for mobile
	$('.aboutlandingwrapper a').eq(0).click(function(){ 
		if (( $(window).width() > 500)){
			$('#about').scrollTo( '#harry', 800, {offset:-64} );
		} else{
			$('#about').scrollTo( '#harrymobile', 800, {offset:-64} );
		}
	});
	$('.aboutlandingwrapper a').eq(1).click(function(){ 
		if (( $(window).width() > 500)){
			$('#about').scrollTo( '#jake', 800, {offset:-64} );
		} else{
			$('#about').scrollTo( '#jakemobile', 800, {offset:-64} );
		}
	});

	//remove back/forward function for internal pages
	$('.nav .inactive').click(function(){
		return false;
	});
});

///////////////////////////
// audio player
///////////////////////////
$(document).ready(function(){
if($(".controls").is(':visible')){
	//play audio at start
	setTimeout(function(){
			if (navigator.userAgent.match(/iPad/i) === null) {//autoplay disabled on iOS, and is disabled in mobile already
			    music.play();
			}
	    	$(".play").addClass('playing');
	    	$(".tracklist p").eq(0).toggleClass('trackplaying');
	    	nowplaying();
    	}, 800);

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

//////////////////////
//play and pause song
//////////////////////
	function playandpause(){
		if (music.paused == true) {
	    	music.play();
	    	$(".play").addClass('playing');
	    	nowplaying();
		} else {
	    	music.pause();
	    	$(".play").removeClass('playing');
	    	nowplaying();
		}
	}

	//play and pause button
	$(".play").click(function(){
		playandpause();
	});

	//play and pause with spacebar
	$(document).keydown(function(e){
	    if (e.keyCode == 32) { 
	    	playandpause();
	    }
	});

//////////////////////
// next song
//////////////////////
	function playnextsong() {
		if($('.trackplaying').is(":last-child")){
			var nextsong = $(".tracklist p").eq(0);
		} else {
			var nextsong = $(".trackplaying").next();
		}
    	var filepath = nextsong.data('url');
    	$('.tracklist p').not(nextsong).removeClass('trackplaying');
		$(nextsong).addClass('trackplaying');
		$(".play").addClass('playing');
		grabsong(filepath);
    	music.play();
    	nowplaying();
	}

	//next button
	$(".next").click(function(){
		playnextsong();
	});

	//next song with right arrow key
	$(document).keydown(function(e){
	    if (e.keyCode == 39) { 
	    	playnextsong();
	    }
	});

	//play next song when first is complete
	music.addEventListener('ended', function() {
	    this.currentTime = 0;
	    playnextsong();  
	}, false);

//////////////////////
// previous song
//////////////////////
	function playprevioussong() {
		if($('.trackplaying').is(":first-child")){
			var nextsong = $(".tracklist p").last();
		} else {
			var nextsong = $(".trackplaying").prev();
		}
    	var filepath = nextsong.data('url');
    	$('.tracklist p').not(nextsong).removeClass('trackplaying');
		$(nextsong).addClass('trackplaying');
		$(".play").addClass('playing');
		grabsong(filepath);
    	music.play();
    	nowplaying();
	}

	//previous button
	$(".previous").click(function(){
		playprevioussong();
	});

	//previous song with left arrow key
	$(document).keydown(function(e){
	    if (e.keyCode == 37) { 
	    	playnextsong();
	    }
	});
}

	//pause music at mobile breakpoint since controls are hidden
	$(window).resize(function() {
		if($(".controls").is(':hidden')){
		    music.pause();
		    $(".play").removeClass('playing');
		}
	});
});











