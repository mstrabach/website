$.cookieBar('addTranslation', 'fr', {
	message:	'Ce site utilise des cookies en provenance de Google à des fins purement statistiques',
	acceptText:	'OK',
	infoText:	'Plus d\'informations',
});

$(function() {
	$.cookieBar({
		style: 'bottom',
		language: 'fr'
	});
});


$( "#openSeize" ).on( "click touchend", function() {
	$(".project-details").addClass("seize opened");
	$(".project-details").load("seize.html");
	window.history.pushState("Seize", "Seize", "/website/seize");
});

$( "#openRun" ).on( "click touchend", function() {
	$(".project-details").addClass("runmotion opened");
	$(".project-details").load("runmotion.html");
	window.history.pushState("Run Motion", "Run Motion", "/website/runmotion");
});

$( "#openRes" ).on( "click touchend", function() {
	$(".project-details").addClass("responsage opened");
	$(".project-details").load("responsage.html");
	window.history.pushState("Responsage", "Responsage", "/website/responsage");
});

$( "#openCargo" ).on( "click touchend", function() {
	$(".project-details").addClass("cargo opened");
	$(".project-details").load("cargo.html");
	window.history.pushState("Cargo", "Cargo", "/website/cargo");
});

$( "#openMRCDS" ).on( "click touchend", function() {
	$(".project-details").addClass("mrcds opened");
	$(".project-details").load("mrcds.html");
	window.history.pushState("Mon Réseau Cancer du Sein", "Mon Réseau Cancer du Sein", "/website/mon-reseau-cancer-du-sein");
});

$( "#openEwattch" ).on( "click touchend", function() {
	$(".project-details").addClass("ewattch opened");
	$(".project-details").load("ewattch.html");
	window.history.pushState("Ewattch", "Ewattch", "/website/ewattch");
});

$( "#openRestellini" ).on( "click touchend", function() {
	$(".project-details").addClass("restellini opened");
	$(".project-details").load("restellini.html");
	window.history.pushState("Restellini", "Restellini", "/website/restellini");
});