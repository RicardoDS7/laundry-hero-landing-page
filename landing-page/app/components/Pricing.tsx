'use client';
import React from 'react';
import { FaChevronRight, FaGears } from 'react-icons/fa6';
import Link from 'next/link';
import { FaWater } from 'react-icons/fa6';
import { TbIroning } from 'react-icons/tb';
import { IoSunny } from 'react-icons/io5';
import { FaShoppingBasket, FaTruck } from 'react-icons/fa';
import Image from 'next/image';
import HeroImage from '../images/hero-child.png';
import { MdDryCleaning, MdLocalLaundryService } from 'react-icons/md';


const Pricing = () => {
    return (
        <div className='relative max-w-[1400px] mx-auto'>
        {/* Content */}
        <div className="relative flex flex-col lg:flex-row gap-8 w-full justify-center items-center px-4">

            {/* Left Div */}
            <div className="relative flex flex-col gap-6 h-full w-full lg:w-[60%] rounded-3xl items-center justify-center">
                <div className='flex flex-col px-4 gap-6 items-center justify-center'>
                    <h2 className="h2-display text-center whitespace-pre-line">
                    Simple Pricing. 
                    No Hidden Fees.
                    </h2>
                </div>

                <div className='flex flex-wrap md:flex-row gap-4 w-full items-center justify-center px-4'>
                    <div className='flex flex-row gap-2 items-center'>
                    <div className='p-2 rounded-full bg-nice-blue'>
                        <FaShoppingBasket color="#f5f5f5" size={25}/>
                    </div>
                    <p className='font-semibold text-lg'>R250 Minimum Order</p>
                    </div>

                    <div className='flex flex-row gap-2 items-center'>
                    <div className='p-2 rounded-full bg-nice-blue'>
                        <FaTruck color="#f5f5f5" size={25}/>
                    </div>
                    <p className='font-semibold text-lg'>R100 Pickup & Delivery Fee</p>
                    </div>

                    <div className='flex flex-row gap-2 items-center'>
                    <div className='p-2 rounded-full bg-nice-blue'>
                        <FaGears color="#f5f5f5" size={25}/>
                    </div>
                    <p className='font-semibold text-lg'>R5 Service Fee</p>
                    </div>

                </div>

                <div className='w-full h-auto'>
                    <Image className="object-cover h-full w-full" src={HeroImage} width={800} height={600} alt='hero-image' />
                </div>
            </div>

            {/* Right Div */}
            <div className="flex flex-col gap-8 w-full lg:w-[40%]">
                <ul className="flex list-none flex-col gap-6 justify-center w-full">
                    {/* Card 1 */}
                    <li className="flex flex-col w-full bg-white rounded-3xl gap-2 justify-start items-start border-2 border-slate-300">
                        <div className="flex flex-row gap-4 pt-6 px-6 pb-3 items-center justify-between w-full">
                        <div className="flex flex-row gap-2 items-center justify-start">
                            <h3 className="font-bold">Wash, Dry & Fold</h3>
                            <div className="hidden md:flex flex-row gap-0">
                                <div className="p-2 rounded-full bg-white">
                                    <FaWater color="#8c99a6" size={25} />
                                </div>
                                <div className="p-2 rounded-full bg-white">
                                    <IoSunny color="#8c99a6" size={25} />
                                </div>
                            </div>
                        </div>
                        
                        <h3 className="text-nice-blue font-bold">R50/kg</h3>
                        </div>
                        <hr className="w-full border-t border-slate-300" />
                        <div className="flex pb-6 px-6 pt-3 w-full gap-4 justify-between items-center">
                            <div className="flex flex-col gap-4">
                                <p className="flex">
                                Plan your day with ease. Choose a collection and delivery time at your convenience.
                                </p>
                                
                            </div>

                            <div className='flex'>
                                <Link className="rounded-3xl " href="#">
                                    <div className="flex flex-col rounded-full bg-nice-blue text-white hover:bg-white border-2 hover:text-nice-blue border-nice-blue items-center justify-center p-2">
                                    <FaChevronRight size={25} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </li>

                    {/* Card 2 */}
                    <li className="flex flex-col w-full bg-white rounded-3xl gap-2 justify-start items-start border-2 border-slate-300">
                        <div className="flex flex-row gap-4 pt-6 px-6 pb-3 items-center justify-between w-full">
                        <div className="flex flex-row gap-2 items-center justify-start">
                            <h3 className="font-bold">Wash, Dry & Iron</h3>
                            <div className="hidden md:flex flex-row gap-0">
                                <div className="p-2 rounded-full bg-white">
                                    <FaWater color="#8c99a6" size={25} />
                                </div>
                                <div className="p-2 rounded-full bg-white">
                                    <IoSunny color="#8c99a6" size={25} />
                                </div>
                                <div className="p-2 rounded-full bg-white">
                                    <TbIroning color="#8c99a6" size={25} />
                                </div>
                            </div>
                        </div>
                        <h3 className="text-nice-blue font-bold">R65/kg</h3>
                        </div>
                        <hr className="w-full border-t border-slate-300" />
                        <div className="flex pb-6 px-6 pt-3 w-full gap-4 justify-between items-center">
                            <div className="flex flex-col gap-4">
                                <p className="flex">
                                Plan your day with ease. Choose a collection and delivery time at your convenience.
                                </p>
                                
                            </div>

                            <div className='flex'>
                                <Link className="rounded-3xl " href="#">
                                    <div className="flex flex-col rounded-full bg-nice-blue text-white hover:bg-white border-2 hover:text-nice-blue border-nice-blue items-center justify-center p-2">
                                    <FaChevronRight size={25} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </li>

                    {/* Card 3 */}
                    <li className="flex flex-col w-full bg-white rounded-3xl gap-2 justify-start items-start border-2 border-slate-300">
                        <div className="flex flex-row gap-4 pt-6 px-6 pb-3 items-center justify-between w-full">
                        <div className="flex flex-row gap-2 items-center justify-start">
                            <h3 className="font-bold">Dry Cleaning</h3>
                            <div className="hidden md:flex flex-row gap-0">
                                <div className="p-2 rounded-full bg-white">
                                    <MdLocalLaundryService color="#8c99a6" size={25} />
                                </div>
                                <div className="p-2 rounded-full bg-white">
                                    <MdDryCleaning color="#8c99a6" size={25} />
                                </div>
                            </div>
                        </div>
                        <h3 className="text-nice-blue font-bold">From R100/item</h3>
                        </div>
                        <hr className="w-full border-t border-slate-300" />
                        <div className="flex pb-6 px-6 pt-3 w-full gap-4 justify-between items-center">
                            <div className="flex flex-col gap-4">
                                <p className="flex">
                                Plan your day with ease. Choose a collection and delivery time at your convenience.
                                </p>
                               
                            </div>

                            <div className='flex'>
                                <Link className="rounded-3xl " href="#">
                                    <div className="flex flex-col rounded-full bg-nice-blue text-white hover:bg-white border-2 hover:text-nice-blue border-nice-blue items-center justify-center p-2">
                                    <FaChevronRight size={25} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </li>

                    {/* Card 4 */}
                    <li className="flex flex-col w-full bg-white rounded-3xl gap-2 justify-start items-start border-2 border-slate-300">
                        <div className="flex flex-row gap-4 pt-6 px-6 pb-3 items-center justify-between w-full">
                        <div className="flex flex-row gap-2 items-center justify-start">
                            <h3 className="font-bold">Iron Only</h3>
                            <div className="hidden md:flex flex-row gap-2">
                                <div className="p-2 rounded-full bg-white">
                                    <TbIroning color="#8c99a6" size={25} />
                                </div>
                            </div>
                        </div>
                        <h3 className="text-nice-blue font-bold">R50/kg</h3>
                        </div>
                        <hr className="w-full border-t border-slate-300" />
                        <div className="flex pb-6 px-6 pt-3 w-full gap-4 justify-between items-center">
                            <div className="flex flex-col gap-4">
                                <p className="flex">
                                Plan your day with ease. Choose a collection and delivery time at your convenience.
                                </p>
                                
                            </div>

                            <div className='flex'>
                                <Link className="rounded-3xl " href="#">
                                    <div className="flex flex-col rounded-full bg-nice-blue text-white hover:bg-white border-2 hover:text-nice-blue border-nice-blue items-center justify-center p-2">
                                    <FaChevronRight size={25} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>

    </div>

    );
};

export default Pricing;