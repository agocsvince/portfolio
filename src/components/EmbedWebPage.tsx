import Image from 'next/image';
import React, { memo, useState } from 'react';
import Loader from './Loader';
import Button from './Button';

const EmbedWebPage = ({ src }: { src: string }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div className='flex flex-col items-center gap-2'>
      <div className='relative max-w-[400px] flex flex-col items-center'>
        <Image
          src={'/iPhone_border.png'}
          alt='iPhone border'
          width={425}
          height={855}
          className='relative z-2'
        />
        <iframe
          src={src}
          className='absolute rounded-[60px] z-2 top-0 p-4 overflow-hidden h-full w-full'
          onLoadedData={() => setIsLoading(false)}
        ></iframe>
        {isLoading && <Loader className='!aspect-9/16 h-full p-4 rounded-[60px] !text-sm' />}
        {/* TODO: add "Tech stack" description and remove hidden from button */}
      </div>
      <Button type={showInfo ? 'dark' : 'light'} className='px-5 py-1 text-sm sm:text-base hidden' onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'Hide tech-stack' : 'Show tech-stack'}</Button>
    </div>
  );
};

export default memo(EmbedWebPage);
