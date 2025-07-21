'use client';

import { useState, useEffect } from 'react';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import './BToT.css';

function BToT() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showButton && (
        <button 
          onClick={scrollToTop} 
          className="scroll-to-top-button"
          aria-label="Scroll to top"
        >
          <MdKeyboardDoubleArrowUp />
        </button>
      )}
    </>
  );
}

export default BToT; 