import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ScrollToSectionButton from './ScrollToSectionButton';

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

      <div className='flex flex-col'>
        <span className="font-semibold">
          Next slot available: <span className="text-nice-blue">{nextTimeStart} - {nextTimeEnd}</span>
        </span>
      </div>

      <div className='flex flex-row gap-2'>
        <button
          className="flex flex-row px-6 py-2 gap-2 items-center rounded-full
          bg-nice-blue  border-nice-blue text-white shadow font-semibold
          hover:shadow-md hover:bg-mcd-yellow border-2 hover:border-mcd-yellow hover:text-white transition-all duration-300"
        >
          Schedule pickup
        </button>

        <ScrollToSectionButton 
          sectionID='prices-and-services-section'
          buttonText='Prices & Services'>
        </ScrollToSectionButton>

      </div>

      <Link className="underline hover:text-nice-blue text-sm" href="#">
          See all timeslots
        </Link>
      
    </div>
  );
};

export default TimeSlots;
