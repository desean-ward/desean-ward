'use client'
import React, { useState, useEffect } from 'react'

// NextJS Components
import Image from 'next/image'
import { usePathname } from 'next/navigation'

// Styled Components
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { CustomIcon, CustomIconNav } from '../customs/custom-icon.component'
import CustomLink from '../customs/custom-link.component'
import { NavContainer, NavLink, NavWrapper } from './navbar.styles'

const Navbar = () => {
	const [nav, setNav] = useState(false)
	const [shadow, setShadow] = useState(false)
	const [navBg, setNavBg] = useState('#ecf0f3')
	const [linkColor, setLinkColor] = useState('text-gray-700')
	const pathname = usePathname()

	useEffect(() => {
		if (pathname === '/projects/dwfazhionz') {
			setNavBg('transparent')
			setLinkColor('#ecf0f3')
		} else {
			setNavBg('#ecf0f3')
			setLinkColor('text-gray-700')
		}
	}, [pathname])

	const handleNav = () => {
		setNav(!nav)
	}

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true)
			} else {
				setShadow(false)
			}
		}
		window.addEventListener('scroll', handleShadow)
	}, [])

	return (
		<NavContainer shadow={shadow} style={{ backgroundColor: `${navBg}` }}>
			<NavWrapper>
				{/**
				 * ********** LOGO **********
				 */}
				<h2 style={{ color: `${linkColor}` }}>De Sean Ward</h2>

				{/**
				 * ********** NAV **********
				 */}
				<ul
					style={{ color: `${linkColor}` }}
					className='hidden md:flex text-sm uppercase'>
					<NavLink href='/#home'>
						<li className='ml-10'>Home</li>
					</NavLink>

					<NavLink href='/#about'>
						<li className='ml-10'>About</li>
					</NavLink>

					<NavLink href='/#skills'>
						<li className='ml-10'>Skills</li>
					</NavLink>

					<NavLink href='/#projects'>
						<li className='ml-10'>Projects</li>
					</NavLink>

					<NavLink href='/#contact'>
						<li className='ml-10'>Contact Me</li>
					</NavLink>
				</ul>

				<div
					onClick={handleNav}
					style={{ color: `${linkColor}` }}
					className='md:hidden hover:cursor-pointer'>
					<AiOutlineMenu size={25} />
				</div>
			</NavWrapper>

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
					<div className='flex w-full items-start justify-between '>
						<div className='flex-col items-center'>
							<Image
								src='/../public/assets/portfolio-pic.jpg'
								width='85'
								height='30'
								className='rounded-full'
								alt='/'
							/>

							<h3 className='text-gray-700'>De Sean Ward</h3>
						</div>

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
							<CustomLink href='/'>
								<li
									className='pb-4'
									onClick={() => setNav(false)}>
									Home
								</li>
							</CustomLink>

							<CustomLink href='/#about'>
								<li
									className='pb-4'
									onClick={() => setNav(false)}>
									About
								</li>
							</CustomLink>

							<CustomLink href='/#skills'>
								<li
									className='pb-4'
									onClick={() => setNav(false)}>
									Skills
								</li>
							</CustomLink>

							<CustomLink href='/#projects'>
								<li
									className='pb-4'
									onClick={() => setNav(false)}>
									Projects
								</li>
							</CustomLink>

							<CustomLink href='/#contact'>
								<li
									className='pb-4'
									onClick={() => setNav(false)}>
									Contact
								</li>
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
		</NavContainer>
	)
}

export default Navbar
