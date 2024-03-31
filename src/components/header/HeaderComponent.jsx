import { useEffect, useState, useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import BurguerButtonComponent from './BurguerButton/BurguerButtonComponent';
import NavbarComponent from './Navbar/NavbarComponent';
import './HeaderComponent.scss';
import { useInitReveal } from '../../hooks/useRevealHooks';

function HeaderComponent() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const { toggleMenu, navbarOpen } = useContext(MenuContext);

	useEffect(() => {
		useInitReveal('.burguerButton, .header');
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		// Cambiar el estilo del cuerpo cuando la Navbar esté abierta o cerrada
		if (navbarOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'visible';
		}

		// Opcional: Limpiar el efecto al desmontar el componente
		return () => {
			document.body.style.overflow = 'visible';
		};
	}, [navbarOpen]);
	return (
		<>
			{windowWidth < 767 && (
				<div className='burguerButton'>
					<BurguerButtonComponent toggleMenu={toggleMenu} />
				</div>
			)}
			<header className={`header ${navbarOpen ? '' : 'header--hidden'}`}>
				<NavbarComponent />
			</header>
		</>
	);
}

export default HeaderComponent;
