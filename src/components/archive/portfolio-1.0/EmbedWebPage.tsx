import Image from 'next/image';
import React, { memo, useState } from 'react';
import Loader from '@/components/Loader';
import Button from './Button';
import { webProject } from '@/helpers/types';
import TechStackInfo from './TechStackInfo';

const EmbedWebPage = ({ project }: { project: webProject }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="flex flex-col items-center gap-2">
      <Button
        type={showInfo ? 'dark' : 'light'}
        className="px-5 py-1 text-sm sm:text-base"
        onClick={() => setShowInfo(!showInfo)}
      >
        {showInfo ? 'Hide tech-stack' : 'Show tech-stack'}
      </Button>
      <div className="relative max-w-[400px] flex flex-col items-center">
        <Image
          src={'/iPhone_border.png'}
          alt="iPhone border"
          width={425}
          height={855}
          className="relative z-2"
        />
        {showInfo && <TechStackInfo data={project.techStack} />}
        <iframe
          src={project.url}
          title={project.url}
          className="absolute rounded-[60px] z-2 top-0 p-4 overflow-hidden h-full w-full"
          onLoadedData={() => setIsLoading(false)}
        ></iframe>
        {isLoading && <Loader className="p-4 rounded-[60px] !text-sm" />}
      </div>
    </div>
  );
};

export default memo(EmbedWebPage);
