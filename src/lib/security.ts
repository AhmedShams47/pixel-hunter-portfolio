// Security utilities for frontend protection

// Sanitize user input to prevent XSS
export function sanitizeInput(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

// Validate email format
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 255;
}

// Validate name (letters, spaces, hyphens, apostrophes only)
export function isValidName(name: string): boolean {
  const nameRegex = /^[a-zA-Z\s\-']+$/;
  return nameRegex.test(name) && name.length >= 2 && name.length <= 100;
}

// Rate limit helper for client-side debouncing
export function createRateLimiter(maxRequests: number, windowMs: number) {
  const requests: number[] = [];
  
  return {
    canMakeRequest(): boolean {
      const now = Date.now();
      // Remove old requests outside the window
      while (requests.length > 0 && requests[0] < now - windowMs) {
        requests.shift();
      }
      return requests.length < maxRequests;
    },
    
    recordRequest(): void {
      requests.push(Date.now());
    },
    
    getTimeUntilReset(): number {
      if (requests.length === 0) return 0;
      const oldestRequest = requests[0];
      const resetTime = oldestRequest + windowMs;
      return Math.max(0, resetTime - Date.now());
    },
  };
}

// Generate form start time for timing-based bot detection
export function getFormStartTime(): number {
  return Date.now();
}

// Content Security Policy nonce generator (for inline scripts if needed)
export function generateNonce(): string {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode(...array));
}

// Check if request is likely from a bot
export function detectBotBehavior(): boolean {
  // Check for common bot indicators
  const indicators = [
    // No mouse movement history
    !('ontouchstart' in window) && !window.matchMedia('(pointer: fine)').matches,
    // Headless browser detection
    /HeadlessChrome/.test(navigator.userAgent),
    // WebDriver detection
    !!(navigator as any).webdriver,
    // Phantom.js detection
    !!(window as any).callPhantom || !!(window as any)._phantom,
    // Nightmare.js detection
    !!(window as any).__nightmare,
    // Automation detection
    !!(window as any).domAutomation || !!(window as any).domAutomationController,
  ];
  
  return indicators.some(Boolean);
}

// Validate message content
export function isValidMessage(message: string): { valid: boolean; error?: string } {
  if (!message || message.trim().length < 10) {
    return { valid: false, error: 'Message must be at least 10 characters' };
  }
  
  if (message.length > 2000) {
    return { valid: false, error: 'Message must be less than 2000 characters' };
  }
  
  // Check for excessive URLs (spam indicator)
  const urlCount = (message.match(/https?:\/\//g) || []).length;
  if (urlCount > 3) {
    return { valid: false, error: 'Too many links in message' };
  }
  
  return { valid: true };
}
