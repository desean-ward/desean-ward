import Image from 'next/image'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full mt-40 mx-auto p-2 flex justify-center items-center'>
            <div>
                <div className='w-full flex flex-col justify-center align-center'>
                    <Image
                        src='/../public/assets/portfolio-pic.jpg'
                        width='400'
                        height='400'
                        className='rounded-full pb-8'
                        alt='/'
                    />
                </div>
            </div>

            <div className='w-[50%]'>
                <p className='uppercase text-sm tracking-widest text-gray-600'>Let&#039;s build solutions!</p>

                <h1 className='py-4 text-gray-700'>Hi, I&#039;m <span className='text-[tan]'> De Sean</span></h1>
                <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>

                <p className='py-4 text-gray-600 m-auto'>
                    I&#039;m a front-end web developer specializing in building exceptional digital experiences. Currently, I&#039;m focused on building responsive front-end web applications while learning back-end technologies.
                </p>
            </div>
        </div>

        <div className='flex items-center justify-between max-w-[330px] m-auto py-4 t-0'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
            </div>

            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                <FaGithub />
            </div>

            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                <AiOutlineMail />
            </div>

            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                <BsFillPersonLinesFill />
            </div>
        </div>
    </div>
  )
}

export default Main