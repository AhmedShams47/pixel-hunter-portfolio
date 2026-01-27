/**
 * Connection Quality Detection Hook
 * 
 * PURPOSE: Detect network conditions to conditionally load heavy assets
 * - Returns connection type and whether to load video
 * - Respects data saver mode
 * - Falls back gracefully for unsupported browsers
 * 
 * PERFORMANCE IMPACT: Zero runtime cost, only checks on mount
 */

import { useState, useEffect } from 'react';

interface ConnectionInfo {
  effectiveType: '4g' | '3g' | '2g' | 'slow-2g' | 'unknown';
  saveData: boolean;
  shouldLoadVideo: boolean;
  isDesktop: boolean;
}

export function useConnectionQuality(): ConnectionInfo {
  const [connection, setConnection] = useState<ConnectionInfo>({
    effectiveType: 'unknown',
    saveData: false,
    shouldLoadVideo: false,
    isDesktop: false,
  });

  useEffect(() => {
    // Check if desktop (not touch device or wide screen)
    const isDesktop = window.matchMedia('(min-width: 768px)').matches && 
                      !('ontouchstart' in window);

    // Access Network Information API if available
    const nav = navigator as Navigator & {
      connection?: {
        effectiveType: string;
        saveData: boolean;
      };
    };

    const networkConnection = nav.connection;
    
    const effectiveType = (networkConnection?.effectiveType as ConnectionInfo['effectiveType']) || 'unknown';
    const saveData = networkConnection?.saveData || false;

    // Only load video on desktop with good connection and no data saver
    const shouldLoadVideo = isDesktop && 
                           !saveData && 
                           (effectiveType === '4g' || effectiveType === 'unknown');

    setConnection({
      effectiveType,
      saveData,
      shouldLoadVideo,
      isDesktop,
    });
  }, []);

  return connection;
}
