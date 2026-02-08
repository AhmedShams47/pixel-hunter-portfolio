import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import PageLayout from '@/components/PageLayout';
import ProjectHero from '@/components/projects/ProjectHero';
import ProjectMarquee from '@/components/projects/ProjectMarquee';
import IndustryFilter from '@/components/projects/IndustryFilter';
import ProjectCard from '@/components/projects/ProjectCard';
import CaseStudyModal from '@/components/projects/CaseStudyModal';
import WhyChooseMe from '@/components/projects/WhyChooseMe';
import ProjectsCTA from '@/components/projects/ProjectsCTA';
import { projects, type Project } from '@/data/projectsData';

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <PageLayout>
      <ProjectHero />

      <ProjectMarquee onProjectClick={setSelectedProject} />

      {/* Projects Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
              All <span className="text-primary">Projects</span>
            </h2>
            <IndustryFilter
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onViewCaseStudy={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </section>

      <WhyChooseMe />
      <ProjectsCTA />

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </PageLayout>
  );
};

export default ProjectsPage;
