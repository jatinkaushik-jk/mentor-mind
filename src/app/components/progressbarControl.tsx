import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SignInButton } from '@clerk/nextjs';

interface ProgressbarControlProps {
  handleClick: (direction: string) => void;
  currentProgress: number;
  progress: string[];
}

const ProgressbarControl: React.FC<ProgressbarControlProps> = ({ handleClick, currentProgress, progress }) => {
  return (
    <div className='container flex justify-between mb-4 fixed left-1/2 -translate-x-1/2 bottom-0 p-4 bg-white w-full lg:w-[1024px]'>
      <Button variant="outline" className='bg-white' onClick={() => handleClick("back")} disabled={currentProgress === 1}>
        BACK
      </Button>
      {currentProgress === progress.length ? (
        <Button asChild>
        <SignInButton>LOGIN</SignInButton>
      </Button>
      ) : (
        <Button type='submit' onClick={() => handleClick("next")} >
          NEXT
        </Button>
      )}
    </div>
  );
}

export default ProgressbarControl;
