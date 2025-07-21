'use client';
import React from 'react';
import './CNC_Controller.css';

const STDComponents = () => {
  return (
    <div>
      <div>
        <p id='std_label'>STANDARD COMPONENTS</p>

        <div className='std_main_div'>
          <div className='item_div'>
            <img src="/images/parmar_6 1.png" alt="Back Gauge" />
            <p className="green-title-box">Back Gauge</p>
          </div>
          
          <div className='item_div'>
            <img src="/images/parmar7 1.png" alt="Side Guard" />
            <p className="green-title-box">Side Guard</p>
          </div>
          
          <div className='item_div'>
            <img src="/images/parmar_8 1.png" alt="Linear Scale" />
            <p className="green-title-box">Linear Scale</p>
          </div>
          
          <div className='item_div'>
            <img src="/images/image 33.png" alt="Fingers" />
            <p className="green-title-box">Fingers</p>
          </div>
          
          <div className='item_div'>
            <img src="/images/parmar_10 1.png" alt="Back Gauge" />
            <p className="green-title-box">Back Gauge</p>
          </div>
          
          <div className='item_div'>
            <img src="/images/parmar_10 1.png" alt="Back Gauge" />
            <p className="green-title-box">Back Gauge</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default STDComponents; 