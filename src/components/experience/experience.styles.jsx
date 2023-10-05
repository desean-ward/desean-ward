import tw from "tailwind-styled-components";
import styled from "styled-components";

export const ExperienceContainer = tw.div`
    h-full p-2 
   md:w-[50vw]
`;

export const ExperienceContentWrapper = tw.div`
   
    
    h-full 
    flex flex-col
    pb-[10em]

    //border-2 border-red-900
`;

export const ExperienceContent = tw.div`
    

    p {
        py-2
        text-gray-600 
        
    }
`;
