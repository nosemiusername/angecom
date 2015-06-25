
// makes sure the whole site is loaded
jQuery(window)
        .load(function () {
            "use strict";
            // will first fade out the loading animation
            jQuery(".status").fadeOut();
            // will fade out the whole DIV that covers the website.
            jQuery(".preloader").delay(1000).fadeOut("slow");
           
            // jQuery('body').find('.grid-gallery').parent().addClass('grid-no-padding');
            // var _portfolio_item = jQuery('.grid-gallery').find('.portfolio-item');
            // if(jQuery('html').hasClass('no-csstransforms3d') && jQuery().isotope() && _portfolio_item.attr('style') !== 'undefined') { 
            //    _portfolio_item.removeAttr('style');
            // }

        })