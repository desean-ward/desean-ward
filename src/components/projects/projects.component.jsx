import React from 'react'

import ProjectItem from '../project-item/project-item.component'

import { ProjectsContainer } from './projects.styles'

import dwFazhionz from '../../../public/assets/projects/dw-fazhionz.jpg'


const Projects = () => {
    return (
        <ProjectsContainer className='w-full h-screen'>
            <div className='max-w-[1240px] h-full mx-auto px-2 py-16'>
                <p className='section-name'>Projects</p>
                <h2 className='section-title'>What I&#039;ve Built</h2>
                
                {/**
                 * *** PROJECTS ***
                 */}
                <div className='grid md:grid-cols-2 gap-8'>
                     <ProjectItem img={dwFazhionz} title='D.W. Fazhionz' text='A fashion e-commerce website built with React and Firebase.' page='https://dw-fazhionz.vercel.app/' />
                </div> 
               
            </div>
        </ProjectsContainer>  
    )   
}

export default Projects