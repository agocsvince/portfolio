import VideoProjectContent from '@/components/VideoProjectContent';
import type { ProjectId } from './types';

export const id = 'uuid-234' as const satisfies ProjectId;

export const content = (
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
);
