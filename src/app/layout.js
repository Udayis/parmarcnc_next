import { Inter } from 'next/font/google'
import './globals.css'
import ClientBootstrapLoader from '../components/ClientBootstrapLoader';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import BToT from '../components/Bottom_to_top/BToT';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Parmar CNC - Leading CNC Machine Manufacturer',
  description: 'Parmar CNC is a leading manufacturer of high-quality CNC machines, providing innovative solutions for the manufacturing industry.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#a3c64a" />
        <link rel="canonical" href="https://www.parmarcncmachines.com/" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Parmar CNC" />
        <meta property="og:title" content="Parmar CNC - Leading CNC Machine Manufacturer" />
        <meta property="og:description" content="Parmar CNC is a leading manufacturer of high-quality CNC machines, providing innovative solutions for the manufacturing industry." />
        <meta property="og:url" content="https://www.parmarcncmachines.com/" />
        <meta property="og:image" content="/images/CNC_PRESS_BRAKE_MACHINE_EDGE_SERIES.png" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Parmar CNC - Leading CNC Machine Manufacturer" />
        <meta name="twitter:description" content="Parmar CNC is a leading manufacturer of high-quality CNC machines, providing innovative solutions for the manufacturing industry." />
        <meta name="twitter:image" content="/images/CNC_PRESS_BRAKE_MACHINE_EDGE_SERIES.png" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        <ClientBootstrapLoader />
        {children}
        <BToT />
        <Footer />
      </body>
    </html>
  )
} 