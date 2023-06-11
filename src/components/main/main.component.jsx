import Image from 'next/image'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { CustomIcon } from '../customs/custom-icon.component'
import { CustomImageRound } from '../customs/custom-image.component'

const Main = () => {
  return (
    /**
     * ********** MAIN **********
     */
    <div className='w-full h-screen text-center'>

        {/**
         * ********** MAIN CONTENT **********
         */}
        <div className='max-w-[1240px] w-full mt-40 mx-auto p-2 flex justify-center items-center flex-wrap'>

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
            <div className='lg:w-[50%] md:w-[80%] sm:w-[80%]'>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Let&#039;s build solutions!</p>

                <h1 className='py-4 text-gray-700'>Hi, I&#039;m <span className='text-[tan] text-shadow-lg shadow-gray-900'> De Sean</span></h1>
                <h1 className='py-2 text-gray-700'>Front-End Web Developer</h1>

                <p className='py-4 text-gray-600 m-auto'>
                    I&#039;m a front-end web developer specializing in building exceptional digital experiences. Currently, I&#039;m focused on building responsive front-end web applications while learning back-end technologies.
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
    </div>
  )
}

export default Main