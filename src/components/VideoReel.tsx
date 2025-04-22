import { videoType } from '@/helpers/types';
import React from 'react'
import EmbedVideo from './EmbedVideo';

const VideoReel = ({ videos}: { videos: videoType[]}) => {

  return (<>
    {videos.map((video, index) => {
      return (
        <div key={video.id} className='relative flex flex-col gap-8'>
          <EmbedVideo video={video} defaultInfoState={index===1} />
          {index !== videos.length - 1 && <hr />}
        </div>
      );
    })}
    </>
  )
}

export default VideoReel