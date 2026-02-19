import WebsiteProjectContent from '@/components/WebsiteProjectContent';
import { hazepitesekWebsitePhotos } from '@/helpers/photos';
import type { ProjectId } from './types';

export const id = 'uuid-43' as const satisfies ProjectId;

export const content = (
  <WebsiteProjectContent
    title="Hazepitesek.hu"
    photos={hazepitesekWebsitePhotos}
    src="https://hazepitesek.hu"
  />
);
