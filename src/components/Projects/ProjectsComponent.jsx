import { useState, useRef, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { ThemeProvider } from '@mui/material/styles';
import theme from './../../styles/material/themeProvider.js';
import './ProjectsComponent.scss';
import images from './ProjectsData.js';
import { AiFillGithub, AiOutlineLink } from 'react-icons/ai';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const ProjectsComponent = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const imagesPerPage = 4;

	const startIndex = (currentPage - 1) * imagesPerPage;
	const endIndex = startIndex + imagesPerPage;
	const displayedImages = images.slice(startIndex, endIndex);

	const cardsWrapperRef = useRef(null);

	const handlePageChange = (event, value) => {
		setCurrentPage(value);
		if (cardsWrapperRef.current) {
			cardsWrapperRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	useEffect(() => {
		ScrollReveal().reveal(
			'.projectsTittleContainer, .projectsTextContainer, .projectsCards__Card',
			{
				delay: 500,
				distance: '50px',
				easing: 'ease-in-out',
				origin: 'bottom',
				reset: false,
			},
		);
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<div className='spacer layer3'></div>
			<section id='projects' className='projectsSection'>
				<div className='projectsSectionWrapper'>
					<div className='projectsTittleContainer' ref={cardsWrapperRef}>
						<h1 className='projectsTittleContainer__Tittle'>Projects</h1>
					</div>

					<div className='projectsTextContainer'>
						<span className='projectsTextContainer__Text'>
							Here you will find a variety of projects built in Angular, React,
							or WordPress.
						</span>
					</div>

					<div className='projectsCards'>
						{displayedImages.map((item) => (
							<div key={item.id} className='projectsCards__Card'>
								<a href={item.pageURL} target='_blank' rel='noreferrer'>
									<img src={item.img} alt='' />
								</a>

								<div className='projectsCards__Links'>
									<a href={item.githubURL} target='_blank' rel='noreferrer'>
										<AiFillGithub />
									</a>
									<a href={item.pageURL} target='_blank' rel='noreferrer'>
										<AiOutlineLink />
									</a>
								</div>
								<span className='projectsCards__Name'>{item.nombre}</span>
								<div className='projectsCards__TechImg'>
									<img src={item.techBuild.htmlSVG} alt='' />

									<img src={item.techBuild.cssSVG} alt='' />

									{!(item.id === 6 || item.id === 7 || item.id === 8) &&
										item.techBuild.typeScriptSvg && (
											<img src={item.techBuild.typeScriptSvg} alt='' />
										)}
									{(item.id === 4 || item.id === 5 || item.id === 6) &&
										item.techBuild.javaScriptSvg && (
											<img src={item.techBuild.javaScriptSvg} alt='' />
										)}
									{(item.id === 2 || item.id === 3) &&
										item.techBuild.angularSVG && (
											<img src={item.techBuild.angularSVG} alt='' />
										)}
									{(item.id === 3 ||
										item.id === 4 ||
										item.id === 5 ||
										item.id === 6) &&
										item.techBuild.reactSVG && (
											<img src={item.techBuild.reactSVG} alt='' />
										)}
									{item.id === 1 && item.techBuild.nextSVG && (
										<img src={item.techBuild.nextSVG} alt='' />
									)}
								</div>
							</div>
						))}
					</div>
					<div className='pagination'>
						<Stack spacing={2}>
							<Pagination
								count={Math.ceil(images.length / imagesPerPage)}
								color='secondary'
								page={currentPage}
								onChange={handlePageChange}
							/>
						</Stack>
					</div>
				</div>
			</section>
		</ThemeProvider>
	);
};

export default ProjectsComponent;
