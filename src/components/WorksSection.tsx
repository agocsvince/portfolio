import { scrollintoViewHandler } from '@/helpers/scrollHelper'
import { portfolioType } from '@/helpers/types'
import React, { useState } from 'react'
import Switcher from './Switcher'
import WebpageEmbed from './WebpageEmbed'
import VideoReel from './VideoReel'
import PhotoAlbum from './PhotoAlbum'

const WorksSection = ({portfolio}: {portfolio: portfolioType}) => {
  const [showWeb, setShowWeb] = useState(true);

  return (
    <div
      id='works-section'
      className='relative min-h-[1024px] flex flex-col items-center mb-8'
    >
      <div
        className='z-30 flex flex-col gap-2 items-center mb-2 font-gothic cursor-pointer'
        onClick={() => scrollintoViewHandler('contact-section')}
      >
        <p className='-rotate-90 text-2xl -ml-2.5'>&gt;</p>
        <p className='text-2xl animate-wiggle hover:animate-none delay-500'>contact</p>
      </div>
      {/* WORKS SECTION */}
      <Switcher
        state={showWeb}
        setState={setShowWeb}
        labels={['website', 'video']}
        className='mb-8 sticky z-20 top-10 p-1'
      />
      {showWeb && (
        <div className='flex flex-col sm:flex-row gap-8 lg:gap-15 items-center justify-center'>
          {/* TODO: add urls to API */}
          <WebpageEmbed src='https://gyuben.com' />
          <WebpageEmbed src='https://zsalyatal.hu' />
        </div>
      )}
      {!showWeb && (
        <div className='lex flex-row items-center justify-center'>
          <div className='flex flex-col gap-8'>
            <VideoReel videos={portfolio.videos} />
            {!!portfolio.photos.length && <hr />}
            <PhotoAlbum photos={portfolio.photos}/>
          </div>
        </div>
      )}
    </div>
  )
}

export default WorksSection