$(function () {

    // ============ Menú móvil ============
    $('.ber_icon').on('click', function () {
        $('.nav_links').stop().slideToggle(200);
        var expanded = $(this).attr('aria-expanded') === 'true';
        $(this).attr('aria-expanded', String(!expanded));
    });

    // Cerrar menú al pulsar un enlace (solo móvil)
    $('.nav_links a').on('click', function () {
        if (window.matchMedia('(max-width: 768px)').matches) {
            $('.nav_links').slideUp(200);
            $('.ber_icon').attr('aria-expanded', 'false');
        }
    });

    // ============ Header fijo al hacer scroll ============
    var $topHeader = $('.top_header');
    if ($topHeader.length) {
        var headerOffset = $topHeader.offset().top;
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > headerOffset) {
                $topHeader.addClass('is-sticky');
            } else {
                $topHeader.removeClass('is-sticky');
            }
        });
    }

    // ============ Carrusel de testimonios ============
    $('.testi_slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        animateIn: 'fadeInRight',
        animateOut: 'fadeOutLeft'
    });

});