$(window).scroll(function () {
	var st = $(this).scrollTop();

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