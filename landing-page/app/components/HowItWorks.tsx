'use client';
import React from 'react';
import { LAUNDRY_STEPS } from '../constants';
import StepIcon from '../icons/schedule.png';
import Image from 'next/image';

const HowItWorks = () => {
  return (
    <div className="max-w-[1400px] mx-auto">

      {/* Content */}
      <div className="relative flex flex-col gap-6 w-full justify-between items-start py-10 px-4">
        <h2 className="text-white font-bold text-3xl">
          Take back your time. Leave the laundry to us.
        </h2>
        <ul className="flex flex-col gap-6">
          {LAUNDRY_STEPS.map((step, index) => (
            <li key={index}>
              <div className="flex flex-col bg-white rounded-3xl p-6 gap-2 shadow-lg">
                <div className="flex flex-row justify-between items-center gap-4">
                  <h3 className="font-semibold">{step.title}</h3>
                  <Image
                    className="rounded-full p-2 bg-nice-blue flex-shrink-0"
                    src={StepIcon}
                    width={36}
                    height={36}
                    alt="step-icons"
                  />
                </div>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HowItWorks;
