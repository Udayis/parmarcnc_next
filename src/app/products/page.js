import Products from '@/components/Products/Products';
import Navbar from '@/components/Navbar/Navbar';
import BToT from '@/components/Bottom_to_top/BToT';

export const metadata = {
  title: 'Products - Parmar CNC',
  description: 'Explore our range of CNC Press Brakes, Hydraulic Press Brakes, and Shearing Machines. Precision engineering for perfect bends and cuts.',
  keywords: 'CNC Press Brake, Hydraulic Press Brake, Shearing Machine, metal bending, industrial machinery, Parmar CNC products'
};

export default function ProductsPage() {
  return (
    <main>
      <Navbar />
      <Products />
      <BToT />
    </main>
  );
} 