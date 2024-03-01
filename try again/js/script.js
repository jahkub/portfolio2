const images = document.querySelectorAll('#graphic .logo');
let currentImageIndex = 0;

function switchImage() {
    images.forEach((img, index) => {
        img.classList.remove('active');
    });
    images[currentImageIndex].classList.add('active');

    if (currentImageIndex % 2 === 0) {
        setTimeout(() => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            switchImage();
        }, 5000); // Display eye image for 10 seconds
    } else {
        setTimeout(() => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            switchImage();
        }, 200); // Display closed eye image for a short duration
    }
}

switchImage(); // Start the cycle




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
      heightRatio: 0.5,
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

var overlay = document.getElementsByClassName("overlay")

var open1 = document.getElementsByClassName("open1")

open1.addEventListener("click", clickopen)
overlay.addEventListener("click", clickclose)

function clickopen() {
overlay.classList.add("open")

}

function clickclose() {
  overlay.classList.remove("open")
  }