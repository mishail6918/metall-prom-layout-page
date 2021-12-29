$(document).ready(function () {
    $('.thumbnail__slider').slick({
        slidesToShow: 3,
        asNavFor: '.main__slider',
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: true,
        centerMode: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768,
                settings: "unslick"
            },
        ]
    });
    $('.main__slider').slick({
        slidesToShow: 1,
        asNavFor: '.thumbnail__slider',
        fade: true,
        draggable: false,
        arrows: false,
        centerMode: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: true,
                    draggable: true,
                }
            },
        ]
    });
});