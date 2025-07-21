import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import BToT from '@/components/Bottom_to_top/BToT';
import Link from 'next/link';
import './not-found.css';

export const metadata = {
  title: '404 - Page Not Found | Parmar CNC',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <main>
      <Navbar />
      
      <div className="error-page-container">
        <div className="error-content">
          <div className="error-number">404</div>
          <h1 className="error-title">Page Not Found</h1>
          <p className="error-description">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          <div className="error-actions">
            <Link href="/" className="btn btn-primary">
              Go to Homepage
            </Link>
            <Link href="/contact" className="btn btn-outline-primary">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
      
      <BToT />
    </main>
  );
}
