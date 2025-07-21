'use client';

import { videoData } from '@/Data_Folders/VideoData';
import Image from 'next/image';
import './video.css';

const Videos = () => {
  return (
    <div className="page-container">
      <div className="hero-section">
        <div 
          className="hero-background"
          style={{
            backgroundImage: `url('/Images/Videos_img.png')`,
          }}
        >
        </div>
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in">VIDEOS</h1>
        </div>
      </div>

      <div className='video_container'>
        {videoData.map((video) => (
          <div key={video.id} className="video_desc">
            <iframe
              id='video_part'
              src={video.videoUrl}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <p>{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos; 