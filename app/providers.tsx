'use client';

import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { LanguageProvider } from '@/lib/language-context';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import CustomCursor from '@/components/CustomCursor';
import GrainOverlay from '@/components/GrainOverlay';
import ScrollProgressBar from '@/components/ScrollProgressBar';

/** The one client boundary at the root. (QueryClientProvider and ThemeProvider from the
 *  Vite app were dead infrastructure — zero consumers — and are intentionally not carried over.) */
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <TooltipProvider>
        <CustomCursor />
        <GrainOverlay />
        <ScrollProgressBar />
        <Toaster />
        <Sonner />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </TooltipProvider>
    </LanguageProvider>
  );
}
