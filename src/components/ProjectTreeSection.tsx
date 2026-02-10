'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import ProjectTree, { ProjectTreeData } from '@/components/ProjectTree';
import Link from 'next/link';
import VideoProjectContent from './VideoProjectContent';
import WebsiteProjectContent from './WebsiteProjectContent';
import PhotoGalleryContent from './PhotoGalleryContent';
import {
  allPhotos,
  hazepitesekWebsitePhotos,
  levendulaPiknikWebsitePhotos,
  benifilmWebsitePhotos,
  gyubenWebsitePhotos,
  mindenamifavagasWebsitePhotos,
  pressfitnessWebsitePhotos,
  portfolioWebsitePhotos,
} from '@/helpers/photos';

type projectId = `uuid-${number}`;

const defaultData: ProjectTreeData = {
  title: 'projects',
  id: 'uuid-0',
  children: [
    {
      title: 'README.md',
      id: 'uuid-1',
    },
    {
      title: 'video',
      id: 'uuid-2',
      children: [
        { title: 'kain_aftermovie.mp4', id: 'uuid-21' },
        { title: 'gyuris_x_szalai_szin.mov', id: 'uuid-22' },
        {
          title: 'kain_2310_EP',
          id: 'uuid-23',
          children: [
            { title: 'buda.mov', id: 'uuid-231' },
            { title: 'mostanaban.mov', id: 'uuid-232' },
            { title: 'oszinten.mov', id: 'uuid-233' },
            { title: 'csalad.mov', id: 'uuid-234' },
          ],
        },
        { title: 'susa_2elore_1hatra.mp4', id: 'uuid-27' },
      ],
    },
    {
      title: 'photo',
      id: 'uuid-3',
      children: [{ title: 'all.jpg', id: 'uuid-31' }],
    },
    {
      title: 'website',
      id: 'uuid-4',
      children: [
        { title: 'benifilm.com', id: 'uuid-46' },
        { title: 'levendulapiknik.com', id: 'uuid-41' },
        { title: 'gyuben.com', id: 'uuid-49' },
        { title: 'mindenamifavagas.hu', id: 'uuid-48' },
        { title: 'hazepitesek.hu', id: 'uuid-43' },
        { title: 'pressfitness.hu', id: 'uuid-45' },
        // { title: 'zsalyatal.hu', id: 'uuid-42' },
        // { title: 'beniwedding.hu', id: 'uuid-47' },
      ],
    },
    {
      title: 'archive',
      id: 'uuid-5',
      children: [{ title: 'portfolio-1.0', id: 'uuid-51' }],
    },
  ],
};

