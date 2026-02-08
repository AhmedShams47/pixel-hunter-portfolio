import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import PackagesHero from '@/components/packages/PackagesHero';
import PricingCards from '@/components/packages/PricingCards';
import ComparisonTable from '@/components/packages/ComparisonTable';
import WhoIsThisFor from '@/components/packages/WhoIsThisFor';
import ProcessSection from '@/components/packages/ProcessSection';
import TrustBlock from '@/components/packages/TrustBlock';
import AddOns from '@/components/packages/AddOns';
import PackagesCTA from '@/components/packages/PackagesCTA';

const PackagesPage = () => {
  return (
    <PageLayout>
      <PackagesHero />
      <PricingCards />
      <ComparisonTable />
      <WhoIsThisFor />
      <ProcessSection />
      <TrustBlock />
      <AddOns />
      <PackagesCTA />
    </PageLayout>
  );
};

export default PackagesPage;
