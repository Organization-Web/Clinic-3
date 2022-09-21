/*
 * Title:   Better Medical - Medical Clinic & Healthy - HTML Template
 * Author:  QTC Media
 */

/* --------------------------------------------------------
 [Table of contents]

 1. revolutionSlider
 2. mobileMenu
 3. childMobileMenu
 4. subContentQuestion
 5. owlCarousel
 6. initMap
 7. hoverdirMaster
 8. filterPrice
 9. qtyProduct
 10. raTing
 11. countDown

 [End table of contents]
 ----------------------------------------------------------------------- */

"use strict"; // Start of use strict

function revolutionSlider() {
    if($('#slider_v1').length) {
        jQuery("#slider_v1").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 6000,
            navigation: {
                onHoverStop: "on"
            },
            responsiveLevels: [1920, 1203, 975, 751, 463],
            gridwidth: [1200, 980],
            gridheight: [712, 612, 512, 512, 412]
        });
    }
    
    if($('#slider_v2').length) {
        jQuery("#slider_v2").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 6000,
            navigation: {
                onHoverStop: "on",
                bullets: {
                    enable: true,
                    hide_onmobile: true,
                    hide_under: 1100,
                    style: "hermes",
                    hide_onleave: false,
                    direction: "horizontal",
                    container: "layergrid",
                    h_align: "center",
                    v_align: "top",
                    h_offset: 0,
                    v_offset: 805,
                    space: 15,
                    tmp: ''
                }
            },
            responsiveLevels: [1920, 1203, 975, 751, 463],
            gridwidth: [1200, 980],
            gridheight: [850, 750, 450, 450, 450]
        });
    }
    
    if($('#slider_v3').length) {
        jQuery("#slider_v3").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 6000,
            navigation: {
                onHoverStop: "on"
            },
            responsiveLevels: [1920, 1203, 975, 751, 463],
            gridwidth: [1200, 980],
            gridheight: [590, 490, 490, 490, 490]
        });
    }
    
    if($('#slider_v4').length) {
        jQuery("#slider_v4").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 6000,
            navigation: {
                onHoverStop: "on"
            },
            responsiveLevels: [1920, 1203, 975, 751, 463],
            gridwidth: [1200, 980],
            gridheight: [570, 470, 470, 470, 470],
            minHeight: 200
        });
    }
}

function mobileMenu() {
    if ($('.bars-mobile').length) {
        $('.bars-mobile').on('click', function () {
            $('.mobile-menu').slideToggle(300, 'linear');
            $('.bars-mobile').toggleClass('open');
            return false;
        });
    }
}

function childMobileMenu() {
    if ($('.nav-holder').length) {
        $('.nav-holder li.has-submenu').children('a').append(function () {
            return '<button class="dropdown-expander"><span class="fa fa-chevron-down"></span></button>';
        });
        
        $('.nav-holder .dropdown-expander').on('click', function () {
            if($(this).parent().parent().hasClass('uk-active')) {
                $(this).parent().parent().children('.submenu').slideToggle();
                $(this).find('span').toggleClass('fa-chevron-down fa-chevron-up');
                $(this).parent('a').parent('li').toggleClass('uk-active');
            }
            else {
                $('.nav-holder li.has-submenu .submenu').slideUp();
                $('.nav-holder li.has-submenu').removeClass('uk-active');
                $('.nav-holder li.has-submenu .dropdown-expander').find('span').removeClass('fa-chevron-up');
                $('.nav-holder li.has-submenu .dropdown-expander').find('span').addClass('fa-chevron-down');
                $(this).parent().parent().addClass('uk-active');
                $(this).find('span').removeClass('fa-chevron-down');
                $(this).find('span').addClass('fa-chevron-up');
                $(this).parent().parent().children('.submenu').slideDown();
            }
            return false;
        });
    }
}

function subContentQuestion() {
    if ($('.holder-question').length) {
        if($('.holder-question li').hasClass('uk-active')) {
            $(this).children('.sub-content').slideDown();
            $(this).children('a').children('span').attr('class', 'fa fa-minus');
        }
        $('.holder-question .has-title a').on('click', function () {
            if($(this).parent().hasClass('uk-active')) {
                return false;
            }
            else {
                $('.holder-question .has-title .sub-content').slideUp();
                $('.holder-question .has-title').removeClass('uk-active');
                $('.holder-question .has-title a').find('span').removeClass('fa-minus');
                $('.holder-question .has-title a').find('span').addClass('fa-plus');
                $(this).parent().addClass('uk-active');
                $(this).find('span').removeClass('fa-plus');
                $(this).find('span').addClass('fa-minus');
                $(this).siblings('.sub-content').slideDown();
            }
            return false;
        });
    }
}

