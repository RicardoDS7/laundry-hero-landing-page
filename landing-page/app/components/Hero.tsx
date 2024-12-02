// Navigation Bar
'use client';
import React from 'react';
import TimeSlots from './TimeSlots';
import Image from 'next/image';
import HeroImage from '../images/sad-face.png';
import { FaTruck } from "react-icons/fa";
import { FaClockRotateLeft, FaHandSparkles } from "react-icons/fa6"


const Hero = () => {
    return (
      <div className='relative pt-14 max-w-[1400px] mx-auto'>
            
          <div className='flex flex-col md:flex-row pt-8 items-center'>
            <div className='flex w-full md:w-7/12 flex-col gap-6 px-4'>
              <div className='flex flex-col gap-4 items-center justify-center md:items-start md:justify-start'>
                <h1 className='hero-display text-center md:text-start'>Laundry done in 60 seconds?</h1>
                <p className='text-center md:text-start'>Save time to do the things that matter most, and leave the laundry to us. It&apos;s never been easier to get your laundry done.</p>
              </div>
              < TimeSlots />

              <div className='flex flex-wrap gap-4 w-full items-center justify-center lg:justify-start lg:items-start py-6 px-4'>
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
                    <FaHandSparkles color="#f5f5f5" size={25}/>
                  </div>
                  <p className='font-semibold'>Professional Care</p>
                </div>
                
            </div>

            </div>

            <div className='w-full md:w-5/12 px-4 h-ful'>
              <Image src={HeroImage} width={800} height={600} alt='hero-image' />
            </div>
        </div>

        
      </div>
  
    );
  };
  
  export default Hero;