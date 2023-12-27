import { MenuProvider } from './context/MenuContext';
import HeaderComponent from './components/header/HeaderComponent';
import MarcComponent from './components/marc/MarcComponent';
import './styles/_base.scss'

function App() {
	return (
		<MenuProvider>
			<HeaderComponent />
			<MarcComponent />
		</MenuProvider>
	);
}

export default App;
