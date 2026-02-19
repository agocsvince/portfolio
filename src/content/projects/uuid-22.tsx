import VideoProjectContent from '@/components/VideoProjectContent';
import type { ProjectId } from './types';

export const id = 'uuid-22' as const satisfies ProjectId;

export const content = (
  <VideoProjectContent
    category="Live video"
    title="Százszorszebb - gyuris, Susa, Szalai"
    originalSrc="https://www.youtube.com/watch?v=13idNOYYFOk"
    description="A collaboration by Gyuris, Susa and Szalai, Szeged SZIN Festival,
      end-of-summer vibes — this is the kind of music that always gets the
      crowd going."
    videoSrc="/assets/videos/SZIN_preview.mp4"
  />
);
