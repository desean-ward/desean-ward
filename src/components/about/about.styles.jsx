import styled from "styled-components";
import tw from "tailwind-styled-components";
import { motion } from "framer-motion";

export const AboutContainer = tw.div`
    max-w-[1240px]  h-screen 
    p-8 flex flex-col 
    relative
`;

export const AboutHeader = tw(motion.header)`
   mt-20 md:mt-40
`;

export const AboutContentWrapper = tw.div`
    relative 
    m-auto 
    flex flex-col
    
    md:grid grid-cols-3 gap-8
    items-center
`;

export const AboutContent = tw(motion.div)`
    col-span-2

    p {
        py-2
        text-gray-600 
        
    }
`;
