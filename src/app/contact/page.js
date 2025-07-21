import ContactPage from '@/components/Contact-Us/ContactPage'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import BToT from '@/components/Bottom_to_top/BToT'

export const metadata = {
  title: 'Contact Us - Parmar CNC',
  description: 'Get in touch with Parmar CNC for inquiries, support, and more information about our CNC machines and services.',
}

export default function Contact() {
  return (
    <>
      <Navbar />
      <ContactPage />
      <BToT />
    </>
  )
} 