// $( document ).ready(function() {
//     console.log( "document loaded" );
// });
//
// $( window ).on( "load", function() {
//     console.log( "window loaded" );
// });

$(document).ready(function() {

  $(window).scroll( function(){

    $('.hideme').each( function(i){

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_object){

            $(this).animate({'opacity':'1'},500);
        }
    });
  });
});

$("#nav-toggle").click(function(e) {
  $(".nav-box").fadeToggle();
});
