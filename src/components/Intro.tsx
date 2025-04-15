import React from 'react'

const Intro = ({text, className}: {text: string, className?: string}) => {
  return (
    <p className={`${className} text-xs sm:text-sm opacity-80 whitespace-pre-line text-center`}>{text}</p>
  )
}

export default Intro