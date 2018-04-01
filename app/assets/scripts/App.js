import $ from 'jquery';
import owlCarousel from 'owl.carousel';
import MobileMenu from './modules/MobileMenu';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();
var stickyHeader = new StickyHeader();
var modal = new Modal();

$('#banner-carousel').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    loop: true,
    nav: false,
    dots: false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    items: 1
});

var owl = $('#game-carousel'),
    owlOptions = {
        loop: true,
        nav: true,
        dots: false,
        items: 1
    };

if ( $(window).width() > 767) {
    var owlActive = owl.owlCarousel(owlOptions);
} else {
    owl.addClass('off');
}

$(window).resize(function() {
    if ( $(window).width() > 767 ) {
        if ( $('.owl-carousel').hasClass('off') ) {
            var owlActive = owl.owlCarousel(owlOptions);
            owl.removeClass('off');
        }
    } else {
        if ( !$('.owl-carousel').hasClass('off') ) {
            owl.addClass('off').trigger('destroy.owl.carousel');
            owl.find('.owl-stage-outer').children(':eq(0)').unwrap();
        }
    }
});