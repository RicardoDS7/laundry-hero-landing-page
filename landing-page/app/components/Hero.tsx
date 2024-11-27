// Navigation Bar
'use client';
import React from 'react';
import TimeSlots from './TimeSlots';
import Image from 'next/image';
import HeroImage from '../images/sad-face.png';
import { FaTruck } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6"
import { FaTags } from "react-icons/fa6";

const Hero = () => {
    return (
      <div className='relative pt-14 max-w-[1400px] mx-auto'>
            
          <div className='flex flex-col md:flex-row py-8'>
            <div className='flex w-full md:w-7/12 flex-col gap-4 px-4'>
              <div className='flex flex-col gap-4'>
                <h1 className='hero-display'>Laundry done in 60 seconds?</h1>
                <p className=''>Save time to do the things that matter most, and leave the laundry to us. It&apos;s never been easier to get your laundry done.</p>
              </div>
              < TimeSlots />

              <div className='flex flex-wrap gap-4 mt-6'>
                <div className='flex flex-row gap-2 items-center'>
                  <div className='p-2 rounded-full bg-nice-blue'>
                    <FaClockRotateLeft color="#f5f5f5" size={25}/>
                  </div>
                  <p className='font-semibold'>24 Hour Turnaround</p>
                </div>

                <div className='flex flex-row gap-2 items-center'>
                  <div className='p-2 rounded-full bg-nice-blue'>
                    <FaTruck color="#f5f5f5" size={25}/>
                  </div>
                  <p className='font-semibold'>Pick-up & Delivery</p>
                </div>

                <div className='flex flex-row gap-2 items-center'>
                  <div className='p-2 rounded-full bg-nice-blue'>
                    <FaTags color="#f5f5f5" size={25}/>
                  </div>
                  <p className='font-semibold'>Affordable Pricing</p>
                </div>
                
              </div>
            </div>

            <div className='w-full md:w-5/12 px-4'>
              <Image src={HeroImage} width={800} height={600} alt='hero-image' />
            </div>
        </div>
      </div>
  
    );
  };
  
  export default Hero;