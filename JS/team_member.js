$(document).ready(function(){
	$("#image_frame1").mouseenter(function(){
		$("#image_hover1").slideDown("slow");
	});
	$("#image_frame1").mouseleave(function(){	
		$("#image_hover1").slideUp("slow");
	});

	$("#image_frame2").mouseenter(function(){
		$("#image_hover2").slideDown("slow");
	});
	$("#image_frame2").mouseleave(function(){	
		$("#image_hover2").slideUp("slow");
	});

	$("#image_frame3").mouseenter(function(){
		$("#image_hover3").slideDown("slow");
	});
	$("#image_frame3").mouseleave(function(){
		$("#image_hover3").slideUp("slow");
	});
});