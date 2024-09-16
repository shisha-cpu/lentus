/*********************************************************************************

	Template Name: CONSULEN - Multipurpose Bootstrap 4 Template
	Description: CONSULEN is a best templete for your corporate/business website which comes with unique design and user friendly code.  
	Version: 1.0
    Note: This is scripts js. All custom scripts here.

**********************************************************************************/

/*===============================================================================

    [ INDEX ]
	|
    |___Body Overlay
    |___Trigger Menu
    |___Button Effect
    |___Trigger Sidemenu
    |___Banner Padding
    |___Mouse Parallax
    |   |___Banner Layers Parallax
    |   |___Banner Content Parallax
    |
    |___Trigger Sidemenu Another
    |___Sticky Header
    |___Last Dropdown Selector
    |___Sidemenu Dropdown
    |___Contact Form Message Popup
    |
	[END INDEX ]

================================================================================*/

(function ($) {
    'use strict';

    
    /* Body Overlay */
    $('<div class="body-overlay"></div>').appendTo($('.wrapper'));

    function bodyOverlay() {
        $('html').css('overflow-y', 'hidden');
        $('.body-overlay').addClass('is-visible')
            .on('click', function () {
                $(this).removeClass('is-visible');
                $('.header-sidemenu-minimal').removeClass('is-visible');
                $('.sidemenu-header-optional-trigger').removeClass('is-active');
                $('.wrapper').removeClass('left-offset-active');
                $('html').css('overflow-y', 'auto');
            });

    }



    /* Trigger Menu */
    var slideMenu = function (container, trigger) {
        var slideMenuContainer = container;
        var slideMenutrigger = trigger;
        $(slideMenutrigger).on('click', function () {
            $(this).toggleClass('is-active')
                .siblings(slideMenuContainer).toggleClass('is-visible');
        });
    };
    var slidemenu1 = new slideMenu('.slide-menu-inner', '.header-style-2 .trigger-menu-icon');



    /* Button Effect */
    function buttonEffect() {
        $('<b></b>').appendTo('.cr-btn');
        $('.cr-btn')
            .on('mouseenter', function (e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('b').css({
                    top: relY,
                    left: relX
                });
            })
            .on('mouseout', function (e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('b').css({
                    top: relY,
                    left: relX
                });
            });
        
    }
    buttonEffect();




    /* Trigger Sidemenu */
    function triggerHeader() {
        var menuContainer = $('.header-sidemenu-triggered');
        $('<button class="header-sidemenu-trigger"><i class="flaticon-signs"></i></button>').appendTo(menuContainer)
            .on('click', function () {
                $(this).find('i').toggleClass('flaticon-close flaticon-signs');
                menuContainer.toggleClass('is-visible');
            });
    }
    triggerHeader();





    /* Banner Padding */
    function fixedHeader() {
        var winWidth = $(window).width();
        if (!$('.sidemenu-wrapper').length) {

            if (winWidth > 991) {
                if ($('.fixed-header').length) {
                    var headerHeight = $('.header').innerHeight();
                    $('.single-banner').css({
                        'min-height': 'calc(100vh - ' + headerHeight + 'px)',
                    });
                    $('.fixed-header').next().css({
                        'margin-top': headerHeight + 'px'
                    });
                }
            }

        }
    }
    fixedHeader();

    /* Trigger Sidemenu Another */
    function headerSidemenuOptionalTrigger() {
        var trigger = $('.sidemenu-header-optional-trigger');
        var container = $('.header-sidemenu-minimal');
        trigger.on('click', function () {
            container.toggleClass('is-visible');
            $(this).toggleClass('is-active');
            $('.wrapper').toggleClass('left-offset-active');
            bodyOverlay();
        });
    }
    headerSidemenuOptionalTrigger();
    
    /* Phone button */
    function phoneButton() {
        var trigger = $('#popup_phone');
        trigger.on('click', function () {
            ym(72695710,'reachGoal','popup_phone');
            if(isPhone()) { 
                return true; 
            } else { 
                $("#contact").modal('show');
                return false;
            }
            
        });
    }
    phoneButton();
    
    
    function isPhone() {
        return (/Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent))?true:false;
    }
    
    /* Phone BG */
    function phoneBg() {
        var vid = document.getElementById("bgvideo");
        if (vid !== null) {
            vid.oncanplaythrough = function() {
                if (vid.buffered.end(0) >= vid.duration - 1) {
                    $("#bgvideo").css({"display" : "block"});
                }
             }; 
        }
    }
    phoneBg();
    
    /* Chat button */
    function chatButton() {
        var trigger = $('#popup_chat');
        trigger.on('click', function () {
            var chatObj = $("#chat_window");
            if($(this).hasClass("active")) { 
                chatObj.hide("drop", { direction: "right" },300); 
                $(this).removeClass("active");
            } else { 
                chatObj.show("drop", { direction: "right" }, 300); 
                $(this).addClass("active");
            }
            
        });
    }
    chatButton();

    function surfaceAnimation() {
        showCoating();
        $(".layer-item, .line-item").on('mouseover', function () {
            ym(72695710,'reachGoal','layer_view');
            $(this).animate({ "left" : "40px"}, 160);
        }).on('mouseleave', function () {
            if (!$(this).hasClass("active")) {
                $(this).animate({ "left" : "0"}, 160);
            }
        }).on("click", function(){
            var itemObjs = $(".layer-item, .line-item");
            var layer = $(this);
            // Убрать все всплывающие подсказки
            $(".layer-slice, .line-slice").popover('hide');
            
            // Выборка среза слоя для доступа к объекту "popover"
            var popoverObject = $(this).children().next();
            
            // Проверка, что слой еще не активен
            if (!layer.hasClass("active")) {
                itemObjs.removeClass("active");
                // Указать текущий слой как активный
                layer.addClass("active");
                // Выводим всплывающее сообщение
                popoverObject.popover('show');
                // Убираем (если есть) другой активный слой 
                itemObjs.not(".active").animate({ "left" : "0"}, 160);
                
            } else {
                popoverObject.popover('hide');
                $(".layer-item, .line-item").removeClass("active");
            }
            
            $(".popover").on('mouseover', function () {
                $(this).popover('hide');
                $(".layer-item, .line-item").removeClass("active").animate({ "left" : "0"}, 160);
            });
        });
    }
    surfaceAnimation();
    
    function surfaceAnimationVideo() {
        showCoatingVideo();
        $(".layer-video-item, .line-video-item").on('mouseover', function () {
            ym(72695710,'reachGoal','layer_view');
            $(this).animate({ "left" : "40px"}, 160);
        }).on('mouseleave', function () {
            if (!$(this).hasClass("active")) {
                $(this).animate({ "left" : "0"}, 160);
            }
        }).on("click", function(){
            var itemObjs = $(".layer-video-item, .line-video-item");
            var layer = $(this);
            // Убрать все всплывающие подсказки
            $(".layer-video-slice, .line-video-slice").popover('hide');
            var idl = parseInt($(this).attr("idl"));
            var setTime = 0;
            switch(idl) {
                case 1: setTime = 64; break;
                case 3: case 4: setTime = 93; break; 
                case 2: setTime = 216; break;
                case 5: setTime = 273; break;
                case 8: setTime = 311; break;
                case 10: setTime = 377; break;
                case 0: setTime = 408; break;
            }
            player_1.currentTime(setTime);
            player_1.play();
            // Выборка среза слоя для доступа к объекту "popover"
            var popoverObject = $(this).children().next();
            
            // Проверка, что слой еще не активен
            if (!layer.hasClass("active")) {
                itemObjs.removeClass("active");
                // Указать текущий слой как активный
                layer.addClass("active");
                // Выводим всплывающее сообщение
                popoverObject.popover('show');
                // Убираем (если есть) другой активный слой 
                itemObjs.not(".active").animate({ "left" : "0"}, 160);
                itemObjs.css({ "font-weight" : "normal", "color" : "#ffffff !important"});
            } else {
                popoverObject.popover('hide');
                $(".layer-video-item, .line-video-item").removeClass("active");
            }
            
            $(".popover").on('mouseover', function () {
                $(this).popover('hide');
                $(".layer-video-item, .line-video-item").removeClass("active").animate({ "left" : "0"}, 160);
                
            });
        });
    }
    surfaceAnimationVideo();

    function showCoating(){
        $(document).ready(function(){ 
            var time = 700;
            
            $($(".layer-video-item").get().reverse()).each(function(){
                var obj = $(this);
                setTimeout(function(){
                    obj.show('drop', { direction: "left" }, 500);
                },time);
                time += 600;
            });
            setTimeout(function(){
                $(".line-video-item").show('drop', { direction: "left" }, 500);
            }, time);
            setTimeout(function(){
                $(".itf-video-item").show('drop', { direction: "right" }, 500);
            }, time + 600);
        });
    }
    
    function showCoatingVideo(){
        $(document).ready(function(){ 
            var time = 700;
            
            $($(".layer-item").get().reverse()).each(function(){
                var obj = $(this);
                setTimeout(function(){
                    obj.show('drop', { direction: "left" }, 500);
                },time);
                time += 600;
            });
            setTimeout(function(){
                $(".line-item").show('drop', { direction: "left" }, 500);
            }, time);
            setTimeout(function(){
                $(".itf-item").show('drop', { direction: "right" }, 500);
            }, time + 600);
        });
    }
    
    function pageLink() {
        $("#about").on("click", function(){
            var p = $(".about-us-area");
            var offset = p.offset();
            // Yandex.Metrika | Клик по кнопке "Узнать подробнее"
            ym(72695710,'reachGoal','about');
            $('html, body').animate({scrollTop:offset.top}, 'slow');
        });
    }
    pageLink();
    
    function color() {
        $(".color_item").on("click", function(){
            var obj = $(this);
            var sfx = obj.parent().attr("sfx");
            var img = obj.children(".color_img").css("background-image");
            var txt = obj.children(".color_text").text();
            var clr = obj.attr("clr");
            $("#btn_img_"+sfx).css({"background-image" : img});
            $("#btn_text_"+sfx).text(txt);
            
            if (sfx == "in") { $(".inner").css({"background-color" : clr}); }
            if (sfx == "out") { $(".corts").css({"background-color" : clr}); }
        });
    }
    color();

    /* Sticky Header */
    $(window).on('scroll', function () {
        var scrollPos = $(this).scrollTop();
        if (scrollPos > 300) {
            $('.sticky-header').addClass('is-sticky');
        } else {
            $('.sticky-header').removeClass('is-sticky');
        }
    });




    /* Last Dropdown Selector */
    function menuDropdownLast() {
        $('nav.menu > ul > li').slice(-3).addClass('last-element');
    }
    menuDropdownLast();




    /* Sidemenu Dropdown */
    function sidemenuDropdown() {
        var $this = $('.header-sidemenu');
        $this.find('nav.menu .cr-dropdown')
            .find('ul').slideUp();
        $this.find('nav.menu li.cr-dropdown > a, nav.menu li.cr-sub-dropdown > a').on('click', function (e) {
            e.preventDefault();

            $(this).next().slideToggle();
        });
    }
    sidemenuDropdown();

    function padel() {
        $('.pg-padel').slick({
            dots: false,
            infinite: true,
            speed: 300,
            autoplay: false,
            arrows: true,
            prevArrow: '<span class="cr-slider-nav cr-slider-nav-left"><i class="icofont icofont-simple-left"></i></span>',
            nextArrow: '<span class="cr-slider-nav cr-slider-nav-right"><i class="icofont icofont-simple-right"></i></span>',
        });
    }padel();
    
    function coating_view() {
        $('.pg-coating').slick({
            dots: true,
            infinite: false,
            speed: 800,
            autoplay: true,
            arrows: true,
            prevArrow: '<span class="cr-slider-nav cr-slider-nav-left"><i class="icofont icofont-simple-left"></i></span>',
            nextArrow: '<span class="cr-slider-nav cr-slider-nav-right"><i class="icofont icofont-simple-right"></i></span>',
        });
    }coating_view();
    
    function tent_view() {
        $('.pg-tent').slick({
            dots: true,
            infinite: true,
            speed: 400,
            autoplay: true,
            arrows: true,
            fade: true,
            cssEase: 'linear',
            prevArrow: '<span class="cr-slider-nav cr-slider-nav-left"><i class="icofont icofont-simple-left"></i></span>',
            nextArrow: '<span class="cr-slider-nav cr-slider-nav-right"><i class="icofont icofont-simple-right"></i></span>',
        });
    }tent_view();


    // Contact Form Message Popup
    function contactFormPopup() {
        var trigger = $('#contact-form [type="submit"]'),
            container = $('.cr-contact-message-modal');

        trigger.on('click', function () {
            container.addClass('is-visible');
        });

        $('<button><i class="icofont icofont-close"></i></button>').appendTo(container).on('click', function () {
            container.removeClass('is-visible');
        });
    }
    contactFormPopup();


    function certificates(){
        $('.pg-certificates').slick({
            dots: false,
            infinite: true,
            speed: 300,
            autoplay: false,
            arrows: true,
            prevArrow: '<span class="cr-slider-nav cr-slider-nav-left"><i class="icofont icofont-simple-left"></i></span>',
            nextArrow: '<span class="cr-slider-nav cr-slider-nav-right"><i class="icofont icofont-simple-right"></i></span>',
        });
    }certificates();

})(jQuery);


