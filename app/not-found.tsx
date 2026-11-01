import Link from 'next/link';

export const metadata = { title: 'Page not found', robots: { index: false } };

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-32">
      <p className="text-primary text-[0.6rem] font-display tracking-[0.5em] uppercase mb-4">404</p>
      <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">This page doesn&apos;t exist</h1>
      <p className="text-muted-foreground mb-8 max-w-md">The link may be old or mistyped. Head back home or browse the work.</p>
      <div className="flex gap-3"><Link href="/" className="cinematic-btn-primary">Home</Link><Link href="/projects" className="cinematic-btn-glass">Projects</Link></div>
    </section>
  );
}
