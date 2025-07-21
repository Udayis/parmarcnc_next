import ShearingMachine from '@/components/Products/shearing-machine/ShearingMachine';
import Navbar from '@/components/Navbar/Navbar';
import BToT from '@/components/Bottom_to_top/BToT';

export const metadata = {
  title: 'Shearing Machine - Parmar CNC',
  description: 'High-quality shearing machines for precise metal cutting operations.',
  keywords: 'Shearing Machine, metal cutting, industrial machinery, Parmar CNC'
};

export default function ShearingMachinePage() {
  return (
    <main>
      <Navbar />
      <ShearingMachine />
      <BToT />
    </main>
  );
} 