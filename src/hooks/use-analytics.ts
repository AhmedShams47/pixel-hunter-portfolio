import { useCallback, useRef, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

type AnalyticsEvent = 'pageview' | 'click' | 'scroll' | 'form_start' | 'custom';

interface AnalyticsData {
  page?: string;
  referrer?: string;
  data?: Record<string, string | number | boolean>;
}

// Lightweight, privacy-respecting analytics
export const useAnalytics = () => {
  const hasTrackedPageview = useRef(false);

  const trackEvent = useCallback(async (event: AnalyticsEvent, data?: AnalyticsData) => {
    // Don't track in development
    if (import.meta.env.DEV) return;

    try {
      await supabase.functions.invoke('analytics-api', {
        body: {
          event,
          page: data?.page || window.location.pathname,
          referrer: document.referrer || 'direct',
          data: data?.data,
        },
      });
    } catch (error) {
      // Silent fail - analytics should never break the app
      console.debug('Analytics error (non-critical):', error);
    }
  }, []);

  const trackPageview = useCallback(() => {
    trackEvent('pageview', {
      page: window.location.pathname,
      referrer: document.referrer,
    });
  }, [trackEvent]);

  const trackClick = useCallback((elementName: string) => {
    trackEvent('click', {
      data: { element: elementName },
    });
  }, [trackEvent]);

  const trackFormStart = useCallback((formName: string) => {
    trackEvent('form_start', {
      data: { form: formName },
    });
  }, [trackEvent]);

  const trackCustom = useCallback((eventName: string, data?: Record<string, string | number | boolean>) => {
    trackEvent('custom', {
      data: { name: eventName, ...data },
    });
  }, [trackEvent]);

  // Auto-track pageview on mount (once per page)
  useEffect(() => {
    if (!hasTrackedPageview.current) {
      hasTrackedPageview.current = true;
      trackPageview();
    }
  }, [trackPageview]);

  return {
    trackEvent,
    trackPageview,
    trackClick,
    trackFormStart,
    trackCustom,
  };
};

export default useAnalytics;
