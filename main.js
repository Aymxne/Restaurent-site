const closeBtn = document.querySelector(".nav__close");
const navIcon = document.querySelector(".nav__icon");
const navList = document.querySelector(".nav__list");
const navBgOverlay = document.querySelector(".nav__bg-overlay");

/* Open Navigation */

const navOpen = () => {
	navList.classList.add("nav-active");
	navBgOverlay.classList.add("bg-active");
	document.body.style = "visibility: visible; height: 100vh; width:100vw; overflow:hidden;";
};

/* Closes Navigation */
const navClose = () => {
	navList.classList.remove("nav-active");
	navBgOverlay.classList.remove("bg-active");
	document.body.style = "visibility: visible; height: initial; width:100%; overflow-x: hidden;";
};

/* Add event listenr */
/* Open Nav Bar */
navIcon.addEventListener("click", navOpen);

closeBtn.addEventListener("click", navClose);

/* AOS Begin */
AOS.init({
	offset: 200,
	delay: 100,
	duration: 400,
	easeing: "ease",
	once: false,
	mirror: false,
	anchorPlacement: "top-bottom",
});
