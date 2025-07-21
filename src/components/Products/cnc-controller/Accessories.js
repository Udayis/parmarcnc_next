'use client';
import React from 'react';
import './CNC_Controller.css';

const Accessories = () => {
  return (
    <div>
      <div className="green-title-box">ACCESSORIES</div>

      <div className="std_part_2">
        <table>
          <tbody>
            <tr className="std_2">
              <td className="img_std_2">
                <img src="/images/image 34.png" alt="Front Sheet Support" />
                <div className="tag_2">
                  <p className="green-title-box">FRONT SHEET SUPPORT</p>
                </div>
              </td>
              <td className="img_std_2">
                <img src="/images/Group 112.png" alt="Automatic Angle Measure System" />
                <div className="tag_2">
                  <p className="green-title-box">AUTOMATIC ANGLE MEASURE SYSTEM</p>
                </div>
              </td>
            </tr>
            <tr className="std_2">
              <td className="img_std_2">
                <img src="/images/Group 113.png" alt="Automatic Sheet Followers" />
                <div className="tag_2">
                  <p className="green-title-box">AUTOMATIC SHEET FOLLOWERS</p>
                </div>
              </td>
              <td className="img_std_2">
                <img src="/images/image 35.png" alt="Laser Safety" />
                <div className="tag_2">
                  <p className="green-title-box">LASER SAFETY</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Accessories; 