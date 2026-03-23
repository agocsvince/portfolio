import { photoType } from '@/helpers/types';
import { memo } from 'react';

import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const PhotoAlbumItem = ({ photo }: { photo: photoType }) => {
  const aspectRatio = photo.asset.width / photo.asset.height;

  return (
    <div className="flex flex-col gap-4">
      <PhotoView src={photo.asset.url}>
        <div
          className="w-full overflow-hidden"
          style={{
            aspectRatio: aspectRatio,
          }}
        >
          <img
            src={photo.asset.thumbnailSrc ?? photo.asset.url}
            alt={photo.alt || 'Photo'}
            className="w-full h-full object-contain"
          />
        </div>
      </PhotoView>
    </div>
  );
};

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

  const normalizedColumns = Math.max(1, Math.floor(columns));
  const columnsData: { photo: photoType; originalIndex: number }[][] =
    Array.from({ length: normalizedColumns }, () => []);
  const columnHeights = Array.from({ length: normalizedColumns }, () => 0);

  // Balance columns by estimated rendered height so total column height stays close.
  photos.forEach((photo, originalIndex) => {
    const aspectRatio = photo.asset.width / photo.asset.height;
    const estimatedHeight = aspectRatio > 0 ? 1 / aspectRatio : 1;

    let targetColumn = 0;
    for (let i = 1; i < columnHeights.length; i += 1) {
      if (columnHeights[i] < columnHeights[targetColumn]) {
        targetColumn = i;
      }
    }

    columnsData[targetColumn].push({ photo, originalIndex });
    columnHeights[targetColumn] += estimatedHeight;
  });

  return (
    <div className="gap-4 justify-center bg-light-primary">
      <PhotoProvider toolbarRender={showPhotoTitle}>
        <div className={`grid grid-cols-${normalizedColumns} gap-4`}>
          {columnsData.map((columnPhotos, columnIndex) => (
            <div key={`column-${columnIndex}`} className="flex flex-col gap-4">
              {columnPhotos.map(({ photo, originalIndex }) => (
                <PhotoAlbumItem key={`${photo.id}-${originalIndex}`} photo={photo} />
              ))}
            </div>
          ))}
        </div>
      </PhotoProvider>
    </div>
  );
};

export default memo(PhotoAlbum);
