var drop = function() {
	$('drop-option').click(function(){
		$('dropdown-option').toggle()
	});
};

$(document).ready(drop, alert("hola, si estoy jalando"));