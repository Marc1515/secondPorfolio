import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

import './ScrollTopButtonComponent.scss';
import { useEffect, useState, useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';

const ScrollTopButtonComponent = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [shouldFadeOut, setShouldFadeOut] = useState(false);
	const { toggleMenu } = useContext(MenuContext);

	const toggleVisibility = () => {
		const shouldShow = window.pageYOffset > 250;
		if (shouldShow) {
			setIsVisible(true);
			setShouldFadeOut(false);
		} else if (isVisible && !shouldShow) {
			setShouldFadeOut(true);
			setTimeout(() => {
				setIsVisible(false);
			}, 300);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
		toggleMenu();
	};

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);

		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, [isVisible]);

	return (
		isVisible && (
			<button
				onClick={scrollToTop}
				className={`scrollTopButton ${shouldFadeOut ? 'fadeOut' : ''}`}
			>
				<MdKeyboardDoubleArrowUp />
			</button>
		)
	);
};

export default ScrollTopButtonComponent;
