import React from 'react';
import PhotoAlbum from './PhotoAlbum';
import { photoType } from '@/helpers/types';

interface WebsiteProjectContentProps {
  title: string;
  photos: photoType[];
  src: string;
}

const WebsiteProjectContent: React.FC<WebsiteProjectContentProps> = ({
  title,
  photos,
  src,
}) => {
  const columns = photos.length > 1 ? 2 : 1;

  return (
    <div>
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 underline block w-min"
      >
        <h1 className="text-2xl mb-4 w-min">{title}</h1>
      </a>
      <div className="bg-light-primary p-4 text-dark-primary">
        <PhotoAlbum photos={photos} columns={columns} />
      </div>
    </div>
  );
};

export default WebsiteProjectContent;
