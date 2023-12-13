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

	return (
		<>
			<header className='header'>
				{windowWidth <= 480 && (
					<BurguerButtonComponent toggleMenu={toggleMenu} />
				)}
				<nav className={`header__nav nav ${menuOpen ? '' : 'hidden'}`}>
					<ul className='nav nav__ul'>
						<li className='nav nav__li'>Marc</li>
						<li className='nav nav__li'>About Me</li>
						<li className='nav nav__li'>Technologies</li>
						<li className='nav nav__li'>Projects</li>
						<li className='nav nav__li'>Contact</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default HeaderComponent;
