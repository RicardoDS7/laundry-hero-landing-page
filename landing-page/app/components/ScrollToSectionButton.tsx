'use client';
import React from 'react';
interface HowItWorksButtonProps {
    sectionID: string;     // The title text for the hero section
    buttonText: string;     // The title text for the hero section
  }

const ScrollToSectionButton: React.FC<HowItWorksButtonProps> = ({sectionID,buttonText}) => {

  const scrollToSection = () => {
      const section = document.getElementById(sectionID);

      if (section) {
        const offset = 100; // Adjust the offset
        const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
  
        window.scrollTo({
          top: sectionPosition,
          behavior: 'smooth' // Smooth scroll behavior
        });
      } else {
        console.error("Section with ID 'faq' not found");
      }
  }
      

    return (
      <button 
        type="button" 
        onClick={scrollToSection}
        className="flex flex-row px-6 py-2 gap-2 items-center rounded-full
          bg-white  border-nice-blue text-nice-blue shadow font-semibold
          hover:shadow-md hover:bg-nice-blue border-2 hover:text-white transition-all duration-300"
      >
        {buttonText}
      </button>
    );
  };
  
  export default ScrollToSectionButton;