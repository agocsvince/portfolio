import { photoType } from '@/helpers/types';
import React, { memo } from 'react';

import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const PhotoAlbum = ({ photos }: { photos: photoType[] }) => {
  const showPhotoTitle = ({ index }: { index: number }) => {
    return (
      <span className="PhotoView-Slider__toolbarIcon">
        {photos[index].title}
      </span>
    );
  };

  return (
    <div className="flex flex-row flex-wrap p-4 gap-8 justify-center bg-light-primary px-5 md:px-8 lg:px-15">
      <PhotoProvider toolbarRender={showPhotoTitle}>
        {photos.map((photo) => {
          return (
            <div
              key={photo.id}
              className={`${photo.asset.width > photo.asset.height ? 'flex-[35%] xl:flex-[40%]' : 'flex-[25%]'}  flex flex-col gap-4 `}
            >
              <PhotoView src={photo.asset.url}>
                <img src={photo.asset.url} alt={photo.alt || 'Photo'} />
              </PhotoView>
            </div>
          );
        })}
      </PhotoProvider>
    </div>
  );
};

export default memo(PhotoAlbum);
