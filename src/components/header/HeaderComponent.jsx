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
				<nav className={`header__nav ${menuOpen ? '' : 'hidden'}`}>
					<ul className='header__list'>
						<li className='header__item'>
							<a className='header__link'>
								Marc<span></span>
							</a>
						</li>
						<li className='header__item'>
							<a className='header__link'>
								About Me<span></span>
							</a>
						</li>
						<li className='header__item'>
							<a className='header__link'>
								Technologies<span></span>
							</a>
						</li>
						<li className='header__item'>
							<a className='header__link'>
								Projects<span></span>
							</a>
						</li>
						<li className='header__item'>
							<a className='header__link'>
								Contact<span></span>
							</a>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default HeaderComponent;
