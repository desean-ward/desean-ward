import React from 'react'
import { StyledLink } from './customs.styles'

const CustomLink = ({ href, children }) => {
  return (
    <StyledLink className='hover:text-shadow-sm shadow-gray-900' href={href} target='_blank'>{ children }</StyledLink>
  )
}

export default CustomLink