import { useContext, useEffect, useState, useRef } from 'react';
import { MenuContext } from '../../../context/MenuContext';
import { Link } from 'react-scroll';
import './NavbarComponent.scss';

const NavbarComponent = () => {
	const [activeLink, setActiveLink] = useState(null);
	const [isScrolled, setIsScrolled] = useState(false);
	const lastScrollY = useRef(0); // Referencia para almacenar la última posición de scroll
	const lastAppliedScrollY = useRef(0); // Nueva referencia para la última posición de scroll donde se aplicó la clase

	const { toggleMenu } = useContext(MenuContext);

	const handleClick = (e) => {
		const widthScreen = window.screen.width;
		if (widthScreen < 992) {
			toggleMenu();
		}
	};

	const handleScroll = () => {
		const currentScroll = window.scrollY;

		if (currentScroll === 0) {
			setIsScrolled(false);
		}

		// Comprobar si se ha desplazado hacia abajo y ha pasado de 100px
		if (currentScroll > lastScrollY.current && currentScroll > 100) {
			setIsScrolled(true);
			lastAppliedScrollY.current = currentScroll; // Actualizar la última posición de scroll donde se aplicó la clase
		}
		// Comprobar si se está desplazando hacia arriba y ha pasado 100px desde la última aplicación
		else if (
			currentScroll < lastScrollY.current &&
			lastAppliedScrollY.current - currentScroll > 400
		) {
			setIsScrolled(false);
		}

		// Actualizar la última posición de scroll
		lastScrollY.current = currentScroll;
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const updateActiveLink = (link) => {
		setActiveLink(link);
	};

	return (
		<nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
			<ul className='navbar__list'>
				<li className='navbar__item'>
					<Link
						onClick={handleClick}
						to='marc'
						spy={true}
						smooth={true}
						duration={500}
						className={`navbar__link ${activeLink === 'marc' ? 'active' : ''}`}
						onSetActive={() => updateActiveLink('marc')}
					>
						Marc<span className='navbar__underline'></span>
					</Link>
				</li>
				<li className='navbar__item'>
					<Link
						onClick={handleClick}
						to='about'
						spy={true}
						smooth={true}
						duration={500}
						className={`navbar__link ${activeLink === 'about' ? 'active' : ''}`}
						onSetActive={() => updateActiveLink('about')}
					>
						About Me<span className='navbar__underline'></span>
					</Link>
				</li>
				<li className='navbar__item'>
					<Link
						onClick={handleClick}
						to='technologies'
						spy={true}
						smooth={true}
						duration={500}
						className={`navbar__link ${
							activeLink === 'technologies' ? 'active' : ''
						}`}
						onSetActive={() => updateActiveLink('technologies')}
					>
						Technologies<span className='navbar__underline'></span>
					</Link>
				</li>
				<li className='navbar__item'>
					<Link
						onClick={handleClick}
						to='projects'
						spy={true}
						smooth={true}
						duration={500}
						className={`navbar__link ${
							activeLink === 'projects' ? 'active' : ''
						}`}
						onSetActive={() => updateActiveLink('projects')}
					>
						Projects<span className='navbar__underline'></span>
					</Link>
				</li>
				<li className='navbar__item'>
					<Link
						onClick={handleClick}
						to='contact'
						spy={true}
						smooth={true}
						duration={500}
						className={`navbar__link ${
							activeLink === 'contact' ? 'active' : ''
						}`}
						onSetActive={() => updateActiveLink('contact')}
					>
						Contact<span className='navbar__underline'></span>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavbarComponent;
