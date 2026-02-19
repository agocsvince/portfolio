import WebsiteProjectContent from '@/components/WebsiteProjectContent';
import { benifilmWebsitePhotos } from '@/helpers/photos';
import type { ProjectId } from './types';

export const id = 'uuid-46' as const satisfies ProjectId;

export const content = (
  <WebsiteProjectContent
    title="Benifilm.com"
    photos={benifilmWebsitePhotos}
    src="https://benifilm.com"
  />
);
