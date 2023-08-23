import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { motion } from 'framer-motion'

export const AboutContainer = tw.div`
    w-full h-screen p-2 flex items-center 
    relative
`

export const AboutContentWrapper = tw.div`
    relative 
    max-w-[1000px] 
    m-auto 
    flex flex-col-reverse
    
    md:grid grid-cols-3 gap-8
    items-center
`

export const AboutContent = tw(motion.div)`
    col-span-2

    p {
        py-2
        text-gray-600 
        
    }
`
