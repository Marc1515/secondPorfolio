import { useState, useContext } from 'react';
import { MenuContext } from '../../../context/MenuContext.jsx';
import './BurguerButtonComponent.scss';

function BurguerButtonComponent() {
	const [isOpen, setIsOpen] = useState(true);
	const { toggleMenu } = useContext(MenuContext);

	const handleToggle = () => {
		setIsOpen(!isOpen);
		toggleMenu();
	};

	return (
		<>
			<div
				className={isOpen ? 'menu-button' : 'menu-button-open'}
				onClick={handleToggle}
			>
				<div className='menu-button-burguer'></div>
			</div>
		</>
	);
}

export default BurguerButtonComponent;
