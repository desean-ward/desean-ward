import React from 'react'

import { StyledIcon } from './customs.styles'

export const CustomIcon = ({ children }) => {
  return (
    <StyledIcon className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
        { children }
    </StyledIcon>
  )
}



export const CustomIconNav = ({ children }) => {
    return (
      <StyledIcon className='nav rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
          { children }
      </StyledIcon>
    )
  }
  
