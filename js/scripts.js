$(document).ready(function ($) {

    $('.my-slider').unslider({
        autoplay: true,
        infinite: true,
        arrows: false
    });

    $('a[href^="#"]').on('click', function (event) {

        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1500);
        }
    });


});
