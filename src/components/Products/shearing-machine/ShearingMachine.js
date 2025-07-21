'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './ShearingMachine.css';
import '../cnc-press-brake/CNC_press.css';

const ShearingMachine = () => {
    return (
        <div className='shearing-page-container'>
            <div className="machine-section">
                <Image 
                    src="/images/shering_bg.png" 
                    alt="Shearing machine background" 
                    layout="fill" 
                    objectFit="cover" 
                    className="background-image"
                />
                <div className="content-overlay">
                    <h1 className='machine-title'>SHEARING MACHINE</h1>
                    <div className="machine-image-wrapper">
                        <Image 
                            src="/images/sharing_machine_img.png" 
                            alt="Shearing machine" 
                            width={500} 
                            height={300}
                            objectFit="contain"
                        />
                    </div>
                </div>
            </div>
            
            <div className="machine-section">
                <Image 
                    src="/images/shering_bg.png" 
                    alt="Hydraulic shearing machine background" 
                    layout="fill" 
                    objectFit="cover" 
                    className="background-image"
                />
                <div className="content-overlay">
                    <div className="machine-details">
                        <h2 className='machine-subtitle'>VARIABLE RACK ANGLE HYDRAULIC SHEARING MACHINE</h2>
                        <Link href="/products/hydraulic-shearing-machine" className='view-button'>
                            VIEW
                        </Link>
                    </div>
                    <div className="machine-image-wrapper">
                        <Image 
                            src="/images/single_mchine.png" 
                            alt="Variable rack angle hydraulic shearing machine" 
                            width={500} 
                            height={300}
                            objectFit="contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShearingMachine; 