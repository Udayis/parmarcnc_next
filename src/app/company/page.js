import CompanyPage from '@/components/Company/Company'
import Navbar from '@/components/Navbar/Navbar'
import BToT from '@/components/Bottom_to_top/BToT'

export const metadata = {
  title: 'Company - Parmar CNC',
  description: 'Learn more about Parmar CNC and our company history',
}

export default function Company() {
  return (
    <main>
      <Navbar />
      <CompanyPage />
      <BToT />
    </main>
  )
} 