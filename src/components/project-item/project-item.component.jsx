import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { motion, AnimatePresence } from 'framer-motion'

import { ProjectItemContainer } from './project-item.styles'

const ProjectItem = ({ img, title, text, page }) => {
	return (
		<ProjectItemContainer>
			<div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group group-hover:animtate-fade-up group-hover:animate-duration-1000 overflow-hidden'>
				<Image className='rounded-xl' src={img} alt='/' />

				{/**
				 **** ANIMATED OVERLAY ****
				 */}
				<div className='group absolute h-full w-full bg-gradient-to-r from-[black] to-[tan] rounded-xl opacity-90 top-[100%] full transition-transform duration-500 transform group-hover:-translate-y-full'>
					{/**
					 * *** OVERLAY TEXT ***
					 */}
					<div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-center'>
						<h3 className='text-2xl font-black tracking-wider'>
							{title}
						</h3>

						<p className='pb-4 pt-2 w-[100%]'>{text}</p>

						{/**
						 * *** MORE INFO BUTTON***
						 */}
						<Link href={page}>
							<p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:bg-[lightgray]'>
								More Info
							</p>
						</Link>
					</div>
				</div>
			</div>
		</ProjectItemContainer>
	)
}

export default ProjectItem
