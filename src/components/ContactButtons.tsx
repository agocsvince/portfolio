import React from 'react'
import Button from './Button'

const ContactButtons = ({buttons, href}: {buttons: string[], href: (b: string) => string}) => {
  return (
    <div className="h-full grid grid-cols-2 items-center gap-10 my-auto">
      {buttons.map((button, index) => (
        <Button
          key={index}
          type={index % 2 ? 'light' : 'dark'}
          className="px-2 sm:px-6 py-1 text-sm sm:text-lg"
        >
          <a href={href(button)} className='max-w-[90px] sm:max-w-max block sm:inline overflow-hidden'>{`You need ${button}`}</a>
        </Button>
      ))}
    </div>
  )
}

export default ContactButtons