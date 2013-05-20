<?php session_start(); ?>
<!DOCTYPE HTML>
<html lang="en">
	<head>
		<title>Sandy Pearlman &amp; Bones</title>

		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		
		<meta name="robots" content="index, follow">
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes, minimum-scale=1, maximum-scale=1.25">

		<meta name="description" content="The home of Toronto hiphop duo Sandy Pearlman &amp; Bones. A central hub for all content band related.">
		<meta name="keywords" content="Sandy Pearlman  Bones rap hiphop Toronto 2D stag out stagd the oath">
		<meta name="author" content="John Jacob Designs">

		<link rel="icon" type="image/png" href="img/favicon.png">
		<link href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="css/style.css">
		<!--[if lt IE 9]>
			<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
			<style>
				.harrybiotext, .jakebiotext{
					padding: 16px;
					margin: 0px;
				}
				.controls{
					display: none;
				}
				.icon{
					background: url(img/logoie.png);
				}
				.contactformwrapper{
					margin-top: 64px;
				}
			</style>
		<![endif]-->

	</head>
	<body>
		<nav class="nav navonpageload">
			<a href="/" class="logo">
				<div class="icon"></div>
			</a>
			<a href="#about" class="link inactive activepage" data-link="about">about</a>
			<a href="#events" class="link inactive" data-link="events">events</a>
			<a href="#gallery" class="link inactive" data-link="gallery">gallery</a>
			<a href="" class="link inactive" data-link="contact">contact</a>
			<a href="https://www.facebook.com/pearlsnbones/app_6452028673" class="externallink hidelinkonmobile" target="_blank">download</a>
			<div class="controls">
				<div class="player previous"></div>
				<div class="player play"></div>
				<div class="player next"></div>
				<div class="player list" id="list"></div>
				<div class="dropdown">
					<div class="nowplaying">
						<div class="albumart"></div>
						<h1>Name Here</h1>
						<h2>Pearls and Bones</h2>
					</div>
					<div class="tracklist">
						<p class="tracktext" data-url="stagdout" data-songname="Stag&apos;d Out" data-albumart="epcover">Stag&apos;d Out</p>
						<p class="tracktext" data-url="boneyard" data-songname="Boneyard" data-albumart="epcover">Boneyard</p>
						<p class="tracktext" data-url="citylife" data-songname="City Life" data-albumart="epcover">City Life</p>
						<p class="tracktext" data-url="gameofthrones" data-songname="Game of Thrones" data-albumart="epcover">Game of Thrones</p>
						<p class="tracktext" data-url="timtebow" data-songname="Tim Tebow" data-albumart="epcover">Tim Tebow</p>
					</div>
				</div>
			</div>
		</nav>

		<!-- main pages -->
			<section id="about" class="section">
				<div class="aboutlandingwrapper">
					<img src="img/wordmark.png" alt="Pearls and bones wordmark" class="wordmark openingtransitiontitle">
					<h3 class="lines openingtransitionsubtitle"><span>TORONTO HIP-HOP DUO</span></h3>
					<p class="openingtransitionparagraph">Producer <a>Sandy Pearlman</a> and Wordsmith <a>Bones</a> have been honing their sound since the group formed in 2012, and are set to demolish what you THINK you know about hip-hop with a major release due out this fall. By combining traditional elements of the genre with their love of indie, folk, and even screamo music they have created a distinct and eclectic catalogue of songs for your listening pleasure. The pair has piled their wide-ranging creative expertise into establishing their own style and brand, using hobbies like fine cuisine and graphic design to compliment their musical identity. From referencing bangers (not just the club kind) in their lyrics to laser cutting their own wooden pendants for merch, Sandy Pearlman and Bones have everything covered. The two are well-established in their community and have a reputation for exceptional beats, quick raps, and grimy house parties. Their first musical release was in the spring of 2012, which features 5 original tracks that you can <a href="https://www.facebook.com/pearlsnbones/app_6452028673" target="_blank">download</a>.</p>
					<img src="img/down.png" class="scrolldownbutton openingtransitionparagraph" alt="scroll down button">
				</div>

				<div class="harrybio" id="harry">
					<img src="img/harry.png" class="harryillustration" alt="Harry Warshaw Illustration">
					<div class="harrybiotext" id="harrymobile">
						<h1>Sandy Pearlman</h1>
						<h2>Harry Joseph Warshaw</h2>
						<p><span>Drawing inspiration from both music he grew up listening to and his ever-expanding contemporary music library, Sandy Pearlman focuses on tone and rhythm to create unique instrumentals that blend classical, modern, acoustic, and electronic styles for an entirely new sonic experience. He's been training to be a musician all his life, discovering a love for hip-hop when his mother brought home the "8 Mile" soundtrack. Since then, he's familiarized himself with everything from Beethoven to Notorious B.I.G., Charlie Parker to Kanye West, and Palestrina to Diplo. Sandy has put all of his knowledge and experience to work for the upcoming release of Sandy Pearlman &amp; Bones' first full length project, pushing his creativity beyond any of his previous works.</span></p>
					</div>
				</div>
				<div class="jakebio">
					<img src="img/jake.png" class="jakeillustration" alt="Jake Oliveira Illustration" id="jake">
					<div class="jakebiotext" id="jakemobile">
						<h1>Bones</h1>
						<h2>Jake Oliveira</h2>
						<p><span>An upbringing in a heavily music oriented household has helped rapper, multi-instrumentalist, and designer Bones to find his footing in the ever changing eco-system that is the music industry. As a fan of genres such as post-hardcore, folk, indie, EDM, and punk, his eclectic music taste provides the foundation for a special brand of intricate and original wordplay. Lyrically Bones focuses on crafting thought provoking verses that provide substance through metaphors, and double entendres whilst exposing a sincere and unique personality. He has spent the past year writing lyrics and creating custom designed material ranging from album artwork, to merch, to posters, and everything in between in preparation for the duo’s full length album drop.</span></p>
					</div>
				</div>
				
				<!--email submission form-->
				<div class="contactformwrapper">
				<div id="contact-form">
					<h1>Contact Us</h1>
					<?php
					//init variables
					$cf = array();
					$sr = false;
					
					if(isset($_SESSION['cf_returndata'])){
						$cf = $_SESSION['cf_returndata'];
					 	$sr = true;
					}
		            ?>
		            <ul id="errors" class="<?php echo ($sr && !$cf['form_ok']) ? 'visible' : ''; ?>">
		                <li id="info">There were some problems with your form submission:</li>
		                <?php 
						if(isset($cf['errors']) && count($cf['errors']) > 0) :
							foreach($cf['errors'] as $error) :
						?>
		                <li><?php echo $error ?></li>
		                <?php
							endforeach;
						endif;
						?>
		            </ul>
		            <p id="success" class="<?php echo ($sr && $cf['form_ok']) ? 'visible' : ''; ?>">Thanks for your message! We will get back to you ASAP!</p>
		            <form method="post" action="process.php">
		                <label for="name">Name: <span class="required">*</span></label>
		                <input type="text" id="name" name="name" value="<?php echo ($sr && !$cf['form_ok']) ? $cf['posted_form_data']['name'] : '' ?>" placeholder="Jake Evelyn Oliveira" required/>
		                
		                <label for="email">Email: <span class="required">*</span></label>
		                <input type="email" id="email" name="email" value="<?php echo ($sr && !$cf['form_ok']) ? $cf['posted_form_data']['email'] : '' ?>" placeholder="Jakeevelynoliveira@stagdout.com" required />
		                
		                <label for="telephone">Phone: </label>
		                <input type="tel" id="telephone" name="telephone" value="<?php echo ($sr && !$cf['form_ok']) ? $cf['posted_form_data']['telephone'] : '' ?>" />
		                
		                <label for="enquiry">Subject: </label>
		                <select id="enquiry" name="enquiry">
		                    <option value="Tickets" <?php echo ($sr && !$cf['form_ok'] && $cf['posted_form_data']['enquiry'] == 'Tickets') ? "selected='selected'" : '' ?>>Tickets</option>
		                    <option value="Book" <?php echo ($sr && !$cf['form_ok'] && $cf['posted_form_data']['enquiry'] == 'Book Us') ? "selected='selected'" : '' ?>>Book Us</option>
		                    <option value="Message" <?php echo ($sr && !$cf['form_ok'] && $cf['posted_form_data']['enquiry'] == 'Message Us') ? "selected='selected'" : '' ?>>Message Us</option>
		                </select>
		                
		                <label for="message">Message: <span class="required">*</span></label>
		                <textarea id="message" name="message" placeholder="Leave us a message" required data-minlength="20"><?php echo ($sr && !$cf['form_ok']) ? $cf['posted_form_data']['message'] : '' ?></textarea>
		                
		                <input type="submit" value="Send" id="submit-button" />
		                <p id="req-field-desc"><span class="required">*</span>required fields</p>
		            </form>
		            <?php unset($_SESSION['cf_returndata']); ?>
		        </div>
		    	</div>


				<div class="socialmediawrapper">
					<div class="socialmedia">
						<a href="https://www.facebook.com/pearlsnbones" target="_blank">
							<img src="img/facebook.png" alt="Pearls and Bone's Facebook Page">
						</a>
						<a href="https://twitter.com/pearls_bones" target="_blank">
							<img src="img/twitter.png" alt="Pearls and Bone's Twitter">
						</a>
					</div>
				</div>
				<div class="aboutfooter">Designed by John Jacob Designs &mdash; <a href="http://johnjacob.ca/">Johnjacob.ca</a></div>
			</section>

			<section id="events" class="section">

				<h1 class="openingtransitiontitle">Upcoming Events</h1><br>
				<hr class="openingtransitionparagraph">
				<ul class="openingtransitionparagraph">
				<!--format: MM/DD TTpm &mdash; Venue-->
					<li>
						<p>
						<span class="leftcolumn">07/14 11PM &mdash;<a href="http://goo.gl/maps/J1OuO"  target="_blank"> Detour Bar, 193 Balwin St.</a></span>
						<span class="rightcolumn inactivelink">Buy Tickets</span>
						<br>
						</p>
					</li>
				</ul>
				<hr class="openingtransitionparagraph">

				<h1 class="openingtransitiontitle">Past Events</h1><br>
				<hr class="openingtransitionparagraph">
				<ul class="openingtransitionparagraph">
				<!--format: MM/DD/YYYY &mdash; Venue/name-->
					<li>
						<p>
						<span class="leftcolumn">12/15/2012 &mdash; Opening for Machine Gun Kelly in Hamilton</span>
						<br>
						</p>
					</li>
				</ul>
				<hr class="openingtransitionparagraph">
			</section>

			<section id="gallery" class="section">
				<ul class="columns">
					<li class="left openingtransitionparagraph">
						<div class="imagecontainer">
							<img src="img/harryjake.jpg" alt="So fierce">
							<p>So fierce</p>
						</div>
						<div class="imagecontainer">
							<img src="img/harrystudio.jpg" alt="Sandy in the studio">
							<p>Sandy in the studio</p>
						</div>
						<div class="imagecontainer">
							<img src="img/press.jpg" alt="Our Editorial Debut">
							<p>Our Editorial Debut</p>
						</div>

						<div class="imagecontainer">
							<img src="img/harrymgk.jpg" alt="Sandy opening for MGK">
							<p>Sandy opening for MGK</p>
						</div>
						<div class="imagecontainer">
							<img src="img/stagoutparty.jpg" alt="Stag'd Out paint party">
							<p>Stag'd Out paint party</p>
						</div>
					</li>

					<li class="center openingtransitionparagraph">
						<div class="imagecontainer">
							<img src="img/studio.jpg" alt="">
							<p>Studio session</p>
						</div>
						<div class="imagecontainer">
							<img src="img/jakeshoe.jpg" alt="Kicking ass and having class">
							<p>Kicking ass and having class</p>
						</div>
						<div class="imagecontainer">
							<img src="img/blowingherb.jpg" alt="Blowing the herb">
							<p>Blowing the herb</p>
						</div>
						<div class="imagecontainer">
							<img src="img/jakemgk2.jpg" alt="Bones opening for MGK">
							<p>Bones opening for MGK</p>
						</div>
						<div class="imagecontainer">
							<img src="img/swag.jpg" alt="Swagger">
							<p>Swagger</p>
						</div>
					</li>

					<li class="right openingtransitionparagraph">
						<div class="imagecontainer">
							<img src="img/jakestudio.jpg" alt="">
							<p>Stag in the headlights</p>
						</div>
						<div class="imagecontainer">
							<img src="img/harrymixing.jpg" alt="Sandy Pearlman mixing">
							<p>Sandy Pearlman mixing</p>
						</div>
						<div class="imagecontainer">
							<img src="img/harrysitting.jpg" alt="">
							<p>Sandy pressing play</p>
						</div>
						<div class="imagecontainer">
							<img src="img/stagoutjake.jpg" alt="">
							<p>Get your game face on</p>
						</div>
						<div class="imagecontainer">
							<img src="img/angrystag.jpg" alt="">
							<p>Our signature drink</p>
						</div>
					</li>
				</ul>	
			</section>


		<script src="http://code.jquery.com/jquery-latest.min.js"></script>
		<script type='text/javascript' src="js/plugins.js"></script>
		<script type='text/javascript' src="js/scripts.js"></script>
	</body>
</html>
