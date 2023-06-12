'use client'
import Image from 'next/image'
import React from 'react'

import { PageContainer } from './page.styles'

import dwFazhionz from '../../../../public/assets/projects/dw-fazhionz.jpg'

import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'
import { CustomIcon } from '@/components/customs/custom-icon.component'
import { HiOutlineChevronDoubleLeft } from 'react-icons/hi'

const dwfazhionz = () => {
  return (
    <PageContainer className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
          <Image className='absolute z-1' fill objectFit='cover' src={dwFazhionz} alt='/' />

          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-[10] p-4'>
            <h2>D.W. Fazhionz!</h2>
            <h3>React / Firebase / Stripe</h3>
          </div>
        </div>

    <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8 px-4'>
      <div className='col-span-4'>
        <p className='mb-2'>Project</p>
        <h2 className='mb-2'>Overview</h2>
        <p>This application was built using React JS and Firebase. Users are able to search clothing categories, view a product&#039;s description, add to a shopping bag, and checkout with credit card information via the Stripe API.  User authentication is available, so you can signup & signin to your account with an email address; or Google account. Product descriptions were made possible with the OpenAI API.</p>

        {/**
         * **** BUTTONS ****
         */}
        <a href='https://dw-fazhionz.netlify.app/' target={'_blank'}><button className='px-8 py-2 mt-4 mr-8'>Demo</button></a>
        <button className='px-8 py-2 mt-4'>Github</button>
      </div>

      <aside className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
        <div className='p-2 w-full'>
          <p className='text-center font-bold pb-2'>Technologies</p>

          <div className='grid items-baseline grid-cols-2 md:grid-cols-1'>
            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> React</p>

            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Styled Components</p>

            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> SCSS</p>

            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Javascript</p>

            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Firebase</p>
            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> OpenAI</p>

            <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Stripe</p>

          </div>
        </div>
      </aside>
      
      <Link href='/#projects'>
        <p className='relative md:top-[-4em]  underline mb-8'>Back</p>
      </Link>

    </div>
    </PageContainer>
  )
}

export default dwfazhionz