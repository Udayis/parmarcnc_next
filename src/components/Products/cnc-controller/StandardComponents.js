'use client';
import React from 'react';
import './CNC_Controller.css';
import BendingTool from './BendingTool';
import Crowing from './Crowing';
import Hydrolic from './Hydrolic';
import STDComponents from './STDComponents';
import Accessories from './Accessories';

const StandardComponents = () => {
  return (
    <div className='standard_main_components'>
      <div>
        {/* STANDARD COMPONENTS part */}
        <div className="green-title-box">STANDARD COMPONENTS</div>

        <div className="tool_holder_part">
          <div className="green-title-box">Tool Holder</div>
          <div className="img_pa">
            <div className="img_container">
              <img src="/images/Tool_Holder_1.png" alt="" />
              <p>Single way quick clamp with manual anti deflection system</p>
            </div>

            <div className="img_container">
              <img src="/images/Tool_Holder_2.png" alt="" />
              <p>Two way quick clamp with manual anti deflection system</p>
            </div>

            <div className="img_container">
              <img src="/images/Tool_Holder_3.png" alt="" />
              <p>One way quick clamp with click with anti deflection system</p>
            </div>

            <div className="img_container">
              <img src="/images/Tool_Holder_4.png" alt="" />
              <p>Two way quick clamp with click with reflection system</p>
            </div>
          </div>

          {/* Border lines */}
          <div className="second_border"></div>

          {/* weela tool holder */}
          <div className="wila_tool_holder">
            <div className="green-title-box">Wila Tool Holder</div>
            <div className="will_imgs">
              <div className="im-1">
                <img src="/images/weela_tool_holder_1.png" alt="Wila Tool Holder 1" />
                <p>Wila style hydraulic/Pneumatic/Manual with anti deflection system</p>
              </div>
              <div className="im-1" id='img_2_will_tool'>
                <img src="/images/weela_tool_holder_2.png" alt="Wila Tool Holder 2" />
                <p>Wila style hydraulic/Pneumatic/Manual die hold</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BendingTool/>
      <Crowing/>
      <Hydrolic/>
      <STDComponents/>
      <Accessories/>
    </div>
  );
};

export default StandardComponents; 