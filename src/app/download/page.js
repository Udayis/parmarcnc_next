import DownloadPage from '@/components/Download/Download'
import Navbar from '@/components/Navbar/Navbar'
import BToT from '@/components/Bottom_to_top/BToT'

export const metadata = {
  title: 'Downloads - Parmar CNC',
  description: 'Download our product catalogs and documentation',
}

export default function Download() {
  return (
    <main>
      <Navbar />
      <DownloadPage />
      <BToT />
    </main>
  )
} 