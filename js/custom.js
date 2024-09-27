$(function () {
    const MainVisual = new Swiper('.main_visual_slide', {
        loop: true,
        effect: "fade",
        speed: 1000,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });
})

$(function () {
    const mainProductSlide = new Swiper('.main_product_slide', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 15,
        navigation: {
            nextEl: '.main_product .arrows .next',
            prevEl: '.main_product .arrows .prev',
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            }
        },
    })
});

$(function () {
    $('#bgndVideo').YTPlayer({videoURL:'https://youtu.be/oVy1s-QwRg0',
        containment:'.box',
        autoPlay:true, 
        mute:true,
        showControls: false,
        playOnlyIfVisible: true,
    });
})