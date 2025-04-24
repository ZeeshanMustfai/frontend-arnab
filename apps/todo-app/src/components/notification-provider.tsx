'use client';
import React, { ReactNode } from 'react';
import { Toaster } from 'sonner';

const NotificationProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Toaster position="bottom-right" />
      {children}
    </>
  );
};

export default NotificationProvider;
