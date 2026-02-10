import { photoType } from '@/helpers/types';
import { memo } from 'react';

import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const PhotoAlbum = ({
  photos,
  columns = 2,
}: {
  photos: photoType[];
  columns?: number;
}) => {
  const showPhotoTitle = ({ index }: { index: number }) => {
    return (
      <span className="PhotoView-Slider__toolbarIcon">
        {photos[index].title}
      </span>
    );
  };

  // Split photos into columns only if columns > 1
  const midPoint = columns > 1 ? Math.ceil(photos.length / 2) : photos.length;
  const leftColumn = photos.slice(0, midPoint);
  const rightColumn = columns > 1 ? photos.slice(midPoint) : [];

  return (
    <div className="gap-4 justify-center bg-light-primary">
      <PhotoProvider toolbarRender={showPhotoTitle}>
        <div className={`grid grid-cols-${columns} gap-4`}>
          <div className="flex flex-col gap-4">
            {leftColumn.map((photo) => {
              const aspectRatio = photo.asset.width / photo.asset.height;
              return (
                <div key={photo.id} className="flex flex-col gap-4">
                  <PhotoView src={photo.asset.url}>
                    <div
                      className="w-full overflow-hidden"
                      style={{
                        aspectRatio: aspectRatio,
                      }}
                    >
                      <img
                        src={
                          photo.asset.thumbnailSrc ?? photo.asset.url
                        }
                        alt={photo.alt || 'Photo'}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </PhotoView>
                </div>
              );
            })}
          </div>
          {rightColumn.length > 0 && (
            <div className="flex flex-col gap-4">
              {rightColumn.map((photo) => {
                const aspectRatio = photo.asset.width / photo.asset.height;
                return (
                  <div key={photo.id} className="flex flex-col gap-4">
                    <PhotoView src={photo.asset.url}>
                      <div
                        className="w-full overflow-hidden"
                        style={{
                          aspectRatio: aspectRatio,
                        }}
                      >
                        <img
                          src={
                            photo.asset.thumbnailSrc ?? photo.asset.url
                          }
                          alt={photo.alt || 'Photo'}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </PhotoView>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </PhotoProvider>
    </div>
  );
};

export default memo(PhotoAlbum);
