'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import './CNC_Controller.css';

const CNC_Controller = () => {
  const router = useRouter();

  const handlerDelem = () => {
    router.push('/products/delem');
  };
  const handlerCybelic = () => {
    router.push('/products/cybelec');
  };
  const handlerStep = () => {
    router.push('/products/step');
  };
  const handlerStandardComponent = () => {
    router.push('/products/standard-components');
  };

  return (
    <div>
      <div className='conroller_main_controller'>
        <p className='green-title-box'>
          CNC CONTROLLER
        </p>
        <div className='delem_Cybelic_part'>
          {/* delem_part */}
          <div className='delem_part'>
            <img src='/images/delem.png' alt='Delem' />
            <div className='delem_desc'>
              <p className='dark-title-box'>DELEM</p>
              <button id='label_btn' onClick={handlerDelem}>View</button>
            </div>
          </div>
          {/* cybellic_part */}
          <div className='cybelic_div'>
            <div className='cybelic_desc'>
              <p className='dark-title-box'>CYBELEC</p>
              <button id='label_btn' onClick={handlerCybelic}>View</button>
            </div>
            <img src='/images/cybelic.png' alt='Cybelec' />
          </div>
        </div>
      </div>
      <div className='conroller_main_controller'>
        <div className='delem_Cybelic_part'>
          {/* step */}
          <div className='delem_part'>
            <img src='/images/step.png' alt='Step' />
            <div className='delem_desc'>
              <p className='dark-title-box'>STEP</p>
              <button id='label_btn' onClick={handlerStep}>View</button>
            </div>
          </div>
          {/* standard components */}
          <div className='cybelic_div'>
            <div className='cybelic_desc'>
              <p className='dark-title-box'>STANDARD COMPONENTS</p>
              <button id='label_btn' onClick={handlerStandardComponent}>View</button>
            </div>
            <img src='/images/starndard_img.png' alt='Standard Components' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CNC_Controller; 