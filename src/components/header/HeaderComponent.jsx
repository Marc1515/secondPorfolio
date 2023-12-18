import { useEffect, useState, useContext } from 'react';
import { MenuContext } from './../../context/MenuContext';
import BurguerButtonComponent from './burguerButton/BurguerButtonComponent';
import './HeaderComponent.scss';

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
				<div className='header header__wrapper'>
					{windowWidth <= 480 && (
						<BurguerButtonComponent toggleMenu={toggleMenu} />
					)}
					<nav
						className={`header header__nav ${
							menuOpen ? '' : 'header__nav--hidden'
						}`}
					>
						<ul className='header header__list'>
							<li className='header header__item'>
								<a className='header header__link'>
									Marc<span className='header__underline'></span>
								</a>
							</li>
							<li className='header header__item'>
								<a className='header header__link'>
									About Me<span className='header__underline'></span>
								</a>
							</li>
							<li className='header header__item'>
								<a className='header header__link'>
									Technologies<span className='header__underline'></span>
								</a>
							</li>
							<li className='header header__item'>
								<a className='header header__link'>
									Projects<span className='header__underline'></span>
								</a>
							</li>
							<li className='header header__item'>
								<a className='header header__link'>
									Contact<span className='header__underline'></span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
}

export default HeaderComponent;
