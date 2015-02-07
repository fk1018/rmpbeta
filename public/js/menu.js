//#869699 this is ethernet order #
$(function() {
    console.log( "ready!" );

    $('#showHideTrailNavBtn').on('click',function(){
          if ( $("#trailNav" ).is( ":hidden" ) ) {
    $( "#trailNav" ).slideDown( "slow" );
    } else {
    $( "#trailNav" ).slideUp( "slow" );
    }
    console.log('finished');
  });



});