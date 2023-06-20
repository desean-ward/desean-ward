'use client'
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

export const NavContainer = tw.div`
    {
        ${p => p.shadow 
        ? 'fixed w-full h-20 bg-[{navBg}] shadow-xl z-[100]' 
        : 'fixed w-full h-20 bg-[{navBg}] z-[100]'
    }
`

export const NavWrapper = tw.div`
    flex items-center justify-between 
    w-full 
    h-full 
    px-4 2xl:px-16
`
