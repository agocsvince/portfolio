import PhotoGalleryContent from '@/components/PhotoGalleryContent';
import { szalaiPlazsPhotos } from '@/helpers/photos';
import type { ProjectId } from '../types';

export const id = 'uuid-34' as const satisfies ProjectId;

export const content = (
  <>
    <h1 className="text-2xl mb-4">The Chinese Quarter, District VIII</h1>
    <PhotoGalleryContent photos={szalaiPlazsPhotos.slice(0, 1)} columns={1} />
    <p>
      We went to the Chinese Quarter looking for something to eat, but
      everything was closed.
    </p>
    <p>
      The wind blew rubbish through the streets. Only a few workers were around,
      playing cards and loading things.
    </p>
    <p>And somehow, we felt at home.</p>
    <PhotoGalleryContent photos={szalaiPlazsPhotos.slice(1, 10)} columns={3} />
  </>
);
