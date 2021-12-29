$(document).ready(function () {
    $('.tab__item').click(function () {
        if (!$(this).hasClass('.tab__item_active')) {
            let data = $(this).attr('data-name');
            $("." + data + "").addClass('content__item_active');
            $("." + data + "").find('.description__dropdown').toggleClass('description__dropdown_show');
            $("." + data + "").siblings().removeClass('content__item_active');
            $("." + data + "").siblings().find('.description__dropdown').removeClass('description__dropdown_show');
            $(this).addClass('tab__item_active');
            $(this).siblings().removeClass('tab__item_active');
        }
    });
    $('.description__tabs_mobile').click(function () {
        $('.tab__dropdown').toggleClass('dropdown__show');
    });
    // $('.tab__dropdown .dropdown__item').click(function () {
    //     let data = $(this).attr('data-name');
    //     $("." + data + "").addClass('content__item_active');
    //     $("." + data + "").siblings().removeClass('content__item_active');
    //     let active = $('.tab__active .dropdown__item').text();
    //     let chosen = $(this).text();
    //     let activeData = $('.tab__active .dropdown__item').attr('data-name');
    //     $('.tab__active .dropdown__item h5').text(chosen);
    //     $(this).find('h5').text(active);
    //     $('.tab__active .dropdown__item').attr('data-name', data);
    //     $(this).attr('data-name', activeData);
    //     console.log(active);
    //     console.log(chosen);
    // });
    $('.description__dropdown__btn').click(function () {
        $(this).parent().find('.description__dropdown').toggleClass('description__dropdown_show');
        $(this).toggleClass('description__btn_active');
    });
});