import './styles/_styles.scss';

function HeaderComponent() {
	return (
		<>
			<header className='header'>
				<nav className='header__nav nav'>
					<ul className='nav__ul'>
						<li className='nav__li'>Marc</li>
						<li className='nav__li'>About Me</li>
						<li className='nav__li'>Technologies</li>
						<li className='nav__li'>Projects</li>
						<li className='nav__li'>Contact</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default HeaderComponent;
