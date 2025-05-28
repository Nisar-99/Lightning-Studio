// -----------------------------

//   js index
/* =================== */
/*  
    

    

*/
// -----------------------------


(function ($) {
    "use strict";



    /*---------------------
    preloader
    --------------------- */

    $(window).on('load', function () {
        $('#preloader').fadeOut('slow', function () { $(this).remove(); });
    });

    /*---------------------
    wow
    --------------------- */
    new WOW().init();

    /*---------------------
    mobile menu
    --------------------- */
    jQuery('.stellarnav').stellarNav({
        theme: 'light',
        breakpoint: 960,
        position: 'right',
        phoneBtn: '18009997788',
        locationBtn: 'https://www.google.com/maps'
    });

    /*---------------------
    video-popup
    --------------------- */
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 300,
        preloader: false,
        fixedContentPos: false
    });

    /*---------------------
    image-popup
    --------------------- */
    $('.test-popup-link').magnificPopup({
        type: 'image'
        // other options
    });

    /*-----------------
    sticky
    -----------------*/
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 25) {
            $('header').addClass('navbar-fixed-top');
        } else {
            $('header').removeClass('navbar-fixed-top');
        }
    });

    /*-----------------
    scroll-up
    -----------------*/
    $.scrollUp({
        scrollText: '<i class="fa fa-arrow-up" aria-hidden="true"></i>',
        easingType: 'linear',
        scrollSpeed: 1500,
        animation: 'fade'
    });

    /*------------------------------
         counter
    ------------------------------ */
    $('.counter-up').counterUp();


    /*---------------------
    smooth scroll
    --------------------- */
    $('.smoothscroll').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;

        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top - 80
        }, 1200);
    });


    /*---------------------
    countdown
    --------------------- */
    $('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
        });
    });

    /*---------------------
    progress
    --------------------- */
    $('.all-progess').waypoint(function () {
        $('.progress-bar').addClass('left-anim');
    }, {
            triggerOnce: true,
            offset: '50%'
        });

    /*---------------------
    isotope portoflio
    --------------------- */
    $('#container').imagesLoaded(function () { //image loaded

        // filter items on button click
        $('.h4-portfolio-menu').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
            $('.h4-portfolio-menu').find('.checked').removeClass('checked');
            $(this).addClass('checked');
        });

        // masonary activation
        var $grid = $('.grid_container').isotope({
            itemSelector: '.grid',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid'
            }
        })
    });

    /*---------------------
    testimonial-carousel
    --------------------- */
    function testimonial_carousel() {
        var owl = $(".testimonial-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 40,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: false,
            items: 5,
            smartSpeed: 2000,
            dots: false,
            autoplay: false,
            autoplayTimeout: 4000,
            center: false,
            autoWidth: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 3
                }
            }
        });
    }
    testimonial_carousel();

    /*---------------------
    home3-app-carousel
    --------------------- */
    function home3_app_carousel() {
        var owl = $(".home3-app-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 40,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: false,
            items: 5,
            smartSpeed: 2000,
            dots: true,
            autoplay: false,
            autoplayTimeout: 4000,
            center: false,
            autoWidth: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 3
                },
                991: {
                    items: 4
                },
                1024: {
                    items: 5
                }
            }
        });
    }
    home3_app_carousel();

    /*---------------------
    home3-member-carousel
    --------------------- */
    function home3_member_carousel() {
        var owl = $(".home3-member-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 60,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            items: 4,
            smartSpeed: 2000,
            dots: false,
            autoplay: false,
            autoplayTimeout: 4000,
            center: false,
            autoWidth: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 3
                },
                991: {
                    items: 3
                },
                1024: {
                    items: 4
                }
            }
        });
    }
    home3_member_carousel();

    /*---------------------
    post-gallery-carousel
    --------------------- */
    function post_gallery_carousel() {
        var owl = $(".post-gallery-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
            nav: true,
            items: 1,
            smartSpeed: 2000,
            dots: false,
            autoplay: false,
            autoplayTimeout: 4000,
            center: false,
            autoWidth: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 1
                },
                991: {
                    items: 1
                },
                1024: {
                    items: 1
                }
            }
        });
    }
    post_gallery_carousel();

    /*---------------------
    h4-testimonial-carousel
    --------------------- */
    function h4_testimonial_carousel() {
        var owl = $(".h4-testimonial-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: true,
            items: 5,
            smartSpeed: 2000,
            dots: false,
            autoplay: false,
            autoplayTimeout: 4000,
            center: false,
            autoWidth: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }
    h4_testimonial_carousel();

    /*---------------------
    home5-brand-carousel
    --------------------- */
    function home5_brand_carousel() {
        var owl = $(".home5-brand-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            nav: false,
            items: 6,
            smartSpeed: 2000,
            dots: false,
            autoplay: false,
            autoplayTimeout: 4000,
            center: false,
            autoWidth: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                760: {
                    items: 4
                },
                992: {
                    items: 5
                },
                1024: {
                    items: 6
                }
            }
        });
    }
    home5_brand_carousel();

    /*---------------------
    home6-team-carousel
    --------------------- */
    function home6_team_carousel() {
        var owl = $(".home6-team-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 60,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
            nav: true,
            items: 3,
            smartSpeed: 2000,
            dots: false,
            autoplay: false,
            autoplayTimeout: 4000,
            center: false,
            autoWidth: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 2
                },
                992: {
                    items: 2
                },
                1024: {
                    items: 3
                }
            }
        });
    }
    home6_team_carousel();

    /*---------------------
    h6-footer-carousel
    --------------------- */
    function h6_footer_carousel() {
        var owl = $(".h6-footer-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 60,
            responsiveClass: true,
            navigation: true,
            navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"],
            nav: false,
            items: 6,
            smartSpeed: 2000,
            dots: false,
            autoplay: false,
            autoplayTimeout: 4000,
            center: false,
            autoWidth: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                760: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1024: {
                    items: 5
                }
            }
        });
    }
    h6_footer_carousel();

    /*---------------------
    pignoseCalendar
    --------------------- */
    $('.calendar').pignoseCalendar({
        theme: 'blue', // light, dark, blue
    });


}(jQuery));
