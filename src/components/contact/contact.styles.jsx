import tw from 'tailwind-styled-components'
import { motion } from 'framer-motion'

export const ContactContainer = tw.div`
    w-full
    h-fit 
    mt-[5em]
`

export const ContactWrapper = tw.div`
    w-[70%]
    max-w-[900px] 
    m-auto 
    px-2 
    pt-[1em]
    mt-[5em]
`

export const ContentWrapper = tw.div`
    grid lg:grid-cols-5 gap-8
`

export const LeftSide = tw(motion.div)`
    //hidden 
    //md:block 
    col-span-3 
    lg:col-span-2 
    h-full 
    shadow-xl shadow-gray-400 
    rounded-xl 
    p-4
`

export const LeftSideWrapper = tw.div`
    lg:p-4 
    h-full
`

export const SocialIcons = tw.div`
    flex items-center justify-between 
    py-4 
    t-0
`

export const RightSide = tw(motion.div)`
    col-span-3 
    h-[100%] 
    shadow-xl shadow-gray-400 
    rounded-xl 
    lg:p-4
`

export const FormWrapper = tw.div`
    p-4
`

export const NamePhoneWrapper = tw.div`
    grid md:grid-cols-2 gap-4 
    w-full
    py-2
`

export const Field = tw.section`
    flex flex-col
    
    label {
        uppercase text-sm py-2
    }
`

export const Input = tw.input`
    border-2 rounded-lg p-3 border-gray-300 focus:outline-none 
`
export const TextArea = tw.textarea`
    border-2 rounded-lg p-3 border-gray-300 focus:outline-none resize-none
`

export const BackToTop = tw.div`
     invisible //flex justify-center py-12
`
