'use client';

import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import "./company.css";
import { companyData } from "../../Data_Folders/CompanyData";

function highlightFirstLetter(text) {
  const match = text.match(/\S/); // first non-space character
  if (!match) return text;
  const firstLetter = match[0];
  const rest = text.slice(text.indexOf(firstLetter) + 1);
  return `<span class="first-letter">${firstLetter}</span>${rest}`;
}

const Company = () => {
  const { mainPart, vision, whyUs } = companyData;

  useEffect(() => {
    // Reveal elements on scroll
    const reveal = () => {
      const reveals = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add("active");
        }
      }
    };
    window.addEventListener("scroll", reveal);
    reveal();
    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  return (
    <div className="company-section">
      <Head>
        <title>About Us - PARMAR CNC MACHINES (INDIA) LLP | CNC Machine Manufacturer</title>
        <meta name="description" content="Learn about PARMAR CNC MACHINES (INDIA) LLP - A leading manufacturer of CNC Press Brake Machines, Shearing Machines, and industrial automation solutions since 2009. Discover our vision, mission, and commitment to quality." />
        <meta name="keywords" content="CNC machine manufacturer, industrial automation, press brake machines, shearing machines, Rajkot, Gujarat" />
        <meta property="og:title" content="About Us - PARMAR CNC MACHINES (INDIA) LLP | CNC Machine Manufacturer" />
        <meta property="og:description" content="Learn about PARMAR CNC MACHINES (INDIA) LLP - A leading manufacturer of CNC Press Brake Machines, Shearing Machines, and industrial automation solutions since 2009." />
        <meta property="og:type" content="website" />
      </Head>
      {/* Main Part */}
      <div className="two_image vertical-main-section reveal">
        <div className="forword_div">
          <p>{mainPart.description}</p>
        </div>
        <div className="backword_div">
          <img src={mainPart.image} alt="Company Image 1" className="company-img-hover" style={{width: '80%', maxWidth: '700px', height: 'auto', borderRadius: '32px', margin: '32px auto 0 auto', display: 'block'}} />
        </div>
      </div>
      {/* Vision & Mission */}
      <div className="text_header reveal">
        <h1>{vision.title}</h1>
      </div>
      <div className="two_image_1 reveal">
        <div className="backword_div_1">
          <img src={vision.image} alt="Company Image 2" className="company-img-hover" style={{width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '32px', display: 'block', margin: '0 auto'}} />
        </div>
        <div className="forword_div_1">
          <p>{vision.description}</p>
        </div>
      </div>
      {/* Why Us */}
      <div className="text_header reveal">
        <h1>{whyUs.title}</h1>
      </div>
      <div className="two_image_2 reveal">
        <div className="forword_div_2">
          <p>{whyUs.description}</p>
        </div>
        <div className="backword_div_2">
          <img src={whyUs.image} alt="Company Image 3" className="company-img-hover" style={{width: '100%', maxWidth: '600px', height: 'auto', borderRadius: '32px', display: 'block', margin: '0 auto'}} />
        </div>
      </div>
    </div>
  );
};

export default Company; 