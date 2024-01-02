import { MdOutlineMail } from 'react-icons/md';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
import './ContactComponent.scss';

const ContactComponent = () => {
	return (
		<>
			<div className='spacer layer4'></div>
			<section id='contact' className='contactSection'>
				<div className='contactTitle'>
					<span className='contactTitle__Title'>Contact</span>
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
				</div>
				<div className='contactCards'>
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
				<div className='contactCards'>
					<div className='contactCards__Card'>
						<AiFillLinkedin className='contactCards__Icon' />
						<span className='contactCards__IconName'>LinkedIn</span>
						<span className='contactCards__Info'>Marc España</span>
						<a
							className='contactCards__Link'
							href='https://www.linkedin.com/in/marc-espa%C3%B1a-833924141/'
							target='_blank'
							rel='noreferrer'
						>
							Send a message
						</a>
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactComponent;
