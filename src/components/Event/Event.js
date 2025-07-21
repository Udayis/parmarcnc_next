'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import './event.css';

const Event = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Load events from localStorage
    const savedEvents = localStorage.getItem('events');
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    }
  }, []);

  return (
    <div className="page-container">
      <div className="hero-section">
        <div 
          className="hero-background"
          style={{
            backgroundImage: `url('/images/event_hero_img.png')`,
          }}
        >
        </div>
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in">EVENT</h1>
        </div>
      </div>

      <div className="events-container">
        {events.length === 0 ? (
          <div className="no-events">
            <p>No Events Available</p>
          </div>
        ) : (
          <div className="events-grid">
            {events.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-image-container">
                  <Image 
                    src={event.image}
                    alt={event.title}
                    className="event-image"
                    fill
                    style={{objectFit: 'cover'}}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="event-overlay"></div>
                </div>
                
                <div className="event-content">
                  <h3 className="event-title">{event.title}</h3>
                  
                  <div className="event-details">
                    <div className="event-detail">
                      <FaCalendarAlt className="icon" />
                      <span>{event.year}</span>
                    </div>
                    
                    <div className="event-detail">
                      <FaMapMarkerAlt className="icon" />
                      <span>{event.city}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Event; 