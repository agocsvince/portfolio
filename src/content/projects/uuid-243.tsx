import VideoProjectContent from '@/components/VideoProjectContent';
import type { ProjectId } from './types';
import PhotoAlbum from '@/components/PhotoAlbum';
import { keresztPhotos } from '@/helpers/photos';
import PhotoGalleryContent from '@/components/PhotoGalleryContent';

export const id = 'uuid-243' as const satisfies ProjectId;

export const content = (
  <>
    <VideoProjectContent
      category="Documentary"
      title="KERESZT DOKUMENTUM 3. RÉSZ"
      originalSrc="https://youtu.be/I4aEwURYal8?si=3SLnCdo8lzafGaJ-"
      description="The final episode of my longest project so far. 
    I followed Kain through the making of his new album (Kereszt),
     many places, many faces, and a full-circle moment at the end: the concert at Palazzo Permanens."
      videoSrc="/assets/videos/KERESZT_3.mp4"
    />
    <p>I also had the chance to shoot on film before the show started.</p>
    <div className="bg-light-primary p-4 text-dark-primary">
      <PhotoAlbum photos={keresztPhotos} />
    </div>
  </>
);
