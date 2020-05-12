$(document).ready(function() {
    // Header Scroll
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $('#header').addClass('fixed');
        } else {
            $('#header').removeClass('fixed');
        }
    });

    // Fancybox
    $('.work-box').fancybox();

    // Flexslider
    $('.flexslider').flexslider({
        animation: "fade",
        directionNav: false,
    });

    // Page Scroll
    var sections = $('section')
    nav = $('nav[role="navigation"]');

    $(window).on('scroll', function() {
        var cur_pos = $(this).scrollTop();
        sections.each(function() {
            var top = $(this).offset().top - 76
            bottom = top + $(this).outerHeight();
            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });
    nav.find('a').on('click', function() {
        var $el = $(this)
        id = $el.attr('href');
        $('html, body').animate({
            scrollTop: $(id).offset().top - 75
        }, 500);
        return false;
    });

    // Mobile Navigation
    $('.nav-toggle').on('click', function() {
        $(this).toggleClass('close-nav');
        nav.toggleClass('open');
        return false;
    });
    nav.find('a').on('click', function() {
        $('.nav-toggle').toggleClass('close-nav');
        nav.toggleClass('open');
    });
    // RTl support

    $('.direction-jss').on('click', function() {

        if (!$("#toggle").hasClass("direction")) {
            $(".navigation").css("float", "left");
            $(".logo").css("float", "right");
            $(".nav-toggle").css("left", "5%");

            $(".image-container").css("right", "0px");
            $(".content").css("float", "left");
            $(".content").removeClass("col-sm-offset-6");



            $(".direction-js_vid").html(`
			<div class='row '>
			<div class='col-md-6 '>
					<div class='embed-responsive embed-responsive-16by9 '>
						<iframe class='embed-responsive-item ' src='https://player.vimeo.com/video/146742515?badge=0 ' allowfullscreen=' '></iframe>
					</div>
				</div>
			<div id='content24 ' data-section='content-24 ' class='data-section '>
				<div class='col-md-6 direction toggle'>
					<h3 class='eidtContent '>Content Video</h3>
					<p class='eidtContent '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
						specimen book.</p>
					<p class='editContent '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
					<p class='editContent '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
				</div>
				
			</div>
		</div>
			`);

            $("footer").html(`
			<div class='footer   id='footer '>
			<div class='container '>
			<div class='row  direction''>
				
				<div class='col-lg-3 col-sm-2 col-xs-3 '>
					<h3> Contact </h3>
					<ul>
						<li><a class='email' href='#'> example@example.com </a></li>
						<br/>
						<li>
							<p> - Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522 (257) 563-7401 </p>
						</li>
						<li>
							<p>- Celeste Slater 606-3727 Ullamcorper. Street Roseville NH 11523 (786) 713-8616</p>
						</li>
					</ul>
				</div>
				<div class='col-lg-3 col-sm-2 col-xs-3 '>
					<ul>
						<li>
							<h5> <a href='#content-3-10' style='margin-top: 5em '> ABOUT</a>
								<h5>
						</li>
						<li>
							<h5><a href='#gallery'> GALLERY </a>
								<h5>
						</li>
						<li>
							<h5><a href='#banner'> THE HOUSE </a>
								<h5>
						</li>
						<li>
	
						</li>
					</ul>
				</div>
				<div class='col-lg-6 col-md-6 col-sm-6 col-xs-6 '>
					<h4> STARTUP</h4>
				</div>
				
	
				<!--/.row-->
			</div>
			<!--/.container-->
		</div>
		<!--/.footer-->
	
		<div class='footer-bottom direction'>
			<div class='container '>
				<p class='copyright '> Copyright © Footer 2020. All right reserved. </p>
	
			</div>
		</div>
		<!--/.footer-bottom-->
		</div>
	
			`);


        } else {
            $(".navigation").css("float", "right");
            $(".logo").css("float", "left");
            $(".nav-toggle").css("left", "");


            $(".image-container").css("right", "");
            $(".content").css("float", "right");
            $(".content").addClass("col-sm-offset-6");

            $(".direction-js_vid").html(`
			<div class='row '>
			
			<div id='content24 ' data-section='content-24 ' class='data-section '>
				<div class='col-md-6 toggle '>
					<h3 class='eidtContent '>Content Video</h3>
					<p class='eidtContent '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
						specimen book.</p>
					<p class='editContent '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
					<p class='editContent '>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
				</div>
				
			</div>
			<div class='col-md-6 '>
					<div class='embed-responsive embed-responsive-16by9 '>
						<iframe class='embed-responsive-item ' src='https://player.vimeo.com/video/146742515?badge=0 ' allowfullscreen=' '></iframe>
					</div>
				</div>
		</div>
			`);

            $("footer").html(`
			<div class='footer ' id='footer '>
			<div class='container '>
			<div class='row'>


			<div class='col-lg-6 col-md-6 col-sm-6 col-xs-6 '>
			<h4> STARTUP</h4>
		</div>
				<div class='col-lg-3 col-sm-2 col-xs-3 '>
					<h3> Contact </h3>
					<ul>
						<li><a class='email' href='#'> example@example.com </a></li>
						<br/>
						<li>
							<p> - Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522 (257) 563-7401 </p>
						</li>
						<li>
							<p>- Celeste Slater 606-3727 Ullamcorper. Street Roseville NH 11523 (786) 713-8616</p>
						</li>
					</ul>
				</div>
				<div class='col-lg-3 col-sm-2 col-xs-3 '>
					<ul>
						<li>
							<h5> <a href='#content-3-10' style='margin-top: 5em '> ABOUT</a>
								<h5>
						</li>
						<li>
							<h5><a href='#gallery'> GALLERY </a>
								<h5>
						</li>
						<li>
							<h5><a href='#banner'> THE HOUSE </a>
								<h5>
						</li>
						<li>
	
						</li>
					</ul>
				</div>
			
	
				<!--/.row-->
			</div>
			<!--/.container-->
		</div>
		<!--/.footer-->
	
		<div class='footer-bottom '>
			<div class='container '>
				<p class='copyright '> Copyright © Footer 2020. All right reserved. </p>
	
			</div>
		</div>
		<!--/.footer-bottom-->
	</div>
			`);


        }





        $(".toggle").toggleClass("direction");


    });






});