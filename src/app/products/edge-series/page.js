import EdgeSeries from '@/components/Products/edge-series/EdgeSeries';
import Navbar from '@/components/Navbar/Navbar';
import BToT from '@/components/Bottom_to_top/BToT';

export const metadata = {
  title: 'Edge Series - Parmar CNC',
  description: 'CNC Press Brake Machine Edge Series with capacity from 40 Ton x 1000mm to 400 Ton x 4000mm.',
  keywords: 'CNC Press Brake, Edge Series, metal bending, industrial machinery, Parmar CNC'
};

export default function EdgeSeriesPage() {
  return (
    <main>
      <Navbar />
      <EdgeSeries />
      <BToT />
    </main>
  );
} 