import { photoType } from '@/helpers/types';
import Image from 'next/image';
import React from 'react'

import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';


const PhotoAlbum = ({ photos }: { photos: photoType[]}) => {
  return (
    <div className='flex flex-row flex-wrap p-4 gap-8 justify-center bg-light-primary'>
      <PhotoProvider>
        {photos.map((photo) => (
            <div
              key={photo.id}
              className={`${photo.width > photo.height ? 'flex-[35%] xl:flex-[40%]' : 'flex-[25%]'} flex flex-col gap-4`}
            >
              <PhotoView src={photo.url}>
                <Image
                  src={photo.url}
                  alt={`Photo of ${photo.fileName}`}
                  width={photo.width}
                  height={photo.height}
                />
              </PhotoView>
            </div>
          ))}
      </PhotoProvider>
    </div>
  )
}

export default PhotoAlbum