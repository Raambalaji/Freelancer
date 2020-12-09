function scrollTop(easingtiming) { $('html,body').animate({ scrollTop: 0 }, easingtiming); }
var Windowidth = 0,
    WindowHeight = 0;

$(document).ready(function() {
    //Revolution Slider Config
    $('.slider').slick({
        autoplay: true,
        speed: 800,
        lazyLoad: 'progressive',
        arrows: true,
        dots: false,
        prevArrow: '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
        nextArrow: '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
    }).slickAnimation();

    $('.slick-nav').on('click touch', function(e) {

        e.preventDefault();

        var arrow = $(this);

        if (!arrow.hasClass('animate')) {
            arrow.addClass('animate');
            setTimeout(() => {
                arrow.removeClass('animate');
            }, 1600);
        }

    });

    //Sticky Navigation
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll < 1) {
            $('#navbar').addClass('static');
        } else if (scroll > 1) {
            $('#navbar').removeClass('static');
        }
        if (scroll < 10) {
            $('#navbar').removeClass("box-shadow");
        } else if (scroll > 10) {
            $('#navbar').addClass("box-shadow");
        }
    });

    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1
            },

            768: {
                items: 2
            },

            1170: {
                items: 3
            }
        }
    });
});