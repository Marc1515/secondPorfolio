/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const [burguerButtonOpen, setBurguerButtonOpen] = useState(true);

	const toggleMenu = () => {
		setNavbarOpen(!navbarOpen);
		setBurguerButtonOpen(!burguerButtonOpen);
	};

	return (
		<MenuContext.Provider value={{ toggleMenu, navbarOpen, burguerButtonOpen }}>
			{children}
		</MenuContext.Provider>
	);
};
