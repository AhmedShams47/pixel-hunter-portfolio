/**
 * Route transition (documented trade-off).
 * template.tsx re-mounts on every navigation, so the CSS entrance below replays per page.
 * Pure CSS + Server Component: page content is visible in the first paint (no hydration wait,
 * no opacity:0 in the HTML), navigation stays instant, zero client JS for the transition.
 * Cost: entrance-only (no outgoing fade) — exit animations need the old page kept mounted,
 * which fights App Router navigation and would delay every click.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
