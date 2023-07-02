import React, { useState, useEffect, useRef } from 'react';

import axios from 'axios';

import emailjs from 'emailjs-com';

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
} from './contact.styles';

import Image from 'next/image';
import Link from 'next/link';

import contact from '../../../public/assets/contact.jpg';

import { CustomIcon } from '../customs/custom-icon.component';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

import { motion } from 'framer-motion';
import { sendContactForm } from '@/lib/api';

const Contact = () => {
	/**
	 * *** Initialize Form Values ***
	 */
	const initialValues = {
		name: '',
		phone: '',
		email: '',
		subject: '',
		message: '',
	};
	const [formValues, setFormValues] = useState(initialValues);
	const [isSubmit, setIsSubmit] = useState(false);

	const [nameHighlight, setNameHighlight] = useState(false);
	const [phoneHighlight, setPhoneHighlight] = useState(false);
	const [emailHighlight, setEmailHighlight] = useState(false);
	const [subjectHighlight, setSubjectHighlight] = useState(false);
	const [messageHighlight, setMessageHighlight] = useState(false);

	/**
	 * **** Email Regex Validation ****
	 */
	const emailFormat =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	/**
	 * **** Validate The Form Fields Before Submitting ****
	 */
	const validate = values => {
		console.log(values);
		try {
			if (!values.name) {
				setNameHighlight(true);
				name.focus();
			} else setNameHighlight(false);

			if (!values.email) {
				setEmailHighlight(true);
			} else if (values.email.match(emailFormat)) {
				setEmailHighlight(false);
			} else email.focus();

			if (!values.subject) {
				setSubjectHighlight(true);
				subject.focus();
			} else setSubjectHighlight(false);

			if (!values.message) {
				setMessageHighlight(true);
			} else setMessageHighlight(false);
		} catch (err) {
			return;
		}

		// const fields = document.querySelectorAll('.highlight')

		// try {
		// 	if (fields && fields.length > 0) fields[0].focus()
		// 	else return true
		// } catch (err) {
		// 	return false
		// }
	};

	const handleChange = e => {
		const { name, value } = e.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleSubmit = async e => {
		e.preventDefault();
		// TODO: Investigate what's not working the way I want
		// console.log(isSubmit);
		// console.log('handle submit?');
		// //validate(formValues) ? setIsSubmit(true) : setIsSubmit(false)
		// setIsSubmit(true);
		sendEmail();
		// console.log(isSubmit);
		//await sendContactForm(formValues)
		//axios.post('/api/contact/', formValues)
	};

	const sendEmail = async () => {
		try {
			await axios({
				method: 'post',
				url: '/api/contact',
				params: formValues,
			});

			setFormValues(initialValues)
			console.log('Email sent!');
		} catch (error) {
			console.log('Email send error: ', error);
		}
	};

	const form = useRef();

	// const sendEmail = () => {
	// 	emailjs
	// 		.sendForm(
	// 			'service_jhnvilg',
	// 			formValues,
	// 			'user_E2SDLaiMBuyQ2WLk4t4Vg'
	// 		)
	// 		.then(
	// 			(result) => {
	// 				console.log(result.text)
	// 			},
	// 			(error) => {
	// 				console.log(error.text)
	// 			}
	// 		)
	// }

	useEffect(() => {
		setFormValues(initialValues);
	}, [isSubmit]);

	useEffect(() => {
		if (isSubmit) {
			//sendEmail();
			//showModal()
		}
	}, [isSubmit]);

	/**
	 * **** Animation Variants ****
	 */
	const fadeInLeft = {
		initial: { x: '-100', opacity: 0 },
		animate: {
			x: 0,
			opacity: 1,
			transition: { delay: 0.75, duration: 0.75 },
		},
	};

	const fadeInRight = {
		initial: { x: '100', opacity: 0 },
		animate: {
			x: 0,
			opacity: 1,
			transition: { delay: 0.75, duration: 0.75 },
		},
	};

	const slideUp = {
		initial: { y: 100, opacity: 0 },
		animate: {
			y: 0,
			opacity: 1,
			transition: { delay: 1.25, duration: 0.5 },
		},
	};

	return (
		<ContactContainer id='contact'>
			<div>
				<ContactWrapper>
					<motion.section
						variants={slideUp}
						initial='initial'
						animate='animate'>
						<p className='section-name'> Contact </p>
						<h2 className='section-title'> Get In Touch </h2>
					</motion.section>

					<ContentWrapper>
						{/* left side */}
						<LeftSide
							variants={fadeInLeft}
							initial='initial'
							animate='animate'>
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
										I am available for freelance or
										full-time positions. Contact me and
										let&#039;s talk.
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
											target='_blank'>
											<CustomIcon>
												<FaLinkedinIn />
											</CustomIcon>
										</Link>

										<Link
											href='https://www.github.com/desean-ward'
											target='_blank'>
											<CustomIcon>
												<FaGithub />
											</CustomIcon>
										</Link>
										
										<Link
											href='/contact'>
										<CustomIcon>
											<AiOutlineMail />
										</CustomIcon>
										</Link>

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
							animate='animate'>
							<FormWrapper>
								<form ref={form} onSubmit={handleSubmit}>
									<NamePhoneWrapper>
										<Field>
											<label>Name </label>
											<Input
												type='text'
												name='name'
												value={formValues.name}
												onChange={handleChange}
											/>
										</Field>

										<Field>
											<label>Phone </label>
											<Input
												type='text'
												name='phone'
												value={formValues.phone}
												onChange={handleChange}
											/>
										</Field>
									</NamePhoneWrapper>

									<Field>
										<label>Email </label>
										<Input
											type='email'
											name='email'
											value={formValues.email}
											onChange={handleChange}
										/>
									</Field>

									<Field>
										<label>Subject </label>
										<Input
											type='text'
											name='subject'
											value={formValues.subject}
											onChange={handleChange}
										/>
									</Field>

									<Field>
										<label>Message </label>
										<TextArea
											rows={5}
											name='message'
											value={formValues.message}
											onChange={handleChange}
										/>
									</Field>

									<button
										type='submit'
										className='w-full p-4 bg-[tan] text-gray-900 mt-4'>
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
	);
};

export default Contact;
