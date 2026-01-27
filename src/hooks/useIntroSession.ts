/**
 * useIntroSession Hook
 * 
 * PURPOSE: Track whether the dragon intro has played this session
 * - Uses sessionStorage so intro plays once per browser session
 * - Resets when user closes tab/browser
 * 
 * HOW TO RESET (for testing):
 * - In browser console: sessionStorage.removeItem('shams_intro_played')
 * - Or close the browser tab entirely
 * 
 * STORAGE KEY: 'shams_intro_played'
 */

import { useState, useCallback, useEffect } from 'react';

const STORAGE_KEY = 'shams_intro_played';

interface UseIntroSessionReturn {
  /** Whether the intro has already played this session */
  hasPlayed: boolean;
  /** Mark the intro as played (call when intro starts or completes) */
  markAsPlayed: () => void;
  /** Force reset the flag (for testing) */
  resetIntro: () => void;
}

export function useIntroSession(): UseIntroSessionReturn {
  // Initialize from sessionStorage on mount
  const [hasPlayed, setHasPlayed] = useState<boolean>(() => {
    // Check sessionStorage immediately to avoid flash
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem(STORAGE_KEY) === 'true';
    }
    return false;
  });

  // Sync state with sessionStorage on mount (handles SSR edge cases)
  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored === 'true' && !hasPlayed) {
      setHasPlayed(true);
    }
  }, [hasPlayed]);

  /**
   * Mark intro as played - writes to sessionStorage
   * Call this when the intro video starts playing
   */
  const markAsPlayed = useCallback(() => {
    // Write to sessionStorage first for immediate persistence
    sessionStorage.setItem(STORAGE_KEY, 'true');
    setHasPlayed(true);
  }, []);

  /**
   * Reset the intro flag - for testing purposes
   * Can be called from browser console: window.__resetShamsIntro?.()
   */
  const resetIntro = useCallback(() => {
    sessionStorage.removeItem(STORAGE_KEY);
    setHasPlayed(false);
  }, []);

  // Expose reset function globally for easy testing
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).__resetShamsIntro = resetIntro;
    }
    return () => {
      if (typeof window !== 'undefined') {
        delete (window as any).__resetShamsIntro;
      }
    };
  }, [resetIntro]);

  return { hasPlayed, markAsPlayed, resetIntro };
}
