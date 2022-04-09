import React from 'react'
import {ButtonStyle} from './Style'

const Button = ({children, onClick}) => {
  return (
    <ButtonStyle onClick={onClick}>{children}</ButtonStyle>
  )
}

export default Button