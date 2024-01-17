/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const ExpandNavbarContext = createContext();

export const ExpandNavbarProvider = ({ children }) => {
	const [isScrolled, setIsScrolled] = useState(false);

	const handleScroll = () => {
		const offset = window.scrollY;
		setIsScrolled(offset > 50);
	};

	return (
		<ExpandNavbarContext.Provider value={{ handleScroll, isScrolled }}>
			{children}
		</ExpandNavbarContext.Provider>
	);
};
