import VideoProjectContent from '@/components/VideoProjectContent';
import type { ProjectId } from './types';

export const id = 'uuid-27' as const satisfies ProjectId;

export const content = (
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
);
