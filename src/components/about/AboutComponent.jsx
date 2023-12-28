import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faInstagram,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import './AboutComponent.scss';

const AboutComponent = () => {
	return (
		<>
			<section id='about'>
				<div className='aboutTittleContainer'>
					<span className='aboutTittleContainer__Tittle'>About Me</span>
				</div>
				<div className='textContainer'>
					<p className='textContainer__Text1'>
						I began to awaken my passion for web development about 3 years ago.
						With the arrival of the pandemic, I started practicing with
						different technologies. I also worked for 1 year with a local
						company. My role was to create an interface for an electronic locker
						reservation page.
					</p>
					<p className='textContainer__Text2'>
						CURRENTLY, I STUDY ON MY OWN AND SEEK TO EXPAND MY CAREER
						OPORTUNITIES IN THE FIELD OF DEVELOPMENT WEB
					</p>
				</div>
				<div className='socialMediaIconsContainer'>
					<a
						href='https://github.com/Marc1515'
						target='_blank'
						rel='noreferrer'
						className='socialMediaIconsContainer__icon'
					>
						<FontAwesomeIcon icon={faGithub} size='2x' />
					</a>
					<a
						href='https://www.instagram.com/marc_espp/'
						target='_blank'
						rel='noreferrer'
						className='socialMediaIconsContainer__icon'
					>
						<FontAwesomeIcon icon={faInstagram} size='2x' />
					</a>
					<a
						href='https://www.linkedin.com/in/marc-espa%C3%B1a-833924141/'
						target='_blank'
						rel='noreferrer'
						className='socialMediaIconsContainer__icon'
					>
						<FontAwesomeIcon icon={faLinkedin} size='2x' />
					</a>
				</div>
			</section>
		</>
	);
};

export default AboutComponent;
