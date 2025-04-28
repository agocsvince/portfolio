'use client';

import getPortfolio from '@/helpers/api';
import { portfolioType } from '@/helpers/types';
import { useEffect, useState } from 'react';
import { useLoadingStore } from '@/stores/LoadingStore';
import { GlobalLoader } from '@/components/GlobalLoader';
import Switcher from '@/components/Switcher';
import WebpageEmbed from '@/components/WebpageEmbed';
import PhotoAlbum from '@/components/PhotoAlbum';
import VideoReel from '@/components/VideoReel';
import ContactSection from '@/components/ContactSection';
import { scrollintoViewHandler } from '@/helpers/scrollHelper';

const emptyPortfolio = {
  buttons: [''],
  email: '',
  heading: '',
  postHeading: '',
  preHeading: '',
  intro: '',
  portrait: {
    fileName: '',
    id: '',
    url: '',
  },
  photos: [
    {
      fileName: '',
      id: '',
      url: '',
      width: 0,
      height: 0,
    },
  ],
  videos: [
    {
      fileName: '',
      id: '',
      url: '',
      date: `2025-04-07` as `${number}-${number}-${number}`,
      type: '',
      title: '',
      description: '',
      asset: {
        fileName: '',
        id: '',
        url: '',
        mimeType: '',
      },
    },
  ],
};

export default function Home() {
  const [portfolio, setPortfolio] = useState<portfolioType>(emptyPortfolio);
  const { setIsLoading } = useLoadingStore();
  const [showWeb, setShowWeb] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const response = await getPortfolio();
      setPortfolio(response);
      setIsLoading(false);
    };

    getData();
  }, []);

  return (
    !!portfolio.heading.length && (
      <div>
        <main className='min-h-[100vh] px-5 md:px-8 lg:px-15 w-full xl:px-120'>
          {/* MAIN */}
          <ContactSection portfolio={portfolio} />
          <div
            id='works-section'
            className='relative min-h-[1024px] flex flex-col items-center mb-8'
          >
            <div
              className='z-30 flex flex-col gap-2 items-center mb-2 font-gothic cursor-pointer'
              onClick={() => scrollintoViewHandler('contact-section')}
            >
              <p className='-rotate-90 text-2xl -ml-2.5'>&gt;</p>
              <p className='text-2xl animate-wiggle hover:animate-none delay-500'>contact</p>
            </div>
            {/* WORKS SECTION */}
            <Switcher
              state={showWeb}
              setState={setShowWeb}
              labels={['website', 'video']}
              className='mb-8 sticky z-20 top-10 p-1'
            />
            {showWeb && (
              <div className='flex flex-col sm:flex-row gap-8 lg:gap-15 items-center justify-center'>
                {/* TODO: add urls to API */}
                <WebpageEmbed src='https://gyuben.com' />
                <WebpageEmbed src='https://zsalyatal.hu' />
              </div>
            )}
            {!showWeb && (
              <div className='lex flex-row items-center justify-center'>
                <div className='flex flex-col gap-8'>
                  <VideoReel videos={portfolio.videos} />
                  {!!portfolio.photos.length && <hr />}
                  <PhotoAlbum photos={portfolio.photos}/>
                </div>
              </div>
            )}
          </div>
        </main>
        <footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'>
          {/* TODO: add footer with github, linkedIn and ...*/}
        </footer>
        <GlobalLoader />
      </div>
    )
  );
}
