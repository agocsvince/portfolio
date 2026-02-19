import WebsiteProjectContent from '@/components/WebsiteProjectContent';
import { levendulaPiknikWebsitePhotos } from '@/helpers/photos';
import type { ProjectId } from './types';

export const id = 'uuid-41' as const satisfies ProjectId;

export const content = (
  <WebsiteProjectContent
    title="Levendulapiknik.com"
    photos={levendulaPiknikWebsitePhotos}
    src="https://levendulapiknik.com"
  />
);
