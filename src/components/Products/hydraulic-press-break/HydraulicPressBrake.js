'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './HydraulicPressBrake.css';
import Specification from '../edge-series/Specification';
import '../edge-series/EdgeSeries.css';

const HydraulicPressBrake = () => {
    return (
        <div className="hydraulic_press_brake_page">
            {/* Hero Section */}
            <div className='cnc_hero_section'>
                <div className="cnc_hero_image_wrapper">
                    <Image
                        id='cnc_logo_img'
                        src='/images/Hydrolic_press_break_machine_img.png'
                        alt='Rear Cylinder Hydraulic Press Brake'
                        width={600}
                        height={400}
                        priority
                    />
                </div>
                <div className='cnc_text_section'>
                    <div className='cnc_description'>
                        <p id='CNC_label_text'>REAR CYLINDER HYDRAULIC PRESS BRAKE</p>
                        <p id='CNC_sub_label_text'>Capacity : 1270mm X 20 TON TO 6000mm x 600 TON</p>
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

            {/* Description Section */}
            <div className="hpb_description_section">
                <div className="hpb_description_text">
                    <p>
                        Rear Cylinder Hydraulic Press Brake Machine is durable and
                        manufactured using latest techniques to ensure excellent
                        performance. Rear Cylinder to Technically advanced features
                        of our hydraulic press brake make it extremely popular in the
                        global market.
                    </p>
                    <p>
                        Press Brakes are developed by keeping latest technology
                        with cylinders are mounted at back side of press Brake
                        and are synchronize for parallelism between ram and table,
                        by providing mechanical links connected with cylinder. The
                        electric control panel is fixed on side wall at convenient
                        place for easy reach of operator. It includes push button
                        pendant and foot switch. Its high operational accuracy and
                        precise results, this machine is widely used and appreciated
                        by the clients for long service life.
                    </p>
                </div>
                <div className="hpb_description_image">
                    <Image src='/images/Hydrolic_press_break_machine_img.png' alt="Hydraulic Press Machine" width={500} height={400} />
                </div>
            </div>

            {/* Features Section */}
            <div className="hpb_features_section">
                <div className="hpb_feature_card">
                    <Image src='/images/Group 74.png' alt="Feature Drawing 1" width={400} height={300} />
                </div>
                <div className="hpb_feature_card">
                    <Image src='/images/Group 75.png' alt="Feature Drawing 2" width={400} height={300} />
                </div>
                <div className="hpb_cybelec_card">
                    <div className='f_part'>
                        <p>CYBELIC</p>
                    </div>
                    <Image id='hydrolic_img' src='/images/step.png' alt="Cyb Touch 8 Controller" width={300} height={250} />
                    <div className='cyb_part'>
                        <p>Cyb Touch 8</p>
                    </div>
                </div>
            </div>
            
            {/* Specification Section */}
            <div className="hpb_specification_section">
                <Specification/>
            </div>

            {/* Standard/Optional Features Section */}
            <div className="hpb_std_features_section">
                <div className="hpb_feature_column">
                    <h3 className="hpb_feature_title">Standard Features:</h3>
                    <ul>
                        <li>Front Sheet Support</li>
                        <li>Rear Gauge bt Front Operated</li>
                        <li>One Suitable Five Way Die</li>
                        <li>Punch</li>
                        <li>Manual Operated Lubrication System</li>
                        <li>Pair of Lifting Links</li>
                    </ul>
                </div>
                <div className="hpb_feature_column">
                    <ul>
                        <li>Movable Operation Console with <br /> Foot Switch & Various Operation Push Buttons</li>
                        <li>Main Motor Drive</li>
                        <li>Die Clamp</li>
                        <li>Electric Control Panel with Selection of <br /> 'Auto', 'Inch' & 'Single' Cycle Mode Operation</li>
                    </ul>
                </div>
                <div className="hpb_feature_column">
                    <h3 className="hpb_feature_title">Optional Accessories:</h3>
                    <ul>
                        <li>Motorised Back Gauge with PLC</li>
                        <li>Anti Detection System</li>
                        <li>Sliding Sheet with Swing Away Suppers</li>
                        <li>Extra Depth</li>
                        <li>NC Controller</li>
                        <li>Extra Horns</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default HydraulicPressBrake; 