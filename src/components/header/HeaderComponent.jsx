import { useEffect, useState, useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';
import { Link } from 'react-scroll';
import BurguerButtonComponent from './BurguerButton/BurguerButtonComponent';
import './HeaderComponent.scss';

function HeaderComponent() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const { menuOpen, setMenuOpen, toggleMenu } = useContext(MenuContext);

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const handleClick = (e) => {
		const widthScreen = window.screen.width;
		if (widthScreen <= 800) {
			setMenuOpen(!menuOpen);
		}
	};

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
							<Link
								onClick={handleClick}
								to='marc'
								spy={true}
								smooth={true}
								duration={500}
								className='header__link'
							>
								Marc<span className='header__underline'></span>
							</Link>
						</li>
						<li className='header__item'>
							<Link
								onClick={handleClick}
								to='about'
								spy={true}
								smooth={true}
								duration={500}
								className='header__link'
							>
								About Me<span className='header__underline'></span>
							</Link>
						</li>
						<li className='header__item'>
							<Link
								onClick={handleClick}
								to='technologies'
								spy={true}
								smooth={true}
								duration={500}
								className='header__link'
							>
								Technologies<span className='header__underline'></span>
							</Link>
						</li>
						<li className='header__item'>
							<Link
								onClick={handleClick}
								to='projects'
								spy={true}
								smooth={true}
								duration={500}
								className='header__link'
							>
								Projects<span className='header__underline'></span>
							</Link>
						</li>
						<li className='header__item'>
							<Link
								onClick={handleClick}
								to='contact'
								spy={true}
								smooth={true}
								duration={500}
								className='header__link'
							>
								Contact<span className='header__underline'></span>
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default HeaderComponent;
