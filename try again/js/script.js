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


