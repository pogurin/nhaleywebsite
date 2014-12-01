$(document).ready(function() {

	$('#hideBox').fadeIn();

	$(document).scroll(function () {
		if ($(this).scrollTop() < $('#hideBox').height()) {
			$('#hideBox').fadeIn();
		} else {
			$('#hideBox').fadeOut();
		}
	});

	$("nav").hover(function(){
		$(this).find("#hideBox").fadeIn();
	}, function() {
		if ($(this).scrollTop() > 0) {
			$(this).find("#hideBox").fadeOut();
		}
	});

	$("#pageTop").click(function() {
		$('html, body').animate({
			scrollTop: $("#welcome").offset().top
		}, 1000);
	});

	$("#aboutnav").click(function() {
		$('html, body').animate({
			scrollTop: $("#info").offset().top
		}, 1000);
	});

	$("#skillsnav").click(function() {
		$('html, body').animate({
			scrollTop: $("#skills").offset().top
		}, 1000);
	});

	$("#projectsnav").click(function() {
		$('html, body').animate({
			scrollTop: $("#projects").offset().top
		}, 1000);
	});

	$("#contactnav").click(function() {
		$('html, body').animate({
			scrollTop: $("#contact").offset().top
		}, 1000);
	});

	// $('#hideBox').blurjs({
	// 	source: '#welcome',
	// 	radius: 30,
	// 	overlay: 'rgba(0, 0, 0, .2)'
	// });
});