import { MenuProvider } from './context/MenuContext';
import { ExpandNavbarProvider } from './context/ExpandNavbarContext';
import HeaderComponent from './components/Header/HeaderComponent';
import MarcComponent from './components/Marc/MarcComponent';
import AboutComponent from './components/About/aboutComponent';
import TechnologiesComponent from './components/Technologies/TechnologiesComponent';
import ProjectsComponent from './components/Projects/ProjectsComponent';
import ContactComponent from './components/Contact/ContactComponent';
import './styles/styles.scss';

function App() {
	return (
		<MenuProvider>
			<ExpandNavbarProvider>
				<HeaderComponent />
				<MarcComponent />
				<AboutComponent />
				<TechnologiesComponent />
				<ProjectsComponent />
				<ContactComponent />
			</ExpandNavbarProvider>
		</MenuProvider>
	);
}

export default App;
