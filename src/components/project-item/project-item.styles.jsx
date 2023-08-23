import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "tailwind-styled-components";

export const ProjectItemContainer = styled.div``;

export const ProjectItemBackground = tw.div`
    relative 
    flex items-center justify-center 
    h-[200px]
    w-full 
    shadow-xl shadow-gray-400 
    rounded-xl 
    p-4
    group 
    overflow-hidden
`;

export const ProjectItemWrapper = tw.div`
    relative 
    group 
    h-full 
    w-[100%] 
    overflow-hidden
`;

export const ProjectItemOverlay = tw(motion.div)`
    ${(props) => (props.ready == "true" ? "block" : "hidden")}
    group 
    absolute
    h-[100%] 
    w-[100%] 
    bg-gradient-to-r from-[black] to-[tan] 
    top-[2em] 
    rounded-xl 
    opacity-90 
`;

export const OverlayText = tw.div`
    group
    absolute 
    w-[80%]
    top-[50%] translate-y-[-50%]
    left-[50%] translate-x-[-50%]
    text-white text-center
`;

export const ButtonContainer = tw.div`
    ${(props) =>
      props.screen < 768
        ? "absolute left-[50%] translate-x-[-50%] w-[60%] top-[-100%]"
        : "w-full"}
        
    justify-self-center

    p {
        width-[80%] 
        text-center 
        rounded-lg 
        bg-black text-[tan] 
        font-bold 
        lg:text-lg 
        cursor-pointer 
        hover:bg-[lightgray] hover:text-black ease-in-out duration-300
    }
`;
