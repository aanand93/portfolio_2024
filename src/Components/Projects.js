import React from 'react';
import developer from '../Images/developer_activity.svg';
import GitHubRepos from './PinnedRepos';
import './Components.css';

const Projects = () => {
	const handleGithubClick = () => {
		// onClick for button to LinkedIn profile
		window.location.href = 'https://www.github.com/aanand93';
	};

	return (
		<div className='project-wrapper'>
			<h1>Projects</h1>
			<button
				onClick={handleGithubClick}
				alt='Github Profile'
				className='button'>
				Github
			</button>
			<div className='projects-container'>
				<img src={developer} alt='developer' className='projects-image' />
				<div className='projects-links'>
					<GitHubRepos username='aanand93' />
				</div>
			</div>
		</div>
	);
};

export default Projects;
