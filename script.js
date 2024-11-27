// Initialize the Bootstrap carousel with auto-switching
document.addEventListener('DOMContentLoaded', function () {
    const carousel = new bootstrap.Carousel(document.querySelector('#mobile-carousel'), {
        interval: 4000, // Time between slides in milliseconds
        ride: 'carousel' // Automatically start cycling
    });
});
