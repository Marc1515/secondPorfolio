import { MenuProvider } from './context/MenuContext';
import HeaderComponent from './components/Header/HeaderComponent';
import MarcComponent from './components/Marc/MarcComponent';
import AboutComponent from './components/About/aboutComponent';
import TechnologiesComponent from './components/Technologies/TechnologiesComponent';
import ProjectsComponent from './components/Projects/ProjectsComponent';
import ContactComponent from './components/Contact/ContactComponent';
import './styles/_base.scss';

function App() {
	return (
		<MenuProvider>
			<HeaderComponent />
			<MarcComponent />
			<AboutComponent />
			<TechnologiesComponent />
			<ProjectsComponent />
			<ContactComponent />
		</MenuProvider>
	);
}

export default App;
