'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import ProjectTree from '@/components/ProjectTree';
import {
  projectData,
  defaultData,
  type ProjectId,
} from '@/content/projects';

export default function ProjectTreeSection() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const isUpdatingFromUserAction = useRef(false);
  const lastSyncedProjectId = useRef<ProjectId | null>(null);

  const [activeProjectId, setActiveProjectId] = useState<ProjectId>(() => {
    const projectParam = searchParams.get('project');
    const initialId =
      projectParam && projectParam in projectData
        ? (projectParam as ProjectId)
        : 'uuid-1';
    lastSyncedProjectId.current = initialId;
    return initialId;
  });

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const url = `${window.location.origin}${window.location.pathname}?project=${activeProjectId}#project-content`;
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 10000);
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };

  // Sync activeProjectId when URL changes (browser back/forward or initial load)
  useEffect(() => {
    // Skip if we're updating from user action
    if (isUpdatingFromUserAction.current) return;

    const projectParam = searchParams.get('project');
    const urlProjectId =
      projectParam && projectParam in projectData
        ? (projectParam as ProjectId)
        : 'uuid-1';

    if (urlProjectId !== activeProjectId) {
      setActiveProjectId(urlProjectId);
      lastSyncedProjectId.current = urlProjectId;
    }
  }, [searchParams]); // Only depend on searchParams, not activeProjectId

  // Update URL when project changes (user clicks)
  useEffect(() => {
    // Skip if already synced (to avoid unnecessary updates)
    if (lastSyncedProjectId.current === activeProjectId) {
      return;
    }

    // Mark that we're updating from user action (prevents first useEffect from interfering)
    isUpdatingFromUserAction.current = true;
    lastSyncedProjectId.current = activeProjectId;

    const params = new URLSearchParams();
    if (activeProjectId !== 'uuid-1') {
      params.set('project', activeProjectId);
    }
    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname;

    router.replace(newUrl, { scroll: false });

    // Reset flag after a short delay to allow URL to update
    setTimeout(() => {
      isUpdatingFromUserAction.current = false;
    }, 100);
  }, [activeProjectId, router, pathname]);

  const handleProjectClick = (id: string) => {
    if (id.startsWith('uuid-')) {
      // Just update the state - the second useEffect will handle URL update
      setActiveProjectId(id as ProjectId);
      // On mobile, scroll down to the project tree section so the selected content is visible
      if (
        typeof window !== 'undefined' &&
        window.matchMedia('(max-width: 767px)').matches
      ) {
        requestAnimationFrame(() => {
          document.getElementById('project-content')?.scrollIntoView({
            behavior: 'smooth',
          });
        });
      }
    }
  };

  return (
    <div className="grid md:grid-cols-[1fr_3fr] grid-cols-1 gap-4 mx-4 lg:mx-14">
      <ProjectTree
        activeProjectId={activeProjectId}
        onProjectClick={handleProjectClick}
        data={defaultData}
        className="md:sticky top-4 self-start"
      />
      <div
        id="project-content"
        className="flex flex-col gap-4 text-terminal font-mono text-sm py-4 lg:py-0 relative"
      >
        {/* <button
          type="button"
          onClick={handleCopy}
          className="absolute top-0 right-0 font-mono text-xs opacity-20 hover:opacity-100"
          title="Copy link"
        >
          {copied ? 'copied' : '@link'}
        </button> */}
        {projectData[activeProjectId]?.content}
      </div>
    </div>
  );
}
