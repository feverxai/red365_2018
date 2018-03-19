import $ from 'jquery';
import owlCarousel from 'owl.carousel';
import MobileMenu from './modules/MobileMenu';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();
var stickyHeader = new StickyHeader();
var modal = new Modal();

$('#game-carousel').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    items: 1
});

$('#banner-carousel').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    loop: true,
    nav: false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    items: 1
});