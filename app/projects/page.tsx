import ProjectHero from '@/components/projects/ProjectHero';
import ProjectMarquee from '@/components/projects/ProjectMarquee';
import ProjectsGrid from '@/components/projects/ProjectsGrid';
import HowIBuild from '@/components/projects/HowIBuild';
import ProjectsCTA from '@/components/projects/ProjectsCTA';
import { projects } from '@/lib/projects-data';

export const metadata = {
  title: 'Projects',
  description: 'Thirteen self-directed web design and development builds across nine industries — real estate, beauty, luxury, fashion, healthcare, fitness, technology, automotive and creative — each with a live demo and case study.',
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectHero />
      <ProjectMarquee />
      <ProjectsGrid projects={projects} />
      <HowIBuild />
      <ProjectsCTA />
    </>
  );
}
