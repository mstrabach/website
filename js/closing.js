$( ".project-details .close" ).on( "click", function(event) {
	history.pushState(null, null, "/");
	$(".project-details").removeClass("opened");
	event.stopPropagation();
});