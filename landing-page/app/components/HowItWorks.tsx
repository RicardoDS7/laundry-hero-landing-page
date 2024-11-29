'use client';
import React from 'react';
import HowItWorksImage from '../images/happy-face.png';
import Image from 'next/image';

const HowItWorks = () => {
  return (
    <div className="max-w-[1400px] mx-auto">

    {/* Content */}
    <div className="relative flex flex-col gap-8 w-full justify-center items-center py-10 px-4">
        <h2 className="text-white font-bold text-3xl">
          Take back your time. Leave the laundry to us.
        </h2>
        
        <div className='flex flex-row gap-8'>
        <ul className="flex flex-wrap gap-6 justify-center w-1/2">
            <li className="flex flex-col w-full bg-white rounded-3xl gap-2 p-6">
                <h3>1. Schedule your collection</h3>
                <p>Plan your day with ease. Choose a collection and delivery time at your convenience.</p>
            </li>

            <li className="flex flex-col w-full bg-white rounded-3xl gap-2 p-6">
                <h3>2. We collect your laundry</h3>
                <p>Our professional driver will collect your laundry at the scheduled time.</p>
            </li>

            <li className="flex flex-col w-full bg-white rounded-3xl gap-2 p-6">
                <h3>3. Cleaning in progress</h3>
                <p>Your laundry will be cleaned with care and ready for return in no time.</p>
            </li>

            <li className="flex flex-col w-full bg-white rounded-3xl gap-2 p-6">
                <h3>4. Laundry delivered</h3>
                <p>Receive your freshly cleaned laundry at the scheduled delivery time.</p>
            </li>
        </ul>

        <div className='flex w-full'>
            <Image src={HowItWorksImage} width={600} height={800} alt='image' />
        </div>
        </div>




    </div>
    </div>
  );
};

export default HowItWorks;
