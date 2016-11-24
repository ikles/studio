$(function() {

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});

	$('.top_mnu ul ul').mouseover(function(){
		$(this).prev().addClass('hover_a');
	});

	$('.top_mnu ul ul').mouseout(function(){
		$(this).prev().removeClass('hover_a');
	});

	$('.bot-mnu ul ul').mouseover(function(){
		$(this).prev().addClass('hover_a2');
	});

	$('.bot-mnu ul ul').mouseout(function(){
		$(this).prev().removeClass('hover_a2');
	});

	$('.social a').click(function(e) {
		e.preventDefault();
	});

	

	var main = $('.main').remove();
	$('.slider').after(main);

	$('.left-consult').after($('.col-content'));

	/*******************Форма*************************/

	$(".form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$(".form").trigger("reset");
		});
		return false;
	});

	/*******************Форма*************************/

});