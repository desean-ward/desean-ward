import styled from 'styled-components';
import tw from 'tailwind-styled-components'

export const SkillsContainer = tw.div`
    w-full 
    p-2 pt-[6em] 

    md:pt-0
    md:h-screen 
`

export const SkillsContentWrapper = tw.div`
    max-w-[1240px] 
    mx-auto 
    flex flex-col justify-center 
    h-full
`

export const SkillsTechWrapper = tw.div`
    grid md:grid-cols-2 lg:grid-cols-4 gap-8
`

export const SkillWrapper = tw.div`
    p-6 
    shadow-xl 
    rounded-xl
    
    hover:scale-105 ease-in duration-300
`

export const Skill = tw.div`
    grid grid-cols-2 gap-4 justify-center items-center
`

export const SkillTitle = tw.div`
    flex flex-col items-center justify-center
`