import WebsiteProjectContent from '@/components/WebsiteProjectContent';
import { pressfitnessWebsitePhotos } from '@/helpers/photos';
import type { ProjectId } from './types';

export const id = 'uuid-45' as const satisfies ProjectId;

export const content = (
  <WebsiteProjectContent
    title="Pressfitness.hu"
    photos={pressfitnessWebsitePhotos}
    src="https://pressfitness.hu"
  />
);
