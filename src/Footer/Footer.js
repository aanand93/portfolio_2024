import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
	return (
		<Footer className=''>
			<a href='https://github.com/aanand93'>
				<FaGithub />
			</a>
			<a href='https://www.linkedin.com/in/alexanderanand/'>
				<FaLinkedin />
			</a>
		</Footer>
	);
};

export default Footer;
