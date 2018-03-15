import $ from 'jquery';
import owlCarousel from 'owl.carousel';
import MobileMenu from './modules/MobileMenu';
// import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();
// var stickyHeader = new StickyHeader();
var modal = new Modal();

$('.owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    items: 1
});