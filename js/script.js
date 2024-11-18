

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
        }, 8000); // tid
    } else {
        setTimeout(() => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            switchImage();
        }, 200); // Display closed eye image for a short duration
    }
}

switchImage(); // Start the cycle
/*

document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const logos = document.querySelectorAll('#graphic .logo');
    const switchInterval = 3000; // 3 seconds

    function switchLogo() {
        // Remove 'active' from the current image
        logos[currentIndex].classList.remove('active');
        
        // Move to the next image
        currentIndex = (currentIndex + 1) % logos.length;
        
        // Add 'active' to the next image
        logos[currentIndex].classList.add('active');
    }

    // Switch logos every 3 seconds
    setInterval(switchLogo, switchInterval);
});
*/


const marquee = document.getElementById('marquee');

marquee.addEventListener('mouseover', () => {
    marquee.stop();
});

marquee.addEventListener('mouseout', () => {
    marquee.start();
});



// splide thumbnail shi


