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
						I am a results-oriented Software Engineer with over 2 years of
						experience as a Frontend Developer and a foundation in graphic
						design and business logistics.
					</li>
					<li>
						I am actively pursuing a full-time software engineering position
						with a focus on security and design.
					</li>
					<li>
						I recently completed a bachelors degree in software development and
						security, dedicating the last 18 months to honing expertise in
						building efficient and secure web solutions.
					</li>
					<li>
						I am an adept communicator with strong leadership skills, proficient
						in collaborating with diverse teams, and thriving in dynamic
						environments. I demonstrate composure and focus in high-pressure
						scenarios, consistently achieving project objectives by leveraging
						my technical expertise.
					</li>
				</div>
			</div>
		</div>
	);
};

export default Home;
