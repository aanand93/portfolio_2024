import React from 'react';
import pdf from '../Images/Alexander_Anand_Resume_2024.pdf'

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
