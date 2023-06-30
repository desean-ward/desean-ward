import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { AiOutlineMail } from 'react-icons/ai';
import { BsDownload, BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { CustomIcon } from '../customs/custom-icon.component';

import {
	CustomImage,
	CustomImageRound,
} from '../customs/custom-image.component';

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
} from './main.styles';

import { motion } from 'framer-motion';

const Main = () => {
	const fadeInLeft = {
		initial: { x: '-100', opacity: 0 },
		animate: {
			x: 0,
			opacity: 1,
			transition: { duration: 0.25, delay: 0.5 },
		},
	};

	const fadeInRight = {
		initial: { x: '100', opacity: 0 },
		animate: {
			x: 0,
			opacity: 1,
			transition: { duration: 0.25, delay: 0.5 },
		},
	};

	const fadeUp = {
		initial: { y: '100', opacity: 0 },
		animate: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.5, delay: 0.75 },
		},
	};

	const fadeIn = {
		initial: { opacity: 0 },
		animate: { opacity: 1, transition: { duration: 0.5, delay: 1 } },
	};

	const fadeIn2 = {
		initial: { opacity: 0 },
		animate: { opacity: 1, transition: { duration: 0.5, delay: 1 } },
	};

	const content = {
		initial: { opacity: 1 },
		animate: {
			opacity: 1,
			transition: { delayChildren: 0.25, staggerChildren: 0.05 },
		},
	};

	const singleWord = {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
	};

	const text =
		'As a skilled Full Stack Software Engineer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects, showcasing my expertise in React.js and web development.';

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

					<ImageWrapper
						variants={fadeInLeft}
						initial='initial'
						animate='animate'>
						<CustomImageRound>
							<Image
								src='/assets/portfolio-pic-tp.png'
								width='250'
								height='250'
								className='rounded-full bg-[tan]'
								alt='/'
							/>
						</CustomImageRound>
					</ImageWrapper>

					{/**
					 * ********** TEXT **********
					 */}
					<TextWrapper
						variants={fadeInRight}
						initial='initial'
						animate='animate'>
						<p className='uppercase text-sm tracking-widest'>
							Let&#039;s build solutions!
						</p>

						<motion.h1
							variants={fadeIn}
							initial='initial'
							animate='animate'
							className='py-4 text-gray-700'>
							Hi, I&#039;m{' '}
							<span className='text-[tan] text-shadow-lg shadow-gray-900'>
								{' '}
								De Sean
							</span>
						</motion.h1>

						<motion.h2 className='py-2 text-gray-700'>
							Full Stack Software Engineer
						</motion.h2>

						<motion.p
							variants={content}
							initial='initial'
							animate='animate'
							className='py-4'>
							{text.split(' ').map((word, index) => (
								<motion.span
									key={word + '-' + index}
									className='inline-block'
									variants={singleWord}>
									{word}&nbsp;
								</motion.span>
							))}
						</motion.p>
					</TextWrapper>
				</IntroWrapper>

				{/**
				 * ********** SOCIAL MEDIA ICONS **********
				 */}
				<SocialIconsWrapper
					variants={fadeUp}
					initial='initial'
					animate='animate'>
					<Link
						href='https://www.linkedin.com/in/desean-ward'
						target='_blank'>
						<CustomIcon className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
							<FaLinkedinIn />
						</CustomIcon>
					</Link>
					
					<Link
						href='https://www.github.com/desean-ward'
						target='_blank'>
						<CustomIcon className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
							<FaGithub />
						</CustomIcon>
					</Link>

					<CustomIcon className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
						<AiOutlineMail />
					</CustomIcon>

					<CustomIcon className='rounded-full bg-white shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
						<BsFillPersonLinesFill />
					</CustomIcon>
				</SocialIconsWrapper>

				{/**
				 * **** BOTTOM INFO ****
				 */}
				<BottomInfoWrapper
					variants={fadeIn2}
					initial='initial'
					animate='animate'>
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
						<Link href='/files/desean-ward.docx' download target='_blank'>
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
	);
};

export default Main;
