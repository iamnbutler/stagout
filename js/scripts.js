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
		setTimeout(function(){
			$(".scrolldownbutton").removeClass("openingtransitionparagraph");
		}, 2000);
	});

	//nav links to change pages
	function changeSection(datalink) {
		$('.section').stop().fadeOut(400);
		$('#' + datalink).delay(200).fadeIn(800);
	}

	$('.nav .link').click(function(){
		var datalink = $(this).data('link');
		if($('#' + datalink).is(':visible')){
			$(this).addClass('activepage');
			$('.link').not(this).removeClass('activepage');
			$('#' + datalink).animate({ scrollTop: 0 }, 800);
		} else{
			if (datalink == "events"){
				$(this).addClass('activepage');
				$('.link').not(this).removeClass('activepage');
				changeSection(datalink);
				setTimeout(function(){
					$("#events h1").eq(0).removeClass("openingtransitiontitle");
				}, 800);
				setTimeout(function(){
					$("#events hr").eq(0).removeClass("openingtransitionparagraph");
				}, 1000);
				setTimeout(function(){
					$("#events ul").eq(0).removeClass("openingtransitionparagraph");
				}, 1200);
				setTimeout(function(){
					$("#events hr").eq(1).removeClass("openingtransitionparagraph");
				}, 1400);
				setTimeout(function(){
					$("#events h1").eq(1).removeClass("openingtransitiontitle");
				}, 1600);
				setTimeout(function(){
					$("#events hr").eq(2).removeClass("openingtransitionparagraph");
				}, 1800);
				setTimeout(function(){
					$("#events ul").eq(1).removeClass("openingtransitionparagraph");
				}, 2000);
				setTimeout(function(){
					$("#events hr").eq(3).removeClass("openingtransitionparagraph");
				}, 2200);
			} else if (datalink == "gallery"){
				$(this).addClass('activepage');
				$('.link').not(this).removeClass('activepage');
				changeSection(datalink);
				setTimeout(function(){
					$("#gallery li").eq(0).removeClass("openingtransitionparagraph");
				}, 400);
				setTimeout(function(){
					$("#gallery li").eq(1).removeClass("openingtransitionparagraph");
				}, 800);
				setTimeout(function(){
					$("#gallery li").eq(2).removeClass("openingtransitionparagraph");
				}, 1200);
			} else if (datalink == "about"){
				$(this).addClass('activepage');
				$('.link').not(this).removeClass('activepage');
				changeSection(datalink);
				setTimeout(function(){
					$('#' + datalink).animate({ scrollTop: 0 }, 600);
				}, 200);
			} else if ((datalink == "contact") && ($('#about').is(':visible'))){
				$("nav a:eq(4)").addClass('activepage');
				$('.link').not(this).removeClass('activepage');
				$('#about').scrollTo('#contact-form', 800, {offset:-128, easing:'easeOutBack'} );
			} else if (datalink == "contact"){
				changeSection("about");
				$("nav a:eq(4)").addClass('activepage');
				$('.link').not(this).removeClass('activepage');
				setTimeout(function(){
					$('#about').scrollTo('#contact-form', 800, {offset:-128, easing:'easeOutBack'} );
				}, 200);
			}
		}
	});

	//internal page scrolling on click of the link to image for desktop and text for mobile
	$('.aboutlandingwrapper a:eq(0), .scrolldownbutton').click(function(){ 
		if (( $(window).width() > 500)){
			$('#about').scrollTo( '#harry', 800, {offset:-64, easing:'easeOutBack'} );
		} else{
			$('#about').scrollTo( '#harrymobile', 800, {offset:-64, easing:'easeOutBack'} );
		}
	});
	$('.aboutlandingwrapper a').eq(1).click(function(){ 
		if (( $(window).width() > 500)){
			$('#about').scrollTo( '#jake', 800, {offset:-64, easing:'easeOutBack'} );
		} else{
			$('#about').scrollTo( '#jakemobile', 800, {offset:-64, easing:'easeOutBack'} );
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

	//space bar = play/pause
	window.onkeydown=function(evt) {
	    if (evt.target.tagName.toLowerCase() !== 'input' &&
	        evt.target.tagName.toLowerCase() !== 'textarea' && evt.which == 32) {
	        playandpause();
	    	evt.preventDefault();
	    };
	};

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

///////////////////////////
// Email functions
///////////////////////////
$(function(){

	//set global variables and cache DOM elements for reuse later
	var form = $('#contact-form').find('form'),
		formElements = form.find('input[type!="submit"],textarea'),
		formSubmitButton = form.find('[type="submit"]'),
		errorNotice = $('#errors'),
		successNotice = $('#success'),
		loading = $('#loading'),
		errorMessages = {
			required: ' is a required field',
			email: 'You have not entered a valid email address for the field: ',
			minlength: ' must be greater than '
		}
	
	//feature detection + polyfills
	formElements.each(function(){

		//if HTML5 input placeholder attribute is not supported
		if(!Modernizr.input.placeholder){
			var placeholderText = this.getAttribute('placeholder');
			if(placeholderText){
				$(this)
					.addClass('placeholder-text')
					.val(placeholderText)
					.bind('focus',function(){
						if(this.value == placeholderText){
							$(this)
								.val('')
								.removeClass('placeholder-text');
						}
					})
					.bind('blur',function(){
						if(this.value == ''){
							$(this)
								.val(placeholderText)
								.addClass('placeholder-text');
						}
					});
			}
		}
		
	});
	
	//to ensure compatibility with HTML5 forms, we have to validate the form on submit button click event rather than form submit event. 
	//An invalid html5 form element will not trigger a form submit.
	formSubmitButton.bind('click',function(){
		var formok = true,
			errors = [];
			
		formElements.each(function(){
			var name = this.name,
				nameUC = name.ucfirst(),
				value = this.value,
				placeholderText = this.getAttribute('placeholder'),
				type = this.getAttribute('type'), //get type old school way
				isRequired = this.getAttribute('required'),
				minLength = this.getAttribute('data-minlength');
			
			//if HTML5 formfields are supported			
			if( (this.validity) && !this.validity.valid ){
				formok = false;
				
				console.log(this.validity);
				
				//if there is a value missing
				if(this.validity.valueMissing){
					errors.push(nameUC + errorMessages.required);	
				}
				//if this is an email input and it is not valid
				else if(this.validity.typeMismatch && type == 'email'){
					errors.push(errorMessages.email + nameUC);
				}
				
				this.focus(); //safari does not focus element an invalid element
				return false;
			}
			
			//if this is a required element
			if(isRequired){	
				//if HTML5 input required attribute is not supported
				if(!Modernizr.input.required){
					if(value == placeholderText){
						this.focus();
						formok = false;
						errors.push(nameUC + errorMessages.required);
						return false;
					}
				}
			}

			//if HTML5 input email input is not supported
			if(type == 'email'){ 	
				if(!Modernizr.inputtypes.email){ 
					var emailRegEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
				 	if( !emailRegEx.test(value) ){	
						this.focus();
						formok = false;
						errors.push(errorMessages.email + nameUC);
						return false;
					}
				}
			}
			
			//check minimum lengths
			if(minLength){
				if( value.length < parseInt(minLength) ){
					this.focus();
					formok = false;
					errors.push(nameUC + errorMessages.minlength + minLength + ' charcters');
					return false;
				}
			}
		});
		
		//if form is not valid
		if(!formok){
			
			//animate required field notice
			$('#req-field-desc')
				.stop()
				.animate({
					marginLeft: '+=' + 5
				},150,function(){
					$(this).animate({
						marginLeft: '-=' + 5
					},150);
				});
			
			//show error message 
			showNotice('error',errors);
			
		}
		//if form is valid
		else {
			loading.show();
			$.ajax({
				url: form.attr('action'),
				type: form.attr('method'),
				data: form.serialize(),
				success: function(){
					showNotice('success');
					form.get(0).reset();
					loading.hide();
				}
			});
		}
		
		return false; //this stops submission off the form and also stops browsers showing default error messages
		
	});

	//other misc functions
	function showNotice(type,data)
	{
		if(type == 'error'){
			successNotice.hide();
			errorNotice.find("li[id!='info']").remove();
			for(x in data){
				errorNotice.append('<li>'+data[x]+'</li>');	
			}
			errorNotice.show();
		}
		else {
			errorNotice.hide();
			successNotice.show();	
		}
	}
	
	String.prototype.ucfirst = function() {
		return this.charAt(0).toUpperCase() + this.slice(1);
	}
	
});










