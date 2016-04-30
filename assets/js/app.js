$(window).scroll(function () {
	var st = $(this).scrollTop();

	$('.form-help').each(function() {
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+600) {
			$(this).addClass('swing');
		}
	});

	$('.sc-animate').each(function() {
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+600) {
			$(this).addClass('fadeInDown');
		}
	});
	$('.sc-animate-1').each(function() {
		var imagePos = $(this).offset().top;
		var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+600) {
			$(this).addClass('fadeInUp');
		}
	});

	$(".slider img").css({
		"transform" : "translate(0%, -" + st /20 + "%"
	});

});

$(function () {
	$(".menu").click(function(){
		$(".nav").toggleClass('show-in');
		$(".select-c").toggleClass('show-in');
	});
 
});

$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$(document).ready(function() {
$('a[href^="#"]').click(function(){
var el = $(this).attr('href');
$('body').animate({
scrollTop: $(el).offset().top}, 2000);
return false;
});
});