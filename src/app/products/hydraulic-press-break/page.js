import HydraulicPressBrake from '@/components/Products/hydraulic-press-break/HydraulicPressBrake';
import Navbar from '@/components/Navbar/Navbar';
import BToT from '@/components/Bottom_to_top/BToT';

export const metadata = {
  title: 'Hydraulic Press Brake - Parmar CNC',
  description: 'Rear Cylinder Hydraulic Press Brake Machine with advanced hydraulic control system.',
  keywords: 'Hydraulic Press Brake, Rear Cylinder, metal bending, industrial machinery, Parmar CNC'
};

export default function HydraulicPressBrakePage() {
  return (
    <main>
      <Navbar />
      <HydraulicPressBrake />
      <BToT />
    </main>
  );
} 