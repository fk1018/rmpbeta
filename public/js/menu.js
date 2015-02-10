//#869699 this is ethernet order #
$(function() {
    console.log( "ready!" );



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

function gpsAlert(){
	alert('To enable tracking please be sure the GPS functionality is enabled for this device.');
};






});