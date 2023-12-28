import { useContext } from 'react';
import { MenuContext } from '../../../context/MenuContext.jsx';
import './BurguerButtonComponent.scss';

function BurguerButtonComponent() {
	const { toggleMenu, burguerButtonOpen } = useContext(MenuContext);

	const handleToggle = () => {
		toggleMenu();
	};

	return (
		<>
			<div
				className={burguerButtonOpen ? 'menu-button' : 'menu-button-open'}
				onClick={handleToggle}
			>
				<div className='menu-button-burguer'></div>
			</div>
		</>
	);
}

export default BurguerButtonComponent;
