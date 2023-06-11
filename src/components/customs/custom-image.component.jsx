import React from 'react'
import { StyledImage } from './customs.styles'

export const CustomImage = ({ children }) => {
  return (
    <StyledImage className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center'>
        { children }
    </StyledImage>
  )
}

export const CustomImageRound = ({ children }) => {
    return (
      <StyledImage className='w-[250px] h-[250px] shadow-xl shadow-gray-400 bg-[white] rounded-full flex items-center justify-center mb-8'>
          { children }
      </StyledImage>
    )
  }

