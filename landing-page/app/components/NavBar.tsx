// Navigation Bar
'use client';
import React from 'react';
import Button from './Button';
import Image from 'next/image';
import logo from '../images/logo.png'
import { useState, useEffect } from 'react';

const NavBar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed bg-white-smoke w-full z-30 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className='max-w-[1400px] mx-auto'>
        <div className='flex w-full justify-between items-center py-4 px-2'>
            <div className='flex flex-row gap-1 items-center'>
                <Image className="logo-image" src={logo} width={36} height={36} alt='logo'/>
                <h1 className='logo'>Laundry<span className='text-charcoal'>Hero</span></h1>
            </div>
            <div className='flex gap-4 items-center'>
                <span className='hidden md:block font-semibold text-charcoal'>Get Started</span>
                <Button label="Book Now" onClick={() => alert('Button clicked!')} />
            </div>

        </div>
      </div>
    </div>

  );
};

export default NavBar;
