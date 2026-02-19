import WebsiteProjectContent from '@/components/WebsiteProjectContent';
import { mindenamifavagasWebsitePhotos } from '@/helpers/photos';
import type { ProjectId } from './types';

export const id = 'uuid-48' as const satisfies ProjectId;

export const content = (
  <WebsiteProjectContent
    title="Mindenamifavagas.hu"
    photos={mindenamifavagasWebsitePhotos}
    src="https://mindenamifavagas.hu"
  />
);
