'use client';
import React from 'react';
import { FaCalendarDay } from "react-icons/fa6";
import { FaTruck } from 'react-icons/fa';
import { MdLocalLaundryService } from 'react-icons/md';
import { IoMdShirt } from 'react-icons/io';
import { FaCheck } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <div className=" mx-auto">

    {/* Content */}
    <div className="relative flex flex-col gap-8 w-full justify-center items-center py-10 px-4">
        <h2 className="text-white font-bold text-center">
          Take back your time. Leave the laundry to us.
        </h2>
        
        <div className='flex flex-col lg:flex-row-reverse gap-8'>
        <ul className="flex list-none flex-wrap gap-4 justify-center w-full">
            <li className="flex flex-col w-full md:w-1/2 lg:w-1/5 bg-white rounded-3xl gap-2 justify-start items-start">
                <div className='flex flex-row-reverse gap-4 pt-6 px-6 pb-3 items-center justify-between w-full'>
                    <div className="p-2 rounded-full bg-nice-blue">
                        <FaCalendarDay color="#f5f5f5" size={25} />
                    </div>
                    <h3>1. Schedule your pickup</h3>
                </div>
                <hr className="w-full border-t border-slate-300" />
                <p className='pb-3 px-6 pt-3'>Plan your day with ease. Choose a collection and delivery time at your convenience.</p>
            
                <div className='flex flex-row gap-2 px-6 items-center justify-start w-full'>
                    <div className="p-2 rounded-full bg-white">
                        <FaCheck color="#4A90E2" size={25} />
                    </div>
                    <p className='font-semibold'>Book online</p>
                    
                </div>
                <div className='flex flex-row gap-2 px-6 pb-6 items-center justify-start w-full'>
                    <div className="p-2 rounded-full bg-white">
                        <FaCheck color="#4A90E2" size={25} />
                    </div>
                    <p className='font-semibold'>Weekend and evening slots available</p>
                    
                </div>

            </li>

            <li className="flex flex-col w-full md:w-1/2 lg:w-1/5 bg-white rounded-3xl gap-2 justify-start items-start">
                <div className='flex flex-row-reverse gap-4 pt-6 px-6 pb-3 items-center justify-between w-full'>
                    <div className="p-2 rounded-full bg-nice-blue">
                        <FaTruck color="white" size={25} />
                    </div>
                    <h3>2. Pack your laundry</h3>
                </div>
                <hr className="w-full border-t border-slate-300" />
                <p className='pb-3 px-6 pt-3'>Pack your items in a disposable bag. Use one bag per service. Our driver will transfer them to reusable Laundryheap bags which you can keep for your next order.</p>
            
                <div className='flex flex-row gap-2 px-6 items-center justify-start w-full'>
                    <div className="p-2 rounded-full bg-white">
                        <FaCheck color="#4A90E2" size={25} />
                    </div>
                    <p className='font-semibold'>Pack one bag per service</p>
                    
                </div>
                <div className='flex flex-row gap-2 px-6 pb-6 items-center justify-start w-full'>
                    <div className="p-2 rounded-full bg-white">
                        <FaCheck color="#4A90E2" size={25} />
                    </div>
                    <p className='font-semibold'>No need to count or weigh your items</p>
                    
                </div>
            
            </li>

            <li className="flex flex-col w-full md:w-1/2 lg:w-1/5 bg-white rounded-3xl gap-2 justify-start items-start">
                <div className='flex flex-row-reverse gap-4 pt-6 px-6 pb-3 items-center justify-between w-full'>
                    <div className="p-2 rounded-full bg-nice-blue">
                        <MdLocalLaundryService color="white" size={25} />
                    </div>
                    <h3>3. Wait for our driver</h3>
                </div>
                <hr className="w-full border-t border-slate-300" />
                <p className='pb-3 px-6 pt-3'>You'll receive a notification when our driver is nearby. They will collect your bags and take them to your local cleaning facility.</p>

                <div className='flex flex-row gap-2 px-6 pb-3 items-center justify-start w-full'>
                    <div className="p-2 rounded-full bg-white">
                        <FaCheck color="#4A90E2" size={25} />
                    </div>
                    <p className='font-semibold'>Live driver tracking</p>
                    
                </div>
            
            </li>

            <li className="flex flex-col w-full md:w-1/2 lg:w-1/5 bg-white rounded-3xl gap-2 justify-start items-start">
                <div className='flex flex-row-reverse gap-4 pt-6 px-6 pb-3 items-center justify-between w-full'>
                    <div className="p-2 rounded-full bg-nice-blue">
                        <IoMdShirt color="white" size={25} />
                    </div>
                    <h3>4. We'll handle the rest</h3>
                </div>
                <hr className="w-full border-t border-slate-300" />
                <p className='pb-2 px-6 pt-3'>Your local partner facility will clean your items with utmost care. Our driver will then deliver them back to you whenever you like. You're in full control of your delivery and can always reschedule if not at home.</p>
            
                <div className='flex flex-row gap-2 px-6 items-center justify-start w-full'>
                    <div className="p-2 rounded-full bg-white">
                        <FaCheck color="#4A90E2" size={25} />
                    </div>
                    <p className='font-semibold'>Real-time order status</p>
                    
                </div>
                <div className='flex flex-row gap-2 px-6 pb-6 items-center justify-start w-full'>
                    <div className="p-2 rounded-full bg-white">
                        <FaCheck color="#4A90E2" size={25} />
                    </div>
                    <p className='font-semibold'>Easy to reschedule</p>
                    
                </div>
            </li>

        </ul>

        </div>




    </div>
    </div>
  );
};

export default HowItWorks;
