
const marquee = document.getElementById('marquee');

marquee.addEventListener('mouseover', () => {
    marquee.stop();
});

marquee.addEventListener('mouseout', () => {
    marquee.start();
});



// splide thumbnail shi



// main
document.addEventListener( 'DOMContentLoaded', function () {
    var main       = new Splide( '#image-carousel', {
        cover :true,
        type      : 'fade',
        rewind    : true,
        pagination: false,
        arrows    : false,
      heightRatio: 0.6,
    } );


  // thumbnail
  var thumbnails = new Splide( '#thumbnail-carousel', {
    fixedWidth  : 100,
    fixedHeight : 60,
    gap         : 10,
    rewind      : true,
    pagination  : false,
    isNavigation: true,
    breakpoints : {
      600: {
        fixedWidth : 60,
        fixedHeight: 44,
      },
    },
  } );

  main.sync( thumbnails );
  main.mount();
  thumbnails.mount();
} );

