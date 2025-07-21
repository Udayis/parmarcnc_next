'use client';
import React from 'react';
import './CNC_Controller.css';

const Hydrolic = () => {
  return (
    <div>
      <div>
        {/* HYDRAULIC COMPONENTS */}
        <div className="green-title-box">HYDRAULIC COMPONENTS</div>

        <div className="h_components">
          {/* Hydraulic System */}
          <div className="h_system">
            <p id='h_s_tag' className="green-title-box">HYDRAULIC SYSTEM</p>
            <div className="h_images" style={{display: 'flex', gap: '2rem', justifyContent: 'center', background: 'none', boxShadow: 'none', border: 'none'}}>
              <div className="h_im_1" style={{boxShadow: 'none', border: 'none', background: 'none'}}>
                <img src="/images/Group 63.png" alt="Hydraulic Unit Powered By Hawe" style={{boxShadow: 'none', border: 'none', background: 'none'}} />
                <p style={{color: '#222', fontWeight: 600, textAlign: 'center', margin: '0.5rem 0 0 0'}}>Hydraulic Unit Powered By Hawe</p>
              </div>
              <div className="h_im_1" style={{boxShadow: 'none', border: 'none', background: 'none'}}>
                <img src="/images/Group 64.png" alt="Hydraulic Unit Powered By Rexroth" style={{boxShadow: 'none', border: 'none', background: 'none'}} />
                <p style={{color: '#222', fontWeight: 600, textAlign: 'center', margin: '0.5rem 0 0 0'}}>Hydraulic Unit Powered By Rexroth</p>
              </div>
            </div>
          </div>

          {/* Break Line */}
          <div className="hydro_part">
            <div className="hy_img_row" style={{display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <div className="hy_img_part" style={{flex: 1, minWidth: 320, maxWidth: 400, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div className="hy_1">
                  <div className="hy_img_p_1">
                    <img src="/images/Group 128.png" alt="Edge Series Press Brake" style={{width: '100%', height: 'auto'}} />
                  </div>
                </div>
                <div className="green-title-box">Edge Series</div>
                <p id="jj" style={{textAlign: 'center', margin: '1rem 0 0 0'}}>Edge Series Press Brake with AC Motor with Standard Vane Pump</p>
              </div>
              <div className="hy_img_part" style={{flex: 1, minWidth: 320, maxWidth: 400, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div className="hy_1">
                  <div className="hy_img_p_1">
                    <img src="/images/Group 132.png" alt="Edge Servo Series" style={{width: '100%', height: 'auto'}} />
                  </div>
                </div>
                <div className="green-title-box">Edge Servo Series</div>
                <p id="jj" style={{textAlign: 'center', margin: '1rem 0 0 0'}}>Edge Servo Series Press Brake with AC Servo Motor and Drive With Standard Servo Pump for less noise with 30% energy saving</p>
              </div>
              <div className="hy_img_part" style={{flex: 1, minWidth: 320, maxWidth: 400, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div className="hy_1">
                  <div className="hy_img_p_1">
                    <img src="/images/Group 134.png" alt="Edge Hybrid Series" style={{width: '100%', height: 'auto'}} />
                  </div>
                </div>
                <div className="green-title-box">Edge Hy-brid Series</div>
                <p id="jj" style={{textAlign: 'center', margin: '1rem 0 0 0'}}>Edge Hybrid Series Press Brake with AC Servo Motor and Drive with Standard Servo Pump for less noise with 40% more productivity and 30% energy saving</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hydrolic; 