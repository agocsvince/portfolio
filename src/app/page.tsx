'use client';

import Button from '@/components/Button';
import getPortfolio from '@/helpers/api';
import { portfolioType } from '@/helpers/types';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useLoadingStore } from '@/stores/LoadingStore';
import { GlobalLoader } from '@/components/GlobaLoader';
import Switcher from '@/components/Switcher';
import Title from '@/components/Title';
import ContactButtons from '@/components/ContactButtons';
import WebpageEmbed from '@/components/WebpageEmbed';
import VideoEmbed from '@/components/VideoEmbed';

const emptyPortfolio = {
  buttons: [''],
  email: '',
  heading: '',
  postHeading: '',
  preHeading: '',
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
    },
  ],
};

export default function Home() {
  const [portfolio, setPortfolio] = useState<portfolioType>(emptyPortfolio);
  const { setIsLoading } = useLoadingStore();
  const [showWeb, setShowWeb] = useState(true);

  const titleProps = (({ preHeading, heading, postHeading }) => ({
    preHeading,
    heading,
    postHeading,
  }))(portfolio);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const response = await getPortfolio();
      // TODO: promise logic
      setPortfolio(response.data.portfolio);
      setIsLoading(false);
    };

    getData();
  }, []);

  const composeEmail = (title: string) => {
    const email = portfolio.email;
    const subject = `Hey, I need a ${title}`;
    const body = 'I wanted to reach out to you regarding...';
    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const scrollintoViewHandler = (target: string) => {
    const element = document.getElementById(`${target}-section`);
    element!.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    !!portfolio.heading.length && (
      <div>
        <main className='min-h-[100vh] px-5 md:px-8 lg:px-15 w-full'>
          {/* MAIN */}
          <div
            id='contact-section'
            className='flex flex-col items-center min-h-[100vh] pt-5 lg:pt-10'
          >
            <div className='gap-10 lg:gap-2 flex flex-row flex-wrap lg:flex-nowrap justify-between w-full pb-10'>
              <Title text={titleProps} />
              <div className='flex flex-col flex-1/3 items-center lg:items-end gap-6 lg:gap-15'>
                <Button
                  type='light'
                  className='px-5 py-1 text-sm sm:text-base lg:text-lg max-w-[80%] break-all lg:break-normal'
                  onClick={() => {}}
                >
                  <a href={composeEmail('...')}>{portfolio.email}</a>
                </Button>
                <Image
                  className='max-w-[80%] md:h-auto'
                  src={portfolio.portrait.url}
                  priority
                  width={275}
                  height={340}
                  alt='portait image'
                />
              </div>
            </div>
            <ContactButtons buttons={portfolio.buttons} href={composeEmail} />
            <div
              className='z-3 mt-8 flex flex-col gap-2 items-center mb-2 font-gothic cursor-pointer'
              onClick={() => scrollintoViewHandler('works')}
            >
              <p className='text-2xl animate-wiggle hover:animate-none'>works</p>
              <p className='rotate-90 text-2xl -mr-1.5'>&gt;</p>
            </div>
          </div>
          <div
            id='works-section'
            className='relative min-h-[1024px] flex flex-col items-center mb-8'
          >
            <div
              className='z-3 flex flex-col gap-2 items-center mb-2 font-gothic cursor-pointer'
              onClick={() => scrollintoViewHandler('contact')}
            >
              <p className='-rotate-90 text-2xl -ml-2.5'>&gt;</p>
              <p className='text-2xl animate-wiggle hover:animate-none delay-500'>contact</p>
            </div>
            {/* WORKS SECTION */}
            <Switcher
              state={showWeb}
              setState={setShowWeb}
              labels={['website', 'video']}
              className='mb-8'
            />
            {showWeb && (
              <div className='flex flex-row items-center justify-center'>
                <WebpageEmbed src='http://gyuben.com' />
              </div>
            )}
            {!showWeb && (
              <div className='lex flex-row items-center justify-center'>
                <div className='flex flex-col gap-8'>
                  {portfolio.videos.map((video, index) => {
                    return (
                      <div key={video.id} className='flex flex-col gap-8'>
                        <VideoEmbed video={video} />
                        {index !== portfolio.videos.length - 1 && <hr />}
                      </div>
                    );
                  })}
                  {!!portfolio.photos.length && <hr />}
                  <div className='flex flex-row flex-wrap gap-8 justify-center'>
                    {portfolio.photos.map((photo) => {
                      return (
                        <div
                          key={photo.id}
                          className={`${photo.width > photo.height ? 'flex-[35%]' : 'flex-[25%]'} flex flex-col gap-8`}
                        >
                          <Image
                            src={photo.url}
                            alt={`Photo of ${photo.fileName}`}
                            width={photo.width}
                            height={photo.height}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
        <footer className='row-start-3 flex gap-[24px] flex-wrap items-center justify-center'>
          {/* FOOTER */}
        </footer>
        <GlobalLoader />
      </div>
    )
  );
}
