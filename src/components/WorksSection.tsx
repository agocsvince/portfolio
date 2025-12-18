import { scrollintoViewHandler } from '@/helpers/scrollHelper';
import { portfolioType, webProject } from '@/helpers/types';
import React, { memo, useState } from 'react';
import Switcher from './Switcher';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';

const EmbedWebPage = dynamic(() => import('./EmbedWebPage'));
const VideoReel = dynamic(() => import('./VideoReel'));
const PhotoAlbum = dynamic(() => import('./PhotoAlbum'));

const WorksSection = ({ portfolio }: { portfolio: portfolioType }) => {
  const params = useSearchParams();
  const defaultState = params.get('type') === 'video';
  const [showWeb, setShowWeb] = useState(defaultState);

  return (
    <div
      id="works-section"
      className="relative min-h-[1024px] flex flex-col items-center w-full mb-8"
    >
      <div
        className="z-30 flex flex-col gap-2 items-center mb-2 font-gothic cursor-pointer"
        onClick={() => scrollintoViewHandler('contact-section')}
      >
        <p className="-rotate-90 text-2xl -ml-2.5">&gt;</p>
        <p className="text-2xl animate-wiggle hover:animate-none delay-500">
          contact
        </p>
      </div>
      <Switcher
        state={showWeb}
        setState={setShowWeb}
        labels={['website', 'video']}
        className="mb-8 sticky z-20 top-10 p-1"
        disabled={true}
      />
      <div
        className={`${showWeb ? 'grid' : 'hidden'} grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-15 items-center justify-center`}
      >
        {/* {portfolio.webProjects.map((project: webProject) => (
          <EmbedWebPage project={project} key={project.id} />
        ))} */}
      </div>
      <div
        className={`${!showWeb ? 'flex' : 'hidden'} flex-row items-center w-full justify-center`}
      >
        <div className="flex flex-col mx-auto gap-8">
          <VideoReel videos={portfolio.videos} />
          {!!portfolio.photos.length && <hr />}
          <PhotoAlbum photos={portfolio.photos} />
        </div>
      </div>
    </div>
  );
};

export default memo(WorksSection);
