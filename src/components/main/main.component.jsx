import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsDownload, BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { CustomIcon } from '../customs/custom-icon.component'
import { CustomImage, CustomImageRound } from '../customs/custom-image.component'
import { CircularText } from './main.styles'

const Main = () => {
  return (
    /**
     * ********** MAIN **********
     */
    <div className='w-full h-screen text-center'>

        {/**
         * ********** MAIN CONTENT **********
         */}
        <div id='home' className='max-w-[1240px] w-full mt-40 mx-auto p-2 flex justify-center items-center flex-wrap'>

            {/**
             * ********** IMAGE **********
             */}
            <div>
                <div className='w-full flex flex-col justify-center align-center'>
                    <CustomImageRound>
                        <Image
                            src='/../public/assets/portfolio-pic.jpg'
                            width='250'
                            height='250'
                            className='rounded-full md:w-[300px] sm:w-[250px] xs:w-[150px]'
                            alt='/'
                        />
                    </CustomImageRound>
                </div>
            </div>

            {/**
             * ********** TEXT **********
             */}
            <div className='lg:w-[50%] md:w-[80%] sm:w-[80%] justify-start'>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Let&#039;s build solutions!</p>

                <h1 className='py-4 text-gray-700'>Hi, I&#039;m <span className='text-[tan] text-shadow-lg shadow-gray-900'> De Sean</span></h1>
                <h1 className='py-2 text-gray-700'>Front-End Web Developer</h1>

                <p className='py-4 text-gray-600 m-auto'>
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.
                </p>
            </div>
        </div>
        
        {/**
         * ********** SOCIAL MEDIA ICONS **********
         */}
         <div className='flex items-center justify-between max-w-[330px] m-auto py-4 t-0'>
            <CustomIcon className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
            </CustomIcon>

            <CustomIcon className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
            </CustomIcon>

            <CustomIcon className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
            </CustomIcon>

            <CustomIcon className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
            </CustomIcon>
        </div>

        {/**
         * **** CIRCULAR TEXT ****
         */}
        <CircularText className='m-auto flex flex-wrap justify-between items-center px-4 max-w-[900px]'>
        <div className='border flex justify-center items-center'>
            <Image
                src='/../public/assets/svg/circular-text.png'
                width='250'
                height='250'
                className='inline-block animate-spin-slow md:w-[150px] sm:w-[250px] xs:w-[75px]'
                alt='/'
            />

            <div className='absolute inline-block bg-black rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer'>
                <span className='text-[tan] text-shadow-lg shadow-gray-900 text-sm font-bold py-10'>D.W.</span>
            </div>
         </div>

         {/**
         * **** RESUME BUTTON ****
         */}
         <Link href="#" target={"_blank"} className='relative flex justify-between items-center text-[tan] hover:text-black'>
            <span className='relative inline-block w-fit rounded-lg bg-black text-[lightgray] font-bold text-lg cursor-pointer hover:bg-[tan] hover:text-black md:w-[150px] sm:w-[250px] xs:w-[75px] p-4'>
                Resume
                <BsDownload size={20} className='relative inline-block ml-2 ' />
            </span>
            
        </Link>
        </CircularText>

        
    </div>
  )
}

export default Main