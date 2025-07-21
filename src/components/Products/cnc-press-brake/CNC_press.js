'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './CNC_press.css';

const Part_1 = () => {
  return (
    <div>
      <div className="machine_main_div_2">
        <Image 
          src="/images/CNC_press_break_BG_img.png" 
          alt="CNC Press Brake" 
          width={1920}
          height={1080}
          priority
        />
        <div className="btn_and_img_div">
          <p id="main_machine_label">CNC PRESS BRAKE</p>
          <Image 
            id='machine_img' 
            src="/images/CNC_press_break.png" 
            alt="Catalog"
            width={600}
            height={400}
            priority
          />
        </div>
      </div>
    </div>
  );
};

const Part_2 = () => {
  return (
    <div>
      <div className="machine_main_div_2">
        <Image 
          src="/images/CNC_press_break_BG_img.png" 
          alt="CNC Press Brake" 
          width={1920}
          height={1080}
          priority
        />
        <div className="btn_and_img_div_2">
          <div className='machine_desc_2'>
            <p id="machine_label_2">CNC Press Brake Machine Edge Series</p>
            <Link href="/products/edge-series" id='view_2'>VIEW</Link>
          </div>
          <Image 
            src="/images/CNC_press_break.png" 
            alt="Catalog" 
            id="machine_img"
            width={600}
            height={400}
            priority
          />
        </div>
      </div>
    </div>
  );
};

const Part_3 = () => {
  return (
    <div>
      <div className='machine_parent_div'>
        <div className="machine_main_div_2">
          <Image 
            src="/images/CNC_press_break_BG_img.png" 
            alt="CNC Press Brake Machine" 
            width={1920}
            height={1080}
            priority
          />
          <div className="btn_and_img_div_2">
            <Image 
              id='machine_img' 
              src="/images/CNC_press_break.png" 
              alt="Catalog"
              width={600}
              height={400}
              priority
            />
            <div className='machine_desc_2'>
              <p id="machine_label_2">Rear Cylinder Hydraulic Press Brake Machine</p>
              <Link href="/products/hydraulic-press-break" id='view_2'>VIEW</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Part_4 = () => {
  return (
    <div>
      <div className='machine_parent_div'>
        <div className="machine_main_div_2">
          <Image 
            id='front_img' 
            src="/images/CNC_press_break_BG_img.png" 
            alt="CNC Press Brake Machine" 
            width={1920}
            height={1080}
            priority
          />
          <div className="btn_and_img_div_2">
            <div className='machine_desc_2'>
              <p id="machine_label_2">CNC PRESS BRAKE MACHINE EDGE H SERIES</p>
              <Link href="/products/edge-h-series" id='view_2'>VIEW</Link>
            </div>
            <Image 
              id='machine_img' 
              src="/images/Edge_H_series_machine_img.png" 
              alt="Catalog"
              width={600}
              height={400}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Part_5 = () => {
  return (
    <div>
      <div className='machine_parent_div'>
        <div className="machine_main_div_2">
          <Image 
            src="/images/CNC_press_break_BG_img.png" 
            alt="CNC Press Brake Machine" 
            width={1920}
            height={1080}
            priority
          />
          <div className="btn_and_img_div_2" id='part_5_div'>
            <Image 
              id="machine_img_5" 
              src="/images/synchro_hydrolic_machine_img.png" 
              alt="Catalog"
              width={600}
              height={400}
              priority
            />
            <div className='machine_desc_2'>
              <p id='machine_label_2'>EDGE SERIES SYNCHRO HYDRAULIC PRESS BRAKE</p>
              <Link href="/products/edge-series" id='view_2'>VIEW</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CNC_press = () => {
  return (
    <div className='cnc_press'>
      <Part_1 />
      <Part_2 />
      <Part_3 />
      <Part_4 />
      <Part_5 />
    </div>
  );
};

export default CNC_press; 