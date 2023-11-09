import React from 'react';

import ProjectItem from '../project-item/project-item.component';

import {
	ProjectsContainer,
	ProjectsContentWrapper,
	ProjectsHeader,
	ProjectsWrapper,
} from './projects.styles';

import dwFazhionz from '../../../public/assets/projects/dw-fazhionz.jpg';
import luxeLiving from '../../../public/assets/projects/luxe-living.jpg';

import comingsoon from '../../../public/assets/projects/coming-soon.png';

import { motion } from 'framer-motion';

const Projects = () => {
	const slideDown = {
		initial: { y: '-100', opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { delay: 1, duration: 0.5 } },
	};

	const slideUp = {
		initial: { y: 100, opacity: 0 },
		animate: {
			y: 0,
			opacity: 1,
			transition: { delay: 1.25, duration: 0.5 },
		},
	};

	return (
		<ProjectsContainer id='projects' className=''>
		<ProjectsHeader
			variants={slideUp}
			initial='initial'
			animate='animate'>
			<p className='section-name'>Projects</p>
			<h2 className='section-title'>What I&#039;ve Built</h2>
		</ProjectsHeader>
			<ProjectsContentWrapper>

				<ProjectsWrapper
					variants={slideDown}
					initial='initial'
					animate='animate'>
					{/**
					 ****  Add the "ready='true'"" property to 'ProjectItem' components to enable the 'More Info' overlay ****
					 */}
					{/**
					 * *** D.W. FAZHIONZ ***
					 */}
					<ProjectItem
						ready='true'
						img={dwFazhionz}
						title='D.W. Fazhionz!'
						text='A fashion e-Commerce website built with React and Firebase.'
						page='/projects/dwfazhionz'
					/>
					
					<ProjectItem
						ready='true'
						img={luxeLiving}
						title='LuxeLiving Estates'
						text='A real estate website built with the MERN stack.'
						page='/projects/luxeLiving'
					/>

					{/**
					 * *** D.W. FAZHIONZ ***
					 */}
					<ProjectItem
						img={comingsoon}
						title='Stay Tuned'
						text='Coming Soon'
						page='/projects'
					/>
				</ProjectsWrapper>
			</ProjectsContentWrapper>
		</ProjectsContainer>
	);
};

export default Projects;
