import { createTheme } from '@mui/material/styles';
import './../variables/_colors.scss';

const getCssColor = (color) =>
	getComputedStyle(document.documentElement).getPropertyValue(color);

const theme = createTheme({
	components: {
		MuiPaginationItem: {
			styleOverrides: {
				root: {
					color: getCssColor('--primary-background-color'), // reemplaza esto con el color que desees
				},
				page: {
					'&.Mui-selected': {
						backgroundColor: '#FFF', // Cambia esto por el color que prefieras para el botón activo
						color: '#000', // Cambia esto por el color de texto que prefieras para el botón activo
					},
					'&.Mui-selected:hover': {
						backgroundColor: 'tuColorParaBotonActivoHover', // Opcional: Cambia esto por el color que prefieras cuando se pasa el mouse sobre el botón activo
					},
				},
			},
		},
	},
});

export default theme;
