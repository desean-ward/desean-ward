import Image from 'next/image'
import React from 'react'
import { SkillWrapper, SkillsContainer, SkillsContentWrapper, SkillsTechWrapper, Skill, SkillTitle } from './skills.styles'

const Skills = () => {
  const skills = ['react', 'nextjs', 'javascript', 'html', 'sass', 'firebase', 'node', 'styled-components', 'tailwind', 'openai', 'github', 'stripe']
  
  return (
    <SkillsContainer id='skills' className=''>
      <SkillsContentWrapper>
        <p className='section-name'>Skills</p>

        <h2 className='section-title'>What I Can Do</h2>

        <SkillsTechWrapper>
        {
          /**
           * *** SKILLS GRID ***
           */
          skills.map(skill => {
            let fileName = '/assets/skills/' + skill + '.png'

            return (
              
                <SkillWrapper key={skills.indexOf(skill)}>
                  <Skill>
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