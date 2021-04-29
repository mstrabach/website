$( ".project-details .close" ).on( "click", function(event) {
	history.pushState(null, null, "/website");
	$(".project-details").removeClass("opened");
	$(".close").slideUp();
	event.stopPropagation();
});

window.addEventListener('popstate', function(event) {
    history.pushState(null, null, "/website");
	$(".project-details").removeClass("opened");
	$(".close").slideUp();
}, false);