document.addEventListener("DOMContentLoaded", event => {
	const menu = document.querySelector(".menu_left");
	const trigger = document.querySelector(".mobileMenuTrigger");

	trigger.addEventListener("click", () => {
		menu.classList.toggle("open");
		trigger.classList.toggle("open");
	});
});
