import { portfolioType } from '@/helpers/types'
import React from 'react'
import Intro from './Intro'

const Title = ({text}: {text: Pick<portfolioType, 'preHeading' | 'heading' | 'postHeading' | 'intro'>}) => {
  return (
    <div className='flex flex-col flex-2/3 gap-1 text-center justify-center'>
      <h3 className='text-base sm:text-lg mb-1'>{text.preHeading}</h3>
      <div className='border-2 border-light-primary px-2 py-1 sm:px-4 sm:py-2 mx-4'>
        <h2 className='text-xl sm:text-2xl'>{text.heading}</h2>
      </div>
      <h4 className='text-xs sm:text-base'>{text.postHeading}</h4>
      <Intro text={text.intro} className='px-4 mt-2 hidden lg:block'/>
    </div>
  )
}

export default Title