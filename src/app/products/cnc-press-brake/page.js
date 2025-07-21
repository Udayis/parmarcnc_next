import CNC_press from '@/components/Products/cnc-press-brake/CNC_press'
import Navbar from '@/components/Navbar/Navbar'
import BToT from '@/components/Bottom_to_top/BToT'

export const metadata = {
  title: 'CNC Press Brake - Parmar CNC',
  description: 'High precision CNC Press Brake machines',
}

export default function CNCPressBrake() {
  return (
    <main>
      <Navbar />
      <CNC_press />
      <BToT />
    </main>
  )
} 