import styled from 'styled-components'
import tw from 'tailwind-styled-components'
import { motion } from 'framer-motion'

export const ProjectsContainer = tw.div`
    w-full 
    h-full 
    py-[5em]
`

export const ProjectsContentWrapper = tw.div`
    max-w-[1240px]
    h-full 
    flex flex-col justify-center
    mx-auto 
    px-2
`

export const ProjectsWrapper = tw(motion.div)`
    lg:w-[80%]
    m-auto
    grid md:grid-cols-2 gap-2 content-center
`
