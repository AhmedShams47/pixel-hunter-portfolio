/**
 * LazyGoogleMap Component
 * 
 * SECURITY & PERFORMANCE:
 * - Uses Intersection Observer for lazy loading
 * - Loads iframe only when user scrolls near the section
 * - Provides text fallback if map fails to load
 * - Uses sandbox attribute for iframe security
 * - No external scripts required - uses embed URL
 */

import { useState, useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

interface LazyGoogleMapProps {
  lat: number;
  lng: number;
  className?: string;
  fallbackText?: string;
}

const LazyGoogleMap = ({ 
  lat, 
  lng, 
  className = '',
  fallbackText = 'Dhaka, Bangladesh'
}: LazyGoogleMapProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        // Load when within 200px of viewport
        rootMargin: '200px',
        threshold: 0
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Google Maps embed URL (no API key required for basic embed)
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ1JzAyLjkiTiA5MMKwMjQnMDQuNSJF!5e0!3m2!1sen!2sbd!4v1704067200000!5m2!1sen!2sbd`;

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden rounded-2xl ${className}`}
    >
      {isVisible && !hasError ? (
        <iframe
          src={mapUrl}
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map - Dhaka, Bangladesh"
          onError={() => setHasError(true)}
          className="w-full h-64 md:h-80"
          // Security: sandbox restricts iframe capabilities
          sandbox="allow-scripts allow-same-origin"
        />
      ) : (
        // Fallback / Loading state
        <div className="w-full h-64 md:h-80 bg-secondary/30 flex flex-col items-center justify-center gap-3">
          <MapPin className="w-8 h-8 text-primary" />
          <p className="text-muted-foreground font-display tracking-wider text-sm">
            {hasError ? fallbackText : 'Loading map...'}
          </p>
          {hasError && (
            <a 
              href={`https://www.google.com/maps?q=${lat},${lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 text-sm underline underline-offset-4"
            >
              Open in Google Maps →
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default LazyGoogleMap;
