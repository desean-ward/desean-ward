import React, { useState, useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { motion, AnimatePresence } from 'framer-motion'

import {
	ButtonContainer,
	OverlayText,
	ProjectItemBackground,
	ProjectItemContainer,
	ProjectItemOverlay,
	ProjectItemWrapper,
} from './project-item.styles'

const ProjectItem = ({ key, img, title, text, page }) => {
	const [overlay, setOverlay] = useState(false)

	const show = {
		hidden: { top: '100%' },
		visible: overlay ? { top: 0, opacity: 0.9 } : { top: '100%' },
		exit: { top: '100%' },
	}

	return (
		<ProjectItemContainer>
			<ProjectItemBackground
				onMouseEnter={() => setOverlay(true)}
				onMouseLeave={() => setOverlay(false)}>
				<ProjectItemWrapper>
					<Image className='rounded-xl' src={img} alt='/' />

					{/**
					 **** ANIMATED OVERLAY ****
					 */}
					<ProjectItemOverlay
						variants={show}
						initial='hidden'
						animate='visible'
						exit='exit'>
						{/**
						 * *** OVERLAY TEXT ***
						 */}
						<OverlayText>
							<h3 className='text-2xl font-black tracking-wider'>
								{title}
							</h3>

							<p className='pb-8 pt-2'>{text}</p>

							{/**
							 * *** MORE INFO BUTTON***
							 */}
							<ButtonContainer>
								<Link href={page}>
									<p>More Info</p>
								</Link>
							</ButtonContainer>
						</OverlayText>
					</ProjectItemOverlay>
				</ProjectItemWrapper>
			</ProjectItemBackground>
		</ProjectItemContainer>
	)
}

export default ProjectItem
