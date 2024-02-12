import React from 'react';
import developer from '../Images/developer_activity.svg';
import './Components.css';

const Projects = () => {
	const handleGithubClick = () => {
		// onClick for button to LinkedIn profile
		window.location.href = 'https://www.github.com/aanand93';
	};
	return (
		<div className='project-wrapper'>
			<h1>Projects</h1>
			<div className='projects-container'>
				<img src={developer} alt='developer' className='projects-image' />
				<div className='projects-links'>
					<button
						onClick={handleGithubClick}
						alt='Github Profile'
						className='github-profile'>
						Github
					</button>
				</div>
			</div>
		</div>
	);
};

export default Projects;
