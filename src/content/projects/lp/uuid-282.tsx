import VideoProjectContent from '@/components/VideoProjectContent';
import type { ProjectId } from '../types';

export const id = 'uuid-282' as const satisfies ProjectId;

export const content = (
  <VideoProjectContent
    category="Live video"
    title="a darab - levendula piknik 3.0 (fashion show)"
    originalSrc="https://www.youtube.com/watch?v=AqVy_QokEzg&list=RDAqVy_QokEzg&start_radio=1&t=1s"
    description='"a darab" (the piece) called fashion show by Дeva, Willany Leó, STOTZ, at Levendula Piknik 3.0.'
    videoSrc="/assets/videos/lp/LP_3_show.mp4"
  />
);
