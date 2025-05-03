import Image from 'next/image'
import React from 'react'
import Button from './Button'
import Title from './Title'
import ContactButtons from './ContactButtons'
import Intro from './Intro'
import { portfolioType } from '@/helpers/types'
import { scrollintoViewHandler } from '@/helpers/scrollHelper'

const ContactSection = ({portfolio}: {portfolio: portfolioType}) => {
  const titleProps = (({ preHeading, heading, postHeading, intro }) => ({
    preHeading,
    heading,
    postHeading,
    intro
  }))(portfolio);

  const composeEmail = (title: string) => {
    const email = portfolio.email;
    const subject = `Hey, I need a ${title}`;
    const body = 'I wanted to reach out to you regarding...';
    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div
      id='contact-section'
      className='flex flex-col items-center min-h-[100vh] pt-5 lg:pt-10'
    >
      <div className='gap-10 lg:gap-2 flex flex-row flex-wrap lg:flex-nowrap justify-between w-full mb-10'>
        <Title text={titleProps} />
        <div className='flex flex-col flex-1/3 items-center lg:items-end gap-6 lg:gap-15'>
          <Button
            type='light'
            className='px-5 py-1 text-sm sm:text-base max-w-[80%] break-all lg:break-normal'
            onClick={() => {}}
          >
            <a href={composeEmail('...')}>{portfolio.email}</a>
          </Button>
          <Image
            className='max-w-[80%] md:h-auto'
            src={portfolio.portrait.url}
            priority
            width={275}
            height={340}
            alt={'Portait image of Vince Agocs'}
          />
        </div>
      </div>
      <ContactButtons buttons={portfolio.buttons} href={composeEmail} />
      <Intro text={portfolio.intro} className='px-4 mt-10 lg:hidden block'/>
      <div
        className='z-30 mt-8 flex flex-col gap-2 items-center mb-2 font-gothic cursor-pointer'
        onClick={() => scrollintoViewHandler('works-section')}
      >
        <p className='text-2xl animate-wiggle hover:animate-none'>works</p>
        <p className='rotate-90 text-2xl -mr-1.5'>&gt;</p>
      </div>
    </div>
  )
}

export default ContactSection