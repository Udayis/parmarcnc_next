'use client';
import React from "react";
import stepMachines from "./StepData";
import './CNC_Controller.css';

const Step = () => {
  return (
    <div className="step_main_container">
      <p id="delem_label">STEP</p>
      <div className="delem_main_div">
        {stepMachines.map((pair, index) => (
          <div className="machine_mega_div" key={index}>
            {pair.map((machine, i) => (
              <div className="machine_two_pair" key={i}>
                <p id="label_of_machine">{machine.name}</p>
                <img id="img_of_machine" src={machine.image} alt={machine.name} />
                <div className="desc_of_machine">
                  <ul>
                    {machine.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Step; 