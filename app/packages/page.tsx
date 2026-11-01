import PackagesHero from '@/components/packages/PackagesHero';
import PricingCards from '@/components/packages/PricingCards';
import ComparisonTable from '@/components/packages/ComparisonTable';
import WhoIsThisFor from '@/components/packages/WhoIsThisFor';
import ProcessSection from '@/components/packages/ProcessSection';
import TrustBlock from '@/components/packages/TrustBlock';
import AddOns from '@/components/packages/AddOns';
import PackagesCTA from '@/components/packages/PackagesCTA';

export const metadata = {
  title: 'Packages',
  description: 'Web design, UI/UX and branding packages from Ahmed Shams (Shams Visuals): defined deliverables, a straightforward process from first message to launch, and a direct WhatsApp line.',
  alternates: { canonical: '/packages' },
};

export default function PackagesPage() {
  return (
    <>
      <PackagesHero />
      <PricingCards />
      <ComparisonTable />
      <WhoIsThisFor />
      <ProcessSection />
      <TrustBlock />
      <AddOns />
      <PackagesCTA />
    </>
  );
}
