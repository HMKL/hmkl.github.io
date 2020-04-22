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
        $('#mainNav').css('opacity', '0.5');
        // $('#mainNav').css("padding", "0px 10px 0 10px");
        $('#mainNav').css("padding-top", "0px");
        $('#mainNav').css("padding-bottom", "0px");
    } else {
        $('#mainNav').css('backgroundColor', 'transparent');
        $('.navbar-nav.mr-auto > li > a ').css('color', 'white');
        $('#time ').css('color', 'white');
        $("#mainNav").removeAttr("style");
        $('#mainNav').css("padding-top", "0px");
        $('#mainNav').css("padding-bottom", "0px");
        
    }
}

	
$(".navbar-nav.mr-auto > li > a").css('color', 'white');
