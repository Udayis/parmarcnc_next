'use client';

import React from 'react';
import Hero from './Hero';
import Image from 'next/image';
import './EdgeSeries.css';
import Calculator from './Calculator';
import CNC_Controller from '../cnc-controller/CNC_Controller';
import Calc_Technical from '../calculator-technical/Calc_Technical';

const datapartText = `Edge Series Press Brake Heavy Duty Frame is Designed to minimize welding structures to the highest possible uniformity in the press brake frame structure. In addition to high quality, we achieve a cost-effective and fast manufacturing process that enables large-scale press brakes to be also delivered quickly and affordably to our customers.`;

const generalSpecs = [
  'High sensitivity, stress relieved steel construction body, long life frame.',
  'Automatic calibration and first start up.',
  'Ball Screw and linear guide integrated perfect back gauge system.',
  'Durable, long life and sensitive bending capable special hardened top tools.',
  'Suitable for segmented tools special and fast tool holding system.',
  'Sensitive solution on long and deep bending.',
  'High accuracy linear scales.',
  'Best quality worldwide accepted hydraulic and electric components.'
];

const EdgeSeries = () => {
  return (
    <div className='edge_series'>
      <Hero />

      {/* Description and General Specifications (row layout) */}
      <div className="img_and_data data_left">
        <div className="Datapart_main_part">
          <p id='datapart_data'>{datapartText}</p>
          <div className="General_specification">
            <p id='general_label'>General Specifications :</p>
            <div className="Genereic_details">
              <ul>
                {generalSpecs.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="img_and_data_imgwrap">
          <Image
            src="/images/parmar_catalog[1]222 2.png"
            alt="Edge Series Machine"
            width={500}
            height={400}
            style={{borderRadius:'8px', background:'#fff'}}
          />
        </div>
      </div>

      {/* Calculator Section (row layout, image left, text right) */}
      <div className="img_and_data image_left">
        <div className="img_and_data_imgwrap">
          <Image
            src="/images/Group 27.png"
            alt="Edge Series Drawing"
            width={500}
            height={400}
            style={{borderRadius:'8px', background:'#fff'}}
          />
        </div>
        <div className="Datapart_main_part">
          <p id='datapart_data'>
            You can use this calculator to calculate necessary tonnage for press brake to perform the bending of necessary part. It means that you can verify the max. Tonnage according to the technical specification of press brake or check the max. obtained tonnage by the press brake bending tooling compared to the necessary force. All bending tools have limits of force to be used.
          </p>
          <p id='datapart_data' style={{color:'#A5C847', fontWeight:700, fontSize:'1.1rem'}}>
            • This calculator is used for standard air bending process
          </p>
        </div>
      </div>

      

      <Calculator />
      <Calc_Technical />
      <CNC_Controller />
    </div>
  );
};

export default EdgeSeries; 