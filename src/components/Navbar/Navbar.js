'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className={`navbar-row${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-logo">
          <Link href="/">
            <Image src="/images/Parmar_logo.svg" alt="Parmar Logo" width={120} height={90} className="logo" style={{ height: 'auto' }} priority />
          </Link>
        </div>
        
        <div className="desktop-links">
          <ul className="navbar-menu">
            <li><Link href="/" className={isActive("/") ? "active" : ""}>HOME</Link></li>
            <li><Link href="/company" className={isActive("/company") ? "active" : ""}>COMPANY</Link></li>
            <li><Link href="/products" className={isActive("/products") ? "active" : ""}>PRODUCTS</Link></li>
            <li><Link href="/event" className={isActive("/event") ? "active" : ""}>EVENT</Link></li>
            <li><Link href="/download" className={isActive("/download") ? "active" : ""}>DOWNLOAD</Link></li>
            <li><Link href="/videos" className={isActive("/videos") ? "active" : ""}>VIDEOS</Link></li>
            <li id="contact-me"><Link href="/contact" className={isActive("/contact") ? "active" : ""}>CONTACT</Link></li>
          </ul>
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <div className={`mobile-sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="close-icon" onClick={closeMenu}>
          &times;
        </div>
        <ul className="mobile-menu">
            <li><Link href="/" className={isActive("/") ? "active" : ""} onClick={closeMenu}>HOME</Link></li>
            <li><Link href="/company" className={isActive("/company") ? "active" : ""} onClick={closeMenu}>COMPANY</Link></li>
            <li><Link href="/products" className={isActive("/products") ? "active" : ""} onClick={closeMenu}>PRODUCTS</Link></li>
            <li><Link href="/event" className={isActive("/event") ? "active" : ""} onClick={closeMenu}>EVENT</Link></li>
            <li><Link href="/download" className={isActive("/download") ? "active" : ""} onClick={closeMenu}>DOWNLOAD</Link></li>
            <li><Link href="/videos" className={isActive("/videos") ? "active" : ""} onClick={closeMenu}>VIDEOS</Link></li>
            <li><Link href="/contact" className="contact-btn-mobile" onClick={closeMenu}>CONTACT</Link></li>
        </ul>
      </div>
      {menuOpen && <div className="overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default Navbar; 