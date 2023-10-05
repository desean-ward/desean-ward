"use client";
import tw from "tailwind-styled-components";

export const NavContainer = tw.div`
    {
        flex justify-center items-center
        ${(p) =>
          p.doshadow === "true"
            ? "fixed w-full h-20 bg-[{navBg}] top-0 shadow-xl z-[100]"
            : "fixed w-full h-20 bg-[{navBg}] top-0 z-[100]"}
`;

export const NavWrapper = tw.div`
    flex items-center justify-between 
    w-screen 
    max-w-[1440px]
    px-8 2xl:px-16
`;

export const NavLink = tw.a`
     hover:text-[tan] hover:text-shadow-sm shadow-gray-900
`;
