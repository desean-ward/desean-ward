import React from 'react'

import {
	ContactContainer,
	ContactWrapper,
	ContentWrapper,
	LeftSide,
	LeftSideWrapper,
	RightSide,
	SocialIcons,
	FormWrapper,
	NamePhoneWrapper,
	Field,
	Input,
	TextArea,
	BackToTop,
} from './contact.styles'

import Image from 'next/image'
import Link from 'next/link'

import contact from '../../../public/assets/contact.jpg'

import { CustomIcon } from '../customs/custom-icon.component'

import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

import { motion } from 'framer-motion'


const Contact = () => {
	const fadeInLeft = {
		initial: { x: '-100', opacity: 0 },
		animate: {
			x: 0,
			opacity: 1,
			transition: { delay: 0.75, duration: 0.75 },
		},
	}

	const fadeInRight = {
		initial: { x: '100', opacity: 0 },
		animate: {
			x: 0,
			opacity: 1,
			transition: { delay: 0.75, duration: 0.75 },
		},
	}

	const slideUp = {
		initial: { y: 100, opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { delay: 1.25, duration: 0.5}}
	}

	return (
		<ContactContainer id='contact'>
			<div>
				<ContactWrapper>
					<motion.section
						variants={slideUp}
						initial='initial'
						animate='animate'
					>
						<p className='section-name'> Contact </p>
						<h2 className='section-title'> Get In Touch </h2>
					</motion.section>

					<ContentWrapper>
						
						{/* left side */}
						<LeftSide
							variants={fadeInLeft}
							initial='initial'
							animate='animate'
						>
							<LeftSideWrapper>
								<div>
									<Image
										className='w-full rounded-xl hidden md:block'
										width='300'
										src={contact}
										alt='/'
									/>
								</div>

								<div>
									<h2 className='py-2 text-[tan] text-shadow-lg shadow-gray-900'>
										De Sean Ward
									</h2>
									<p> Front - End Developer </p>
									<p className='py-4'>
										I am available for freelance or full-time positions. Contact me and let&#039;s
										talk.
									</p>
								</div>

								<div>
									<p className='uppercase pt-8'>
										Connect With Me
									</p>

									{/* Social Icons */}
									<SocialIcons>
										<Link
											href='https://www.linkedin.com/in/desean-ward'
											target='_blank'
										>
											<CustomIcon>
												<FaLinkedinIn />
											</CustomIcon>
										</Link>

										<CustomIcon>
											<FaGithub />
										</CustomIcon>

										<CustomIcon>
											<AiOutlineMail />
										</CustomIcon>

										<CustomIcon>
											<BsFillPersonLinesFill />
										</CustomIcon>
									</SocialIcons>
								</div>
							</LeftSideWrapper>
						</LeftSide>
						
						{/* right side */}
						<RightSide
						variants={fadeInRight}
						initial='initial'
						animate='animate'
					>
							<FormWrapper>
								<form>
									<NamePhoneWrapper>
										<Field>
											<label>Name </label>
											<Input type='text' />
										</Field>

										<Field>
											<label>Phone </label>
											<Input type='text' />
										</Field>
									</NamePhoneWrapper>

									<Field>
										<label>Email </label>
										<Input type='email' />
									</Field>

									<Field>
										<label>Subject </label>
										<Input type='text' />
									</Field>

									<Field>
										<label>Message </label>
										<TextArea rows={5} />
									</Field>

									<button className='w-full p-4 text-gray-900 mt-4'>
										Send Message
									</button>
								</form>
							</FormWrapper>
						</RightSide>
					</ContentWrapper>

					<BackToTop>
						<Link href='#home'>
							<CustomIcon>
								<HiOutlineChevronDoubleUp size={30} />
							</CustomIcon>
						</Link>
					</BackToTop>
				</ContactWrapper>
			</div>
		</ContactContainer>
	)
}

export default Contact
