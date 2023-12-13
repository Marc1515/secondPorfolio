import { createContext, useState } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<MenuContext.Provider value={{ menuOpen, toggleMenu }}>
			{children}
		</MenuContext.Provider>
	);
};
