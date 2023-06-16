import React from 'react'

import { ContactContainer } from './contact.styles'

import Image from 'next/image'
import Link from 'next/link'

import contact from '../../../public/assets/contact.jpg'

import { CustomIcon } from '../customs/custom-icon.component'

import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Contact = () => {
	return (
		<ContactContainer id='contact' className='w-full md:h-screen pt-12'>
			<div>
				<div className='max-w-[1260px] m-auto px-2 py-16 w-full h-full'>
					<p className='section-name'> Contact </p>
					<h2 className='py-4'> Get In Touch </h2>
					<div className='grid lg:grid-cols-5 gap-8'>
						{' '}
						{/* left side */}{' '}
						<div className='col-span-3 lg:col-span-2 h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
							<div className='lg:p-4 h-full'>
								<div>
									<Image
										className='w-full rounded-xl'
										width='300'
										src={contact}
										alt='/'
									/>
								</div>
								<div>
									<h2 className='py-2 text-[tan] text-shadow-lg shadow-gray-900'>
										De Sean Ward{' '}
									</h2>{' '}
									<p> Front - End Developer </p>{' '}
									<p className='py-4'>
										I am available for freelance or full -
										time positions.Contact me and let&#039;s talk.
									</p>
								</div>
								<div>
									<p className='uppercase pt-8'>
										Connect With Me{' '}
									</p>
									<div className='flex items-center justify-between py-4 t-0'>
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
										</CustomIcon>{' '}
									</div>{' '}
								</div>{' '}
							</div>{' '}
						</div>
						{/* right side */}{' '}
						<div className='col-span-3 h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
							<div className='p-4'>
								<form>
									<div className='grid md:grid-cols-2 gap-4 w-full py-2'>
										<div className='flex flex-col'>
											<label className='uppercase text-sm py-2'>
												Name{' '}
											</label>{' '}
											<input
												className='border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none'
												type='text'
											/>
										</div>
										<div className='flex flex-col'>
											<label className='uppercase text-sm py-2'>
												Phone{' '}
											</label>{' '}
											<input
												className='border-2 rounded-lg p-3 flex  border-gray-300 focus:outline-none'
												type='text'
											/>
										</div>{' '}
									</div>
									<div className='flex flex-col'>
										<label className='uppercase text-sm py-2'>
											Email{' '}
										</label>{' '}
										<input
											className='border-2 rounded-lg p-3 flex  border-gray-300 focus:outline-none'
											type='email'
										/>
									</div>
									<div className='flex flex-col'>
										<label className='uppercase text-sm py-2'>
											Subject{' '}
										</label>{' '}
										<input
											className='border-2 rounded-lg p-3 flex  border-gray-300 focus:outline-none'
											type='text'
										/>
									</div>
									<div className='flex flex-col'>
										<label className='uppercase text-sm py-2'>
											Message{' '}
										</label>{' '}
										<textarea
											className='border-2 rounded-lg p-3 resize-none focus:outline-none'
											rows={5}
										/>{' '}
									</div>
									<button className='w-full p-4 text-gray-900 mt-4'>
										Send Message{' '}
									</button>{' '}
								</form>{' '}
							</div>{' '}
						</div>{' '}
					</div>
					<div className='flex justify-center py-12'>
						<Link href='/'>
							<CustomIcon>
								<HiOutlineChevronDoubleUp size={30} />{' '}
							</CustomIcon>{' '}
						</Link>{' '}
					</div>{' '}
				</div>{' '}
			</div>{' '}
		</ContactContainer>
	)
}

export default Contact
