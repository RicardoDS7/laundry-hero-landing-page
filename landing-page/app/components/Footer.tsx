'use client';

import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

const Footer = () => {
    

    return (

            <div className="w-full py-7 px-4 max-w-[1400px] mx-auto">

                <div className="flex flex-col gap-6">

                    <div className="flex flex-col md:flex-row justify-between">

                    <div className="flex-col flex gap-2 text-charcoal">
                            <h3 className="text-charcoal mb-2">Explore</h3>
                            <p>How it works</p>
                            <p>Pricing & Services</p>
                            <p>Customer Reviews</p>
                            <p>Why LaundryHero?</p>
                        </div>

                        <div className="flex-col flex gap-2 text-charcoal">
                            <h3 className="text-charcoal mb-2">Our Services</h3>
                            <p>Wash, Dry & Fold</p>
                            <p>Wash, Dry & Iron</p>
                            <p>Dry Cleaning</p>
                            <p>Ironing</p>
                        </div>

                        <div className="flex-col flex gap-2 text-charcoal">
                            <h3 className="text-charcoal mb-2">Company</h3>
                            <p>Become a Partner</p>
                            <p>Terms & Conditions</p>
                            <p>Privacy Policy</p>
                        </div>

                        <div className="flex-col flex gap-2">
                            <h3 className="text-charcoal mb-2">Follow Us</h3>
                                <div className="flex flex-row gap-2">
                                    <Link className="bg-nice-blue rounded-full p-2 text-white hover:text-nice-blue hover:bg-white" href={'https://instagram.com'}>
                                        <FaInstagram size={25}/>
                                    </Link>
                                    <Link className="bg-nice-blue rounded-full p-2 text-white hover:text-nice-blue hover:bg-white" href={'https://facebook.com'}>
                                        <FaFacebook size={25}/>
                                    </Link>
                                </div>
                        </div>
                    </div>

                    <div className="mt-2">
                        <p className='text-nice-blue font-semibold'>LaundryHero © Copyright 2024 | All rights reserved</p>
                    </div>
                </div>

            </div>

            

        
    )
} 

export default Footer;