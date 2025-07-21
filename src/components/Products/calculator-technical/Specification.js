'use client';
import React from 'react';
import './Specification.css';

const Specification = () => {
    const specifications = [
        { model: 'PMC 2060', capacity: '60 Ton', bendingLength: '2050 mm', distanceBetweenColumns: '1700 mm', throatDepth: '300 mm', ramStroke: '150 mm' },
        { model: 'PMC 2580', capacity: '80 Ton', bendingLength: '2550 mm', distanceBetweenColumns: '2100 mm', throatDepth: '300 mm', ramStroke: '180 mm' },
        { model: 'PMC 3110', capacity: '100 Ton', bendingLength: '3100 mm', distanceBetweenColumns: '2550 mm', throatDepth: '350 mm', ramStroke: '200 mm' },
        { model: 'PMC 4112', capacity: '120 Ton', bendingLength: '4100 mm', distanceBetweenColumns: '3550 mm', throatDepth: '400 mm', ramStroke: '220 mm' },
        { model: 'PMC 6215', capacity: '150 Ton', bendingLength: '6200 mm', distanceBetweenColumns: '5550 mm', throatDepth: '400 mm', ramStroke: '250 mm' },
    ];

    return (
        <div className="specification-container">
            <h2 className="specification-title">Technical Specifications</h2>
            <div className="table-wrapper">
                <table className="specification-table">
                    <thead>
                        <tr>
                            <th>Model</th>
                            <th>Capacity</th>
                            <th>Bending Length</th>
                            <th>Distance Between Columns</th>
                            <th>Throat Depth</th>
                            <th>Ram Stroke</th>
                        </tr>
                    </thead>
                    <tbody>
                        {specifications.map((spec, index) => (
                            <tr key={index}>
                                <td>{spec.model}</td>
                                <td>{spec.capacity}</td>
                                <td>{spec.bendingLength}</td>
                                <td>{spec.distanceBetweenColumns}</td>
                                <td>{spec.throatDepth}</td>
                                <td>{spec.ramStroke}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Specification; 