$(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        responsive:{
            0:{
                items:1
            },
            500: {
              items: 2  
            },
            769:{
                items:3
            }
        }
    })
    let isCounted = false;

    if ($(window).scrollTop() > 20 && !isCounted) {
        animateNumbers();
        isCounted = true;
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() > 20 && !isCounted) {
            animateNumbers();
            isCounted = true;
        }

        if ($(window).scrollTop() > 400 && $('.header__burger').hasClass('active'))
            openMenu();

    });

    $('.header__burger, .header__link').click(function () {
        openMenu();
    });

    function openMenu() {
        $('.header__burger').toggleClass('active');
        $('.header__menu').toggleClass('active');
    }

    function animateNumbers() {
        $('.count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3000,
                easing: "swing",
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }
});