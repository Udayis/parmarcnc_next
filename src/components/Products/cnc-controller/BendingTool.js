'use client';
import React from 'react';
import './CNC_Controller.css';

const BendingTool = () => {
  return (
    <div>
      <div>
        {/* EDGE SERIES BENDING TOOLS */}
        <div className="green-title-box">EDGE SERIES BENDING TOOLS</div>

        {/* EDGE TOOLS PART */}
        <div className="edge_tools_part">
          {/* Parmar Part */}
          <div className="parmar_part">
            <div className="text_part">
              <p>
                <b>PARMAR</b> has a wide range of bending tool solutions, such as 1V and multi-V lower tools
                and different upper tool solutions. All tools are top quality in terms of design and accuracy.
                We sell only what our customers truly need. We even design tools based on our customers' needs from
                the very beginning.
              </p>
            </div>
            <img src="/images/banding_tool_main_img.png" alt="Parmar Tools" />
          </div>

          {/* Punch Part */}
          <div className="punch_part">
            <div className="punch_div">
              <div className="green-title-box">PUNCH</div>
            </div>
            <div className="imgs">
              <div className="im">
                <img src="/images/Punch_1.png" alt="Standard Sectioning Punch" />
                <p>Standard Sectioning Punch</p>
              </div>
              <div className="im">
                <img src="/images/Punch_2.png" alt="Standard Semi Gooseneck Punch" />
                <p>Standard Semi Gooseneck Punch</p>
              </div>
              <div className="im">
                <img src="/images/Punch_3.png" alt="Standard Sharp Punch" />
                <p>Standard Sharp Punch</p>
              </div>
              <div className="im">
                <img src="/images/Punch_4.png" alt="Straight Sharp Punch" />
                <p>Straight Sharp Punch</p>
              </div>
              <div className="im">
                <img src="/images/Punch_5.png" alt="Gooseneck Punch" />
                <p>Gooseneck Punch</p>
              </div>
              <div className="im">
                <img src="/images/Punch_6.png" alt="Wil Style Punch" />
                <p>Wil Style Punch</p>
              </div>
            </div>
          </div>

          {/* Die Part */}
          <div className="die_part">
            <div className="die_div">
              <div className="green-title-box">DIE</div>
            </div>
            <div className="die_img">
              <div className="die">
                <img src="/images/Die_1.png" alt="Standard Sectioning Die" />
                <p>Standard Sectioning Die</p>
              </div>
              <div className="die">
                <img src="/images/Die_2.png" alt="Standard Semi Gooseneck Die" />
                <p>Standard Semi Gooseneck Die</p>
              </div>
              <div className="die">
                <img src="/images/Die_3.png" alt="Standard Sharp Die" />
                <p>Standard Sharp Die</p>
              </div>
              <div className="die">
                <img src="/images/Die_4.png" alt="Straight Sharp Die" />
                <p>Straight Sharp Die</p>
              </div>
              <div className="die">
                <img src="/images/Die_5.png" alt="Gooseneck Die" />
                <p>Gooseneck Die</p>
              </div>
              <div className="die">
                <img src="/images/Die_6.png" alt="Wil Style Die" />
                <p>Wil Style Die</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BendingTool; 