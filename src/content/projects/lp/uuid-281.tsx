import VideoProjectContent from '@/components/VideoProjectContent';
import type { ProjectId } from '../types';

export const id = 'uuid-281' as const satisfies ProjectId;

export const content = (
  <VideoProjectContent
    category="Live video"
    title="gyuris - levendula piknik 3.0 (koncert részlet)"
    originalSrc="https://www.youtube.com/watch?v=AqVy_QokEzg&list=RDAqVy_QokEzg&start_radio=1&t=1s"
    description="A live set of gyuris at Levendula Piknik 3.0, final performance of the night, my fav."
    videoSrc="/assets/videos/lp/LP_3_gyuris.mp4"
  />
);
