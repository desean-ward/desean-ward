import React from 'react'
import { StyledLink } from './customs.styles'

const CustomLink = ({ href, scroll, children }) => {
  return (
    <StyledLink className='hover:text-[tan] hover:text-shadow-sm shadow-gray-900' href={href}>{ children }</StyledLink>
  )
}

export default CustomLink