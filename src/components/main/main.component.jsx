import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { AiOutlineMail } from 'react-icons/ai'
import { BsDownload, BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { CustomIcon } from '../customs/custom-icon.component'

import {
	CustomImage,
	CustomImageRound,
} from '../customs/custom-image.component'

import {
	CircularText,
	HomeContainer,
	MainWrapper,
	IntroWrapper,
	ImageWrapper,
	TextWrapper,
	SocialIconsWrapper,
	BottomInfoWrapper,
	InitialsWrapper,
	ResumeButtonWrapper,
} from './main.styles'

const Main = () => {
	return (
		<HomeContainer id='home'>
			<MainWrapper>
				{/**
				 * ********** MAIN CONTENT **********
				 */}
				<IntroWrapper>
					{/**
					 * ********** IMAGE **********
					 */}

					<ImageWrapper>
						<CustomImageRound>
							<Image
								src='/assets/portfolio-pic-tp.png'
								width='250'
								height='250'
								className='rounded-full bg-[tan] w-[250px] md:w-[300px]'
								alt='/'
							/>
						</CustomImageRound>
					</ImageWrapper>

					{/**
					 * ********** TEXT **********
					 */}
					<TextWrapper>
						<p className='uppercase text-sm tracking-widest'>
							Let&#039;s build solutions!
						</p>

						<h1 className='py-4 text-gray-700'>
							Hi, I&#039;m{' '}
							<span className='text-[tan] text-shadow-lg shadow-gray-900'>
								{' '}
								De Sean
							</span>
						</h1>
						<h2 className='py-2 text-gray-700'>
							Front-End Web Developer
						</h2>

						<p className='py-4'>
							As a skilled full-stack developer, I am dedicated to
							turning ideas into innovative web applications.
							Explore my latest projects, showcasing my expertise
							in React.js and web development.
						</p>
					</TextWrapper>
				</IntroWrapper>

				{/**
				 * ********** SOCIAL MEDIA ICONS **********
				 */}
				<SocialIconsWrapper>
					<Link
						href='https://www.linkedin.com/in/desean-ward'
						target='_blank'>
						<CustomIcon className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
							<FaLinkedinIn />
						</CustomIcon>
					</Link>

					<CustomIcon className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
						<FaGithub />
					</CustomIcon>

					<CustomIcon className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
						<AiOutlineMail />
					</CustomIcon>

					<CustomIcon className='rounded-full bg-white shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
						<BsFillPersonLinesFill />
					</CustomIcon>
				</SocialIconsWrapper>

				{/**
				 * **** CIRCULAR TEXT ****
				 */}
				<BottomInfoWrapper>
					<CircularText>
						<Image
							src='/assets/svg/circular-text.png'
							width='250'
							height='250'
							style={{
								width: '100%',
								height: '100%',
								objectFit: 'cover',
							}}
							className='inline-block animate-spin-slow'
							alt='/'
						/>

						<InitialsWrapper>
							<span className='initials'>D.W.</span>
						</InitialsWrapper>
					</CircularText>

					{/**
					 * **** RESUME BUTTON ****
					 */}
					<ResumeButtonWrapper>
						<Link href='#' download className=''>
							<span className=''>
								Resume
								<BsDownload
									size={20}
									className='relative inline-block ml-2 '
								/>
							</span>
						</Link>
					</ResumeButtonWrapper>
				</BottomInfoWrapper>
			</MainWrapper>
		</HomeContainer>
	)
}

export default Main