function owlCarousel() {
    if($('.loop-one').length) {
        $('.loop-one').owlCarousel({
            center: false,
            items: 2,
            nav: false,
            loop: true,
            margin: 30,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 2
                }
            }
        });
    }
    
    if($('.loop-two').length) {
        $('.loop-two').owlCarousel({
            center: false,
            items: 1,
            nav: false,
            loop: true,
            margin: 0,
            autoplay: true
        });
    }
    
    if($('.loop-three').length) {
        $('.loop-three').owlCarousel({
            center: false,
            items: 3,
            nav: false,
            loop: true,
            margin: 30,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                }
            }
        });
    }
    
    if($('.loop-four').length) {
        $('.loop-four').owlCarousel({
            center: false,
            items: 2,
            nav: false,
            loop: true,
            margin: 30,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                }
            }
        });
    }
    
    if($('.loop-five').length) {
        $('.loop-five').owlCarousel({
            center: false,
            items: 3,
            nav: false,
            loop: true,
            margin: 30,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                }
            }
        });
    }
}

function initMap() {
    if ($('.google-map').length) {
        var locations = [
            ['QTC Media <br> Better Medical - Medical Clinic & Healthy - HTML Template', 40.712784, -74.005941, 1]
        ];
        
        var map = new google.maps.Map(document.getElementById('gmap_contact'), {
            zoom: 16,
            center: new google.maps.LatLng(40.712784, -74.005941),
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
                {
                    "featureType": "landscape",
                    "stylers": [
			{
                            "hue": "#FFA800"
			},
			{
                            "saturation": 0
			},
			{
                            "lightness": 41.400000000000006
			},
			{
                            "gamma": 1
			}
                    ]
                },
                {
                    "featureType": "road.highway",
                    "stylers": [
			{
                            "hue": "#FF0300"
			},
			{
                            "saturation": -100
			},
			{
                            "lightness": 61.39999999999998
			},
			{
                            "gamma": 1
			}
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "stylers": [
			{
                            "hue": "#F5FF00"
			},
			{
                            "saturation": -0.7633587786259568
			},
			{
                            "lightness": -0.17254901960784252
			},
			{
                            "gamma": 1
			}
                    ]
                },
                {
                    "featureType": "road.local",
                    "stylers": [
			{
                            "hue": "#00FFFC"
			},
			{
                            "saturation": 0
			},
			{
                            "lightness": 52
			},
			{
                            "gamma": 1
			}
                    ]
                },
                {
                    "featureType": "water",
                    "stylers": [
			{
                            "hue": "#00B5FF"
			},
			{
                            "saturation": 62.74509803921572
			},
			{
                            "lightness": -27.999999999999986
			},
			{
                            "gamma": 1
			}
                    ]
                },
                {
                    "featureType": "poi",
                    "stylers": [
			{
                            "hue": "#9FFF00"
			},
			{
                            "saturation": 0
			},
			{
                            "lightness": 0
			},
			{
                            "gamma": 1
			}
                    ]
                }
            ]
        });
        
        var infowindow = new google.maps.InfoWindow();
        
        var marker, i;
        
        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map
            });
            
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                }
            })(marker, i));
        }
    };
}

function hoverdirMaster() {
    if($('#da-thumbs').length) {
        $('#da-thumbs .box-hv-dir').hoverdir();
    }
}

function filterPrice() {
    if ($('#price_filter').length) {
        $("#price_filter").slider({
            range: true,
            min: 12,
            max: 130,
            values: [0, 55],
            slide: function (event, ui) {
                $("#min").val("$" + ui.values[ 0 ]);
                $("#max").val("$" + ui.values[ 1 ]);
            }
        });
        $("#min").val("$" + $("#price_filter").slider("values", 0));
        $("#max").val("$" + $("#price_filter").slider("values", 1));
    }
}

function qtyProduct() {
    if($('.box-qty').length) {
        $('.box-qty .qty-plus').on('click', function() {
            var $button = $(this);
            var intValue = $button.parent().find('.qty-number').val();
            $button.parent().find('.qty-number').val(parseInt(intValue, 10) + 1);
            return false;
        });
        
        $('.box-qty .qty-minus').on('click', function() {
            var $button = $(this);
            var intValue = $button.parent().find('.qty-number').val();
            if (parseInt(intValue, 10) > 1) {
                $button.parent().find('.qty-number').val(parseInt(intValue, 10) - 1);
            }
            return false;
        });
        
        $('.qty-number').on('blur', function () {
            var $button = $(this);
            if ($button.parent().find('.qty-number').val() === "" || parseInt($button.parent().find('.qty-number').val(), 10) === 0) {
                $button.parent().find('.qty-number').val("1");
            }
        });
        $('.qty-number').on('keypress', function (evt) {
            var charCode = (evt.which) ? evt.which : event.keyCode;
            if (charCode > 31 && (charCode < 48 || charCode > 57))
                return false;
            return true;
        });
    }
}

function raTing() {
    if ($('#rateYo').length) {
        $("#rateYo").rateYo({
            rating: 3,
            halfStar: true,
            ratedFill: "#17c0c3"
        });
    }
}

function countDown() {
    if($('.count-down').length) {
        $('.count-down').countdown({
            date: '2018-05-25',
            offset: -8
        });
    }
}
    
// instance of fuction while Document ready event
jQuery(document).on('ready', function () {
    (function ($) {
        revolutionSlider();
        mobileMenu();
        childMobileMenu();
        subContentQuestion();
        owlCarousel();
        hoverdirMaster();
        filterPrice();
        qtyProduct();
        raTing();
        countDown();
    })(jQuery);
});
