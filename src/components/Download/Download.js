'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { downloadData } from '@/Data_Folders/Download';
import './download.css';

const Download = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageLoadErrors, setImageLoadErrors] = useState({});
  const [downloadStatus, setDownloadStatus] = useState({});

  useEffect(() => {
    try {
      // Simulate loading time for images
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    } catch (err) {
      setError('Failed to load download information');
      console.error('Error in Download component:', err);
    }
  }, []);

  const handleImageError = useCallback((imageKey) => {
    setImageLoadErrors(prev => ({
      ...prev,
      [imageKey]: true
    }));
  }, []);

  const handleDownload = useCallback(async (fileName, downloadName, id) => {
    try {
      setDownloadStatus(prev => ({
        ...prev,
        [id]: 'downloading'
      }));

      if (typeof window !== 'undefined') {
        // Create a temporary link element
        const link = document.createElement('a');
        link.href = fileName;
        link.download = downloadName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      setDownloadStatus(prev => ({
        ...prev,
        [id]: 'success'
      }));

      // Reset status after 2 seconds
      setTimeout(() => {
        setDownloadStatus(prev => ({
          ...prev,
          [id]: null
        }));
      }, 2000);
    } catch (err) {
      console.error('Download error:', err);
      setDownloadStatus(prev => ({
        ...prev,
        [id]: 'error'
      }));
    }
  }, []);

  if (error) {
    return (
      <div className="error-container">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="page-container">
      {/* Download Header Section */}
      <div className="hero-section">
        <div 
          className="hero-background"
          style={{
            backgroundImage: `url('/images/download_hero_img.png')`,
          }}
        />
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in">DOWNLOAD</h1>
        </div>
      </div>

      {/* Download Part Section */}
      <div className="Down_part">
        {downloadData.map((download) => (
          <a
            key={download.id}
            href={download.fileName}
            className="download_img_part download_card_link"
            download={download.downloadName}
            onClick={e => {
              e.preventDefault();
              handleDownload(download.fileName, download.downloadName, download.id);
            }}
            tabIndex={0}
            role="button"
            aria-label={`Download ${download.downloadName}`}
          >
            <div className="download_card_content">
              <Image 
                src={imageLoadErrors[`main_${download.id}`] ? '/images/brouser_download_img.png' : download.image}
                alt="Download Icon"
                width={120}
                height={120}
                className="download_card_pdf_icon"
                loading="lazy"
                quality={85}
                onError={() => handleImageError(`main_${download.id}`)}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="download_btn download_card_btn">
                <Image 
                  src={imageLoadErrors[`icon_${download.id}`] ? '/images/pdf_icon.png' : download.icon}
                  id="do_icon"
                  alt="Download Button Icon"
                  width={24}
                  height={24}
                  loading="eager"
                  quality={85}
                  onError={() => handleImageError(`icon_${download.id}`)}
                />
                <span className={`download_text ${downloadStatus[download.id] || ''}`}>
                  {downloadStatus[download.id] === 'downloading' ? 'Downloading...' :
                   downloadStatus[download.id] === 'success' ? 'Downloaded!' :
                   downloadStatus[download.id] === 'error' ? 'Error!' : 'Download'}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Download; 