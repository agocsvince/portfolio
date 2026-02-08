const fs = require('fs');
const path = require('path');
const { imageSize } = require('image-size');

const photosDir = path.join(__dirname, '../public/assets/photos');
const files = fs.readdirSync(photosDir).filter(file => 
  /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
);

const photos = files.map((fileName, index) => {
  const filePath = path.join(photosDir, fileName);
  const buffer = fs.readFileSync(filePath);
  const dimensions = imageSize(buffer);
  
  const id = `photo-${index + 1}-${fileName.replace(/[^a-zA-Z0-9]/g, '-')}`;
  const title = fileName
    .replace(/\.[^/.]+$/, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());
  
  return {
    id,
    alt: title,
    title: title,
    asset: {
      fileName,
      url: `/assets/photos/${fileName}`,
      width: dimensions.width,
      height: dimensions.height,
    },
  };
});

console.log(JSON.stringify(photos, null, 2));
