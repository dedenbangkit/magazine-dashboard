

// Toolbar menuBottom

var menuTop = document.getElementById( 'cbp-spmenu-s3' );
var showBottom = document.getElementById( 'showBottom' );
var magThumb = document.getElementsByClassName('menu-utama');
var reveal = document.getElementById( 'reveal' );
var view = document.getElementById('view');
var help = document.getElementById('help');

// Activate Carousel
$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
    $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
    $("#myCarousel").carousel("prev");
});
