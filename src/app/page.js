import Home from '../components/Home/Home'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import BToT from '../components/Bottom_to_top/BToT'

export const metadata = {
  title: 'Parmar CNC - Precision Engineering Solutions',
  description: 'Leading manufacturer of high-precision CNC machines, specializing in press brakes and metal forming equipment.',
  keywords: 'CNC machines, press brake, metal forming, precision engineering, manufacturing solutions',
};

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Home />
      <BToT />
    </main>
  )
} 