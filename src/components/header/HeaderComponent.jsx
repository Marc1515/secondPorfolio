import './headerStyles.scss';

function HeaderComponent() {
	return (
		<>
			<header className='header'>
				<nav className='header__nav nav'>
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
