import tw from "tailwind-styled-components";
import styled from "styled-components";

export const ExperienceContainer = tw.div`
    h-full p-2 
   md:w-[90vw] lg:w-[65vw]
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

export const ResumeButtonWrapper = tw.div`
    h-fit 
    p-2
    
    flex justify-between items-center 
    rounded-lg 
    font-bold text-lg 
    cursor-pointer 

    bg-black text-[tan] 
    hover:bg-[tan] hover:text-black shadow-lg shadow-gray-900 ease-in-out duration-300
`;

