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
  return (
    <div>
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-80 underline"
      >
        <h1 className="text-2xl mb-4">{title}</h1>
      </a>
      <div className="bg-light-primary p-4 text-dark-primary">
        <PhotoAlbum photos={photos} columns={1} />
      </div>
    </div>
  );
};

export default WebsiteProjectContent;
