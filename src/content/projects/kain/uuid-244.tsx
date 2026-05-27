import VideoProjectContent from '@/components/VideoProjectContent';
import type { ProjectId } from '../types';

export const id = 'uuid-244' as const satisfies ProjectId;

export const content = (
  <VideoProjectContent
    category="Visualizer"
    title="Kain - Mi világunk (Official Visualizer)"
    originalSrc="https://youtube.com"
    description="Visual for Kain's Mi Világunk song from Once Upon a Time in Hollywood movie."
    videoSrc="/assets/videos/kain/mi_vilagunk_reel.mp4"
  />
);
