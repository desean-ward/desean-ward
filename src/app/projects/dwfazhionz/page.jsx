'use client'
import Image from 'next/image'
import React from 'react'

import {
	PageContainer,
	HeaderWrapper,
	HeaderOverlay,
	HeaderText,
	MainContent,
	TechContainer,
	TechWrapper,
	Tech,
	Technologies,
	ProjectsBtn,
} from './page.styles'

import dwFazhionz from '../../../../public/assets/projects/dw-fazhionz.jpg'

import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'
import { CustomIcon } from '@/components/customs/custom-icon.component'
import { HiOutlineChevronDoubleLeft } from 'react-icons/hi'
import CustomLink from '@/components/customs/custom-link.component'

const dwfazhionz = () => {
	return (
		<PageContainer>
			<HeaderWrapper>
				<HeaderOverlay />
				<Image
					className='absolute z-1'
					fill
					src={dwFazhionz}
					alt='/'
				/>

				<HeaderText>
					<h2>D.W. Fazhionz!</h2>
					<h3>React / Firebase / Stripe</h3>
				</HeaderText>
			</HeaderWrapper>

			<MainContent>
				<div className='col-span-4'>
					<p className='mb-2'>Project</p>
					<h2 className='mb-2'>Overview</h2>
					<p>
						This application was built using React JS and Firebase.
						Users are able to search clothing categories, view a
						product&#039;s description, add to a shopping bag, and
						checkout with credit card information via the Stripe
						API. User authentication is available, so you can signup
						& signin to your account with an email address; or
						Google account. Product descriptions were made possible
						with the embedded OpenAI API. Newsletter signup and
						contact form functionality are powered by EmailJS.
					</p>

					{/**
					 * **** BUTTONS ****
					
					 */}
					<a
						href='https://dw-fazhionz.netlify.app/'
						target={'_blank'}>
						<button className='px-8 py-2 mt-4 mr-8'>Demo</button>
					</a>
					<button className='px-8 py-2 mt-4'>Github</button>

					{/**
					 * **** BACK TO PROJECTS BUTTON ****
					
					 */}
					<ProjectsBtn>
						<CustomLink href='/#projects' scroll={false}>
							<HiOutlineChevronDoubleLeft className='inline-block mr-2' />
							<span className='inline-block '>Projects</span>
						</CustomLink>
					</ProjectsBtn>
				</div>

				{/**
				 * **** TECHNOLOGIES ****
				 */}
				<TechContainer>
					<TechWrapper>
						<p className='text-center font-bold pb-2'>
							Technologies
						</p>

						<Technologies>
							<Tech>
								<RiRadioButtonFill className='pr-1' /> React
							</Tech>

							<Tech>
								<RiRadioButtonFill className='pr-1' /> Styled
								Components
							</Tech>

							<Tech>
								<RiRadioButtonFill className='pr-1' /> SCSS
							</Tech>

							<Tech>
								<RiRadioButtonFill className='pr-1' />{' '}
								Javascript
							</Tech>

							<Tech>
								<RiRadioButtonFill className='pr-1' /> Firebase
							</Tech>

							<Tech>
								<RiRadioButtonFill className='pr-1' /> OpenAI
							</Tech>

							<Tech>
								<RiRadioButtonFill className='pr-1' /> Stripe
							</Tech>
						</Technologies>
					</TechWrapper>
				</TechContainer>
			</MainContent>
		</PageContainer>
	)
}

export default dwfazhionz
