import VideoProjectContent from '@/components/VideoProjectContent';
import type { ProjectId } from './types';

export const id = 'uuid-232' as const satisfies ProjectId;

export const content = (
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
);
