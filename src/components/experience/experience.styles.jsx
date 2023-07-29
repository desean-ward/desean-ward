import tw from 'tailwind-styled-components';
import styled from 'styled-components';

export const ExperienceContainer = tw.div`
    w-full h-full p-2 flex items-center justify-center
    relative
`;

export const ExperienceContentWrapper = tw.div`
    max-w-[1240px]
    w-full
    h-full 
    flex flex-col justify-center justify-center
    pb-[10em]

    //border-2 border-red-900
`;

export const ExperienceContent = tw.div`
    col-span-2

    p {
        py-2
        text-gray-600 
        
    }
`;
