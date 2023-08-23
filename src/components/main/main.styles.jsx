import tw from "tailwind-styled-components";
import { motion } from "framer-motion";

export const HomeContainer = tw.div`
    h-full
    w-screen
    flex flex-col justify-center items-center
    px-2
    mt-20
`;

export const MainWrapper = tw.div`
    w-fit max-w-[1240px] 
    grid content-center-center
    relative
     
    `;

export const IntroWrapper = tw.div`
    w-full 
    h-fit 
    mx-auto 
    p-2 
    flex justify-center items-center flex-wrap
    
    p {
        text-gray-600
    }
`;

export const ImageWrapper = tw(motion.div)`
`;

export const TextWrapper = tw(motion.div)`
    lg:w-[50%] md:w-[80%] sm:w-[80%] 
    justify-start text-center
`;

export const SocialIconsWrapper = tw(motion.div)`
    relative 
    z-10
    flex items-center justify-between gap-4 
    max-w-[330px] 
    mx-auto
    
    
`;

export const BottomInfoWrapper = tw(motion.div)`
    relative 
    md:top-[-4em]
    w-[95%] md:w-[80%]
    max-w-[900px] 
    mx-auto 
    flex flex-wrap justify-between items-center md:justify-between 
    text-[tan] font-bold
    
`;

export const CircularText = tw.div`
    flex justify-center items-center
    max-w-[150px]
    mt-8 md:mt-0
`;

export const InitialsWrapper = tw.div`
    absolute 
    w-auto 
    inline-block 
    bg-black rounded-full 
    shadow-lg shadow-gray-900 
    p-6 py-8
    cursor-default
`;

export const ResumeButtonWrapper = tw.div`
    relative 
    flex justify-between items-center 
    rounded-lg 
    font-bold text-lg 
    cursor-pointer 

    bg-black text-[tan] 
    hover:bg-[tan] hover:text-black shadow-lg shadow-gray-900 ease-in-out duration-300

    span {
        relative inline-block w-fit p-4
    }
`;
