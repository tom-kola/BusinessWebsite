const initialView = document.querySelector(".intro");
const introSlogan = document.querySelector(".intro--slogan");
const body = document.querySelector("body");
const animatedElements = document.querySelectorAll(".from-bottom");
const header = document.querySelector("header");
const headerBtn = document.querySelector(".header--btn");
const contactBtns = document.querySelectorAll(".to-contact");
const slogansSection = document.querySelector(".slogans");
const contactSection = document.querySelector(".contact");

const titleAnimation = () => {
	return new Promise((resolve) => {
		introSlogan.classList.add("intro-slogan");
		resolve();
	});
};

const initialViewDisapperaing = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			initialView.classList.add("disappearing");
		}, 1900);
		resolve();
	});
};

const showWebsite = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			initialView.style.display = "none";
			body.style.overflowY = "visible";
		}, 2900);
		resolve();
	});
};
const refreshWebsite = () => {
	return new Promise((resolve) => {
		setTimeout(() => {
			window.scroll({
				top: 0,
				left: 0,
			});
		}, 100);

		resolve();
	});
};

const initialViewFunction = async () => {
	titleAnimation();
	await refreshWebsite();
	await initialViewDisapperaing();
	await showWebsite();
};

const doOnScroll = () => {
	const triggerBottom = (window.innerHeight / 5) * 4;
	animatedElements.forEach((element) => {
		const elementTop = element.getBoundingClientRect().top;

		if (elementTop < triggerBottom) {
			element.classList.add("bottom-animation");
		}
	});
};

const goToSection = (scroll) => {
	scroll.scrollIntoView();
};

initialViewFunction();
window.addEventListener("scroll", doOnScroll);
headerBtn.addEventListener("click", (e) => {
	e.preventDefault();

	goToSection(slogansSection);
});
contactBtns.forEach((contactBtn) => {
	contactBtn.addEventListener("click", (e) => {
		e.preventDefault();

		goToSection(contactSection);
	});
});
