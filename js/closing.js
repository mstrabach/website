$( ".project-details .close" ).on( "click", function(event) {
	history.pushState(null, null, "/website");
	$(".project-details").removeClass("opened");
	$(".close").hide();
	event.stopPropagation();
});

window.addEventListener('popstate', function(event) {
    history.pushState(null, null, "/website");
	$(".project-details").removeClass("opened");
	$(".close").hide();
}, false);