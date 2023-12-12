document.addEventListener("DOMContentLoaded", function() {
    const images1 = [
        "assets/images/blue_sodalite.jpg",
        "assets/images/white_onyx.jpg",
        "assets/images/pink_onyx.jpg",
        // ...
    ];

    const images2 = [
        "assets/images/white_onyx.jpg",
        "assets/images/pink_onyx.jpg",
        "assets/images/blue_sodalite.jpg",
    ];

    const images3 = [
        "assets/images/pink_onyx.jpg",
        "assets/images/blue_sodalite.jpg",
        "assets/images/white_onyx.jpg"
    ];

    let index1 = 0;
    let index2 = 0;
    let index3 = 0;

    const heroImage1 = document.querySelector('.hero-image-container-1 .hero-image');
    const heroImage2 = document.querySelector('.hero-image-container-2 .hero-image');
    const heroImage3 = document.querySelector('.hero-image-container-3 .hero-image');

    setInterval(() => {
        heroImage1.src = images1[index1++ % images1.length];
    }, 2000);

    setInterval(() => {
        heroImage2.src = images2[index2++ % images2.length];
    }, 2000);

    setInterval(() => {
        heroImage3.src = images3[index3++ % images3.length];
    }, 2000);
});
