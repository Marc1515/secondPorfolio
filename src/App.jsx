import { MenuProvider } from './context/MenuContext';
import HeaderComponent from './components/header/HeaderComponent';
import MarcComponent from './components/marc/MarcComponent';
import AboutComponent from './components/about/aboutComponent';
import './styles/_base.scss';

function App() {
	return (
		<MenuProvider>
			<HeaderComponent />
			<MarcComponent />
			<AboutComponent />
		</MenuProvider>
	);
}

export default App;
