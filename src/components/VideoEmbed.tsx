import { assetType } from '@/helpers/types'
import React, { useState } from 'react'

const VideoEmbed = ({ video }: { video: assetType }) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className='relative'>
        <video onLoadedData={() => setIsLoading(false)} autoPlay muted loop playsInline preload='metadata'>
          <source src={video.url} type={video.mimeType} />

        </video>
        {isLoading && <div className="w-full px-5 top-0 font-gothic absolute aspect-16/9 flex items-center justify-center bg-dark-primary/80 text-light-primary">
         <div className="relative flex flex-row border-2 border-light-primary w-100 text-center items-center justify-start">
            <div className="flex gap-1 justify-start px-1 py-1">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
              key={index}
              className="w-2 h-4 bg-light-primary animate-block-fade"
              style={{ animationDelay: `${index * 200}ms` }}
              />
            ))}
            </div>
          <div className="absolute w-full flex justify-center text-center text-sm tracking-wider">
            <h1>Loading ...</h1>
          </div>
        </div>
      </div>}
    </div>
  )
}

export default VideoEmbed