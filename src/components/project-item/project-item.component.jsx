import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { motion, AnimatePresence } from 'framer-motion'

import { ProjectItemContainer } from './project-item.styles'

const ProjectItem = ({img, title, text, page}) => {
  return (
    <ProjectItemContainer>
        <div
            className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[black] to-[tan]'
        >
        <Image className='rounded-xl group-hover:opacity-5' src={img} alt='/' />

            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center'>
                <h3 className='text-2xl tracking-wider'>{title}</h3>

                <p className='pb-4 pt-2'>{text}</p>

                <Link href={page}>
                    <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:bg-[lightgray]'>
                        More Info
                    </p>
                </Link>
            </div>
        </div>
    </ProjectItemContainer>
  )
}

export default ProjectItem