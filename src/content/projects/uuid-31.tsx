import PhotoGalleryContent from '@/components/PhotoGalleryContent';
import { allPhotos } from '@/helpers/photos';
import type { ProjectId } from './types';

export const id = 'uuid-31' as const satisfies ProjectId;

export const content = (
  <PhotoGalleryContent
    title="All photos from the last few years"
    photos={allPhotos}
  />
);
