"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { heroData, textContent, images, overlapData } from "../../Data_Folders/Homedata";
import MapSection from "./MapSection";
import ProductSection from "./ProductSection";
import "./home.css";
import "./mobile-button-fix.css";

function HomePage() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlideIndex, setPrevSlideIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const heroRef = useRef(null);

  // Auto slide change
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setPrevSlideIndex(currentSlide);
        setCurrentSlide((prev) => (prev === heroData.carouselItems.length - 1 ? 0 : prev + 1));
        setTimeout(() => {
          setIsAnimating(false);
          setPrevSlideIndex(null);
        }, 600);
      }
    }, 4000);

    return () => clearInterval(timer);
  }, [isAnimating, currentSlide]);

  // Animation trigger on load
  useEffect(() => {
    setIsVisible(true);

    // Intersection Observer for scroll animations
    if (typeof window !== 'undefined') {
      const observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
            }
          });
        },
        { threshold: 0.1 },
      );

      const elements = document.querySelectorAll(".reveal");
      elements.forEach((el) => observer.observe(el));

      return () => {
        elements.forEach((el) => observer.unobserve(el));
      };
    }
  }, []);

  const handleRedirect = (path) => {
    router.push(path);
  };

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setPrevSlideIndex(currentSlide);
      setCurrentSlide((prev) => (prev === heroData.carouselItems.length - 1 ? 0 : prev + 1));
      setTimeout(() => {
        setIsAnimating(false);
        setPrevSlideIndex(null);
      }, 600);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setPrevSlideIndex(currentSlide);
      setCurrentSlide((prev) => (prev === 0 ? heroData.carouselItems.length - 1 : prev - 1));
      setTimeout(() => {
        setIsAnimating(false);
        setPrevSlideIndex(null);
      }, 600);
    }
  };

  const handleDotClick = (index) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setPrevSlideIndex(currentSlide);
      setCurrentSlide(index);
      setTimeout(() => {
        setIsAnimating(false);
        setPrevSlideIndex(null);
      }, 600);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="hero_box" ref={heroRef}>
        {heroData.carouselItems.map((item, index) => (
          <div 
            key={index} 
            className={`hero_slide ${index === currentSlide ? "active" : ""} ${index === prevSlideIndex ? "slide-out" : ""}`}
            style={{
              zIndex: index === currentSlide ? 2 : index === prevSlideIndex ? 1 : 0,
              ...(index === 0 ? {
                backgroundImage: `url(${typeof item.image === 'string' ? item.image : item.image?.default || "/placeholder.svg"})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                backgroundColor: '#111',
              } : {})
            }}
          >
            {/* Overlay for first slide */}
            {index === 0 && (
              <div className="hero_overlay" style={{position:'absolute',top:0,left:0,right:0,bottom:0,background:'linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.3) 100%)',zIndex:1}}></div>
            )}
            <div className="hero_content" style={index === 0 ? {zIndex:2, textAlign:'left', paddingLeft:'8%'} : {}}>
              <div className="hero_text">
                <h1 className={isVisible ? "active" : ""}>{item.title}</h1>
                <h3>{item.subtitle}</h3>
                <button 
                  className={`hero_button ${index === 0 ? "first-slide-mobile-btn" : "white-btn"}`}
                  id={index === 0 ? "first_slide_explore_btn" : ""}
                  onClick={() => handleRedirect(item.redirectPath)}
                >
                  {item.buttonText}
                </button>
              </div>
            </div>
            {/* Image for 2nd and 3rd slides */}
            {index !== 0 && (
              <div className="hero_image">
                <Image 
                  src={typeof item.image === 'string' ? item.image : item.image?.default || "/placeholder.svg"} 
                  alt={item.title}
                  width={800}
                  height={600}
                  priority={index === 0}
                />
              </div>
            )}
          </div>
        ))}
        <div className="hero_navigation">
          <div className="hero_dots">
            {heroData.carouselItems.map((_, index) => (
              <span
                key={index}
                className={`hero_dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
          <button className="hero_arrow hero_prev" onClick={prevSlide}>
            &rarr;
          </button>
          <button className="hero_arrow" onClick={nextSlide}>
            &rarr;
          </button>
        </div>
      </div>

      {/* Two Name Container - Ensure correct placement */}
      <div className="two_name_container">
        <Image 
          src={typeof images.imageBox1 === 'string' ? images.imageBox1 : images.imageBox1?.default || "/placeholder.svg"} 
          alt="CNC Press Brake Edge Series" 
          className="reveal two_name_img"
          width={800}
          height={600}
        />
        <Image 
          src={typeof images.imageBox2 === 'string' ? images.imageBox2 : images.imageBox2?.default || "/placeholder.svg"} 
          alt="CNC Press Brake Edge H Series" 
          className="reveal two_name_img"
          width={800}
          height={600}
        />
      </div>

      <div className="text_container reveal">
        {textContent.map((txt, idx) => (
          <p key={idx}>{txt}</p>
        ))}
      </div>

      <ProductSection />
      <MapSection />
    </div>
  );
}

export default HomePage; 