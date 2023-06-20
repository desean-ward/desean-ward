import styled from 'styled-components'
import tw from 'tailwind-styled-components'

export const ProjectsContainer = tw.div`
    w-full 
    h-full 
    mb-[5em] 
    py-[7em]
`

export const ProjectsContentWrapper = tw.div`
    max-w-[1240px] 
    h-full 
    flex flex-col justify-center
    mx-auto 
    px-2
`

export const ProjectsWrapper = tw.div`
    grid md:grid-cols-2 gap-2 content-center
`
