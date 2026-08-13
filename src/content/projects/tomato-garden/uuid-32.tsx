import PhotoGalleryContent from '@/components/PhotoGalleryContent';
import { tomatoGardenPhotos } from '@/helpers/photos';
import type { ProjectId } from '../types';

export const id = 'uuid-32' as const satisfies ProjectId;

export const content = (
  <>
    <h1 className="text-2xl mb-4">The Last Harvest of Light</h1>
    <p>
      You plant it, nurture it, watch it ripen. You harvest it, you eat it.
      You’ve witnessed it all the way through. That, too, becomes part of the
      story.
    </p>
    <PhotoGalleryContent photos={tomatoGardenPhotos.slice(0, 1)} columns={1} />
    <p>In Ráckeve, we picked tomatoes for ourselves in the Bőség kertje.</p>
    <PhotoGalleryContent photos={tomatoGardenPhotos.slice(1, 4)} columns={2} />
  </>
);
