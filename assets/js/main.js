$(document).ready(function() {
    let slickInitialized = false;

    function initializeSlider() {
        if ($(window).width() > 768) {
            if (!slickInitialized) { 
                $('.our-model__slider').slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    prevArrow: $('.slick-prev'),
                    nextArrow: $('.slick-next'),
                    dots: false,
                    autoplay: false,
                    autoplaySpeed: 3000,
                    speed: 500,
                    variableWidth: false,
                    rows: 1
                });
                slickInitialized = true;
            }
        } else {
            if (slickInitialized) {
                $('.our-model__slider').slick('unslick');
                slickInitialized = false;
            }
        }
    }

    initializeSlider(); 

    $(window).resize(function() {
        initializeSlider();
    });
});



$(document).ready(function() {
    let header = $('.header');
    let stickyClass = 'header__sticky';
    let stickyOffset = header.outerHeight();

    $(window).scroll(function() {
        if ($(this).scrollTop() > stickyOffset) {
            header.addClass(stickyClass);
        } else {
            header.removeClass(stickyClass);
        }
    });
});