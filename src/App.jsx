import { MenuProvider } from './context/MenuContext';
import HeaderComponent from './components/header/HeaderComponent';

function App() {
	return (
		<MenuProvider>
			<HeaderComponent />
		</MenuProvider>
	);
}

export default App;
