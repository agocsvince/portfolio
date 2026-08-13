import { photoType } from '@/helpers/types';
import { memo, useMemo, useState } from 'react';

import 'react-photo-view/dist/react-photo-view.css';
import { PhotoSlider } from 'react-photo-view';

const PhotoAlbumItem = ({
  photo,
  onOpen,
}: {
  photo: photoType;
  onOpen: () => void;
}) => {
  const aspectRatio = photo.asset.width / photo.asset.height;

  return (
    <button
      type="button"
      className="flex w-full cursor-pointer flex-col gap-4 border-0 bg-transparent p-0 text-left"
      onClick={onOpen}
    >
      <div
        className="w-full overflow-hidden"
        style={{
          aspectRatio: aspectRatio,
        }}
      >
        <img
          src={photo.asset.thumbnailSrc ?? photo.asset.url}
          alt={photo.alt || 'Photo'}
          className="h-full w-full object-contain"
        />
      </div>
    </button>
  );
};

type GridPhoto = { photo: photoType; originalIndex: number };

type LayoutSegment =
  | { type: 'fullWidth'; photo: photoType; originalIndex: number }
  | { type: 'grid'; photos: GridPhoto[] };

const distributeIntoColumns = (
  photos: GridPhoto[],
  columnCount: number,
): GridPhoto[][] => {
  const columnsData: GridPhoto[][] = Array.from({ length: columnCount }, () => []);

  photos.forEach((gridPhoto, index) => {
    columnsData[index % columnCount].push(gridPhoto);
  });

  return columnsData;
};

const buildLayoutSegments = (photos: photoType[]): LayoutSegment[] => {
  const segments: LayoutSegment[] = [];
  let currentGridBatch: GridPhoto[] = [];

  photos.forEach((photo, index) => {
    if (photo.isFullWidth) {
      if (currentGridBatch.length > 0) {
        segments.push({ type: 'grid', photos: currentGridBatch });
        currentGridBatch = [];
      }
      segments.push({ type: 'fullWidth', photo, originalIndex: index });
      return;
    }

    currentGridBatch.push({ photo, originalIndex: index });
  });

  if (currentGridBatch.length > 0) {
    segments.push({ type: 'grid', photos: currentGridBatch });
  }

  return segments;
};

const PhotoAlbum = ({
  photos,
  columns = 2,
}: {
  photos: photoType[];
  columns?: number;
}) => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = useMemo(
    () =>
      photos.map((photo) => ({
        key: photo.id,
        src: photo.asset.url,
      })),
    [photos],
  );

  const openPhoto = (index: number) => {
    setActiveIndex(index);
    setVisible(true);
  };

  const showPhotoTitle = ({ index }: { index: number }) => {
    return (
      <span className="PhotoView-Slider__toolbarIcon">
        {photos[index].title}
      </span>
    );
  };

  const normalizedColumns = Math.max(1, Math.floor(columns));
  const layoutSegments = buildLayoutSegments(photos);

  return (
    <>
      <div className="flex flex-col gap-4 justify-center bg-light-primary">
        {layoutSegments.map((segment, segmentIndex) => {
          if (segment.type === 'fullWidth') {
            return (
              <PhotoAlbumItem
                key={`${segment.photo.id}-${segment.originalIndex}`}
                photo={segment.photo}
                onOpen={() => openPhoto(segment.originalIndex)}
              />
            );
          }

          const columnsData = distributeIntoColumns(
            segment.photos,
            normalizedColumns,
          );

          return (
            <div
              key={`grid-${segmentIndex}`}
              className="grid gap-4"
              style={{
                gridTemplateColumns: `repeat(${normalizedColumns}, minmax(0, 1fr))`,
              }}
            >
              {columnsData.map((columnPhotos, columnIndex) => (
                <div
                  key={`column-${segmentIndex}-${columnIndex}`}
                  className="flex flex-col gap-4"
                >
                  {columnPhotos.map(({ photo, originalIndex }) => (
                    <PhotoAlbumItem
                      key={`${photo.id}-${originalIndex}`}
                      photo={photo}
                      onOpen={() => openPhoto(originalIndex)}
                    />
                  ))}
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <PhotoSlider
        images={images}
        visible={visible}
        index={activeIndex}
        onIndexChange={setActiveIndex}
        onClose={() => setVisible(false)}
        toolbarRender={showPhotoTitle}
      />
    </>
  );
};

export default memo(PhotoAlbum);
