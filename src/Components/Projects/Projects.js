import React from 'react';
import GitHubRepos from './PinnedRepos';
import './Projects.css';

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
				className='projects-button'>
				Github
			</button>
			<div className='projects-container'>
				<div className='projects-links'>
					<GitHubRepos username='aanand93' />
				</div>
			</div>
		</div>
	);
};

export default Projects;
