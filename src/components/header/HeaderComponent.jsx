import { useEffect, useState, useContext } from 'react';
import { MenuContext } from './../../context/MenuContext';
import BurguerButtonComponent from './burguerButton/BurguerButtonComponent';
import './headerStyles.scss';

function HeaderComponent() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const { menuOpen, toggleMenu } = useContext(MenuContext);

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		const navLinks = document.querySelectorAll('.header__link');
		const underline = document.querySelector('.header__underline');

		const handleMouseEnter = (link) => {
			underline.style.width = `${link.offsetWidth}px`;
			underline.style.left = `${link.offsetLeft}px`;
		};

		const handleMouseLeave = () => {
			underline.style.width = 0;
		};

		navLinks.forEach((link) => {
			link.addEventListener('mouseenter', () => handleMouseEnter(link));
			link.addEventListener('mouseleave', handleMouseLeave);
		});

		return () => {
			navLinks.forEach((link) => {
				link.removeEventListener('mouseenter', () => handleMouseEnter(link));
				link.removeEventListener('mouseleave', handleMouseLeave);
			});
		};
	}, []);

	return (
		<>
			<header className='header'>
				{windowWidth <= 480 && (
					<BurguerButtonComponent toggleMenu={toggleMenu} />
				)}
				<nav className={`header__nav ${menuOpen ? '' : 'hidden'}`}>
					<ul className='header__list'>
						<li className='header__item'>
							<a className='header__link'>Marc</a>
						</li>
						<li className='header__item'>
							<a className='header__link'>About Me</a>
						</li>
						<li className='header__item'>
							<a className='header__link'>Technologies</a>
						</li>
						<li className='header__item'>
							<a className='header__link'>Projects</a>
						</li>
						<li className='header__item'>
							<a className='header__link'>Contact</a>
						</li>
					</ul>
					<div className='header__underline'></div> {/* Agregar esto */}
				</nav>
			</header>
		</>
	);
}

export default HeaderComponent;
