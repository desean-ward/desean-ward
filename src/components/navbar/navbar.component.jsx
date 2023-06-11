import React, { useState } from 'react'

// NextJS Components
import Image from 'next/image'

// Styled Components
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { CustomIconNav } from '../customs/custom-icon.component'
import CustomLink from '../customs/custom-link.component'

const Navbar = () => {
	const [nav, setNav] = useState(false)

	const handleNav = () => {
		setNav(!nav)
	}

	return (
		<div className='fixed w-full h-20 shadow-xl'>
			<div className='flex items-center justify-between w-full h-full px-4 2xl:px-16'>
				{/**
				 * ********** LOGO **********
				 */}
				<h2 className='text-gray-700'>D.W.</h2>

				{/**
				 * ********** NAV **********
				 */}
				<ul className='hidden md:flex text-sm uppercase'>
					<CustomLink href='http://www.google.com'>
						<li className='ml-10'>
							Home
						</li>
					</CustomLink>

					<CustomLink href='/'>
						<li className='ml-10'>
							About
						</li>
					</CustomLink>

					<CustomLink href='/'>
						<li className='ml-10'>
							Skills
						</li>
					</CustomLink>

					<CustomLink href='/'>
						<li className='ml-10'>
							Projects
						</li>
					</CustomLink>

					<CustomLink href='/'>
						<li className='ml-10'>
							Contact Me
						</li>
					</CustomLink>
				</ul>

				<div
					onClick={handleNav}
					className='md:hidden hover:cursor-pointer'>
					<AiOutlineMenu size={25} />
				</div>
			</div>


			{/**
			 * **** Mobile Navigation ****
			 */}
			<div
				className={
					nav
						? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
						: ' '
				}>
				{/**
				 * **** Mobile Navigation Content ****
				 */}
				<div
					className={
						nav
							? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-8 ease-in duration-500'
							: 'fixed left-[-100%] top-0 p-5 ease-in duration-500'
					}>


					{/**
					 * **** Profile Picture ****
					 */}
					<div className='flex w-full items-center justify-between'>
						<Image
							src='/../public/assets/portfolio-pic.jpg'
							width='85'
							height='30'
							className='rounded-full pt-2'
							alt='/'
						/>

						<h3 className='text-gray-700 relative ml-[-8em] pl-4'>De Sean Ward</h3>


						{/**
						 * **** Close Icon ****
						 */}
						<CustomIconNav>
						<span onClick={handleNav}>
							<AiOutlineClose />
						</span>
						</CustomIconNav>
					</div>

					<div className='border-b border-gray-300 my-4'>
						<p className='w-[85%] md:w-[90%] py-4'>
							Let&#039;s build solutions!
						</p>
					</div>


					{/**
					 * **** Navigation Links *****
					 */}
					<div className='py-4 flex flex-col'>
						<ul className='uppercase text-sm'>
							<CustomLink href='http://www.google.com'>
								<li>Home</li>
							</CustomLink>

							<CustomLink href='/'>
								<li>About</li>
							</CustomLink>

							<CustomLink href='/'>
								<li>Skills</li>
							</CustomLink>

							<CustomLink href='/'>
								<li>Projects</li>
							</CustomLink>

							<CustomLink href='/'>
								<li>Contact</li>
							</CustomLink>
						</ul>

						<div className='pt-40'>
							<p className='uppercase tracking-widest text-[]'>
								Let&#039;s Connect
							</p>


							{/**
							 * **** Social Media Icons ****
							 */}
							<div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
								<CustomIconNav>
									<FaLinkedinIn />
								</CustomIconNav>

								<CustomIconNav>
									<FaGithub />
								</CustomIconNav>

								<CustomIconNav>
									<AiOutlineMail />
								</CustomIconNav>

								<CustomIconNav>
									<BsFillPersonLinesFill />
								</CustomIconNav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
