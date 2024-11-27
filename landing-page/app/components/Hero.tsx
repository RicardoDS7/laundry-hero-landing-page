// Navigation Bar
'use client';
import React from 'react';
import TimeSlots from './TimeSlots';
import Image from 'next/image';
import HeroImage from '../images/sad-face.png';

const Hero = () => {
    return (
      <div className='flex w-full justify-between items-center py-10 px-4'>
          
          <div className='flex w-1/2 flex-col gap-8'>
            <div className='flex flex-col gap-4'>
              <h1 className='hero-display'>Laundry done in 60 seconds?</h1>
              <p className=''>Save time to do the things that matter most, and leave the laundry to us. It&apos;s never been easier to get your laundry done.</p>
            </div>
            < TimeSlots />
          </div>
          <div className='w-1/2'>
            <Image src={HeroImage} width={800} height={600} alt='hero-image' />
          </div>
      </div>
  
    );
  };
  
  export default Hero;