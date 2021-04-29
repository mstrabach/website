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
	$(".project-details").attr('class','project-details');
	$(".project-details").html('')
	$(".project-details").addClass("seize opened");
	$(".project-details").load("seize.html");
	window.history.pushState("Seize", "Seize", "/website/seize");
	$(".close").slideDown();
});

$( "#openRun" ).on( "click touchend", function() {
	$(".project-details").attr('class','project-details');
	$(".project-details").html('');
	$(".project-details").addClass("runmotion opened");
	$(".project-details").load("runmotion.html");
	window.history.pushState("Run Motion", "Run Motion", "/website/runmotion");
	$(".close").slideDown();
});

$( "#openRes" ).on( "click touchend", function() {
	$(".project-details").attr('class','project-details');
	$(".project-details").html('');
	$(".project-details").addClass("responsage opened");
	$(".project-details").load("responsage.html");
	window.history.pushState("Responsage", "Responsage", "/website/responsage");
	$(".close").slideDown();
});

$( "#openCargo" ).on( "click touchend", function() {
	$(".project-details").attr('class','project-details');
	$(".project-details").html('');
	$(".project-details").addClass("cargo opened");
	$(".project-details").load("cargo.html");
	window.history.pushState("Cargo", "Cargo", "/website/cargo");
	$(".close").slideDown();
});

$( "#openMRCDS" ).on( "click touchend", function() {
	$(".project-details").removeClass(" ");
	$(".project-details").html('');
	$(".project-details").addClass("mrcds opened");
	$(".project-details").load("mrcds.html");
	window.history.pushState("Mon Réseau Cancer du Sein", "Mon Réseau Cancer du Sein", "/website/mon-reseau-cancer-du-sein");
	$(".close").slideDown();
});

$( "#openEwattch" ).on( "click touchend", function() {
	$(".project-details").attr('class','project-details');
	$(".project-details").html('');
	$(".project-details").addClass("ewattch opened");
	$(".project-details").load("ewattch.html");
	window.history.pushState("Ewattch", "Ewattch", "/website/ewattch");
	$(".close").slideDown();
});

$( "#openRestellini" ).on( "click touchend", function() {
	$(".project-details").attr('class','project-details');
	$(".project-details").html('');
	$(".project-details").addClass("restellini opened");
	$(".project-details").load("restellini.html");
	window.history.pushState("Restellini", "Restellini", "/website/restellini");
	$(".close").slideDown();
});