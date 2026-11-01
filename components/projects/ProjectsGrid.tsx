'use client';

import { useState, useMemo } from 'react';
import IndustryFilter from './IndustryFilter';
import ProjectCard from './ProjectCard';
import type { Project } from '@/lib/projects-data';

/** The only interactive part of /projects: the category filter. */
export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState('All');
  const filtered = useMemo(() => (active === 'All' ? projects : projects.filter((p) => p.category === active)), [active, projects]);
  return (
    <section className="py-16 px-6" aria-labelledby="all-projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 id="all-projects" className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">All <span className="text-primary">projects</span></h2>
          <IndustryFilter activeCategory={active} onCategoryChange={setActive} />
        </div>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 p-0">
          {filtered.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </ul>
      </div>
    </section>
  );
}
