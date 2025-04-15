import Image from 'next/image';
import React from 'react';

const WebpageEmbed = ({ src }: { src: string }) => {
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
      ></iframe>
    </div>
  );
};

export default WebpageEmbed;
