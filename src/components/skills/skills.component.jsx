import Image from 'next/image';
import React from 'react';
import {
	SkillWrapper,
	SkillsContainer,
	SkillsContentWrapper,
	SkillsTechWrapper,
	Skill,
	SkillTitle,
} from './skills.styles';

import { motion } from 'framer-motion';

const Skills = () => {
	const skillset = [
		'react',
		'nextjs',
		'javascript',
		'html',
		'sass',
		'firebase',
		'node',
		'styled-components',
		'tailwind',
		'openai',
		'github',
		'stripe',
	];

	const scaleIn = {
		initial: { scale: 0 },
		animate: { scale: 1, transition: { delay: 1, duration: 0.5 } },
	};

	const slideUp = {
		initial: { y: 100, opacity: 0 },
		animate: {
			y: 0,
			opacity: 1,
			transition: { delay: 1.25, duration: 0.5 },
		},
	};

	const skills = document.querySelectorAll('.skill');

	function focusMe(skillName) {
		for (let i = 0; i < skills.length; i++) {
			if ((skills[i].id !== skillName) == true) {
				skills[i].style.filter = 'blur(5px)';
				skills[i].style.opacity = '0.5';
				skills[i].style.transition = 'all 0.3 ease-in-out';
			}
		}
		console.log(skillName);
	}

	function blurAll() {
		skills.forEach(skill => {
			skill.style.filter = '';
			skill.style.opacity = 1;
			skill.style.transition = 'all 0.3 ease-in-out';
		});
	}

	return (
		<SkillsContainer id='skills' className=''>
			<SkillsContentWrapper>
				<motion.section
					variants={slideUp}
					initial='initial'
					animate='animate'>
					<p className='section-name'>Skills</p>

					<h2 className='section-title'>What I Can Do</h2>
				</motion.section>

				<SkillsTechWrapper
					variants={scaleIn}
					initial='initial'
					animate='animate'>
					{
						/**
						 * *** SKILLS GRID ***
						 */
						skillset.map(skill => {
							let fileName = '/assets/skills/' + skill + '.png';

							return (
								/** SKILL WRAPPER */
								<SkillWrapper
									className='skill'
									id={fileName}
									key={fileName}
									onMouseEnter={() => focusMe(fileName)}
									onMouseLeave={blurAll}>
									<Skill>
										{/** SKILL IMAGE */}
										<div className='m-auto'>
											<Image
												src={fileName}
												alt='/'
												width='64'
												height='64'
											/>
										</div>

										{/** SKILL TITLE */}
										<SkillTitle>
											<h3>{skill.toUpperCase()}</h3>
										</SkillTitle>
									</Skill>
								</SkillWrapper>
								/** END SKILL WRAPPER */
							);
						})
					}
				</SkillsTechWrapper>
			</SkillsContentWrapper>
		</SkillsContainer>
	);
};

export default Skills;
