// Navigation Bar
'use client';
import React from 'react';
import Button from './Button';


const NavBar = () => {
  return (
    <div className='flex w-full justify-between items-center py-4 px-10'>
        <h1 className='logo'>Laundry<span className='text-nice-blue'>Hero</span></h1>

        <div className='flex gap-4 items-center'>
            <span className='font-bold'>Get Started</span>
            <Button label="Book Now" onClick={() => alert('Button clicked!')} />
        </div>

    </div>

  );
};

export default NavBar;
