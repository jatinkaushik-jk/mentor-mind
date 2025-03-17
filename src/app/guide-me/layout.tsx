import React from 'react';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function GuideLayout({ children }: RootLayoutProps) {
  return (
    <div className='flex flex-col transition-all duration-500 ease-in-out'>
      {children}
    </div>
  );
}
