import { MenuProvider } from './context/MenuContext';
import HeaderComponent from './components/header/HeaderComponent';
import MarcComponent from './components/marc/MarcComponent';
import AboutComponent from './components/about/aboutComponent';
import TechnologiesComponent from './components/Technologies/TechnologiesComponent';
import ProjectsComponent from './components/Projects/ProjectsComponent';
import ContactComponent from './components/contact/ContactComponent';
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
