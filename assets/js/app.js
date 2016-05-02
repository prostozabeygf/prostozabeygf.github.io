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
$(document).ready(function () {
 $(".show-in li a").on('click', function(event) {
  $(".nav").toggleClass('show-in');
 });
});

$('.counter').waypoint(function() {
$('.counter-numb').each(function(){
    var numberValue = $(this).data('value');
    $(this).animateNumber({number:numberValue}, 5000);
});
this.destroy()
}, {
offset: '100%',
triggerOnce: true
});
 
});

$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$(document).ready(function() {
	$('.carousel').carousel({
  interval: 4000,
  pause: ""
});
$('body').scrollspy({target: '#navigation-top', offset: 100});

 var scrollTo = $(".scroll-to");

 scrollTo.on('click', function (event) {
     $('.modal').modal('hide');
     var position = $(document).scrollTop();
     var scrollOffset = 100;

     var marker = $(this).attr('href');
     $('html, body').animate({scrollTop: $(marker).offset().top - scrollOffset}, 'slow');
     return false;
 });

});

