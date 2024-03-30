import ScrollReveal from 'scrollreveal';

const useScrollReveal = (selector, options = {}) => {
	ScrollReveal().reveal(selector, {
		delay: 500,
		distance: '50px',
		easing: 'ease-in-out',
		origin: 'bottom',
		reset: false,
		...options,
	});
};

export default useScrollReveal;
