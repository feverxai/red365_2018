import $ from 'jquery';

class MobileMenu {
	constructor() {
		this.siteHeader = $(".site-header");
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent = $(".site-header__menu-content");
		this.loginIcon = $(".site-header__login-mb");
		this.loginContent = $(".site-header__login-content");
		this.events();
	}

	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this));
		this.loginIcon.click(this.toggleTheLogin.bind(this));
	}

	toggleTheMenu() {
		this.menuContent.toggleClass("site-header__menu-content--is-visible");
		this.siteHeader.toggleClass("site-header--is-expanded");
		this.menuIcon.toggleClass("site-header__menu-icon--close-x");
		this.loginContent.removeClass("site-header__login-content--is-visible");
		this.loginIcon.removeClass("site-header__login-mb--active");		
	}

	toggleTheLogin() {
		this.loginContent.toggleClass("site-header__login-content--is-visible");
		this.siteHeader.toggleClass("site-header--is-expanded");
		this.loginIcon.toggleClass("site-header__login-mb--active");
		this.menuIcon.removeClass("site-header__menu-icon--close-x");
		this.menuContent.removeClass("site-header__menu-content--is-visible");
	}
}

export default MobileMenu;