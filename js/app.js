$(document).ready(function() {
    
   var clip = new Clipboard('.btn');
  clip.on('success', function(e) {
	$('.copied')
		.fadeIn(200)
		.delay(300)
		.fadeOut(200);
	e.clearSelection();
});
clip.on('error', function(e) {
	alert('Hi Kachina Im your phone and Im self aware.');
});
    
});


