$( ".project-details .close" ).on( "click", function(event) {
	history.pushState(null, null, "/website");
	$(".project-details").attr('class','project-details closed');
	$(".project-details").empty();
	$(".close").slideUp();
	event.stopPropagation();
});

// window.history.back( function(event) {
//     history.pushState(null, null, "/website");
// 	$(".project-details").attr('class','project-details closed');
// 	$(".project-details").empty();
// 	$(".close").slideUp();
// }, false);