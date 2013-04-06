$(document).ready(function(){

//WARNING! Much of this should probably be done in CSS rather than Javascript!
	
	//pre-stuff
	$(".sub_menu").hide();
	$(".slide_sub_menu").hide();
	$(".fade_sub_menu").hide();

	//Text effects: mouseup/down events
	$("#click_events").mousedown(function(){
		$(this).css("background-color","red");
	});
	$("#click_events").mouseup(function(){
		$(this).css("background-color","yellow");
	});

	//Text effects: click events
	$("strong").click(function(){
		$(this).css("background-color","green");
	});
	$("#fadeto_and_callback").click(function(){
		$(this).fadeTo(1000, 0.3, function() {
			$("#callback").css("color", "white");
		});
	});

	//Text effects: mouseover events
	$(".mouseover_event").mouseenter(function(){
		$(this).css("background-color","green");
	});
	$(".mouseover_event").mouseleave(function(){
		$(this).css("background-color","grey");
		//$("*").unbind("mouseleave");
		$(".mouseover_event").unbind("mouseenter");
	});

	//Menu system
	$("#activate_sub_menu").click(function(){
		$(".sub_menu").toggle(1000);
	});
	$("#activate_slide_sub_menu").click(function(){
		$(".slide_sub_menu").slideToggle(1000);
	});
	$("#activate_fade_sub_menu").click(function(){
		$(".fade_sub_menu").delay(1000).fadeToggle(1000);
	});
	
	//Animation
	$("#btn_button1").click(function() {
		$("#animation1").animate({
			"font-size":"toggle",
			"width":"20%",
			"left":"+=100px"
		}, 1000, function() {
			$("#animation2").fadeOut(1000);
		});
	});
	
	//Classes
	$(".toggling").mouseenter(function() {
		$(this).toggleClass("toggling");
	});
	
	//manipulate html code
	$("#btn_manipulate1").click(function() {
		$("#manipulate_me_1").text("Only the text was manipulated");
	});
	$("#btn_manipulate2").click(function() {
		$("#manipulate_me_2").html('The <b style="color: red;">html</b> was manipulated');
	});
	$("#btn_manipulate3").click(function() {
		$("#manipulate_me_3").append(" appended text ");
	});
	$("#btn_manipulate4").click(function() {
		$("#manipulate_me_4").after("Appended text outside of the div-element. ");
	});
	$("#btn_manipulate5").click(function() {
		$("#manipulate_me_5").replaceWith("This is a new text outside of the div-element.<br>");
	});
	$("#btn_manipulate6").click(function() {
		$("#manipulate_me_6").attr("src", "http://i.imgur.com/6tahV.png");
	});
	
});