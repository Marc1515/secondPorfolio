import { useEffect } from 'react';
import { MdOutlineMail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import './ContactComponent.scss';
import { useScrollReveal } from '../../hooks/useRevealHooks';

const ContactComponent = () => {
	useEffect(() => {
		useScrollReveal(
			'.contactTittleContainer, .contactTitle__Text, .contactCards__Card',
		);
	}, []);

	return (
		<>
			<div className='spacer layer4'></div>
			<section id='contact' className='contactSection'>
				<div className='contactSectionWrapper'>
					<div className='contactTittleContainer'>
						<h1 className='contactTittleContainer__Title'>Contact</h1>
					</div>
					<div className='contactTextContainer'>
						<span className='contactTitle__Text'>
							You can contact me directly through any of these links.
						</span>
					</div>
					<div className='contactCards'>
						<div className='contactCards__Card'>
							<BsWhatsapp className='contactCards__Icon' />
							<span className='contactCards__IconName'>WhatsApp</span>
							<span className='contactCards__Info'>0451 565 137</span>
							<a
								className='contactCards__Link'
								href='whatsapp://send?phone=+61451565137'
								target='_blank'
								rel='noreferrer'
							>
								Send a message
							</a>
						</div>

						<div className='contactCards__Card'>
							<MdOutlineMail className='contactCards__Icon' />
							<span className='contactCards__IconName'>Mail</span>
							<span className='contactCards__Info'>meq.1515@gmail.com</span>
							<a
								className='contactCards__Link'
								href='mailto:meq.1515@gmail.com'
								target='_blank'
								rel='noreferrer'
							>
								Send a message
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactComponent;
