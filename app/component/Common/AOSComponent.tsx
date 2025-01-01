// app/components/AOSComponent.tsx

'use client';

import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set animation duration
      once: true, // Only animate once
    });

    return () => {
      AOS.refresh(); // Cleanup AOS on component unmount
    };
  }, []);

  return null; // This component doesn't render anything, just initializes AOS
};

export default AOSComponent;
