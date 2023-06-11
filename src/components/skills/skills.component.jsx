import Image from 'next/image'
import React from 'react'
import { SkillsContainer } from './skills.styles'

const Skills = () => {
  const skills = ['react', 'nextjs', 'javascript', 'html', 'css', 'firebase', 'node', 'styled-components', 'tailwind', 'openai', 'github']
  
  return (
    <SkillsContainer className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='uppercase text-xl tracking-widest text-[tan] text-shadow-sm shadow-gray-900'>Skills</p>

        <h2 className='py-4'>What I Can Do</h2>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

        {
          /**
           * *** SKILLS GRID ***
           */
          skills.map(skill => {
            let fileName = '/../public/assets/skills/' + skill + '.png'

            return (
              
                <div key={skills.indexOf(skill)} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                  <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className="m-auto">
                      <Image src={fileName} alt='/' width='64' height='64' />
                    </div>
                    <div className="flex flex-col items-center justify-center"><h3>{skill.toUpperCase()}</h3></div>
                  </div>
                </div>
            )
          })
        }
        </div>

      </div>
    </SkillsContainer>

  )
}

export default Skills