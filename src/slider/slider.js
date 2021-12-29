$(document).ready(function () {
    $('.slider__wrapper').slick({
        slidesToShow: 5,
        adaptiveHeight: true,
        //variableWidth: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 561,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 361,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});