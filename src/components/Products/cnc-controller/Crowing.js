'use client';
import React from 'react';
import './CNC_Controller.css';

const Crowing = () => {
  return (
    <div>
      <div>
        {/* CNC CROWNING & HEAVY TOOLS */}
        <div className="green-title-box">CNC CROWNING & HEAVY TOOLS</div>

        <div className="CNC_crowning_and_heavy_tools">
          {/* Heavy Part */}
          <div className="heavy_part">
            <div className="heavy_desc">
              <div className="green-title-box">Front & Back Guage</div>
              <p id="frout_text">
                The high-speed ballscrew back gauge system movement is also supported with linear guides, which helps the back gauge achieve long life, greater sensitivity, and strengthens against any collisions.
              </p>
            </div>

            <div className="heavy_img">
              <img src="/images/crowimg_main_img.png" alt="Heavy Duty Sheet Support" />
              <p id="heavy">Heavy Duty Sheet Support</p>
            </div>
          </div>

          {/* H Series */}
          <div className="h_series">
            <div className="h-series_desc_part">
              <div className="heading_part">
                <p className="edge-h-title">Edge H Series</p>
                <p className="bending-tools-title">Bending Tools</p>
              </div>
              <div className="h_desc_part">
                <p id='frout_text'>
                  <b>Parmar</b> has a wide range of bending tool solutions, such as 1V and multi-V lower tools and different upper tool solutions. All tools are manufactured from high-class materials. They are hardened, so the durability and accuracy are top quality. Our own production ensures that we always deliver exactly what our customers truly need. We even design the right tool for a customer's needs from the very beginning if needed.
                </p>
              </div>
            </div>

            <div className="h_series_img_part">
              <div className="h_img">
                <img src="/images/Group 49.png" alt="Automatic Motorized CNC Operated Die" />
                <p>Automatic Motorized CNC Operated Die</p>
              </div>
              <div className="h_img">
                <img src="/images/Group 50.png" alt="Hard Operated Adjustable V Die" />
                <p>Hard Operated Adjustable V Die</p>
              </div>
              <div className="h_img">
                <img src="/images/Group 51.png" alt="Manual Adjustable V Die" />
                <p>Manual Adjustable V Die</p>
              </div>
              <div className="h_img">
                <img src="/images/Group 52.png" alt="Multi-V Lower Die Without Rollers" />
                <p>Multi-V Lower Die Without Rollers</p>
              </div>
              <div className="h_img">
                <img src="/images/Group 53.png" alt="Lower Die With Rollers" />
                <p>Lower Die With Rollers</p>
              </div>
              <div className="h_img">
                <img src="/images/Group 54.png" alt="Upper Holder With Changeable Tools" />
                <p>Upper Holder With Changeable Tools</p>
              </div>
            </div>
          </div>

          {/* H Series 1 */}
          <div className="h_series_1">
            <div className="h_desc_part_1">
              <p id='frout_text'>
                The CNC Crowning automatically compensates the deflection of the lower frame. It regulates the wedges/hydraulic cylinder of the lower table automatically in order to create a perfect crowning for each single bend, according to the different lengths and bending forces.
                <br />
                <br />
                It allows a constant bending angle over the length, even if the bending parameters are different from the common rule of using a V-die with a measure 8 times the thickness of the bent material. This offers more bending freedom to increase productivity and ease of work.
              </p>
            </div>

            <div className="h_series_img_part_1">
              <div className="h_img_1">
                <img src="/images/Group 58.png" alt="Automatic Motorized CNC Operated Die" />
                <p>Automatic Motorized CNC Operated Die</p>
              </div>
              <div className="h_img_1">
                <img src="/images/Group 58.png" alt="Hard Operated Adjustable V Die" />
                <p>Hard Operated Adjustable V Die</p>
              </div>
              <div className="h_img_1">
                <img src="/images/Group 58.png" alt="Manual Adjustable V Die" />
                <p>Manual Adjustable V Die</p>
              </div>
              <div className="h_img_1">
                <img src="/images/Group 58.png" alt="Multi-V Lower Die Without Rollers" />
                <p>Multi-V Lower Die Without Rollers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crowing; 