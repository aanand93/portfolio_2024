import React from 'react';
import './Home.css';
import home from '../../Images/programmer2.svg';

const Home = () => {
	return (
		<div className=''>
			<h1>Welcome to Alexander Anand's Portfolio Website</h1>
			<div className='home-container'>
				<img src={home} alt='Home' className='home-image' />
				<div className='home-links home'>
					<li>
						I am a results-oriented Software Engineer with 3 years of
						experience as a Frontend Developer with 10 years of experience in graphic
						design and business logistics.
					</li>
					<li>
						I am actively pursuing a full-time software engineering position
						with a focus on security and design.
					</li>
					<li>
						I recently completed a bachelors degree in software development and
						security, dedicating 18 months completing my degree and honing my expertise in
						building efficient and secure web solutions.
					</li>
					<li>
						I am an adept communicator with strong leadership skills, proficient
						in collaborating with diverse teams, and thriving in dynamic
						environments. I demonstrate composure and focus in high-pressure
						scenarios, consistently achieving project objectives by leveraging
						my technical expertise.
					</li>
					<li>
						I am currently taking a course to obtain my security+ certification
						as well as building a new webspace for young developers around the globe!
						If you would like to learn more, please reach out!
					</li>
				</div>
			</div>
		</div>
	);
};

export default Home;
