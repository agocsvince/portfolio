import type React from 'react';
import type { ProjectTreeData } from '@/components/ProjectTree';

export type ProjectId = `uuid-${number}`;

export type ProjectEntry = {
  content: React.ReactNode;
};

export type { ProjectTreeData };
