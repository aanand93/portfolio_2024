import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
	return (
		<footer className='footer'>
			<hr className='footer-line' />
			<div className='footer-links'>
				<Link className='footer-link' to='/'>
					Home
				</Link>
				<Link className='footer-link' to='/Projects'>
					Projects
				</Link>
				<Link className='footer-link' to='/Contact'>
					Contact
				</Link>
				<Link className='footer-link' to='/Resume'>
					Resume
				</Link>
			</div>
			<div className='foooter-icons'>
				<a href='https://github.com/aanand93'>
					<FaGithub />
				</a>
				<a href='https://www.linkedin.com/in/alexanderanand/'>
					<FaLinkedin />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
