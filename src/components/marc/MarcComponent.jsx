import { useEffect } from 'react';
import Typed from 'typed.js';
import fotoPerfil from './../../assets/img/fotoPerfil.png';
import CV from './../../assets/MEQ.pdf';
import './MarcComponent.scss';

const MarcComponent = () => {
	useEffect(() => {
		const options = {
			strings: ['BIENVENIDO A MI PORTFOLIO COMO DESARROLLADOR WEB'],
			typeSpeed: 40,
			backSpeed: 10,
			loop: true,
			showCursor: false, // Opción para ocultar el cursor
		};
		const typed = new Typed('#typed-heading', options);
		return () => {
			typed.destroy();
		};
	}, []);

	return (
		<>
			<section id='marc' className='marcSection'>
				<div className='imgContainer'>
					{<img src={fotoPerfil} alt='' className='imgContainer__Img' />}
				</div>
				<div className='titleContainer'>
					<span className='titleContainer__FullName'>
						<span className='titleContainer__Name'>Marc </span>España
					</span>
				</div>

				<div className='autoTypedContainer'>
					<h4 className='autoTypedContainer__Text' id='typed-heading'></h4>
				</div>
				<div className='buttonContainer'>
					<button className='buttonContainer__Button'>
						<a className='buttonContainer__Link' href={CV} download>
							Descarga mi CV
						</a>
					</button>
				</div>
			</section>
		</>
	);
};

export default MarcComponent;
