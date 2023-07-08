'use client';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

export const SkillsContainer = tw.div`
    w-full
    relative
    mt-[5em] sm:mt-0
    p-2 
    //pt-[5em] sm:pt-0
    md:h-screen 
`;

export const SkillsContentWrapper = tw(motion.div)`
    max-w-[1240px] 
    mx-auto 
    flex flex-col justify-center 
    h-full
`;

export const SkillsTechWrapper = tw(motion.div)`
	grid md:grid-cols-2 lg:grid-cols-4 gap-8
`;

export const SkillWrapper = tw.div`
    group    
    p-6 
    shadow-xl
    rounded-xl
    flex justify-center items-center
   
    hover:scale-110 ease-in duration-300
`;

export const SkillLogo = tw.div`
    w-auto h-auto
    grid grid-cols-2 gap-4 justify-center items-center
`;

export const SkillTitle = tw.div`
    flex flex-col items-center justify-center
`;
