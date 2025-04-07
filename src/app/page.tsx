'use client';

import Button from '@/components/Button';
import getPortfolio from '@/helpers/api';
import { portfolioType } from '@/helpers/types';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useLoadingStore } from '@/stores/LoadingStore';
import { GlobalLoader } from '@/components/GlobaLoader';
import Switcher from '@/components/Switcher';

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
  const [showWeb, setShowWeb] = useState(true)

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

  const composeEmail = (title: string) =>  {
    const email = portfolio.email;
    const subject = `Hey, I need a ${title}`;
    const body = "I wanted to reach out to you regarding...";
    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const scrollintoViewHandler = (target: string) => {
    const element = document.getElementById(`${target}-section`);
    element!.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    !!portfolio.heading.length && (
      <div>
        <main className="min-h-[100vh] px-5 md:px-8 lg:px-15 w-full">
          {/* MAIN */}
          <div
            id="contact-section"
            className="flex flex-col items-center min-h-[100vh] pt-5 lg:pt-10"
          >
            <div className="gap-10 lg:gap-2 flex flex-row flex-wrap lg:flex-nowrap justify-between w-full pb-10">
              <div className="flex flex-col flex-2/3 gap-1 text-center justify-center">
                <h3 className="text-base sm:text-lg mb-1">{portfolio.preHeading}</h3>
                <div className="border-2 border-light-primary px-2 py-1 sm:px-4 sm:py-2 mx-4">
                  <h2 className="text-xl sm:text-2xl">{portfolio.heading}</h2>
                </div>
                <h4 className="text-xs sm:text-base">{portfolio.postHeading}</h4>
              </div>
              <div className="flex flex-col flex-1/3 items-center lg:items-end gap-6 lg:gap-15">
                <Button
                  type="light"
                  className="px-5 py-1 text-sm sm:text-base lg:text-lg max-w-[80%] break-all lg:break-normal"
                  onClick={() => { }}
                >
                  <a href={composeEmail('...')}>{portfolio.email}</a>
                </Button>
                <Image
                  className="max-w-[80%] md:h-auto"
                  src={portfolio.portrait.url}
                  priority
                  width={275}
                  height={340}
                  alt="portait image"
                />
              </div>
            </div>
            <div className="h-full grid grid-cols-2 items-center gap-10 my-auto">
              {portfolio.buttons.map((button, index) => (
                <Button
                  key={index}
                  type={index % 2 ? 'light' : 'dark'}
                  className="px-2 sm:px-6 py-1 text-sm sm:text-lg"
                >
                  <a href={composeEmail(button)} className='max-w-[90px] sm:max-w-max block sm:inline overflow-hidden'>{`You need ${button}`}</a>
                </Button>
              ))}
            </div>
            <div
              className="z-3 mt-8 flex flex-col gap-2 items-center mb-2 font-gothic cursor-pointer"
              onClick={() => scrollintoViewHandler('works')}
            >
              <p className="text-2xl animate-wiggle hover:animate-none">works</p>
              <p className="rotate-90 text-2xl -mr-1.5">&gt;</p>
            </div>
          </div>
          <div
            id="works-section"
            className="relative min-h-[1024px] flex flex-col items-center"
          >
            <div
              className="z-3 flex flex-col gap-2 items-center mb-2 font-gothic cursor-pointer"
              onClick={() => scrollintoViewHandler('contact')}
            >
              <p className="-rotate-90 text-2xl -ml-2.5">&gt;</p>
              <p className="text-2xl animate-wiggle hover:animate-none delay-500">contact</p>
            </div>
            {/* WORKS SECTION */}
            <Switcher state={showWeb} setState={setShowWeb} labels={["website", "video"]}/>
          </div>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          {/* FOOTER */}
        </footer>
        <GlobalLoader />
      </div>
    )
  );
}
