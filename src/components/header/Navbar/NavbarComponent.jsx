import { useContext } from 'react';
import { MenuContext } from '../../../context/MenuContext';
import { Link } from 'react-scroll';
import './NavbarComponent.scss';

const NavbarComponent = () => {
	const { toggleMenu } = useContext(MenuContext);

	const handleClick = (e) => {
		const widthScreen = window.screen.width;
		if (widthScreen < 992) {
			toggleMenu();
		}
	};

	return (
		<nav className='navbar'>
			<ul className='navbar__list'>
				<li className='navbar__item'>
					<Link
						onClick={handleClick}
						to='marc'
						spy={true}
						smooth={true}
						duration={500}
						className='navbar__link'
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
						className='navbar__link'
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
						className='navbar__link'
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
						className='navbar__link'
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
						className='navbar__link'
					>
						Contact<span className='navbar__underline'></span>
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavbarComponent;