const projectData: Record<projectId, { content: React.ReactNode }> = {
  'uuid-1': {
    content: (
      <div>
        <h1 className="text-2xl mb-4">README.md</h1>
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div>
            <p>
              {' '}
              I'm a full-stack developer with a strong focus on front-end
              technologies like React, Next.js, and TypeScript. I thrive on
              solving problems through clean, well-structured code and intuitive
              user interfaces. Over the past few years, I’ve worked on a range
              of projects—from large-scale platforms to lean startup
              environments—often taking ownership of the entire development
              process.
            </p>
            <br />
            <p>
              {' '}
              In addition to coding, I have a deep passion for visual
              storytelling. I shoot and edit music videos, short films, and
              other creative video content, and I’m also experienced in
              photography.
            </p>
            <br />
            <p>
              I enjoy bringing ideas to life—whether it's through code, camera,
              or a blend of both.
            </p>
          </div>
          <span className="min-h-[300px]">
            <img
              src="/assets/vince_filmen-6.jpg"
              alt="Portrait of Vince Agocs"
              className="w-2/3"
            />
          </span>
        </div>
      </div>
    ),
  },
  'uuid-231': {
    content: (
      <VideoProjectContent
        category="Music Video"
        title="Kain - Buda"
        originalSrc="https://youtu.be/P-rpS-Q1_ys?si=yltS9zKZn45TcAdP"
        description="The second visual from Kain's 4-track 2310 EP offers a glimpse into
          the quiet beauty of his newfound home and surroundings. We spent an
          entire day wandering the peaceful streets of Buda — more specifically,
          Újbuda. The listener gently drifts through the emotional landscape
          inspired by this new home — just like the artist himself. We follow
          him through a calm, laid-back day as he explores the neighborhood,
          reflects in silence, and moves forward with a deep sense of gratitude
          for the path that brought him here."
        videoSrc="/assets/videos/BUDA.mp4"
      />
    ),
  },
  'uuid-232': {
    content: (
      <VideoProjectContent
        category="Music Video"
        title="Kain - Mostanában"
        originalSrc="https://youtu.be/UZlqhnq30yI?si=PpiTZVhtBlBn5ZsM"
        description="This visual is the first piece in a series accompanying the 4-track
          2310 EP. Set in Kain's (and my own) hometown, the story unfolds
          through everyday scenes that transport the viewer back into the
          artist's childhood memories. The artist reflects on what it was like
          to confront his former self, the ingrained patterns shaped by his
          hometown, and the journey that led him to relive and ultimately
          transform those memories."
        videoSrc="/assets/videos/MOSTANABAN.mp4"
      />
    ),
  },
  'uuid-233': {
    content: (
      <VideoProjectContent
        category="Music Video"
        title="Kain - Őszintén"
        originalSrc="https://youtu.be/aCarnMXrZsY?si=NO3lIbnmpnJAoVAX"
        description="The third visual in the series created for Kain's 4-track 2310 EP is
          undoubtedly the most honest (pun intended). Its imagery reflects the
          night and emotional state in which the song was written. Kain speaks
          to a more mystical presence, singing about longing for them. At the
          same time, he highlights the presence of teenage depression and gently
          invites the listener to accept the feeling of being lost in the
          uncertainty of their own thoughts."
        videoSrc="/assets/videos/OSZINTEN.mp4"
      />
    ),
  },
  'uuid-234': {
    content: (
      <VideoProjectContent
        category="Music Video"
        title="Kain - Család"
        originalSrc="https://youtu.be/dg7MYg4KXuk?si=TGuWuXU8-urBTPU4"
        description="The final visual in the series for Kain's 4-track 2310 EP is a
          heartfelt expression of gratitude for the opportunities music has
          given him — the freedom, the journey, the voice. Once again, we return
          to his hometown, where the snowy landscape, his old school, and
          familiar surroundings set the tone. Through his childlike self, Kain
          highlights the importance of family. Old memories resurface, emotional
          voids quietly emerge, and through the many versions of his past self,
          he expresses a deep sense of gratitude — one that has shaped the
          person he is today."
        videoSrc="/assets/videos/CSALAD.mp4"
      />
    ),
  },
  'uuid-27': {
    content: (
      <VideoProjectContent
        category="Visualizer"
        title="Susa - 2 előre 1 hátra"
        originalSrc="https://www.youtube.com/watch?v=W0oqIMvJh2o"
        description="Visualizer for my friend Susa, who's making his way in the music
          industry with his own unique style. This lovely track is also a
          tribute to one of my favorite directors, David Lynch — I could watch
          his films all day, they're filled with so much tension and beauty."
        videoSrc="/assets/videos/2E1H.mp4"
      />
    ),
  },
  'uuid-22': {
    content: (
      <VideoProjectContent
        category="Live video"
        title="Százszorszebb - gyuris, Susa, Szalai"
        originalSrc="https://www.youtube.com/watch?v=13idNOYYFOk"
        description="A collaboration by Gyuris, Susa and Szalai, Szeged SZIN Festival,
          end-of-summer vibes — this is the kind of music that always gets the
          crowd going."
        videoSrc="/assets/videos/SZIN_preview.mp4"
      />
    ),
  },
  'uuid-21': {
    content: (
      <VideoProjectContent
        category="Aftermovie"
        title="December 12.//Palazzo Permanens"
        videoSrc="/assets/videos/KAIN_AFTERMOVIE.mov"
        originalSrc="https://youtu.be/I80j4Hoc4hU?si=z5-spijeRFbXN4gI"
      />
    ),
  },
  'uuid-31': {
    content: (
      <PhotoGalleryContent
        title="All photos from the last few years"
        photos={allPhotos}
      />
    ),
  },
  'uuid-51': {
    content: (
      <WebsiteProjectContent
        title="agocsvince.com 1.0"
        photos={portfolioWebsitePhotos}
        src="/archive/portfolio-1.0"
      />
    ),
  },
  'uuid-41': {
    content: (
      <WebsiteProjectContent
        title="Levendulapiknik.com"
        photos={levendulaPiknikWebsitePhotos}
        src="https://levendulapiknik.com"
      />
    ),
  },
  'uuid-43': {
    content: (
      <WebsiteProjectContent
        title="Hazepitesek.hu"
        photos={hazepitesekWebsitePhotos}
        src="https://hazepitesek.hu"
      />
    ),
  },
  'uuid-45': {
    content: (
      <WebsiteProjectContent
        title="Pressfitness.hu"
        photos={pressfitnessWebsitePhotos}
        src="https://pressfitness.hu"
      />
    ),
  },
  'uuid-46': {
    content: (
      <WebsiteProjectContent
        title="Benifilm.com"
        photos={benifilmWebsitePhotos}
        src="https://benifilm.com"
      />
    ),
  },
  'uuid-48': {
    content: (
      <WebsiteProjectContent
        title="Mindenamifavagas.hu"
        photos={mindenamifavagasWebsitePhotos}
        src="https://mindenamifavagas.hu"
      />
    ),
  },
  'uuid-49': {
    content: (
      <WebsiteProjectContent
        title="Gyuben.com"
        photos={gyubenWebsitePhotos}
        src="https://gyuben.com"
      />
    ),
  },
};

export default function ProjectTreeSection() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const isUpdatingFromUserAction = useRef(false);
  const lastSyncedProjectId = useRef<projectId | null>(null);

  const [activeProjectId, setActiveProjectId] = useState<projectId>(() => {
    const projectParam = searchParams.get('project');
    const initialId =
      projectParam && projectParam in projectData
        ? (projectParam as projectId)
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
        ? (projectParam as projectId)
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
      setActiveProjectId(id as projectId);
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
