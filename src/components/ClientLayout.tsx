'use client';

import React from 'react';
import { GlobalLoader } from './GlobalLoader';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <GlobalLoader />
      {children}
      <footer></footer>
    </div>
  );
};

export default ClientLayout;
