import PhotoGalleryContent from '@/components/PhotoGalleryContent';
import { szalaiPlazsPhotos } from '@/helpers/photos';
import type { ProjectId } from '../types';

export const id = 'uuid-34' as const satisfies ProjectId;

export const content = (
  <>
    <h1 className="text-2xl mb-4">Szalai at Plázs Siófok</h1>
    <PhotoGalleryContent photos={szalaiPlazsPhotos.slice(0, 1)} columns={1} />
    <p>
      Music spilling from the speakers. We went to Plázs to see Szalai perform
      before Manuel. Sunset, sandy shores and friends.
    </p>
    <PhotoGalleryContent photos={szalaiPlazsPhotos.slice(1, 10)} columns={3} />
  </>
);
