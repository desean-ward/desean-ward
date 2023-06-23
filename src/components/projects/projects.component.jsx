import React from 'react'

import ProjectItem from '../project-item/project-item.component'

import { ProjectsContainer, ProjectsContentWrapper, ProjectsWrapper } from './projects.styles'

import dwFazhionz from '../../../public/assets/projects/dw-fazhionz.jpg'


const Projects = () => {
    const slideDown = {
        initial: { y: '-100', opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { delay: 0.5, duration: 0.3 } }
    }

    return (
        <ProjectsContainer id='projects' className=' '>
            <ProjectsContentWrapper>
                <p className='section-name'>Projects</p>
                <h2 className='section-title'>What I&#039;ve Built</h2>
                
                <ProjectsWrapper
                    variants={slideDown}
                    initial='initial'
                    animate='animate'
                >
                    {/**
                        * *** D.W. FAZHIONZ ***
                    */}
                     <ProjectItem img={dwFazhionz} title='D.W. Fazhionz!' text='A fashion e-Commerce website built with React and Firebase.' page='/projects/dwfazhionz' />

                {/**
                     * *** D.W. FAZHIONZ ***
                 */}
                    <ProjectItem img={dwFazhionz} title='D.W. Fazhionz!' text='A fashion e-Commerce website built with React and Firebase.' page='/#projects' />
            
                {/**
                    * *** D.W. FAZHIONZ ***
                 */}
                    <ProjectItem img={dwFazhionz} title='D.W. Fazhionz!' text='A fashion e-Commerce website built with React and Firebase.' page='/#projects' />

                {/**
                    * *** D.W. FAZHIONZ ***
                 */}
                    <ProjectItem img={dwFazhionz} title='D.W. Fazhionz!' text='A fashion e-Commerce website built with React and Firebase.' page='/#projects' />
               </ProjectsWrapper>
            </ProjectsContentWrapper>
        </ProjectsContainer>  
    )   
}

export default Projects