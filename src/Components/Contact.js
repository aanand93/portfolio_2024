import React from 'react';
import contact from './../Images/contact.svg';
import './Components.css';

const Contact = () => {
	const handleLinkedInClick = () => {
		// onClick for button to LinkedIn profile
		window.location.href = 'https://www.linkedin.com/in/alexanderanand/';
	};

	const handleEmailClick = () => {
		// onClick for button to email me
		window.location.href = 'mailto:alex329@mac.com';
	};

	return (
		<div className='contact-wrapper'>
			<h1>Contact Me</h1>
			<div className='contact-container'>
				<img src={contact} alt='Contact' className='contact-image' />
				<div className='contact-links'>
					<button
						onClick={handleLinkedInClick}
						alt='LinkedIn Profile'
						className='linkedin-profile'>
						LinkedIn
					</button>
					<button
						onClick={handleEmailClick}
						alt='LinkedIn Profile'
						className='linkedin-profile'>
						Email Me
					</button>
				</div>
			</div>
		</div>
	);
};

export default Contact;
