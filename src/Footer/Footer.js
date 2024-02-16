import React from 'react';
import './Footer.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
	return (
		<footer className='footer'>
			<a href='https://github.com/aanand93'>
				<FaGithub />
			</a>
			<a href='https://www.linkedin.com/in/alexanderanand/'>
				<FaLinkedin />
			</a>
		</footer>
	);
};

export default Footer;
