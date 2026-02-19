import WebsiteProjectContent from '@/components/WebsiteProjectContent';
import { gyubenWebsitePhotos } from '@/helpers/photos';
import type { ProjectId } from './types';

export const id = 'uuid-49' as const satisfies ProjectId;

export const content = (
  <WebsiteProjectContent
    title="Gyuben.com"
    photos={gyubenWebsitePhotos}
    src="https://gyuben.com"
  />
);
