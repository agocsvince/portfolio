import { assetType } from '@/helpers/types'
import React, { useState } from 'react'
import VideoLoadPoster from './VideoLoadPoster'

const VideoEmbed = ({ video }: { video: assetType }) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className='relative h-full w-full aspect-video'>
        <video onLoadedData={() => setIsLoading(false)} autoPlay muted loop playsInline preload='metadata'>
          <source src={video.url} type={video.mimeType} />

        </video>
        {isLoading && <VideoLoadPoster />}
    </div>
  )
}

export default VideoEmbed