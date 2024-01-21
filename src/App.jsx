import { MenuProvider } from './context/MenuContext';
import HeaderComponent from './components/Header/HeaderComponent';
import ScrollTopButtonComponent from './components/ScrollTopButton/ScrollTopButtonComponent';
import MarcComponent from './components/Marc/MarcComponent';
import AboutComponent from './components/About/aboutComponent';
import TechnologiesComponent from './components/Technologies/TechnologiesComponent';
import ProjectsComponent from './components/Projects/ProjectsComponent';
import ContactComponent from './components/Contact/ContactComponent';
import './styles/styles.scss';

function App() {
	return (
		<MenuProvider>
			<HeaderComponent />
			<ScrollTopButtonComponent />
			<MarcComponent />
			<AboutComponent />
			<TechnologiesComponent />
			<ProjectsComponent />
			<ContactComponent />
		</MenuProvider>
	);
}

export default App;
