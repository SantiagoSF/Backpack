$(document).ready(function() {

 	$('#btn-dropGroup').click(function() {
		$('#dashboard-dropGroup').toggle();
	})

	$('#btn-dropSchool').click(function() {
		$('#dashboard-dropSchool').toggle();
	})

 	$("#icono-newTag").click(function() {
 		$("#nuevo-tag").toggle();
		$('#notificaciones').css({display: "none"});
		$('#control-usuario').css({display: "none"});
		$('#mensajes').css({display: "none"});
 	})
 	
	$('#icono-mensajes').click(function() {
		$('#notificaciones').css({display: "none"});
		$('#control-usuario').css({display: "none"});
		$('#mensajes').toggle();
		$('#nuevo-tag').css({display: "none"})
	})

	$('#icono-notificaciones').click(function() {
		$('#mensajes').css({display: "none"});
		$('#control-usuario').css({display: "none"});
		$('#nuevo-tag').css({display: "none"})
		$('#notificaciones').toggle();
	})

	$('#icono-control-usuario').click(function() {
		$('#mensajes').css({display: "none"});
		$('#notificaciones').css({display: "none"});
		$('#nuevo-tag').css({display: "none"})
		$('#control-usuario').toggle();
	})


 })

