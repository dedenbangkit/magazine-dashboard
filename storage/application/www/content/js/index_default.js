
//Slick
 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.navigations'
});

$('.navigations').slick({
            dots: true,
            arrows: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
			asNavFor: '.slider-for',
            responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        infinite: true
                      }
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
						  infinite: true
                      }
                    },
                    {
                      breakpoint: 400,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
						  infinite: true
                      }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                  ]
});

$('.slider-forv').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.navigationv',
});

$('.navigationv').slick({
            arrows: false,
            infinite: true,
			vertical:true,
            slidesToShow: 2,
            slidesToScroll: 2,
			asNavFor: '.slider-forv',
            responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true
                      }
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
						  infinite: true
                      }
                    },
                    {
                      breakpoint: 400,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
						  infinite: true
                      }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                  ]
});

$('.link-1').click( function() {
  window.open('demo.html', '_self');
} );


$('.link-2').click( function() {
  window.open('demo_2.html', '_self');
} );
