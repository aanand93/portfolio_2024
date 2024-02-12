import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
	return (
		<div className='Links'>
			<Link to='/'>Home</Link>
			<Link to='/Projects'>Projects</Link>
			<Link to='/Contact'>Contact</Link>
			<Link to='/Resume'>Resume</Link>
		</div>
	);
};

export default NavBar;
