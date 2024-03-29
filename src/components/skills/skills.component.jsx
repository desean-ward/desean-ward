import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import {
  SkillWrapper,
  SkillsContainer,
  SkillsContentWrapper,
  SkillsTechWrapper,
  SkillTitle,
  SkillLogo,
  SkillsHeader,
} from "./skills.styles";

import { motion } from "framer-motion";

const Skills = () => {
  const skillset = [
    "mongo",
    "express",
    "react",
    "node",
    "nextjs",
    "javascript",
    "sass",
    "styled-components",
    "tailwind",
    "openai",
    "redux",
    "stripe",
  ];

  // Array to hold the 'Skills' components rendered
  let displayOfSkills;

  let focusedSkill = "";

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

  function focusMe(e) {
    focusedSkill = e.target;

    for (let i = 0; i < displayOfSkills.length; i++) {
      if (focusedSkill.id !== displayOfSkills[i].id) {
        displayOfSkills[i].style.filter = "blur(5px)";
        displayOfSkills[i].style.opacity = "0.5";
        displayOfSkills[i].style.transition = "all 0.2 ease";
      }
    }
  }

  function blurAll() {
    displayOfSkills.forEach((skill) => {
      skill.style.filter = "";
      skill.style.opacity = 1;
      skill.style.transition = "all 0.2 ease";
    });
  }

  useEffect(() => {
    displayOfSkills = document.querySelectorAll(".skill");
  }, []);

  return (
    <SkillsContainer id='skills' className=''>
      <SkillsHeader variants={slideUp} initial='initial' animate='animate'>
        <p className='section-name'>Skills</p>

        <h2 className='section-title'>How I Tech</h2>
      </SkillsHeader>
      <SkillsContentWrapper>
        <SkillsTechWrapper
          variants={scaleIn}
          initial='initial'
          animate='animate'
        >
          {
            /**
             * *** SKILLS GRID ***
             */
            skillset.map((skill, idx) => {
              let fileName = "/assets/skills/" + skill + ".png";

              return (
                /** SKILL WRAPPER */
                <SkillWrapper
                  className='skill'
                  key={idx}
                  id={skill}
                  // onMouseEnter={focusMe}
                  // onClick={focusMe}
                  // onMouseLeave={() => blurAll()}
                >
                  <SkillLogo>
                    {/** SKILL IMAGE */}
                    <div className='m-auto'>
                      <Image src={fileName} alt='/' width='40' height='40' />
                    </div>

                    {/** SKILL TITLE */}
                    <SkillTitle>
                      <h3>{skill.toUpperCase()}</h3>
                    </SkillTitle>
                  </SkillLogo>
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
