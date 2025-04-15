import Image from 'next/image';
import React, { useState } from 'react';
import Loader from './Loader';

const WebpageEmbed = ({ src }: { src: string }) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative max-w-[400px] flex flex-col items-center">
      <Image
        src={'/iPhone_border.png'}
        alt="iPhone border"
        width={425}
        height={855}
        className="relative z-2"
      />
      <iframe
        src={src}
        className="absolute rounded-[60px] z-2 top-0 p-4 overflow-hidden h-full w-full"
        onLoadedData={() => setIsLoading(false)}
      ></iframe>
      {isLoading && <Loader className='!aspect-9/16 h-full p-4 rounded-[60px] !text-sm' />}
    </div>
  );
};

export default WebpageEmbed;
