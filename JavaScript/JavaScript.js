$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-button').addClass("show");
        } else {
            $('.scroll-up-button').removeClass("show");
        }
    });

    // SLIDE UP SCRIPT

    $('.scroll-up-button').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // TOGGLE MEU/NAVBAR SCRIPT

    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //TYPING ANIMATION SCRIPT

    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Computer Programer", "Web Designer", "Freelancer", "Software Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Developer", "Programer", "Web Designer", "Freelancer", "Soft Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // OWL CAROUSEL SCRIPT

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayyTimeOut: 2000,
        autoplayHoverPause: true,
        responsive:
        {
            0:
            {
                items: 1,
                nav: false
            },

            600:
            {
                items: 2,
                nav: false
            },

            1000:
            {
                items: 3,
                nav: false
            }
        }
    });
});
