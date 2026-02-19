import VideoProjectContent from '@/components/VideoProjectContent';
import type { ProjectId } from './types';

export const id = 'uuid-21' as const satisfies ProjectId;

export const content = (
  <VideoProjectContent
    category="Aftermovie"
    title="December 12.//Palazzo Permanens"
    videoSrc="/assets/videos/KAIN_AFTERMOVIE.mov"
    originalSrc="https://youtu.be/I80j4Hoc4hU?si=z5-spijeRFbXN4gI"
  />
);
