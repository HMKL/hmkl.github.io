function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }


  // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        $('#mainNav').css('backgroundColor', '#fafafa'); 
        $('.navbar-nav.mr-auto > li > a ').css('color', '#000');
        $('#time').css('color', 'black');
        $('#mainNav').css("padding-top", "0px");
        $('#mainNav').css("padding-bottom", "0px");
        $('#mainNav').css('box-shadow', '0px 0px 10px black');
        $('#mainNav').css("transition", "background-color' '0.2s ease");
      
    } else {
        $('#mainNav').css('backgroundColor', 'transparent');
        $('.navbar-nav.mr-auto > li > a ').css('color', 'white');
        $('#time').css('color', 'white');
        $("#mainNav").removeAttr("style");
        $('#mainNav').css("padding-top", "0px");
        $('#mainNav').css("padding-bottom", "0px");
        
    }
}

	
$(".navbar-nav.mr-auto > li > a").css('color', 'white');

$(document).ready(function(){
  $("a").click(function(){
    $(".clickme").css('color', '#000');
    $(".clickme").css('backgroundColor', '#f4623a');
    $('.clickme:hover').css('border', 'none');
    $('.clickme:hover').css('box-shadow', 'none');

  });
});



// fade div content...
 
// $(function () {
  
//   $('#btn1').on('click', function () {
//     $('#test').fadeToggle(200);
//   });

// });


$(function () {
  $('#btn2').on('click', function () {
    $('#jum').fadeToggle(1000);
  });
});

$(window).on('beforeunload', function(){
  $(window).scrollTop(0);
});