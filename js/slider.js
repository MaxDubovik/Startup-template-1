const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 43,
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 4000,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        }
    }
});