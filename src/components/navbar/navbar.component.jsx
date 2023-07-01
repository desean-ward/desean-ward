'use client';
import React, { useState, useEffect } from 'react';

// NextJS Components
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Styled Components
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { CustomIcon, CustomIconNav } from '../customs/custom-icon.component';
import CustomLink from '../customs/custom-link.component';
import { NavContainer, NavLink, NavWrapper } from './navbar.styles';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [navShadow, setNavShadow] = useState('false');
	const [navBg, setNavBg] = useState('#ecf0f3');
	const [linkColor, setLinkColor] = useState('text-gray-700');
	const pathname = usePathname();
	useEffect(() => {
		if (pathname.match('/projects/')) {
			setNavBg('transparent');
			setLinkColor('#ecf0f3');
		} else {
			setNavBg('#ecf0f3');
			setLinkColor('#000000');
		}
	}, [pathname]);

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setNavShadow('true');
			} else {
				setNavShadow('false');
			}
		};
		window.addEventListener('scroll', handleShadow);
	}, []);

	return (
		<NavContainer
			doshadow={navShadow}
			style={{ backgroundColor: `${navBg}` }}>
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
					<CustomLink href='/' scroll={false}>
						<li className='ml-10'>Home</li>
					</CustomLink>

					<CustomLink href='/about' scroll={false}>
						<li className='ml-10'>About</li>
					</CustomLink>

					<CustomLink href='/skills' scroll={false}>
						<li className='ml-10'>Skills</li>
					</CustomLink>

					<CustomLink href='/projects' scroll={false}>
						<li className='ml-10'>Projects</li>
					</CustomLink>

					<CustomLink href='/contact' scroll={false}>
						<li className='ml-10'>Contact Me</li>
					</CustomLink>
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
							<CustomLink href='/' as='/home' scroll={false}>
								<li
									className='pb-4'
									onClick={() => setNav(false)}>
									Home
								</li>
							</CustomLink>

							<CustomLink href='/about' scroll={false}>
								<li
									className='pb-4'
									onClick={() => setNav(false)}>
									About
								</li>
							</CustomLink>

							<CustomLink href='/skills' scroll={false}>
								<li
									className='pb-4'
									onClick={() => setNav(false)}>
									Skills
								</li>
							</CustomLink>

							<CustomLink href='/projects' scroll={false}>
								<li
									className='pb-4'
									onClick={() => setNav(false)}>
									Projects
								</li>
							</CustomLink>

							<CustomLink href='/contact' scroll={false}>
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
								<Link
									href='https://www.linkedin.com/in/desean-ward'
									target='_blank'>
									<CustomIconNav>
										<FaLinkedinIn />
									</CustomIconNav>
								</Link>

								<Link
									href='https://www.github.com/desean-ward'
									target='_blank'>
									<CustomIconNav>
										<FaGithub />
									</CustomIconNav>
								</Link>

								<Link href='/contact'>
									<CustomIconNav>
										<AiOutlineMail />
									</CustomIconNav>
								</Link>

								<CustomIconNav>
									<BsFillPersonLinesFill />
								</CustomIconNav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</NavContainer>
	);
};

export default Navbar;
