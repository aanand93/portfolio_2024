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
						I am a results-oriented Software Engineer with 3 years of experience 
						as a Frontend Developer and 10 years of experience in graphic design 
						and business logistics running a graphics and printing business. I am actively pursuing a full-time software 
						engineering position with a focus on security and design.
					</li>
					<li>
						In 2023 I went back to school and completed a bachelor's degree in software development and security from University of Maryland where I dedicated 18 months to complete 65 credits and receive a 4.0. I was able to complete my degree while working and honing my expertise in building efficient and secure web solutions. 
					</li>
					<li>	
						I am an adept communicator with strong leadership skills, proficient in collaborating with diverse teams, 
						and thriving in dynamic environments. I demonstrate composure and focus in high-pressure scenarios, 
						consistently achieving project objectives by leveraging my technical expertise.  Over the last decade I have
						learned how to be efficient without compromising accuracy all while removing emotion from the equation.
					</li>
					<li>
						Currently, I am working part time as the Director of operations at
						<a href="https://www.neilom.org">The Neilom Foundation</a> which is a non profit I have
						been apart of since its inception in 2013. Our mission is to promote young people to use technology for GOOD! We want
						to push young people to use technology to better peoples lives in their community.  We use technology every day
						to be efficient at work for the bottom dollar, to socialize and play our videos and video-games, and sometimes people
						use it to harm others or do bad things.  We want people to view technology as this tool that can better peoples lives first, and all those things second. This organization and topic is something I am passionate about and plan to continue for years to come.
					</li>
					
				</div>
			</div>
		</div>
	);
};

export default Home;
