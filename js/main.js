const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const btnArrow = document.querySelector('.btn-arrow');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('hamburger-active');
	menu.classList.toggle('active');
	btnArrow.classList.toggle('btn-active');
});

const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
	const scroll = window.scrollY;

	if (scroll > 0) {
		nav.classList.add('active');
	} else {
		nav.classList.remove('active');
	}
});

const content = document.querySelector('.span-read-more');
const container = document.querySelector('main');

container.addEventListener('click', (e) => {
	const current = e.target;
	const isBtn = current.className.includes('btn-read-more');

	if (!isBtn) return;

	const content = e.target.parentNode.querySelector('.span-read-more');
	content.classList.toggle('open');
	const dots = e.target.parentNode.querySelector('.dots');
	dots.classList.toggle('open');

	current.textContent = current.textContent === 'Read more' ? 'Read less' : 'Read more';
});
