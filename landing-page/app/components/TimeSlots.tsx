import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaChevronRight } from "react-icons/fa";

const TimeSlots = () => {
  const [nextTimeStart, setNextTimeStart] = useState('');
  const [nextTimeEnd, setNextTimeEnd] = useState('');

  useEffect(() => {
    const calculateNextTimeSlot = () => {
      const now = new Date(); // Current time
      const nextHourStart = new Date(now); // Copy current time
      const nextHourEnd = new Date(now); // Copy current time

      // Set to the next full hour
      nextHourStart.setHours(now.getHours() + 1, 0, 0, 0);
      nextHourEnd.setHours(now.getHours() + 2, 0, 0, 0);

      // Check if nextHourStart is after 19:00
      if (nextHourStart.getHours() >= 19) {
        // Set nextHourStart to tomorrow at 07:00
        nextHourStart.setDate(nextHourStart.getDate() + 1); // Move to next day
        nextHourStart.setHours(7, 0, 0, 0); // Set to 07:00
        nextHourEnd.setHours(8, 0, 0, 0); // Set to 07:00
      }

      // Calculate the difference in minutes (convert Date to timestamps with `.getTime()`)
      const diffInMinutes = Math.round(
        (nextHourStart.getTime() - now.getTime()) / (1000 * 60)
      );

      // Check if it's less than 30 minutes away
      if (diffInMinutes < 30) {
        nextHourStart.setHours(nextHourStart.getHours() + 1);
        nextHourEnd.setHours(nextHourEnd.getHours() + 1);
      }

      // Format time for display
      setNextTimeStart(
        nextHourStart.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' })
      );
      setNextTimeEnd(
        nextHourEnd.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' })
      );
    };

    calculateNextTimeSlot();
  }, []);

  return (
    <div className="flex flex-col gap-2 items-center justify-center md:items-start md:justify-start">

      <Link className="text-sm" href="#">
          <div className='flex flex-row gap-4 border-2 border-nice-blue rounded-full py-1 pl-6 pr-1 items-center'>
            <div className='flex flex-col gap-1'>
              <p className='font-bold text-xs md:text-sm'>Next Pickup time</p>
              <p className='text-xs md:text-sm text-nice-blue'>{nextTimeStart} - {nextTimeEnd}</p>
            </div>

            <div className='border-l-2 h-10 border-nice-blue'></div>

            <div className='flex flex-col gap-1 border-nice-blue'>
              <p className='font-bold text-xs md:text-sm'>Place</p>
              <p className='text-xs md:text-sm text-nice-blue'>Add address</p>
            </div>

            <div className='flex flex-col gap-2 rounded-full bg-nice-blue items-center justify-center p-4'>
              {/* <FaArrowRight color='white'size={25}/> */}
              <FaChevronRight color='white'size={25} />
            </div>

          </div>
      </Link>
      
    </div>
  );
};

export default TimeSlots;
