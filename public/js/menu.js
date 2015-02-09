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




});