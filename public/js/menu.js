//#869699 this is ethernet order #
$(function() {
    alert( "To enable GPS tracking you must have it enabled on your device." );

$('a.trail').on('click',function(){
var checkMark = $(this).children();	

if(checkMark.css("visibility")==="hidden"){
	checkMark.css("visibility","visible");
}
else
{
	checkMark.css("visibility","hidden");
}
;



console.log("hidden");


});


$( ".reset" ).click(function() {

	var icon = $(this).children();
	icon.addClass('fa-spin');
	window.setTimeout(stopSpin,2000);
	
	function stopSpin(){
		icon.removeClass('fa-spin');
	};



	$('a.trail').each(function(){
		var checkMark = $(this).children();	
		checkMark.css("visibility","visible");
		console.log('yay');
	})
	
});


$(".gps").click(function(){
	var icon = $(this).children();
	icon.addClass('animated');
	icon.addClass('flash');
	icon.addClass('infinite');

	getLocation();
	
});



});