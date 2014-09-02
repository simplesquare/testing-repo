$(document).ready(function(){
	
	$('#about').hide();
	$('#works').hide();
	$('#contact').hide();
	
	$('.button1').click(function() {
	$('#works').hide();
	$('#intro').hide();
	$('#contact').hide();
	$('#about').fadeIn(1600)

	$('#about img').fadeTo('slow', 0.7);
	$('.content').css({'height': '1500px'})
	})
	$('.button2').click(function(){
	$('#contact').hide();
	$('#about').hide();
	$('#intro').hide();
	$('#works').fadeIn(1000);
	$('#content').hide();
	$('#web').show()
		$('#logo').hide();
		$('#rummble').hide();
		$('#poster').hide();
		$('#editorial').hide();
		$('#packaging').hide();
		$('#typography').hide();
		$('#visual').hide();
	$('.content').css({'height': '740px'})
	
	//$('#dots').animate({'left': '300px'},1000)
	//$('#stroke').animate({'right': '515px'},1500)
	});
	$('.button3').click(function() {
	$('#about').hide();
	$('#works').hide();
	$('#intro').hide();
	$('#contact').fadeIn(1500);
	$('.content').css({'height': '500px'})
	
	});
	$('.logo').click(function() {
	$('#about').hide();
	$('#works').hide();
	$('#contact').hide();
	$('#intro').show(500);
	$('.content').css({'height': '500px'})
	});
	
	$('li.butt_logo').click(function() {
		$('#works h4').hide();
		$('#web').hide();
		$('#logo').show();
		$('#poster').hide();
		$('#editorial').hide();
		$('#packaging').hide();
		$('#rummble').hide();
		$('#typography').hide();
		$('#visual').hide();
		$('#works').prepend('<div><h4>LOGO</h4></div>');
		 })
	$('li.butt_poster').click(function() {
		$('#works h4').hide();
		$('#web').hide();
		$('#logo').hide();
		$('#rummble').hide();
		$('#poster').show();
		$('#packaging').hide();
		$('#editorial').hide();
		$('#typography').hide();
		$('#visual').hide();
		$('#works').prepend('<div><h4>POSTER</h4></div>'); 
		 })
	$('li.butt_editorial').click(function() {
		$('#works h4').hide();
		$('#web').hide();
		$('#rummble').hide();
		$('#logo').hide();
		$('#poster').hide();
		$('#editorial').show();
		$('#packaging').hide();
		$('#typography').hide();
		$('#visual').hide();
		$('#works').prepend('<div><h4>EDITORIAL</h4></div>');
		 })
	$('li.butt_web').click(function() {
		$('#works h4').hide();
		$('#content').show();
		$('#web').show();
		$('#logo').hide();
		$('#rummble').hide();
		$('#poster').hide();
		$('#editorial').hide();
		$('#packaging').hide();
		$('#typography').hide();
		$('#visual').hide();
		$('#works').prepend('<div><h4>WEB</h4></div>');
		})
	$('li.butt_package').click(function() {
		$('#works h4').hide();
		$('#web').hide();
		$('#logo').hide();
		$('#rummble').hide();
		$('#poster').hide();
		$('#editorial').hide();
		$('#packaging').show();
		$('#typography').hide();
		$('#works').prepend('<div><h4>PACKAGING</h4></div>');
		 })
	$('li.butt_typo').click(function() {
		$('#works h4').hide();
		$('#web').hide();
		$('#logo').hide();
		$('#rummble').hide();
		$('#poster').hide();
		$('#editorial').hide();
		$('#packaging').hide();
		$('#typography').show();
		$('#visual').hide();
		 $('#works').prepend('<div><h4>TYPOGRAPHY</h4></div>');
		 })
	$('li.butt_visual').click(function() {
		$('#works h4').hide();
		$('#visual').show();
		$('#web').hide();
		$('#logo').hide();
		$('#poster').hide();
		$('#editorial').hide();
		$('#packaging').hide();
		$('#typography').hide();
		$('#rummble').hide();
		$('#works').prepend('<div><h4>VISUALISATIONS</h4></div>');
		 })
	$('li.butt_rummble').click(function() {
		$('#works h4').hide();
		$('#visual').hide();
		$('#web').hide();
		$('#logo').hide();
		$('#poster').hide();
		$('#editorial').hide();
		$('#packaging').hide();
		$('#typography').hide();
		$('#works').prepend('<div><h4>RUMMBLE LABS</h4></div>');
		$('#rummble').show();
		 })
 });