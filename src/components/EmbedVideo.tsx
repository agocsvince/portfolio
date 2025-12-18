import { videoType } from '@/helpers/types';
import React, { memo, useState } from 'react';
import Loader from './Loader';
import { formatDate } from '@/helpers/dateFormatter';

const EmbedVideo = ({
  video,
  defaultInfoState = false,
}: {
  video: videoType;
  defaultInfoState?: boolean;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showInfo, setShowInfo] = useState(defaultInfoState);

  const transtionClass = showInfo
    ? '[transition:scale_0s_0ms,opacity_300ms_0s]'
    : '[transition:scale_0s_300ms,opacity_300ms_0s]';

  return (
    <div
      className="relative flex flex-col items-center  h-full w-full"
      onClick={() => setShowInfo(!showInfo)}
    >
      <video
        onCanPlayThrough={() => setIsLoading(false)}
        autoPlay
        muted
        loop
        playsInline
        className="max-h-screen w-min"
        preload="auto"
      >
        <source src={video.asset.url} />
      </video>
      {isLoading && (
        <Loader className="aspect-video! grow transition-all duration-300" />
      )}
      <div
        className={`${showInfo ? `opacity-100 scale-100s` : `opacity-0 scale-0`} ${transtionClass} p-4 sm:p-8 justify-between flex flex-col transition-opacity ease-in-out h-[calc(100%+1px)] w-full bg-dark-primary/80 absolute top-0 left-0`}
      >
        <div className="flex flex-row justify-between gap-5">
          <div className="flex flex-col max-w-[85%]">
            <h2 className="text-xs sm:text-base opacity-80">{video.type}</h2>
            <h1 className="text-base sm:text-2xl">{video.title}</h1>
          </div>
          <div>
            <a
              className="text-xs sm:text-base opacity-80 hover:opacity-50 underline cursor-pointer"
              target="_blank"
              href={video.url}
            >
              See original
            </a>
          </div>
        </div>
        <p className="text-xs sm:text-sm md:text-base overflow-hidden line-clamp-5 sm:line-clamp-8">
          {video.description}
        </p>
        <h2 className="text-xs sm:text-base opacity-80">
          {formatDate(video.date)}
        </h2>
      </div>
    </div>
  );
};

export default memo(EmbedVideo);
