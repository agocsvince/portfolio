import VideoProjectContent from '@/components/VideoProjectContent';
import type { ProjectId } from './types';
import PhotoAlbum from '@/components/PhotoAlbum';
import { keresztPhotos } from '@/helpers/photos';

export const id = 'uuid-242' as const satisfies ProjectId;

export const content = (
  <>
    <VideoProjectContent
      category="Documentary"
      title="KERESZT DOKUMENTUM 2. RÉSZ"
      originalSrc="https://youtu.be/KSZ71Wjw9Dc?si=bwFAQALZNngeRAC8"
      description="The second episode of KAIN's documentary series about his new album (Kereszt). Miskolc and Budapest."
      videoSrc="/assets/videos/kereszt/kereszt_2_preview.mp4"
    />
    <p>
      More photography moments from the ongoing project. Captured with my Ricoh
      35 EFS on Fomapan 400 and Kodak Gold 200 film stocks.
    </p>
    <div className="bg-light-primary p-4 text-dark-primary">
      <PhotoAlbum photos={keresztPhotos[2]} />
    </div>
  </>
);
