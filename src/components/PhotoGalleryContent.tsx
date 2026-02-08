import React from 'react';
import PhotoAlbum from './PhotoAlbum';
import { photoType } from '@/helpers/types';

interface PhotoGalleryContentProps {
  title: string;
  photos: photoType[];
  columns?: number;
}

const PhotoGalleryContent: React.FC<PhotoGalleryContentProps> = ({
  title,
  photos,
  columns = 2,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-2xl">{title}</h1>
      </div>
      <p></p>

      <div className="bg-light-primary p-4 text-dark-primary">
        <PhotoAlbum photos={photos} columns={columns} />
      </div>
    </div>
  );
};

export default PhotoGalleryContent;
