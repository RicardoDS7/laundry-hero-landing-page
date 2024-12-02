'use client';
import React from 'react';
import { FaCalendarDay } from "react-icons/fa6";
import { FaTruck } from 'react-icons/fa';
import { MdLocalLaundryService } from 'react-icons/md';
import { IoMdShirt } from 'react-icons/io';

const HowItWorks = () => {
  return (
    <div className="max-w-[1400px] mx-auto">

    {/* Content */}
    <div className="relative flex flex-col gap-8 w-full justify-center items-center py-10 px-4">
        <h2 className="text-white font-bold text-center">
          Take back your time. Leave the laundry to us.
        </h2>
        
        <div className='flex flex-col lg:flex-row-reverse gap-8'>
        <ul className="flex list-none flex-wrap gap-6 justify-center w-full">
            <li className="flex flex-col w-full md:w-1/2 lg:w-1/5 bg-white rounded-3xl gap-2 justify-start items-start">
                <div className='flex flex-row-reverse gap-4 pt-6 px-6 pb-3 items-center lg:items-start justify-between w-full'>
                    <div className="p-2 rounded-full bg-nice-blue">
                        <FaCalendarDay color="#f5f5f5" size={25} />
                    </div>
                    <h3>1. Schedule your collection</h3>
                </div>
                <hr className="w-full border-t border-slate-300" />
                <p className='pb-6 px-6 pt-3'>Plan your day with ease. Choose a collection and delivery time at your convenience.</p>
            </li>

            <li className="flex flex-col w-full md:w-1/2 lg:w-1/5 bg-white rounded-3xl gap-2 justify-start items-start">
                <div className='flex flex-row-reverse gap-4 pt-6 px-6 pb-3 items-center lg:items-start justify-between w-full'>
                    <div className="p-2 rounded-full bg-nice-blue">
                        <FaTruck color="#f5f5f5" size={25} />
                    </div>
                    <h3>2. We collect your laundry</h3>
                </div>
                <hr className="w-full border-t border-slate-300" />
                <p className='pb-6 px-6 pt-3'>Our professional driver will collect your laundry at the scheduled time.</p>
            </li>

            <li className="flex flex-col w-full md:w-1/2 lg:w-1/5 bg-white rounded-3xl gap-2 justify-start items-start">
                <div className='flex flex-row-reverse gap-4 pt-6 px-6 pb-3 items-center lg:items-start justify-between w-full'>
                    <div className="p-2 rounded-full bg-nice-blue">
                        <MdLocalLaundryService color="#f5f5f5" size={25} />
                    </div>
                    <h3>3. Cleaning in progress</h3>
                </div>
                <hr className="w-full border-t border-slate-300" />
                <p className='pb-6 px-6 pt-3'>Your laundry will be cleaned with care and ready for return in no time.</p>
            </li>

            <li className="flex flex-col w-full md:w-1/2 lg:w-1/5 bg-white rounded-3xl gap-2 justify-start items-start">
                <div className='flex flex-row-reverse gap-4 pt-6 px-6 pb-3 items-center lg:items-start justify-between w-full'>
                    <div className="p-2 rounded-full bg-nice-blue">
                        <IoMdShirt color="#f5f5f5" size={25} />
                    </div>
                    <h3>4. Laundry delivered</h3>
                </div>
                <hr className="w-full border-t border-slate-300" />
                <p className='pb-6 px-6 pt-3'>Receive your freshly cleaned laundry at the scheduled delivery time.</p>
            </li>

        </ul>

        </div>




    </div>
    </div>
  );
};

export default HowItWorks;
