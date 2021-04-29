$( ".project-details .close" ).on( "click", function(event) {
	history.pushState(null, null, "/website");
	$(".project-details").attr('class','project-details closed');
	$(".project-details").html('');
	$(".close").slideUp();
	event.stopPropagation();
});

window.addEventListener('popstate', function(event) {
    history.pushState(null, null, "/website");
	$(".project-details").attr('class','project-details closed');
	$(".project-details").html('');
	$(".close").slideUp();
}, false);