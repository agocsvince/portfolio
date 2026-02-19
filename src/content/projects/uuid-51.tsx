import WebsiteProjectContent from '@/components/WebsiteProjectContent';
import { portfolioWebsitePhotos } from '@/helpers/photos';
import type { ProjectId } from './types';

export const id = 'uuid-51' as const satisfies ProjectId;

export const content = (
  <WebsiteProjectContent
    title="agocsvince.com 1.0"
    photos={portfolioWebsitePhotos}
    src="/archive/portfolio-1.0"
  />
);
