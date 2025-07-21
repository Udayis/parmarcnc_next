'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Specification from '../edge-series/Specification';
import './HydraulicShearingMachine.css';

const HydraulicShearingMachine = () => {
  return (
    <div className="hydraulic-shearing-root">
      {/* HERO SECTION */}
      <div className="hero-container">
        <div className="cnc_hero_section">
          <div className="cnc_hero_image_wrapper">
            <Image id="cnc_logo_img" src="/images/single_mchine.png" alt="First Image" width={700} height={420} priority />
          </div>
          <div className='cnc_text_section'>
            <div className='cnc_description'>
              <p id='CNC_label_text'>VARIABLE RACK ANGLE HYDRAULIC SHEARING MACHINE</p>
              <p id='CNC_sub_label_text'>CNC SERIES</p>
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
      </div>

      {/* TECHNICAL SPECIFICATION SECTION (description left, image right, two images below) */}
      <div className="img_and_data responsive-stack">
        <div className="Datapart_main_part">
          <p id="datapart_data">
            PARMAR is manufactured Hydraulic Variable Rake Angle Shears which is rated as one of the best in the markets due to its tensile strength and robust build. The rake angle is adjustable to suit thickness and material; the sheets are clamped hydraulically before cut starts. These are designed and developed to shear plates with clean square edges. Further, these come with close working tolerances with options of different rake angles.
          </p>
          <p id="datapart_data">
            We are a quality centric organization, therefore we fabricate our products implementing sophisticated technologies in accordance with the international quality standards. This shearing machine is highly praised by the clients for its smooth functionality and large scale production capability.
          </p>
        </div>
        <div className="img_and_data_imgwrap">
          <Image src="/images/parmar_14 2.png" alt="Hydraulic Shearing Machine Detail" width={500} height={400} style={{borderRadius:'8px', background:'#fff'}} />
        </div>
      </div>
      <div className="Tech_images">
        <Image id="im_1" src="/images/Group 82.png" alt="Tech Image 1" width={400} height={300} />
        <Image id="im_2" src="/images/Group 83.png" alt="Tech Image 2" width={400} height={300} />
      </div>

      {/* TECHNICAL SPECIFICATION IMAGE (FULLY RESPONSIVE) */}
      <Specification />

      {/* Standard & Optional Components Section */}
      <div className="std_com">
        <div className="std_com_1">
          <div className="std_label"><p>Standard Features:</p></div>
          <div className="std_label_data">
            <ul>
              <li>Front Sheet Support</li>
              <li>Rear Gauge by Front Operated</li>
              <li>One Suitable Five Way Die</li>
              <li>Punch</li>
              <li>Manual Operated Lubrication System</li>
              <li>Pair of Lifting Links</li>
            </ul>
          </div>
        </div>
        <div className="std_com_2">
          <div className="std_label_data_2">
            <ul>
              <li>Movable Operation Console With <br />Foot Switch & Various Operation Push Buttons</li>
              <li>Main Motor Drive</li>
              <li>Die Clamp</li>
              <li>Electric Control Panel with Selection of <br />'Auto', 'Inch' & 'Single' Cycle Mode Operation</li>
            </ul>
          </div>
        </div>
        <div className="std_com_1">
          <div className="std_label"><p>Optional Accessories:</p></div>
          <div className="std_label_data">
            <ul>
              <li>Motorised Back Gauge with PLC</li>
              <li>Anti Detection System</li>
              <li>Sliding Sheet with Swing Away Supports</li>
              <li>Extra Depth</li>
              <li>NC Controller</li>
              <li>Extra Horns</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Shearing Controller Section */}
      <p id="shearing_label">SHEARING CONTROLLER</p>
      <div className="sharig_images">
        {/* Cyb Touch 8W */}
        <div className="image_div">
          <div className="im_label">
            <Image className="i_sharing" src="/images/parmar_15 1.png" alt="Cyb Touch 8W" width={400} height={300} />
            <div className="d_label"><p>Cyb Touch 8W</p></div>
          </div>
          <div className="shering_data">
            <ul>
              <li>Intuitive and user-friendly interface.</li>
              <li>Large, vivid, and high-contrast touchscreen.</li>
              <li>Clear display, large keys, simple pages displaying all the information the operator needs.</li>
              <li>Very simple cuts with EasyCut page.</li>
              <li>Programming allows efficient mass-production of complex cuts.</li>
              <li>Online help and warming pop-ups make it a very user-friendly software.</li>
            </ul>
          </div>
        </div>
        {/* Cyb Touch 12G */}
        <div className="image_div">
          <div className="im_label">
            <Image className="i_sharing" src="/images/parmar_16 1.png" alt="Cyb Touch 12G" width={400} height={300} />
            <div className="d_label"><p>Cyb Touch 12G</p></div>
          </div>
          <div className="shering_data">
            <ul>
              <li>High-contrast touchscreen with vivid colors.</li>
              <li>Simple pages, large keys, clear display with all the information the operator needs.</li>
              <li>Intuitive and user-friendly interface.</li>
              <li>Complete programming of parts in seconds.</li>
              <li>Quick set up of the machine with the EasyCut page.</li>
              <li>Contextual help and warning pop-up.</li>
            </ul>
          </div>
        </div>
        {/* DAC 360T */}
        <div className="image_div">
          <div className="im_label">
            <Image className="i_sharing" src="/images/parmar_17 1.png" alt="DAC 360T" width={400} height={300} />
            <div className="d_label"><p>DAC 360T</p></div>
          </div>
          <div className="shering_data">
            <ul>
              <li>Panel-based housing.</li>
              <li>Bright LCD screen.</li>
              <li>Back gauge control.</li>
              <li>Retract function.</li>
              <li>Cutting angle or gap control.</li>
              <li>Stroke length limitation.</li>
              <li>Manual movement of axes.</li>
              <li>Stock count.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* OUR EXCELLENCE SECTION */}
      <div className="Excellence_part">
        <p id="excellence_pabel">OUR EXCELLENCE</p>
        <div className="ex_img">
          <div className="ex_img_1 excellence-contain">
            <Image src="/images/image 36.png" alt="Back Gauge" width={350} height={200} style={{objectFit:'contain'}} />
            <div className="ex_label"><p>Back Gauge</p></div>
          </div>
          <div className="ex_img_1 excellence-contain">
            <Image src="/images/image 37.png" alt="Automatic Blade gap system" width={350} height={200} style={{objectFit:'contain'}} />
            <div className="ex_label"><p>Automatic Blade gap system</p></div>
          </div>
          <div className="ex_img_1 excellence-contain">
            <Image src="/images/parmar_18 1.png" alt="Automatic sheet 2 stop sheet support" width={350} height={200} style={{objectFit:'contain'}} />
            <div className="ex_label"><p>Automatic sheet 2 stop sheet support</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HydraulicShearingMachine; 