'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { contactPageData } from '@/Data_Folders/ContactData';
import './contact.css';

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [imageLoadErrors, setImageLoadErrors] = useState({});

  const validateForm = useCallback((formData) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9+\-\s()]{10,}$/;

    if (!formData.get('name').trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.get('company').trim()) {
      errors.company = 'Company name is required';
    }

    if (!formData.get('mobile').trim()) {
      errors.mobile = 'Phone number is required';
    } else if (!phoneRegex.test(formData.get('mobile'))) {
      errors.mobile = 'Invalid phone number format';
    }

    if (!formData.get('address').trim()) {
      errors.address = 'Address is required';
    }

    if (!formData.get('country').trim()) {
      errors.country = 'Country is required';
    }

    if (!formData.get('email').trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.get('email'))) {
      errors.email = 'Invalid email format';
    }

    if (!formData.get('message').trim()) {
      errors.message = 'Message is required';
    }

    return errors;
  }, []);

  const onSubmit = useCallback(async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    // Validate form
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setFormErrors({});

    formData.append("access_key", "a47bdd0f-f1a9-4b92-a4f1-a798a8ea23a3");

    try {
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setSubmitStatus('success');
        event.target.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }, [validateForm]);

  const handleImageError = useCallback((imageKey) => {
    setImageLoadErrors(prev => ({
      ...prev,
      [imageKey]: true
    }));
  }, []);

  return (
    <div className="page-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div 
          className="hero-background"
          style={{
            backgroundImage: `url('/images/Contect_us_hero_img.png')`,
          }}
        />
        <div className="hero-content">
          <h1 className="hero-title animate-fade-in">CONTACT US</h1>
        </div>
      </div>

      {/* Enquiry Section */}
      <div className="Enquiry_part">
        <div className="Enquiry_div">
          {/* Enquiries */}
          <div className="info_div">
            <Image 
              id="pho_img" 
              src={imageLoadErrors.email ? '/images/e_mail_logo.png' : "/images/e_mail_logo.png"}
              alt="Enquiries" 
              width={50}
              height={50}
              loading="eager"
              quality={85}
              onError={() => handleImageError('email')}
            />
            <div className="data_1">
              <div className="d1">
                <p>ENQUIRIES:</p>
              </div>
              <div className="contect_info">
                <p>Domestic: {contactPageData.enquirySection.domesticEmail}</p>
                <p>International: {contactPageData.enquirySection.internationalEmail}</p>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="info_div">
            <Image 
              id="pho_img" 
              src={imageLoadErrors.phone ? '/images/call_number_logo.png' : "/images/call_number_logo.png"}
              alt="Contact Us" 
              width={50}
              height={50}
              loading="eager"
              quality={85}
              onError={() => handleImageError('phone')}
            />
            <div className="data_1">
              <div className="d1">
                <p>CONTACT US</p>
              </div>
              <div className="contect_info">
                <p>Domestic: {contactPageData.enquirySection.domesticPhone}</p>
                <p>International: {contactPageData.enquirySection.internationalPhone}</p>
              </div>
            </div>
          </div>
        </div>

        <Image 
          id="s_img" 
          src={imageLoadErrors.catalog ? '/images/enquries_house_img.png' : "/images/enquries_house_img.png"}
          alt="Catalog" 
          width={200}
          height={200}
          loading="lazy"
          quality={85}
          onError={() => handleImageError('catalog')}
        />
      </div>

      <div className="line_border"></div>

      {/* Country Info Section */}
      <div className="country">
        <div className="header_text">
          <p>Global Representatives</p>
        </div>
        <div className="country_info">
          <div className="country_divs">
            <div className="divs_1">
              <Image 
                src={imageLoadErrors.uae ? '/images/country_img_1.png' : "/images/country_img_1.png"}
                alt="United Arab Emirates" 
                width={60}
                height={60}
                loading="lazy"
                quality={85}
                onError={() => handleImageError('uae')}
              />
              <div className="c_name">
                <p>United Arab Emirates</p>
              </div>
            </div>

            <div className="divs_1">
              <Image 
                src={imageLoadErrors.saudi ? '/images/country_img_2.png' : "/images/country_img_2.png"}
                alt="Saudi Arabia" 
                width={60}
                height={60}
                loading="lazy"
                quality={85}
                onError={() => handleImageError('saudi')}
              />
              <div className="c_name">
                <p>Saudi Arabia</p>
              </div>
            </div>
          </div>
          
          <div className="divs_2">
            <Image 
              src={imageLoadErrors.bahrain ? '/images/country_img_3.png' : "/images/country_img_3.png"}
              alt="Bahrain" 
              width={60}
              height={60}
              loading="lazy"
              quality={85}
              onError={() => handleImageError('bahrain')}
            />
            <div className="c_name">
              <p>Bahrain</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-container">
        <h2>{contactPageData.getInTouchForm.title}</h2>

        {submitStatus === 'success' && (
          <div className="success-message">
            Message sent successfully!
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="error-message">
            Failed to send message. Please try again.
          </div>
        )}

        <form onSubmit={onSubmit} className="my_form">
          <div className="form-group">
            <label htmlFor="name">{contactPageData.getInTouchForm.fields.name}:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className={formErrors.name ? 'error' : ''}
            />
            {formErrors.name && <span className="error-text">{formErrors.name}</span>}
          </div>

          <div className="details">
            <div className="form-group">
              <label htmlFor="company">{contactPageData.getInTouchForm.fields.companyName}:</label>
              <input
                type="text"
                id="company"
                name="company"
                required
                className={formErrors.company ? 'error' : ''}
              />
              {formErrors.company && <span className="error-text">{formErrors.company}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="mobile">{contactPageData.getInTouchForm.fields.phone}:</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                inputMode="numeric"
                required
                className={formErrors.mobile ? 'error' : ''}
              />
              {formErrors.mobile && <span className="error-text">{formErrors.mobile}</span>}
            </div>
          </div>

          <div className="form-group" id="message_area">
            <label htmlFor="address">{contactPageData.getInTouchForm.fields.address}:</label>
            <textarea
              id="address"
              name="address"
              required
              className={formErrors.address ? 'error' : ''}
            />
            {formErrors.address && <span className="error-text">{formErrors.address}</span>}
          </div>

          <div className="details">
            <div className="form-group">
              <label htmlFor="country">{contactPageData.getInTouchForm.fields.country}:</label>
              <input
                type="text"
                id="country"
                name="country"
                required
                className={formErrors.country ? 'error' : ''}
              />
              {formErrors.country && <span className="error-text">{formErrors.country}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">{contactPageData.getInTouchForm.fields.email}:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={formErrors.email ? 'error' : ''}
              />
              {formErrors.email && <span className="error-text">{formErrors.email}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">{contactPageData.getInTouchForm.fields.message}:</label>
            <textarea
              id="message"
              name="message"
              required
              className={formErrors.message ? 'error' : ''}
            />
            {formErrors.message && <span className="error-text">{formErrors.message}</span>}
          </div>

          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : contactPageData.getInTouchForm.buttonText}
          </button>
        </form>
      </div>

      <div className="map_image">
        <iframe
          src={contactPageData.getInTouchForm.mapUrl}
          width="600"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage; 