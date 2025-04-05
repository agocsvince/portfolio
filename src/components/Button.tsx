import React, { ReactNode } from 'react'
import { buttonLight, buttonDark } from '../helpers/styles'

const Button = ({ type, onClick, className, children}:
   {type: 'light' | 'dark', onClick: () => void, className?: string, children?: ReactNode}) => {
  let typeClass = '';

  switch (type) {
    case 'light':
      typeClass = buttonLight
      
      break;
    case 'dark':
      typeClass = buttonDark

      break;
    default:
      break;
  }

  return (
    <button onClick={onClick} className={`${typeClass} ${className} cursor-pointer max-h-min`}>{children}</button>
  )
}

export default Button;