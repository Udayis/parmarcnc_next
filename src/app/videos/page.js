import Videos from '@/components/Video/Videos'
import Navbar from '@/components/Navbar/Navbar'
import BToT from '@/components/Bottom_to_top/BToT'

export const metadata = {
  title: 'Videos - Parmar CNC',
  description: 'Watch our product overview and company introduction videos showcasing our CNC Press Brake series and manufacturing capabilities.',
  keywords: 'CNC Press Brake videos, manufacturing videos, product overview, company introduction, Parmar CNC videos'
}

export default function VideoPage() {
  return (
    <main>
      <Navbar />
      <Videos />
      <BToT />
    </main>
  )
} 