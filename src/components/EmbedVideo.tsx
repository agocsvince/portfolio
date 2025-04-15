import { videoType } from '@/helpers/types'
import React, { useState } from 'react'
import Loader from './Loader'
import { formatDate } from '@/helpers/dateFormatter'

const EmbedVideo = ({ video }: { video: videoType }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className='relative h-full w-full aspect-video'  onClick={() => setShowInfo(!showInfo)}>
        <video onCanPlayThrough={() => setIsLoading(false)} autoPlay muted loop playsInline preload='metadata'>
          <source src={video.asset.url} type={video.asset.mimeType} />

        </video>
        {isLoading && <Loader />}
        <div className={`${showInfo ? `opacity-100 scale-100` : `opacity-0 scale-0`} p-4 sm:p-8 justify-between flex flex-col transition-opacity ease-in-out h-full w-full bg-dark-primary/80 absolute top-0 left-0`}>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-col'>
            <h2 className='text-xs sm:text-base opacity-80'>{video.type}</h2>
            <h1 className='text-base sm:text-2xl'>{video.title}</h1>
            <p>{video.description}</p>
          </div>
            <a className='text-xs sm:text-base opacity-80 hover:opacity-50 underline' href={video.url}>See original</a>
        </div>
          <h2 className='text-xs sm:text-base opacity-80'>{formatDate(video.date)}</h2>
        </div>
    </div>
  )
}

export default EmbedVideo