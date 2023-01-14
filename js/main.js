const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const btnArrow = document.querySelector('.btn-arrow');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('hamburger-active');
	menu.classList.toggle('active');
	btnArrow.classList.toggle('btn-active');
});

menu.addEventListener('click', (e) => {
	if (e.target.tagName.toLowerCase() === 'a') {
		menu.classList.remove('active');
		hamburger.classList.remove('hamburger-active');
	}
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

	if (isBtn) {
		const content = e.target.parentNode.querySelector('.span-read-more');
		content.classList.toggle('open');
		const dots = e.target.parentNode.querySelector('.dots');
		dots.classList.toggle('open');

		current.textContent = current.textContent === 'Read more' ? 'Read less' : 'Read more';
	}
});

const img = document.querySelector('.header-img');
const headerContent = document.querySelector('.header-content');

gsap.set([img, headerContent, nav], { autoAlpha: 0 });

const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

tl.fromTo(nav, { y: '-=200' }, { duration: 1, y: '+=200', autoAlpha: 1 })
	.fromTo(img, { x: '+=500' }, { duration: 1, x: '-=500', autoAlpha: 1 }, '-=1')
	.fromTo(headerContent, { x: '-=500' }, { duration: 1, x: '+=500', autoAlpha: 1 }, '-=1')
	.fromTo(btnArrow, { y: '+=200' }, { duration: 1, y: '-=200', opacity: 1 });

gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll('.section-wrapper');

sections.forEach((section) => {
	gsap.fromTo(
		section.children,
		{ y: '+=150', autoAlpha: 0 },
		{
			y: 0,
			autoAlpha: 1,
			duration: 0.8,
			ease: 'easeInOut',
			scrollTrigger: {
				trigger: section,
				start: '-20% 80%',
				toggleActions: 'restart',
			},
		}
	);
});
