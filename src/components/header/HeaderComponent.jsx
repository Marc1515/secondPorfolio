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
			{windowWidth <= 480 && (
				<div className='burguerButton'>
					<BurguerButtonComponent toggleMenu={toggleMenu} />
				</div>
			)}
			<header className={`header ${menuOpen ? '' : 'header--hidden'}`}>
				<nav className='header__nav'>
					<ul className='header__list'>
						<li className='header__item'>
							<a className='header__link'>
								Marc<span className='header__underline'></span>
							</a>
						</li>
						<li className='header__item'>
							<a className='header__link'>
								About Me<span className='header__underline'></span>
							</a>
						</li>
						<li className='header__item'>
							<a className='header__link'>
								Technologies<span className='header__underline'></span>
							</a>
						</li>
						<li className='header__item'>
							<a className='header__link'>
								Projects<span className='header__underline'></span>
							</a>
						</li>
						<li className='header__item'>
							<a className='header__link'>
								Contact<span className='header__underline'></span>
							</a>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default HeaderComponent;
