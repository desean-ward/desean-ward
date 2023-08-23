import styled from "styled-components";
import tw from "tailwind-styled-components";
import { motion } from "framer-motion";

export const ProjectsContainer = tw.div`
    w-full 
    h-screen 
    mt-20
    flex justify-center items-center
`;

export const ProjectsContentWrapper = tw.div`
    max-w-[1000px]
    h-full 
    flex flex-col
    mx-2 
    px-2
`;

export const ProjectsWrapper = tw(motion.div)`
    lg:w-[80%]
    h-full
    m-auto
    grid md:grid-cols-2 gap-2 content-start
`;
