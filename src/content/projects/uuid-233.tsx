import VideoProjectContent from '@/components/VideoProjectContent';
import type { ProjectId } from './types';

export const id = 'uuid-233' as const satisfies ProjectId;

export const content = (
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
);
