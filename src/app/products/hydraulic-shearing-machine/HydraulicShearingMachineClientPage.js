'use client';

import HydraulicShearingMachine from '@/components/Products/hydraulic-shearing-machine/HydraulicShearingMachine';
import Navbar from '@/components/Navbar/Navbar';
import BToT from '@/components/Bottom_to_top/BToT';

export default function HydraulicShearingMachineClientPage() {
  return (
    <main>
      <Navbar />
      <HydraulicShearingMachine />
      <BToT />
    </main>
  );
} 