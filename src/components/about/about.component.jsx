import React from 'react'
import { CustomImage } from '../customs/custom-image.component'
import { AboutContainer, AboutContent } from './about.styles'

const About = () => {
  return (
    <AboutContainer id='about' className='w-full md:h-screen p-2 flex items-center py-16'>

        {/**
         * *** ABOUT ME CONTENT ***
         */}
        <AboutContent className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='section-name'>About</p>
                <h2 className='section-title'>Who I Am</h2>
                <p className='py-2 text-gray-600'>Since the 8th grade, I&#039;ve always had a knack for technology and working with computers. I began with 4 years of courses in high school, computer science studies at DeVry and now; being self-taught since 2005.</p>

                <p className='py-2 text-gray-600'>I bring a set of talents that I believe are very valuable, and present a solid foundation for front-end web development. My critical thinking strength, people-centric nature and eagerness to please, have afforded me excellent problem-solving skills.</p>

                <p className='py-2 text-gray-600 underline cursor-pointer font-bold'>Check out some of my latest projects.</p>
            </div>

            {/**
             * *** ABOUT ME IMAGE ***
             */}
            <CustomImage>
                <img className='rounded-xl' src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80'/>
            </CustomImage>
        </AboutContent>

    </AboutContainer>
  )
}

export default About