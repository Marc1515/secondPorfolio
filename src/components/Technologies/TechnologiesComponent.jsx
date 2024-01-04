import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import TechImages from './TechnologiesData';
import './TechnologiesComponent.scss';

const TechnologiesComponent = () => {
	const [openSection, setOpenSection] = useState(null);

	const toggleSection = (section) => {
		setOpenSection((current) => (current === section ? null : section));
	};

	return (
		<>
			{<div className='spacer layer2'></div>}
			<section id='technologies' className='technologiesSection'>
				<div className='sectionWrapper'>
					<div className='technologiesTittleContainer'>
						<span className='technologiesTittleContainer__Tittle'>
							Technologies
						</span>
						<span className='technologiesTittleContainer__Text'>
							A short explanation of what I can achieve in each of the
							technologies.
						</span>
					</div>
					<div className='TechCardsWrapper'>
						{/* Basic Technologies */}
						<div className='TechCard'>
							<span className='TechCard__Tittle'>Basic</span>
							<div className='TechCard__WrapperImgs'>
								<img
									className='TechCard__Img'
									src={TechImages.techBuild.htmlSVG}
									alt='html_img'
								/>
								<img
									className='TechCard__Img'
									src={TechImages.techBuild.cssSVG}
									alt='css_img'
								/>
								<img
									className='TechCard__Img'
									src={TechImages.techBuild.javaScriptSvg}
									alt='javaScript_img'
								/>
							</div>
							<div
								className={`TechCard__DropDown ${
									openSection === 'BT' ? 'open' : ''
								}`}
								onClick={() => toggleSection('BT')}
							>
								<div className='TechCard__DropDownTittle'>
									<span className='summary'>HTML, CSS y JavaScript</span>
									<span className='TechCard__ArrowIcon'>
										{openSection === 'BT' ? <FiChevronUp /> : <FiChevronDown />}
									</span>
								</div>
								<div className='TechCard__Text'>
									{TechImages.techDescriptions.htmlCssJs}
								</div>
							</div>
						</div>
						{/* Basic Technologies */}
						{/* CSS Libraries */}
						<div className='TechCard'>
							<span className='TechCard__Tittle'>CSS Libraries</span>
							<div className='TechCard__WrapperImgs'>
								<img
									className='TechCard__Img'
									src={TechImages.techBuild.bootstrapSVG}
									alt='bootstrap_img'
								/>
								<img
									className='TechCard__Img'
									src={TechImages.techBuild.tailwindSvg}
									alt='tailwind_img'
								/>
							</div>
							<div
								className={`TechCard__DropDown ${
									openSection === 'CSST' ? 'open' : ''
								}`}
								onClick={() => toggleSection('CSST')}
							>
								<div className='TechCard__DropDownTittle'>
									<span className='summary'>Bootstrap & Taildwind</span>
									<span className='TechCard__ArrowIcon'>
										{openSection === 'CSST' ? (
											<FiChevronUp />
										) : (
											<FiChevronDown />
										)}
									</span>
								</div>
								<div className='TechCard__Text'>
									{TechImages.techDescriptions.tailwindBootstrap}
								</div>
							</div>
						</div>
						{/* CSS Libraries */}
						{/* Pre-Processors */}
						<div className='TechCard'>
							<span className='TechCard__Tittle'>Pre-Processors</span>
							<div className='TechCard__WrapperImgs'>
								<img
									className='TechCard__Img'
									src={TechImages.techBuild.sassSVG}
									alt='sass_img'
								/>
								<img
									className='TechCard__Img'
									src={TechImages.techBuild.lessSvg}
									alt='less_img'
								/>
							</div>
							<div
								className={`TechCard__DropDown ${
									openSection === 'TPT' ? 'open' : ''
								}`}
								onClick={() => toggleSection('TPT')}
							>
								<div className='TechCard__DropDownTittle'>
									<span className='summary'>SASS & LESS</span>
									<span className='TechCard__ArrowIcon'>
										{openSection === 'TPT' ? (
											<FiChevronUp />
										) : (
											<FiChevronDown />
										)}
									</span>
								</div>
								<div className='TechCard__Text'>
									{TechImages.techDescriptions.sassLess}
								</div>
							</div>
						</div>
						{/* Pre-Processors */}
						{/* TypeScript & RxJS */}
						<div className='TechCard'>
							<span className='TechCard__Tittle'>Superset & RxJS</span>
							<div className='TechCard__WrapperImgs'>
								<img
									className='TechCard__Img'
									src={TechImages.techBuild.typeScriptSvg}
									alt='react_img'
								/>
								<img
									className='TechCard__Img'
									src={TechImages.techBuild.rxjsSvg}
									alt='angular_img'
								/>
							</div>
							<div
								className={`TechCard__DropDown ${
									openSection === 'SRT' ? 'open' : ''
								}`}
								onClick={() => toggleSection('SRT')}
							>
								<div className='TechCard__DropDownTittle'>
									<span className='summary'>TypeScript & RxJS</span>
									<span className='TechCard__ArrowIcon'>
										{openSection === 'SRT' ? (
											<FiChevronUp />
										) : (
											<FiChevronDown />
										)}
									</span>
								</div>
								<div className='TechCard__Text'>
									{TechImages.techDescriptions.typescriptRxjs}
								</div>
							</div>
						</div>
						{/* TypeScript & RxJS */}
						{/* Frameworks */}
						<div className='TechCard'>
							<span className='TechCard__Tittle'>Frameworks</span>
							<div className='TechCard__WrapperImgs'>
								<img
									className='TechCard__Img'
									src={TechImages.techBuild.reactSVG}
									alt='react_img'
								/>
								<img
									className='TechCard__Img'
									src={TechImages.techBuild.angularSVG}
									alt='angular_img'
								/>
							</div>
							<div
								className={`TechCard__DropDown ${
									openSection === 'FT' ? 'open' : ''
								}`}
								onClick={() => toggleSection('FT')}
							>
								<div className='TechCard__DropDownTittle'>
									<span className='summary'>React & Angular</span>
									<span className='TechCard__ArrowIcon'>
										{openSection === 'FT' ? <FiChevronUp /> : <FiChevronDown />}
									</span>
								</div>
								<div className='TechCard__Text'>
									{TechImages.techDescriptions.reactAngular}
								</div>
							</div>
						</div>
						{/* Frameworks */}
						{/* CMS */}
						<div className='TechCard'>
							<span className='TechCard__Tittle'>CMS</span>
							<div className='TechCard__WrapperImgs'>
								<img
									className='TechCard__Img'
									src={TechImages.techBuild.wordpressSVG}
									alt='wordpress_img'
								/>
								<img
									className='TechCard__Img'
									src={TechImages.techBuild.wooCommerceSVG}
									alt='wooCommerce_img'
								/>
							</div>
							<div
								className={`TechCard__DropDown ${
									openSection === 'CT' ? 'open' : ''
								}`}
								onClick={() => toggleSection('CT')}
							>
								<div className='TechCard__DropDownTittle'>
									<span className='summary'>Wordpress & WooCommerce</span>
									<span className='TechCard__ArrowIcon'>
										{openSection === 'CT' ? <FiChevronUp /> : <FiChevronDown />}
									</span>
								</div>
								<div className='TechCard__Text'>
									{TechImages.techDescriptions.wordpressWoocommerce}
								</div>
							</div>
						</div>
						{/* CMS */}
					</div>
				</div>
			</section>
		</>
	);
};

export default TechnologiesComponent;
