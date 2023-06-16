import React from 'react'

import ProjectItem from '../project-item/project-item.component'

import { ProjectsContainer } from './projects.styles'

import dwFazhionz from '../../../public/assets/projects/dw-fazhionz.jpg'


const Projects = () => {
    return (
        <ProjectsContainer id='projects' className='w-full :h-screen pt-10'>
            <div className='max-w-[1240px] h-full flex flex-col justify-center mx-auto px-2 pt-20'>
                <p className='section-name'>Projects</p>
                <h2 className='section-title'>What I&#039;ve Built</h2>
                
                
                <div className='grid md:grid-cols-2 gap-8'>
                    {/**
                        * *** D.W. FAZHIONZ ***
                    */}
                     <ProjectItem img={dwFazhionz} title='D.W. Fazhionz!' text='A fashion e-commerce website built with React and Firebase.' page='/projects/dwfazhionz' />

                {/**
                     * *** D.W. FAZHIONZ ***
                 */}
                    <ProjectItem img={dwFazhionz} title='D.W. Fazhionz!' text='A fashion e-commerce website built with React and Firebase.' page='/#projects' />
            
                {/**
                    * *** D.W. FAZHIONZ ***
                 */}
                    <ProjectItem img={dwFazhionz} title='D.W. Fazhionz!' text='A fashion e-commerce website built with React and Firebase.' page='/#projects' />

                {/**
                    * *** D.W. FAZHIONZ ***
                 */}
                    <ProjectItem img={dwFazhionz} title='D.W. Fazhionz!' text='A fashion e-commerce website built with React and Firebase.' page='/#projects' />
               </div>
            </div>
        </ProjectsContainer>  
    )   
}

export default Projects