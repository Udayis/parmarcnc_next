'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './EdgeHSeries.css';

const HeroH = () => {
  return (
    <div className='cnc_hero_section'>
      <div className="cnc_hero_image_wrapper">
        <Image
          id='cnc_logo_img'
          src='/images/parmar_catalog[1]222 2.png'
          alt='CNC Press Brake Edge H-Series'
          width={600}
          height={400}
          priority
        />
      </div>
      <div className='cnc_text_section'>
        <div className='cnc_description'>
          <p id='CNC_label_text'>CNC PRESS BRAKE MACHINE EDGE H SERIES</p>
          <p id='CNC_sub_label_text'>[H-SERIES] Capacity : 40 Ton x 1000mm to 400 Ton x 4000mm</p>
        </div>
        <div className='edge-hero-buttons'>
          <button className='edge-hero-btn'>
            Request demo
            <Image src="/images/Play circle.png" alt="play" width={24} height={24} className="edge-hero-btn-icon"/>
          </button>
          <button className='edge-hero-btn'>
            Find your dealer
            <Image src="/images/Search.png" alt="search" width={24} height={24} className="edge-hero-btn-icon"/>
          </button>
          <Link href='/download' className='edge-hero-btn'>
            Download brochure
            <Image src="/images/pdf_icon.png" alt="brochure" width={24} height={24} className="edge-hero-btn-icon"/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroH; 