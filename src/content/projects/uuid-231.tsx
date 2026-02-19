import VideoProjectContent from '@/components/VideoProjectContent';
import type { ProjectId } from './types';

export const id = 'uuid-231' as const satisfies ProjectId;

export const content = (
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
);
