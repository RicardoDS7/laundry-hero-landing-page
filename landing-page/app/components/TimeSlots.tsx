import React from 'react';
import Button from './Button';
import { useEffect, useState } from 'react';

const TimeSlots = () => {

    const [nextTimeStart, setNextTimeStart] = useState('');
    const [nextTimeEnd, setNextTimeEnd] = useState('');

    useEffect(() => {
        const calculateNextTimeSlot = () => {
          const now = new Date(); // Current time
          const nextHourStart = new Date();
          const nextHourEnd = new Date();
    
          // Set to the next full hour
          nextHourStart.setHours(now.getHours() + 1, 0, 0, 0);
          nextHourEnd.setHours(now.getHours() + 2, 0, 0, 0);

          // Calculate the difference in minutes
          const diffInMinutes = Math.round((nextHourStart - now) / (1000 * 60)); // Convert milliseconds to minutes
    
          // Check if it's at least 1 hour ahead
          if (diffInMinutes < 30) {
            nextHourStart.setHours(nextHourStart.getHours() + 1);
            nextHourEnd.setHours(nextHourEnd.getHours() + 1);
          }
    
          setNextTimeStart(nextHourStart.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' }));
          setNextTimeEnd(nextHourEnd.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit' }));
        };
    
        calculateNextTimeSlot();
      }, []);

    return (
        <div className='flex flex-col gap-2 items-start justify-start'>
            <span className='font-semibold'>Next available timeslot: <span className='text-nice-blue'>{nextTimeStart} - {nextTimeEnd}</span></span>
            <Button label="Schedule your pickup" onClick={() => alert('Button clicked!')} />
        </div>
    );
};

export default TimeSlots;