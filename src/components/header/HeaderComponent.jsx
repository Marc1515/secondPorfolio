import { useEffect, useState, useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import BurguerButtonComponent from './BurguerButton/BurguerButtonComponent';
import NavbarComponent from './Navbar/NavbarComponent';
import './HeaderComponent.scss';

function HeaderComponent() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const { toggleMenu, navbarOpen } = useContext(MenuContext);

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<>
			{windowWidth <= 480 && (
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
