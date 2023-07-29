import React, { useRef } from 'react';
import {
	ExperienceContainer,
	ExperienceContent,
	ExperienceContentWrapper,
} from './experience.styles';
import LiIcon from './li-icon.component';

import { motion, useScroll } from 'framer-motion';

const Details = ({ position, company, companyLink, time, location, work }) => {
	const ref = useRef(null);

	return (
		<li
			ref={ref}
			className='my-8 first:mt-0 last:mt-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
			<LiIcon reference={ref} />
			<div>
				<h3>
					{position} <br />
					<a
						className='text-[tan] hover:text-gray-700'
						href={companyLink}
						target='_blank'>
						@{company}
					</a>
				</h3>

				<span className='capitalize'>
					{time} | {location}
				</span>

				<p>{work}</p>
			</div>
		</li>
	);
};

const Experience = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'center start'],
	});

	return (
		<ExperienceContainer>
			<ExperienceContentWrapper>
				<ExperienceContent>
					<p className='section-name'>Experience</p>
					<h2 className='section-title'>Experience</h2>

					<div>
						<ul ref={ref}>
							<motion.div
								style={{ scaleY: scrollYProgress }}
								className='absolute w-[4px] h-full bg-gray-700  origin-top'
							/>
							<Details
								position='Content Management/Systems Analyst'
								company='Blue Cross and Blue Shield of IL/NM/OK/TX/MT'
								companyLink='https://www.bcbsil.com'
								time='2008-2016'
								location='Chicago, IL'
								work="Worked on a team responsible for developing and maintaining the entire infrastructure of Blue Cross and Blue Shield's public, secure, and custom web portals."
							/>

							<Details
								position='Content Management/Systems Analyst'
								company='Blue Cross and Blue Shield of IL/NM/OK/TX/MT'
								companyLink='https://www.bcbsil.com'
								time='2008-2016'
								location='Chicago, IL'
								work="Worked on a team responsible for developing and maintaining the entire infrastructure of Blue Cross and Blue Shield's public, secure, and custom web portals."
							/>

							<Details
								position='Content Management/Systems Analyst'
								company='Blue Cross and Blue Shield of IL/NM/OK/TX/MT'
								companyLink='https://www.bcbsil.com'
								time='2008-2016'
								location='Chicago, IL'
								work="Worked on a team responsible for developing and maintaining the entire infrastructure of Blue Cross and Blue Shield's public, secure, and custom web portals."
							/>
						</ul>
					</div>
				</ExperienceContent>
			</ExperienceContentWrapper>
		</ExperienceContainer>
	);
};

export default Experience;
