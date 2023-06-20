import React from 'react'
import { CustomImage } from '../customs/custom-image.component'
import { AboutContainer, AboutContentWrapper, AboutContent } from './about.styles'

const About = () => {
  return (
    <AboutContainer id='about'>

        {/**
         * *** ABOUT ME CONTENT ***
         */}
        <AboutContentWrapper>
            <AboutContent>
                <p className='section-name'>About</p>
                <h2 className='section-title'>Who I Am</h2>
                <p>Since the 8th grade, I&#039;ve always had a knack for technology and working with computers. I began with 4 years of courses in high school, computer science studies at DeVry and now; being self-taught since 2005.</p>

                <p>I bring a set of talents that I believe are very valuable, and present a solid foundation for front-end web development. My critical thinking strength, people-centric nature and eagerness to please, have afforded me excellent problem-solving skills.</p>

                <p className='underline cursor-pointer font-bold hover:text-[tan]'><a href='#projects'>Check out some of my latest projects.</a></p>
            </AboutContent>

            {/**
             * *** ABOUT ME IMAGE ***
             */}
            <CustomImage className='w-[250px]'>
                <img className='rounded-xl w-full' src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80'/>
            </CustomImage>
        </AboutContentWrapper>
    </AboutContainer>
  )
}

export default About