import EdgeHSeries from '@/components/Products/edge-h-series/EdgeHSeries';
import React from 'react';
import Navbar from '@/components/Navbar/Navbar';
import BToT from '@/components/Bottom_to_top/BToT';

export const metadata = {
  title: 'Edge H Series - Parmar CNC',
  description: 'CNC PRESS BRAKE MACHINE EDGE H SERIES with advanced features and precision control.',
  keywords: 'CNC Press Brake, Edge H Series, metal bending, industrial machinery, Parmar CNC'
};

const page = () => {
  return (
    <main>
      <Navbar />
      <EdgeHSeries />
      <BToT />
    </main>
  );
};

export default page; 