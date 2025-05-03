'use client';

import getPortfolio from '@/helpers/api';
import { portfolioType } from '@/helpers/types';
import { useEffect, useState } from 'react';
import { useLoadingStore } from '@/stores/LoadingStore';
import { GlobalLoader } from '@/components/GlobalLoader';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WorksSection from '@/components/WorksSection';

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
      alt: '',
      title: '',
      asset: {
        fileName: '',
        id: '',
        url: '',
        mimeType: '',
        width: 0,
        height: 0,
      },
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
  webProjects: [],
  footer: { 
    links: [], 
    copyrightText: ''
  },
};

export default function Home() {
  const [portfolio, setPortfolio] = useState<portfolioType>(emptyPortfolio);
  const { setIsLoading } = useLoadingStore();

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
          <ContactSection portfolio={portfolio} />
          <WorksSection portfolio={portfolio} />
        </main>
        {/* TODO: move footer into ClientLayout */}
        <Footer data={portfolio.footer} />
        <GlobalLoader />
      </div>
    )
  );
}
