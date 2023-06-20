import styled from 'styled-components';
import tw from 'tailwind-styled-components';

export const AboutContainer = tw.div`
    w-full h-screen p-2 flex items-center
`

export const AboutContentWrapper = tw.div`
    relative 
    max-w-[1240px] 
    m-auto 
    flex flex-col-reverse

    md:grid grid-cols-3 gap-8
`

export const AboutContent = tw.div`
    col-span-2

    p {
        py-2
        text-gray-600 
        
    }
`