import EventPage from '@/components/Event/Event'
import Navbar from '@/components/Navbar/Navbar'
import BToT from '@/components/Bottom_to_top/BToT'

export const metadata = {
  title: 'Events - Parmar CNC',
  description: 'Stay updated with Parmar CNC events and exhibitions',
}

export default function Event() {
  return (
    <main>
      <Navbar />
      <EventPage />
      <BToT />
    </main>
  )
} 