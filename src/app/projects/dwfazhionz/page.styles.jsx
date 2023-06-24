import styled from 'styled-components';
import tw from 'tailwind-styled-components'

import { motion } from 'framer-motion'

export const PageContainer = tw(motion.div)`
    w-full
`

export const HeaderWrapper = tw.div`
    w-screen h-[30vh] lg:h-[40vh] 
    relative
`

export const HeaderOverlay = tw.header`
    absolute 
    top-0 
    left-0 
    w-full 
    h-[30vh] lg:h-[40vh]
    bg-black/80 
    z-10
`

export const HeaderText = tw.div`
    absolute 
    top-[70%] 
    w-full 
    max-w-[1240px] 
    left-[50%] translate-x-[-50%]
    right-[50%] translate-y-[-50%]
    text-white 
    z-[10] 
    p-4
`

export const MainContent = tw.main`
    max-w-[1240px] 
    mx-auto 
    p-2 
    grid md:grid-cols-5 gap-8 
    pt-8 px-4
`

export const TechContainer = tw.aside`
    col-span-4 md:col-span-1 
    shadow-xl shadow-gray-400 
    rounded-xl 
    p-4
`

export const TechWrapper = tw.div`
    p-2 
    w-full
`

export const Technologies = tw.div`
    grid items-baseline grid-cols-2 md:grid-cols-1
`

export const Tech = tw.p`
    text-gray-600 
    py-2 
    flex items-center
`

export const ProjectsBtn = tw.p`
max-w-fit 
mt-8 
flex justify-center items-center gap-4 
mb-8 
hover:text-[tan] 
hover:text-shadow-sm shadow-gray-900
`