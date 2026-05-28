import VideoProjectContent from '@/components/VideoProjectContent';
import type { ProjectId } from '../types';

export const id = 'uuid-245' as const satisfies ProjectId;

export const content = (
  <VideoProjectContent
    category="Official Music Video"
    title="Kain feat. Szalai - Nokia"
    originalSrc="https://www.youtube.com/watch?v=4_fcbn7I7bU"
    description="A summer hit by Kain and Szalai, directed and edited by me."
    videoSrc="/assets/videos/kain/nokia_final_reel.mp4"
  />
);
