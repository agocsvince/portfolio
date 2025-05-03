import { photoType } from '@/helpers/types';
import Image from 'next/image';
import React, { memo } from 'react'

import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';


const PhotoAlbum = ({ photos }: { photos: photoType[]}) => {
  return (
    <div className='flex flex-row flex-wrap p-4 gap-8 justify-center bg-light-primary'>
      <PhotoProvider
        toolbarRender={({ index }) => {
          return <span className="PhotoView-Slider__toolbarIcon" >{photos[index].title}</span>;
      }}>
        {photos.map((photo) => (
            <div
              key={photo.id}
              className={`${photo.asset.width > photo.asset.height ? 'flex-[35%] xl:flex-[40%]' : 'flex-[25%]'} flex flex-col gap-4`}
            >
              <PhotoView src={photo.asset.url}>
                <Image
                  src={photo.asset.url}
                  alt={photo.alt}
                  width={photo.asset.width}
                  height={photo.asset.height}
                />
                {/* TODO: add image description */}
              </PhotoView>
            </div>
          ))}
      </PhotoProvider>
    </div>
  )
}

export default memo(PhotoAlbum);