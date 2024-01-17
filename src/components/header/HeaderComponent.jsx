import { useEffect, useState, useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import { ExpandNavbarContext } from '../../context/ExpandNavbarContext';
import BurguerButtonComponent from './BurguerButton/BurguerButtonComponent';
import NavbarComponent from './Navbar/NavbarComponent';
import './HeaderComponent.scss';

function HeaderComponent() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const { toggleMenu, navbarOpen } = useContext(MenuContext);
	const { handleScroll, isScrolled } = useContext(ExpandNavbarContext);

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			{windowWidth < 767 && (
				<div className='burguerButton'>
					<BurguerButtonComponent toggleMenu={toggleMenu} />
				</div>
			)}
			<header className={`header ${navbarOpen ? '' : 'header--hidden'}`}>
				<NavbarComponent isScrolled={isScrolled} />
			</header>
		</>
	);
}

export default HeaderComponent;
