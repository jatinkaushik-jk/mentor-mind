import React from 'react';
import Link from 'next/link';

interface ProgressbarControlProps {
  handleClick: (direction: string) => void;
  currentProgress: number;
  progress: string[];
}

const ProgressbarControl: React.FC<ProgressbarControlProps> = ({ handleClick, currentProgress, progress }) => {
  return (
    <div className='container flex justify-between mb-4'>
      <button onClick={() => handleClick("back")} className={`uppercase py-1 px-4 rounded-sm font-semibold border-1 border-slate-300 transition duration-200 ease-in-out ${currentProgress === 1 ? "opacity-50 bg-white text-slate-900 cursor-not-allowed " : "!bg-gray-50 text-gray-500 hover:!bg-slate-200 hover:text-gray-900 cursor-pointer"}`}>
        Back
      </button>
      {currentProgress === progress.length ? (
        <Link href="/login" className='text-primary uppercase py-1 px-4 rounded-sm font-semibold cursor-pointer border-1 border-primary hover:bg-primary hover:text-white transition duration-200 ease-in-out'>
          Login
        </Link>
      ) : (
        <button type='submit' onClick={() => handleClick("next")} className='border-primary text-primary rounded-sm uppercase py-1 px-4 font-semibold cursor-pointer border-1 hover:bg-primary hover:text-white transition duration-200 ease-in-out'>
          Next
        </button>
      )}
    </div>
  );
}

export default ProgressbarControl;
