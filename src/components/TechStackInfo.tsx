import React from 'react'

const TechStackInfo = ({data}: {data: string[]}) => {
  return (
    <div className='rounded-[60px] z-2 bg-dark-primary/70 absolute top-0 left-0 h-full w-full flex felx-col items-center justify-center'>
      <ul className='text-center'>
        {data.map((lang, index) => {
          return <li className='py-2 text-xl' key={index}>{lang}</li>
        })}
      </ul>
    </div>
  )
}

export default TechStackInfo