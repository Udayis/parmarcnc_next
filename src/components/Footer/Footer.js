'use client';

import React from 'react';
import Image from 'next/image';
import { footerText, footerImages } from '../../Data_Folders/Footerdata';
import './Footer.css';

const Footer = () => {
  const socialLinks = footerImages.socialLinks || [];
  const phoneNumbers = footerText.phoneNumbers || [];

    return (
    <footer className="footer">
                <div className="footer-main">
        <div className="footer-left">
                            {footerImages.isoImage && (
                                <div className="footer-image-shine">
                                    <Image 
                                        src={footerImages.isoImage}
                                        alt="ISO Certified Company"
                                        width={120}
                                        height={120}
                                        className="iso-logo"
                                    />
                                </div>
                            )}
                        </div>
                        
                        <div className="footer-middle">
          <h2 className="footer-title">{footerText.contactTitle}</h2>
          <p className="footer-address">{footerText.address}</p>
          <div className="social-links">
                                {socialLinks.map((link, index) => (
                                    <a 
                                        key={index}
                                        href={link.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                className="social-icon"
                                    >
                <Image src={link.icon} alt={link.name} width={24} height={24} />
                                    </a>
                                ))}
                            </div>
                            <div className="contact-info">
            {phoneNumbers.map((number, index) => (
              <p key={index}>{number}</p>
            ))}
                            </div>
                        </div>
                        
        <div className="footer-right">
                            {footerImages.certificateImage && (
                                <div className="footer-image-shine">
                                    <Image 
                                        src={footerImages.certificateImage}
                                        alt="Certificate"
                                        width={100}
                                        height={140}
                                        className="certificate-image"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                    
      <div className="footer-company-desc">
                        <p>{footerText.companyDescription}</p>
            </div>
            
            <div className="footer-bottom">
                <p>
                    {footerText.copyrightText}
                    <br />
                    <span className="developer-text">{footerText.developerText}</span>
                </p>
            </div>
        </footer>
    );
};

export default Footer; 