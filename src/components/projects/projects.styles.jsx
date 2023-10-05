import styled from "styled-components";
import tw from "tailwind-styled-components";
import { motion } from "framer-motion";

export const ProjectsContainer = tw.div`
max-w-[1240px] h-screen
flex flex-col
p-8
`;

export const ProjectsHeader = tw(motion.header)`
mt-20 md:mt-40
`;

export const ProjectsContentWrapper = tw.div`
max-w-[1000px] 
mx-auto
flex flex-col
`;

export const ProjectsWrapper = tw(motion.div)`
    
    m-auto
    grid md:grid-cols-2 gap-2
   
`;
