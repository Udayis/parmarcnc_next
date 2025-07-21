'use client';
import { useEffect } from 'react';

export default function ClientBootstrapLoader() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return null;
} 