import Image from 'next/image'
import React from 'react'
import { SkillWrapper, SkillsContainer, SkillsContentWrapper, SkillsTechWrapper, Skill, SkillTitle } from './skills.styles'

import { motion } from 'framer-motion'

const Skills = () => {
  const skills = ['react', 'nextjs', 'javascript', 'html', 'sass', 'firebase', 'node', 'styled-components', 'tailwind', 'openai', 'github', 'stripe']

  const scaleIn = {
		initial: { scale: 0 },
		animate: { scale: 1, transition: { delay: 0.5}}
	}
  
  return (
    <SkillsContainer id='skills' className=''>
      <SkillsContentWrapper>
        <p className='section-name'>Skills</p>

        <h2 className='section-title'>What I Can Do</h2>

        <SkillsTechWrapper
        variants={scaleIn}
        initial='initial'
        animate='animate'
        >
        {
          /**
           * *** SKILLS GRID ***
           */
          skills.map(skill => {
            let fileName = '/assets/skills/' + skill + '.png'

            return (
              
                  <SkillWrapper 
                    key={skills.indexOf(skill)}
                  >
                    <Skill >
                      <div className="m-auto">
                        <Image src={fileName} alt='/' width='64' height='64' />
                      </div>
                      <SkillTitle><h3>{skill.toUpperCase()}</h3></SkillTitle>
                    </Skill>
                  </SkillWrapper>
               
            )
          })
        }
        </SkillsTechWrapper>
      </SkillsContentWrapper>
    </SkillsContainer>

  )
}

export default Skills