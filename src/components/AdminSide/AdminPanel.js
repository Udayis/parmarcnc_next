'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './AminPanel.css';
import Image from 'next/image';

const AdminPanel = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check authentication
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin');
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Load events from localStorage or use an empty array
  const [events, setEvents] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedEvents = localStorage.getItem('events');
      return savedEvents ? JSON.parse(savedEvents) : [];
    }
    return [];
  });

  const [newEvent, setNewEvent] = useState({
    title: '',
    year: '',
    city: '',
    image: '',
  });

  const [editingEvent, setEditingEvent] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  // Save events to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('events', JSON.stringify(events));
    }
  }, [events]);

  // Handle input changes
  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewEvent({ ...newEvent, image: reader.result });
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Add new event
  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.year || !newEvent.city || !newEvent.image) {
      alert('Please fill in all event details.');
      return;
    }
    const updatedEvents = [...events, { id: Date.now(), ...newEvent }];
    setEvents(updatedEvents);
    setNewEvent({ title: '', year: '', city: '', image: '' });
    setPreviewImage(null);
  };

  // Delete event
  const handleDeleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  // Start editing an event
  const handleEditEvent = (event) => {
    setEditingEvent(event);
    setNewEvent(event);
    setPreviewImage(event.image);
  };

  // Save edited event
  const handleSaveEdit = () => {
    setEvents(events.map(event => (event.id === editingEvent.id ? newEvent : event)));
    setEditingEvent(null);
    setNewEvent({ title: '', year: '', city: '', image: '' });
    setPreviewImage(null);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <Image
          src="/images/Parmar_logo.svg"
          alt="Parmar CNC Logo"
          width={150}
          height={50}
        />
        <h1>Admin Panel</h1>
      </div>
      <div className="admin_main_div">
        <div className='header_side'>
          <h2 id="welcome">DashBoard</h2>
        </div>

        {/* Event Creation Form */}
        <div className="event-form">
          <h3 id='create_event_tag'>{editingEvent ? 'Edit Event' : 'Create New Event'}</h3>

          <div className='input_div'>
            <div>
              <label id='in_label' htmlFor="title">Event Name:</label>
              <input type="text" name="title" placeholder="Event Name" value={newEvent.title} onChange={handleChange} />
            </div>

            <div>
              <label id='in_label' htmlFor="year">Event Year:</label>
              <input
                type="number"
                name="year"
                placeholder="Event Year"
                value={newEvent.year}
                onChange={handleChange}
                min={currentYear}
              />
            </div>

            <div>
              <label id='in_label' htmlFor="city">Event City:</label>
              <input type="text" name="city" placeholder="Event City" value={newEvent.city} onChange={handleChange} />
            </div>

            <div>
              <label id='in_label' htmlFor="image">Event Image:</label>
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </div>
          </div>

          {previewImage && <img src={previewImage} alt="Preview" width="100" />}

          {editingEvent ? (
            <button id='btn' onClick={handleSaveEdit}>Save Changes</button>
          ) : (
            <button id='btn' onClick={handleAddEvent}>Add Event</button>
          )}
        </div>

        {/* Event List */}
        <div className="event-list">
          <h3 id='create_event_tag'>Event List</h3>
          {events.length === 0 ? <p>No events available.</p> : null}
          {events.map(event => (
            <div key={event.id} className="event-item">
              {event.image && <img src={event.image} alt={event.title} id='list_img' />}
              <p id='title_img'><strong>{event.title}</strong></p>
              <p id='year'>Year: {event.year}</p>
              <p id='city'>City: {event.city}</p>
              <button onClick={() => handleEditEvent(event)}>Edit</button>
              <button onClick={() => handleDeleteEvent(event.id)}>Delete</button>
            </div>
          ))}
        </div>
        <div className='button_div' id='btn'>
          <button onClick={() => router.push('/event')}>View Events</button>
          <button onClick={() => {
            if (typeof window !== 'undefined') {
              localStorage.removeItem('isAuthenticated');
            }
            router.push('/admin');
          }}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel; 