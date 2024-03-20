import React from 'react';
import pdf from '../../Images/Alexander_Anand_2024_Resume.pdf'
import './Resume.css'

const Resume = () => {
	return (
		<div className='resume-wrapper'>
			<h1>Resume</h1>
			<iframe
				src={pdf} title='Resume' className='myPdf' frameBorder={0} />
		</div>
	);
};

export default Resume;
