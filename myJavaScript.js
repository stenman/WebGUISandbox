$(document).ready(function(){

	$("p").mousedown(function(){
		$(this).css("background-color","red");
	});
	$("p").mouseup(function(){
		$(this).css("background-color","yellow");
	});

});