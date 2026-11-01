/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  images: { formats: ['image/avif', 'image/webp'] },
  async headers() {
    // Hashed/static media is immutable; long-cache it. (Vercel applies these natively.)
    const immutable = [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }];
    return [
      { source: '/frames/:path*', headers: immutable },
      { source: '/videos/:path*', headers: immutable },
      { source: '/images/:path*', headers: immutable },
    ];
  },
};
