import { photoType } from '@/helpers/types';
import Image from 'next/image';
import React from 'react'

const PhotoAlbum = ({ photos }: { photos: photoType[]}) => {
  const onImageClick = () => {

    
  }

  return (
    <div className='flex flex-row flex-wrap p-4 gap-8 justify-center bg-light-primary'>
      {photos.map((photo) => {
        return (
          <div
            key={photo.id}
            className={`${photo.width > photo.height ? 'flex-[35%]' : 'flex-[25%]'} flex flex-col gap-4`}
            onClick={() => onImageClick()}
          >
            <Image
              src={photo.url}
              alt={`Photo of ${photo.fileName}`}
              width={photo.width}
              height={photo.height}
            />
          </div>
        );
      })}
    </div>
  )
}

export default PhotoAlbum