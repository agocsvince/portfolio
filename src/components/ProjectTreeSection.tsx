'use client';

import React, { useState } from 'react';
import ProjectTree, { ProjectTreeData } from '@/components/ProjectTree';
import Link from 'next/link';
import EmbedVideo from './EmbedVideo';

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
            { title: 'mostanaban.mp4', id: 'uuid-232' },
            { title: 'oszinten.webm', id: 'uuid-233' },
            { title: 'csalad.webm', id: 'uuid-234' },
          ],
        },
        { title: 'susa_2elore_1hatra.mp4', id: 'uuid-27' },
      ],
    },
    {
      title: 'photo',
      id: 'uuid-3',
      children: [{ title: 'levendula_piknik.jpeg', id: 'uuid-31' }],
    },
    {
      title: 'website',
      id: 'uuid-4',
      children: [
        { title: 'levendulapiknik.hu', id: 'uuid-41' },
        { title: 'zsalyatal.hu', id: 'uuid-42' },
        { title: 'hazepitesek.hu', id: 'uuid-43' },
        { title: 'pressfitness.com', id: 'uuid-45' },
        { title: 'benifilm.com', id: 'uuid-46' },
        { title: 'beniwedding.hu', id: 'uuid-47' },
        { title: 'mindenamifavagas.hu', id: 'uuid-48' },
        { title: 'gyuben.com', id: 'uuid-49' },
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
      <>
        <h1>README.md</h1>
        <p>
          {' '}
          I'm a full-stack developer with a strong focus on front-end
          technologies like React, Next.js, and TypeScript. I thrive on solving
          problems through clean, well-structured code and intuitive user
          interfaces. Over the past few years, I’ve worked on a range of
          projects—from large-scale platforms to lean startup environments—often
          taking ownership of the entire development process.
        </p>
        <p>
          {' '}
          In addition to coding, I have a deep passion for visual storytelling.
          I shoot and edit music videos, short films, and other creative video
          content, and I’m also experienced in photography.
        </p>
        <p>
          I enjoy bringing ideas to life—whether it's through code, camera, or a
          blend of both.
        </p>
      </>
    ),
  },
  'uuid-231': {
    content: (
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-lg text-secondary">Music Video</h2>
          <h1 className="text-2xl">Kain - Buda</h1>
        </div>
        <p>
          The second visual from Kain’s 4-track 2310 EP offers a glimpse into
          the quiet beauty of his newfound home and surroundings. We spent an
          entire day wandering the peaceful streets of Buda — more specifically,
          Újbuda. The listener gently drifts through the emotional landscape
          inspired by this new home — just like the artist himself. We follow
          him through a calm, laid-back day as he explores the neighborhood,
          reflects in silence, and moves forward with a deep sense of gratitude
          for the path that brought him here.
        </p>

        <div className="bg-light-primary p-4 text-dark-primary">
          <video
            src="/assets/videos/BUDA.mp4"
            muted
            loop
            playsInline
            autoPlay
            controls
          ></video>
        </div>
      </div>
    ),
  },
  'uuid-232': {
    content: (
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-lg text-secondary">Music Video</h2>
          <h1 className="text-2xl">Kain - Mostanában</h1>
        </div>
        <p>
          This visual is the first piece in a series accompanying the 4-track
          2310 EP. Set in Kain’s (and my own) hometown, the story unfolds
          through everyday scenes that transport the viewer back into the
          artist’s childhood memories. The artist reflects on what it was like
          to confront his former self, the ingrained patterns shaped by his
          hometown, and the journey that led him to relive and ultimately
          transform those memories.
        </p>

        <div className="bg-light-primary p-4 text-dark-primary">
          <video
            src="/assets/videos/MOSTANABAN.mp4"
            muted
            loop
            playsInline
            autoPlay
            controls
          ></video>
        </div>
      </div>
    ),
  },
  'uuid-234': {
    content: (
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-lg text-secondary">Music Video</h2>
          <h1 className="text-2xl">Kain - Csálád</h1>
        </div>
        <p>
          The final visual in the series for Kain’s 4-track 2310 EP is a
          heartfelt expression of gratitude for the opportunities music has
          given him — the freedom, the journey, the voice. Once again, we return
          to his hometown, where the snowy landscape, his old school, and
          familiar surroundings set the tone. Through his childlike self, Kain
          highlights the importance of family. Old memories resurface, emotional
          voids quietly emerge, and through the many versions of his past self,
          he expresses a deep sense of gratitude — one that has shaped the
          person he is today.
        </p>

        <div className="bg-light-primary p-4 text-dark-primary">
          <video
            src="/assets/videos/CSALAD.mp4"
            muted
            loop
            playsInline
            autoPlay
            controls
          ></video>
        </div>
      </div>
    ),
  },
  'uuid-233': {
    content: (
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-lg text-secondary">Music Video</h2>
          <h1 className="text-2xl">Kain - Őszintén</h1>
        </div>
        <p>
          The third visual in the series created for Kain’s 4-track 2310 EP is
          undoubtedly the most honest (pun intended). Its imagery reflects the
          night and emotional state in which the song was written. Kain speaks
          to a more mystical presence, singing about longing for them. At the
          same time, he highlights the presence of teenage depression and gently
          invites the listener to accept the feeling of being lost in the
          uncertainty of their own thoughts.
        </p>

        <div className="bg-light-primary p-4 text-dark-primary">
          <video
            src="/assets/videos/OSZINTEN.mp4"
            muted
            loop
            playsInline
            autoPlay
            controls
          ></video>
        </div>
      </div>
    ),
  },
  'uuid-27': {
    content: (
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-lg text-secondary">Visualizer</h2>
          <h1 className="text-2xl">Susa - 2 előre 1 hátra</h1>
        </div>
        <p>
          Visualizer for my friend Susa, who’s making his way in the music
          industry with his own unique style. This lovely track is also a
          tribute to one of my favorite directors, David Lynch — I could watch
          his films all day, they’re filled with so much tension and beauty.
        </p>

        <div className="bg-light-primary p-4 text-dark-primary">
          <video
            src="/assets/videos/2E1H.mp4"
            muted
            loop
            playsInline
            autoPlay
            controls
          ></video>
        </div>
      </div>
    ),
  },
  'uuid-51': {
    content: (
      <>
        <Link
          href={'/archive/portfolio-1.0'}
          className="underline hover:opacity-80"
        >
          portfolio-1.0
        </Link>
      </>
    ),
  },
};

export default function ProjectTreeSection() {
  const [activeProjectId, setActiveProjectId] = useState<projectId>('uuid-1');

  const handleProjectClick = (id: string) => {
    if (id.startsWith('uuid-')) {
      setActiveProjectId(id as projectId);
    }
  };

  return (
    <div className="grid md:grid-cols-[1fr_3fr] grid-cols-1 gap-4 mx-4 lg:mx-14">
      <ProjectTree
        activeProjectId={activeProjectId}
        onProjectClick={handleProjectClick}
        data={defaultData}
      />
      <div className="flex flex-col gap-4 text-terminal font-mono text-sm py-4 lg:py-0">
        {projectData[activeProjectId]?.content}
      </div>
    </div>
  );
}
