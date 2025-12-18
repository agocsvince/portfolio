import { videoType } from '@/helpers/types';
import React, { memo } from 'react';
import EmbedVideo from './EmbedVideo';

const VideoReel = ({ videos }: { videos: videoType[] }) => {
  const videoColumns = {
    first: videos.filter((_, index) => index % 2 !== 0),
    second: videos.filter((_, index) => index % 2 === 0),
  };

  return (
    <>
      <div className="hidden lg:relative lg:grid lg:grid-cols-2 gap-8">
        <div className="flex flex-col gap-8">
          {videoColumns.first.map((video, index) => {
            return (
              <>
                <div key={video.id}>
                  <EmbedVideo video={video} />
                </div>
                {index !== videos.length - 1 && <hr className="w-full" />}
              </>
            );
          })}
        </div>
        <div className="flex flex-col gap-8">
          {videoColumns.second.map((video, index) => {
            return (
              <>
                <div key={video.id}>
                  <EmbedVideo video={video} />
                </div>
                {index !== videos.length - 1 && <hr className="w-full" />}
              </>
            );
          })}
        </div>
      </div>
      <div className="lg:hidden flex flex-co gap-8">
        {videos.map((video, index) => {
          return (
            <>
              <div key={video.id}>
                <EmbedVideo video={video} />
              </div>
              {index !== videos.length - 1 && <hr className="w-full" />}
            </>
          );
        })}
      </div>
    </>
  );
};

export default memo(VideoReel);
