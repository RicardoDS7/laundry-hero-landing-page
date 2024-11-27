// Navigation Bar
'use client';
import React from 'react';
import Button from './Button';
import Image from 'next/image';
import logo from '../images/logo.png'

const NavBar = () => {
  return (
    <div className='max-w-[1400px] mx-auto'>
    <div className='flex w-full justify-between items-center py-4 px-4'>
        <div className='flex flex-row gap-2 items-center'>
            <Image src={logo} width={50} height={50} alt='logo'/>
            <h1 className='logo'>Laundry<span className='text-charcoal'>Hero</span></h1>
        </div>
        <div className='flex gap-4 items-center'>
            <span className='font-semibold text-charcoal'>Get Started</span>
            <Button label="Book Now" onClick={() => alert('Button clicked!')} />
        </div>

    </div>
    </div>

  );
};

export default NavBar;
