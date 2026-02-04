'use client';

import { useState } from 'react';
import ProjectTree, { ProjectTreeData } from '@/components/ProjectTree';

const defaultData: ProjectTreeData = {
  projects: {
    children: [
      {
        title: 'README.md',
        id: 'uuid-0',
      },
      {
        title: 'website',
        children: [{ title: 'levendulapiknik.hu', id: 'uuid-1' }],
      },
      {
        title: 'video',
        children: [{ title: 'levendula piknik', id: 'uuid-2' }],
      },
      {
        title: 'archive',
        children: [{ title: 'portfolio-1.0', id: 'uuid-3' }],
      },
    ],
  },
};

export default function ProjectTreeSection() {
  const [activeProjectId, setActiveProjectId] = useState<string | undefined>(
    'uuid-0',
  );

  console.log(activeProjectId);

  return (
    <div className="flex flex-col gap-4 mx-4 lg:mx-14">
      <ProjectTree
        activeProjectId={activeProjectId}
        onProjectClick={(id) => setActiveProjectId(id)}
        data={defaultData}
      />
    </div>
  );
}
