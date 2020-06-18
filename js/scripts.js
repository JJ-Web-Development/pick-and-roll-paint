$( ()=> {
	$('#hero').css('height', window.innerHeight);

	// @TODO: contact btn onclick focus name input in form

	$('#contact-link').mouseover(function() {
		$(this).html('<i class="fas fa-envelope-open"></i> Contact');
	});
	$('#contact-link').mouseout(function() {
		$(this).html('<i class="fas fa-envelope"></i> Contact');
	});

	$('#contact-btn').mouseover(function() {
		$(this).html('<i class="fas fa-envelope-open"></i> &nbsp; Contact');
	});
	$('#contact-btn').mouseout(function() {
		$(this).html('<i class="fas fa-envelope"></i> &nbsp; Contact');
	});
});