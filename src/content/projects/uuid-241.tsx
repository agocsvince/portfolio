import VideoProjectContent from '@/components/VideoProjectContent';
import type { ProjectId } from './types';
import PhotoAlbum from '@/components/PhotoAlbum';
import { keresztPhotos } from '@/helpers/photos';

export const id = 'uuid-241' as const satisfies ProjectId;

export const content = (
  <>
    <VideoProjectContent
      category="Documentary"
      title="KERESZT DOKUMENTUM 1. RÉSZ"
      originalSrc="https://youtu.be/I4aEwURYal8?si=izIW14WrEoJogzmQ"
      description="The first episode of KAIN's documentary series about his new album (Kereszt). 
    I followed Kain through the making of his new album (Kereszt),
     many places, many faces, all started with a few day session on Göd, full of productivty and creativity."
      videoSrc="/assets/videos/kereszt/kereszt_1_preview.mp4"
    />
    <p>
      Some of my early shots on that old film camera (Mamiya 1235EF; Fomapan
      400/Kodak gold 200)
    </p>
    <div className="bg-light-primary p-4 text-dark-primary">
      <PhotoAlbum photos={keresztPhotos[1]} />
    </div>
  </>
);
