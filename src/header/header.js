$(document).ready(function () {
    $('.menu__item').click(function () {
        $(this).find('.menu__dropdown').toggleClass('menu__dropdown_show');
        $(document).click(function (e) {
            if (!$('.menu__item_desk').is(e.target)
                && $('.menu__item_desk').has(e.target).length === 0) {
                $('.menu__dropdown').removeClass('menu__dropdown_show');
            }
        });
    });
});