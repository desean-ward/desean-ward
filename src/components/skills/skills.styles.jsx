"use client";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import { css } from "@emotion/react";
import { motion } from "framer-motion";

export const SkillsContainer = tw.div`
    max-w-[1240px]
    flex flex-col 
    relative
    p-8 
    h-screen
`;

export const SkillsHeader = tw(motion.header)`
    mt-20 md:mt-40
`;
export const SkillsContentWrapper = tw(motion.div)`
   
    mx-auto
    
`;

export const SkillsTechWrapper = tw(motion.div)`
	grid md:grid-cols-2 lg:grid-cols-4 gap-8

    
`;

export const SkillWrapper = tw.div`
    p-4
    shadow-xl
    rounded-xl
    flex justify-center items-center
    
    hover:scale-110 ease-in duration-300
    `;

export const SkillLogo = tw.div`
    grid grid-cols-2 gap-4 justify-center items-center
`;

export const SkillTitle = tw.div`
    flex flex-col items-center justify-center
`;
