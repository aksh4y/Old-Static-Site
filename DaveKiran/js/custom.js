(function($){
  "use strict";
  
  // Preloader 
	jQuery(window).on('load', function() {
		jQuery("#status").fadeOut();
		jQuery("#preloader").delay(350).fadeOut("slow");
	});
	
	// on ready function
	jQuery(document).ready(function($) {
	var $this = $(window);
	
	// Back to Top js
	$(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
	$('#scroll').on("click", function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    });

	
	// Menu show Hide
	var counter = 0;
	$('.wd_menu_btn').on("click", function(e){
		if( counter == '0') {
			$('.wd_main_menu_wrapper').addClass('wd_main_menu_hide');
			$(this).children().removeAttr('class');
			$(this).children().attr('class','fa fa-close');
			counter++;
		}
		else {
			$('.wd_main_menu_wrapper').removeClass('wd_main_menu_hide');
			$(this).children().removeAttr('class');
			$(this).children().attr('class','fa fa-bars');
			counter--;
		}		
	});
	
	// Menu js for Position fixed
	$(window).scroll(function(){
		var window_top = $(window).scrollTop() + 1; 
		if (window_top > 500) {
			$('.wd_header_wrapper').addClass('menu_fixed animated fadeInDown');
		} else {
			$('.wd_header_wrapper').removeClass('menu_fixed animated fadeInDown');
		}
	});
	
	// Guest Slider Js
	$('.wd_guest_slider .owl-carousel').owlCarousel({
		loop:true,
		margin:45,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:3
			}
		}
	});
	
	// Testimonial Slider Js
	$('.wd_testimonial_slider .owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		autoplay:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	
	// Family Slider Js
	$('.wd_family_slider .owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		navText:["<i class='fa fa-angle-left'></i>" , "<i class='fa fa-angle-right'></i>"],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});
	
	// Gallery Slider js
	$('.wd_gallery_slider .owl-carousel').owlCarousel({
		animateOut: 'fadeOut',
		loop:true,
		margin:10,
		nav:false,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	
	// Magnific Popup js
	$('.popup-gallery').magnificPopup({
		delegate: '.ast_glr_overlay a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small></small>';
			}
		}
	});
	
	// Contact Form Submition
	$("#wd_submit").on("click", function() {
		var e = $("#uname").val();
		var t = $("#umail").val();
		var r = $("#msg").val();
		var n = $("#unum").val();
		$.ajax({
			type: "POST",
			url: "ajaxmail.php",
			data: {
				username: e,
				useremail: t,
				mesg: r,
				unum: n
			},
			success: function(n) {
				var i = n.split("#");
				if (i[0] == "1") {
					$("#uname").val("");
					$("#umail").val("");
					$("#msg").val("");
					$("#unum").val("");
					$("#err").html(i[1]);
				} else {
					$("#uname").val(e);
					$("#umail").val(t);
					$("#msg").val(r);
					$("#unum").val(n);
					$("#err").html(i[1]);
				}
			}
		});
	});
	
	// Single page scroll menu
	$('.wd_single_index_menu ul li a').on('click' , function(e){
	  $('.wd_single_index_menu ul li').removeClass('active');
	  $(this).parent().addClass('active');
	  var target = $('[section-scroll='+$(this).attr('href')+']');
	  e.preventDefault();
	  var targetHeight = target.offset().top-parseInt('83', 10);
	  $('html, body').animate({
	   scrollTop: targetHeight
	  }, 1000);
	});
	
	$(window).scroll(function() {
	  var windscroll = $(window).scrollTop();
	  var target = $('.wd_single_index_menu ul li');
	  if (windscroll >= 0) {
	   $('[section-scroll]').each(function(i) {
		if ($(this).position().top <= windscroll + 83) {
		 target.removeClass('active');
		 target.eq(i).addClass('active');
		}
	   });
	  }else{
	   target.removeClass('active');
	   $('.wd_single_index_menu ul li:first').addClass('active');
	  }

	});
	
//** NEW DATA BEGINS **//

//Single page scroll js
	$('.wd_single_index_menu_down ul li a').on('click' , function(e){
	  $('.wd_single_index_menu_down ul li').removeClass('active');
	  $(this).parent().addClass('active');
	  var target = $('[section-scroll='+$(this).attr('href')+']');
	  e.preventDefault();
	  var targetHeight = target.offset().top-parseInt('83', 10);
	  $('html, body').animate({
	   scrollTop: targetHeight
	  }, 1000);
	});
	
	$(window).scroll(function() {
	  var windscroll = $(window).scrollTop();
	  var target = $('.wd_single_index_menu_down ul li');
	  if (windscroll >= 0) {
	   $('[section-scroll]').each(function(i) {
		if ($(this).position().top <= windscroll + 83) {
		 target.removeClass('active');
		 target.eq(i).addClass('active');
		}
	   });
	  }else{
	   target.removeClass('active');
	   $('.wd_single_index_menu_down ul li:first').addClass('active');
	  }

	});
	
	
	//Single page scroll js
	$('.wd_single_index_menu_rsvp a').on('click' , function(e){
	  $('.wd_single_index_menu_rsvp a').removeClass('active');
	  $(this).parent().addClass('active');
	  var target = $('[section-scroll='+$(this).attr('href')+']');
	  e.preventDefault();
	  var targetHeight = target.offset().top-parseInt('83', 10);
	  $('html, body').animate({
	   scrollTop: targetHeight
	  }, 1000);
	});
	
	$(window).scroll(function() {
	  var windscroll = $(window).scrollTop();
	  var target = $('.wd_single_index_menu_rsvp a');
	  if (windscroll >= 0) {
	   $('[section-scroll]').each(function(i) {
		if ($(this).position().top <= windscroll + 83) {
		 target.removeClass('active');
		 target.eq(i).addClass('active');
		}
	   });
	  }else{
	   target.removeClass('active');
	   $('.wd_single_index_menu_rsvp a').addClass('active');
	  }

	});

//** END OF NEW DATA **//
		
	//** RS_SLIDER_JS **//

	var tpj=jQuery;
			
			var revapi477;
			tpj(document).ready(function() {
				if(tpj("#rev_slider_477_1").revolution == undefined){
					revslider_showDoubleJqueryError("#rev_slider_477_1");
				}else{
					revapi477 = tpj("#rev_slider_477_1").show().revolution({
						sliderType:"standard",
jsFileLocation:"revolution/js/",
						sliderLayout:"fullscreen",
						dottedOverlay:"none",
						delay:9000,
						navigation: {
							onHoverStop:"off",
						},
						responsiveLevels:[1240,1024,778,480],
						visibilityLevels:[1240,1024,778,480],
						gridwidth:[1240,1024,778,480],
						gridheight:[868,768,960,720],
						lazyType:"none",
						shadow:0,
						spinner:"off",
						stopLoop:"on",
						stopAfterLoops:0,
						stopAtSlide:1,
						shuffle:"off",
						autoHeight:"off",
						fullScreenAutoWidth:"off",
						fullScreenAlignForce:"off",
						fullScreenOffsetContainer: "",
						fullScreenOffset: "",
						disableProgressBar:"on",
						hideThumbsOnMobile:"off",
						hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						debugMode:false,
						fallbacks: {
							simplifyAll:"off",
							nextSlideOnWindowFocus:"off",
							disableFocusListener:false,
						}
					});

var targetdate =  new Date('April 1 2018').getTime('11:59:00 GMT-0400'),/* + 864000000,*/
    slidechanges = [
                    { days:0, hours:0, minutes:0, seconds:12, slide:2},
                    { days:0, hours:0, minutes:0, seconds:0, slide:3}
                    ],
    quickjump = 15000,   
    api = revapi477;
	
var currentd,currenth,currentm,currents;

function animateAndUpdate(o,nt,ot) {
   if (ot==undefined) {    
     o.html(nt);
   } else {      
      if (o.css("opacity")>0) {
      punchgs.TweenLite.fromTo(o,0.45,
  		{autoAlpha:1,rotationY:0,scale:1},
  		{autoAlpha:0,rotationY:-180,scale:0.5,ease:punchgs.Back.easeIn,onComplete:function() { o.html(nt);} });

  punchgs.TweenLite.fromTo(o,0.45,
  		{autoAlpha:0,rotationY:180,scale:0.5},
  		{autoAlpha:1,rotationY:0,scale:1,ease:punchgs.Back.easeOut,delay:0.5 });
      } else {
         o.html(nt);
      }
   }
  return nt;
}

function countprocess(event) {

  var newd = event.strftime('%D'),
      newh = event.strftime('%H'),
      newm = event.strftime('%M'),
      news = event.strftime('%S');
  if (newd != currentd) currentd = animateAndUpdate(jQuery('#c_days'),newd,currentd);
  if (newh != currenth) currenth = animateAndUpdate(jQuery('#c_hours'),newh,currenth);
  if (newm != currentm) currentm = animateAndUpdate(jQuery('#c_minutes'),newm,currentm);
  if (news != currents) currents = animateAndUpdate(jQuery('#c_seconds'),news,currents);

  jQuery.each(slidechanges,function(i,obj) {
    var dr = obj.days==undefined || obj.days>=newd,
        hr = obj.hours==undefined || obj.hours>=newh,
        mr = obj.minutes==undefined || obj.minutes>=newm,
        sr = obj.seconds==undefined || obj.seconds>=news;
      if (dr && hr && mr && sr && !obj.changedown) {
         api.revshowslide(obj.slide);
         obj.changedown = true;
      }
  })
}

jQuery('#skipahead').click(function(){
  var smalloffset = new Date().getTime() + quickjump;
 api.countdown(smalloffset,countprocess);
});

api.countdown(targetdate, countprocess);			


	}
			});	/*ready*/
	
	
	
	});
})(); 