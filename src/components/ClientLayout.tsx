'use client';

import React, { useEffect } from 'react';
import { GlobalLoader } from './GlobalLoader';
import { useLoadingStore } from '@/stores/LoadingStore';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const setIsLoading = useLoadingStore((state) => state.setIsLoading);

  useEffect(() => {
    // Show loader on initial page load
    setIsLoading(true);

    // Hide loader after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [setIsLoading]);

  return (
    <div>
      <GlobalLoader />
      {children}
    </div>
  );
};

export default ClientLayout;
