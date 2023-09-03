document.addEventListener("DOMContentLoaded", function () {
    const slideshowContainers = document.querySelectorAll('.bg-holder-slideshow');

    slideshowContainers.forEach((container) => {
        const images = container.querySelectorAll('img');
        let currentIndex = 0;

        function changeImage() {
            images[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add('active');
        }

        setInterval(changeImage, 3000); 

        // Initialize the slideshow
        images[currentIndex].classList.add('active');
    });
});
