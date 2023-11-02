import React, { useRef } from "react";
import {
  ExperienceContainer,
  ExperienceContent,
  ExperienceContentWrapper,
  ResumeButtonWrapper,
} from "./experience.styles";
import LiIcon from "./li-icon.component";

import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import { BsDownload } from "react-icons/bs";

const Details = ({ position, company, companyLink, time, location, work }) => {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      className='flex flex-col items-center justify-between mx-auto my-8 first:mt-0 last:mt-0'
    >
      <div>
        <h3>
          {position} <br />
          <a
            className='text-[tan] hover:text-gray-700'
            href={companyLink}
            target='_blank'
          >
            @{company}
          </a>
        </h3>

        <span className='capitalize'>
          {time} | {location}
        </span>

        <p>{work}</p>
      </div>
    </section>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <ExperienceContainer>
      <ExperienceContentWrapper>
        <ExperienceContent>
          <div className='flex flex-wrap items-center mb-8 md:gap-4'>
            <h2 className='section-title'>Experience</h2>

            {/* Resume Button */}
            <ResumeButtonWrapper>
              <Link href='/files/desean-ward.docx' download target='_blank'>
                Resume
                <BsDownload size={20} className='relative inline-block ml-2 ' />
              </Link>
            </ResumeButtonWrapper>
          </div>

          <div>
            <ul ref={ref}>
              {/* <motion.div
								style={{ scaleY: scrollYProgress }}
								className='absolute w-[4px] h-full bg-gray-700  origin-top'
	/> */}
              <Details
                position='Recent Training - Full Stack Software Engineering'
                company='Per Scholas'
                companyLink='https://perscholas.org'
                time='2023-2023'
                location='Chicago, IL'
                work='Accrued 400+ hours of training in Software Engineering. Trained in MERN stack (MongoDB, Express, React, Node.js) and relative software libraries and packages.'
              />

              <Details
                position='Software Engineer Enthusiast and Self-Educator'
                company='Independent'
                companyLink='https://desean-ward.me'
                time='2019-2023'
                location='Chicago, IL'
                work='Actively pursued web development, with a primary focus on Full Stack technologies and React. Engaged in networking, workshops, and professional connections to stay updated on web development trends and best practices.'
              />

              <Details
                position='Web Developer/Content Management/Systems Analyst'
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
