'use strict'
$(document).ready(function(){
    // event for button to open sidebar or sidebar mobile
    $('.menu__toggle').click(function(){
        let widthdevice = $(window).width();
        if (widthdevice <= 810) {
            $('.menu').css({'animation': 'sidebar_open_mobile 1s ease-in-out forwards', 'display': 'block'});
        } else {
            $('.menu').css({'animation': 'sidebar_open 1s ease-in-out forwards', 'display': 'block'});
        }
    })
    // event for button to close sidebar or sidebar mobile
    $('.btn__exit').click(function(){
        let widthdevice = $(window).width();
        if (widthdevice <= 810) {
            $('.menu').css('animation', 'sidebar_off_mobile 1s ease-in-out forwards').fadeOut(900);
        } else {
            $('.menu').css('animation', 'sidebar_off 1s ease-in-out forwards').fadeOut(900);
        }
    });
});