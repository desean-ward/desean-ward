"use client";
import React from "react";

import Link from "next/link";
import Image from "next/image";

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
} from "./page.styles";

import luxeLiving from "../../../../public/assets/projects/luxe-living.jpg";

import { RiRadioButtonFill } from "react-icons/ri";
import { CustomIcon } from "@/components/customs/custom-icon.component";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";
import CustomLink from "@/components/customs/custom-link.component";

const luxeliving = () => {
  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeaderWrapper>
        <HeaderOverlay />
        <Image className='absolute z-1' fill src={luxeLiving} alt='/' />

        <HeaderText>
          <h2>LuxeLiving Estates</h2>
          <h3>NextJS / NodeJS / ExpressJS / MongoDB</h3>
        </HeaderText>
      </HeaderWrapper>

      <MainContent>
        <div className='col-span-4'>
          <p className='mb-2'>Project</p>
          <h2 className='mb-2'>Overview</h2>
          <p>
            This full-stack application was built utilizing the MERN stack
            (Next.js). Users are able to sign up as an agent or customer, search
            property listings, view a property's description, and create
            listings as an agent, or save listings as a customer. User
            authentication and authorization (JWT) is available, so you can
            signup & signin with an email address; or Google account.
          </p>

          {/**
					 * **** BUTTONS ****
					
					 */}
          <Link
            href='https://luxe-living-estates.vercel.app/'
            target={"_blank"}
          >
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </Link>

          <Link
            href='https://github.com/desean-ward/luxe-living-estates'
            target={"_blank"}
          >
            <button className='px-8 py-2 mt-4'>Github</button>
          </Link>

          {/**
					 * **** BACK TO PROJECTS BUTTON ****
					
					 */}
          <ProjectsBtn>
            <CustomLink href='/projects' scroll={false}>
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
            <p className='pb-2 font-bold text-center'>Technologies</p>

            <Technologies>
              <Tech>
                <RiRadioButtonFill className='pr-1' /> NextJS
              </Tech>
              
              <Tech>
                <RiRadioButtonFill className='pr-1' /> MongoDB
              </Tech>
              
              <Tech>
                <RiRadioButtonFill className='pr-1' /> ExpressJS
              </Tech>
              
              <Tech>
                <RiRadioButtonFill className='pr-1' /> NodeJS
              </Tech>

              <Tech>
                <RiRadioButtonFill className='pr-1' /> Redux
              </Tech>

              <Tech>
                <RiRadioButtonFill className='pr-1' /> Styled Components
              </Tech>

              <Tech>
                <RiRadioButtonFill className='pr-1' /> Tailwind CSS
              </Tech>
              
              <Tech>
                <RiRadioButtonFill className='pr-1' /> Framer Motion
              </Tech>

             
            </Technologies>
          </TechWrapper>
        </TechContainer>
      </MainContent>
    </PageContainer>
  );
};

export default luxeliving;
