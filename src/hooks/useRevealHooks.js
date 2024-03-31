import ScrollReveal from 'scrollreveal';

export const useScrollReveal = (selector, options = {}) => {
	ScrollReveal().reveal(selector, {
		delay: 500,
		distance: '50px',
		easing: 'ease-in-out',
		origin: 'bottom',
		reset: false,
		...options,
	});
};

export const useInitReveal = (selector, options = {}) => {
	ScrollReveal().reveal(selector, {
		duration: 2000,
		opacity: 0,
		distance: '0px',
		reset: false,
		...options,
	});
};
