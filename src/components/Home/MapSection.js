import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { mapData } from '../../Data_Folders/Homedata';
import './MapSection.css';

const MapSection = () => {
  const router = useRouter();

  const handleRedirect = (path) => {
    router.push(path);
  };

  return (
    <div className="map_section_container">
      {mapData.map((item, index) => (
        <div className="map_card" key={index}>
          <div className="map_image_wrapper">
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={300}
              objectFit="contain"
            />
          </div>
          <div className="map_content">
            <h2>{item.title}</h2>
            <button
              className="map_learn_more_btn"
              onClick={() => handleRedirect(item.link)}
            >
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MapSection; 