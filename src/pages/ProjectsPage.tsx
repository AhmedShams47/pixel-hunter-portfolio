import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import PortfolioHero from '@/components/projects/PortfolioHero';
import FeaturedShowcase from '@/components/projects/FeaturedShowcase';
import ProjectGrid from '@/components/projects/ProjectGrid';
import CaseStudyModal from '@/components/projects/CaseStudyModal';
import WhyChooseMe from '@/components/projects/WhyChooseMe';
import ProjectCTA from '@/components/projects/ProjectCTA';
import type { Project } from '@/data/projectsData';

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <PageLayout>
      <PortfolioHero />
      <FeaturedShowcase onSelectProject={setSelectedProject} />
      <ProjectGrid onSelectProject={setSelectedProject} />
      <WhyChooseMe />
      <ProjectCTA />
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </PageLayout>
  );
};

export default ProjectsPage;
