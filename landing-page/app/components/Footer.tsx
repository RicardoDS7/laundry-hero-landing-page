'use client';

import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { FOOTER_A, FOOTER_B, FOOTER_C } from "../constants";

const Footer = () => {

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault(); // Prevent default link behavior
        const target = document.getElementById(id);
        if (target) {
        const yOffset = -76; // Adjust offset value
        const yPosition = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: yPosition, behavior: 'smooth' });
        }
    };

    

    return (

            <div className="w-full py-7 px-4 max-w-[1400px] mx-auto">

                <div className="flex flex-col gap-6">

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

                        <div className="flex-col flex gap-2 text-charcoal">
                            <h3 className="text-charcoal mb-2">Explore</h3>
                            {FOOTER_A.map((item, index) => (
                                <div key={index}>
                                    <Link className="hover:text-nice-blue hover:font-medium" href={item.path} onClick={(e) => scrollToSection(e, `${item.path}`)}>{item.title}</Link>
                                </div>
                            ))}
                        </div>

                        <div className="flex-col flex gap-2 text-charcoal">
                            <h3 className="text-charcoal mb-2">Our Services</h3>
                            {FOOTER_B.map((item, index) => (
                                <div key={index}>
                                    <Link className="hover:text-nice-blue hover:font-medium" href={item.path} >{item.title}</Link>
                                </div>
                            ))}
                        </div>

                        <div className="flex-col flex gap-2 text-charcoal">
                            <h3 className="text-charcoal mb-2">Company</h3>
                            {FOOTER_C.map((item, index) => (
                                <div key={index}>
                                    <Link className="hover:text-nice-blue hover:font-medium" href={item.path} >{item.title}</Link>
                                </div>
                            ))}
                        </div>

                        <div className="flex-col flex gap-2">
                            <h3 className="text-charcoal mb-2">Follow Us</h3>
                                <div className="flex flex-row gap-0">
                                    <Link className="bg-white rounded-full p-2 text-nice-blue hover:text-white hover:bg-nice-blue" href={'https://instagram.com'}>
                                        <FaInstagram size={25}/>
                                    </Link>
                                    <Link className="bg-white rounded-full p-2 text-nice-blue hover:text-white hover:bg-nice-blue" href={'https://facebook.com'}>
                                        <FaFacebook size={25}/>
                                    </Link>
                                </div>
                        </div>
                    </div>

                    <div className="flex mt-2 items-center justify-center">
                        <p className='text-nice-blue font-semibold'>LaundryHero © Copyright 2024 | All rights reserved</p>
                    </div>
                </div>

            </div>

            

        
    )
} 

export default Footer;