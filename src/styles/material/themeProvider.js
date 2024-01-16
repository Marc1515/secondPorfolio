// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	components: {
		MuiPaginationItem: {
			styleOverrides: {
				root: {
					color: '#FF0000', // reemplaza esto con el color que desees
				},
				page: {
					'&.Mui-selected': {
						backgroundColor: 'tuColorParaBotonActivo', // Cambia esto por el color que prefieras para el botón activo
						color: 'tuColorDeTextoParaBotonActivo', // Cambia esto por el color de texto que prefieras para el botón activo
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
