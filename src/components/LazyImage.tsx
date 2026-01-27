/**
 * LazyImage Component
 * 
 * PURPOSE: Optimized image loading with:
 * - Native lazy loading
 * - Explicit width/height to prevent CLS
 * - Fade-in transition on load
 * - Async decoding
 * 
 * EXPECTED LIGHTHOUSE IMPACT:
 * - CLS: 0 (explicit dimensions)
 * - LCP: Improved for below-fold images
 */

import { useState } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

const LazyImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '',
  priority = false 
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      onLoad={() => setIsLoaded(true)}
      className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
    />
  );
};

export default LazyImage;
