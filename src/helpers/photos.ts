import { photoType } from './types';

/** Sort key for creation order: numeric filenames by value, "imgNNN" / "lp_NN" by number, else by string */
function creationSortKey(photo: photoType): number | string {
  const base = photo.asset.fileName.replace(/\.[^.]+$/, '');
  const numericMatch = base.match(/^\d+$/);
  if (numericMatch) return parseInt(base, 10);
  const imgMatch = base.match(/^img(\d+)$/i);
  if (imgMatch) return 1e10 + parseInt(imgMatch[1], 10);
  const lpMatch = base.match(/^lp_(\d+)$/i);
  if (lpMatch) return 2e10 + parseInt(lpMatch[1], 10); // sort lp_* after img*
  return base;
}

const allPhotosUnsorted: photoType[] = [
  {
    id: 'photo-1-000001840002-jpg',
    alt: '000001840002',
    title: '000001840002',
    asset: {
      fileName: '000001840002.jpg',
      url: '/assets/photos/000001840002.jpg',
      width: 2048,
      height: 1358,
      thumbnailSrc: '/assets/photos/thumbnails/000001840002.jpg',
    },
  },
  {
    id: 'photo-2-000001840008-jpg',
    alt: '000001840008',
    title: '000001840008',
    asset: {
      fileName: '000001840008.jpg',
      url: '/assets/photos/000001840008.jpg',
      width: 2048,
      height: 1358,
      thumbnailSrc: '/assets/photos/thumbnails/000001840008.jpg',
    },
  },
  {
    id: 'photo-3-000001840017-jpg',
    alt: '000001840017',
    title: '000001840017',
    asset: {
      fileName: '000001840017.jpg',
      url: '/assets/photos/000001840017.jpg',
      width: 2048,
      height: 1358,
      thumbnailSrc: '/assets/photos/thumbnails/000001840017.jpg',
    },
  },
  {
    id: 'photo-4-000001840026-jpg',
    alt: '000001840026',
    title: '000001840026',
    asset: {
      fileName: '000001840026.jpg',
      url: '/assets/photos/000001840026.jpg',
      width: 2048,
      height: 1358,
      thumbnailSrc: '/assets/photos/thumbnails/000001840026.jpg',
    },
  },
  {
    id: 'photo-5-000006470027-jpg',
    alt: '000006470027',
    title: '000006470027',
    asset: {
      fileName: '000006470027.jpg',
      url: '/assets/photos/000006470027.jpg',
      width: 2048,
      height: 1358,
      thumbnailSrc: '/assets/photos/thumbnails/000006470027.jpg',
    },
  },
  {
    id: 'photo-6-000039480023-jpg',
    alt: '000039480023',
    title: '000039480023',
    asset: {
      fileName: '000039480023.jpg',
      url: '/assets/photos/000039480023.jpg',
      width: 1357,
      height: 2048,
      thumbnailSrc: '/assets/photos/thumbnails/000039480023.jpg',
    },
  },
  {
    id: 'photo-7-000039490017-jpg',
    alt: '000039490017',
    title: '000039490017',
    asset: {
      fileName: '000039490017.jpg',
      url: '/assets/photos/000039490017.jpg',
      width: 2048,
      height: 1358,
      thumbnailSrc: '/assets/photos/thumbnails/000039490017.jpg',
    },
  },
  {
    id: 'photo-8-000039490023-jpg',
    alt: '000039490023',
    title: '000039490023',
    asset: {
      fileName: '000039490023.jpg',
      url: '/assets/photos/000039490023.jpg',
      width: 2048,
      height: 1358,
      thumbnailSrc: '/assets/photos/thumbnails/000039490023.jpg',
    },
  },
  {
    id: 'photo-9-000048260014-jpg',
    alt: '000048260014',
    title: '000048260014',
    asset: {
      fileName: '000048260014.jpg',
      url: '/assets/photos/000048260014.jpg',
      width: 2048,
      height: 1358,
      thumbnailSrc: '/assets/photos/thumbnails/000048260014.jpg',
    },
  },
  {
    id: 'photo-10-000048260020-jpg',
    alt: '000048260020',
    title: '000048260020',
    asset: {
      fileName: '000048260020.jpg',
      url: '/assets/photos/000048260020.jpg',
      width: 1358,
      height: 2048,
      thumbnailSrc: '/assets/photos/thumbnails/000048260020.jpg',
    },
  },
  {
    id: 'photo-11-000048260023-jpg',
    alt: '000048260023',
    title: '000048260023',
    asset: {
      fileName: '000048260023.jpg',
      url: '/assets/photos/000048260023.jpg',
      width: 1358,
      height: 2048,
      thumbnailSrc: '/assets/photos/thumbnails/000048260023.jpg',
    },
  },
  {
    id: 'photo-12-000086630004-jpg',
    alt: '000086630004',
    title: '000086630004',
    asset: {
      fileName: '000086630004.jpg',
      url: '/assets/photos/000086630004.jpg',
      width: 1358,
      height: 2048,
      thumbnailSrc: '/assets/photos/thumbnails/000086630004.jpg',
    },
  },
  {
    id: 'photo-13-000086630010-jpg',
    alt: '000086630010',
    title: '000086630010',
    asset: {
      fileName: '000086630010.jpg',
      url: '/assets/photos/000086630010.jpg',
      width: 1358,
      height: 2048,
      thumbnailSrc: '/assets/photos/thumbnails/000086630010.jpg',
    },
  },
  {
    id: 'photo-14-000086630016-jpg',
    alt: '000086630016',
    title: '000086630016',
    asset: {
      fileName: '000086630016.jpg',
      url: '/assets/photos/000086630016.jpg',
      width: 2048,
      height: 1358,
      thumbnailSrc: '/assets/photos/thumbnails/000086630016.jpg',
    },
  },
  {
    id: 'photo-15-lp-13-jpg',
    alt: 'Lp 13',
    title: 'Lp 13',
    asset: {
      fileName: 'lp_13.jpg',
      url: '/assets/photos/lp_13.jpg',
      width: 2048,
      height: 1358,
      thumbnailSrc: '/assets/photos/thumbnails/lp_13.jpg',
    },
  },
  {
    id: 'photo-16-img016-jpg',
    alt: 'Img016',
    title: 'Img016',
    asset: {
      fileName: 'img016.jpg',
      url: '/assets/photos/img016.jpg',
      width: 1323,
      height: 2048,
      thumbnailSrc: '/assets/photos/thumbnails/img016.jpg',
    },
  },

  {
    id: 'photo-18-img032-jpg',
    alt: 'Img032',
    title: 'Img032',
    asset: {
      fileName: 'img032.jpg',
      url: '/assets/photos/img032.jpg',
      width: 1364,
      height: 2048,
      thumbnailSrc: '/assets/photos/thumbnails/img032.jpg',
    },
  },
  {
    id: 'photo-19-img035-jpg',
    alt: 'Img035',
    title: 'Img035',
    asset: {
      fileName: 'img035.jpg',
      url: '/assets/photos/img035.jpg',
      width: 2048,
      height: 1379,
      thumbnailSrc: '/assets/photos/thumbnails/img035.jpg',
    },
  },
  {
    id: 'photo-20-img071-jpg',
    alt: 'Img071',
    title: 'Img071',
    asset: {
      fileName: 'img071.jpg',
      url: '/assets/photos/img071.jpg',
      width: 1355,
      height: 2048,
      thumbnailSrc: '/assets/photos/thumbnails/img071.jpg',
    },
  },
  {
    id: 'photo-21-lp-01-jpg',
    alt: 'Lp 01',
    title: 'Lp 01',
    asset: {
      fileName: 'lp_01.jpg',
      url: '/assets/photos/lp_01.jpg',
      width: 1358,
      height: 2048,
      thumbnailSrc: '/assets/photos/thumbnails/lp_01.jpg',
    },
  },
  {
    id: 'photo-22-lp-02-jpg',
    alt: 'Lp 02',
    title: 'Lp 02',
    asset: {
      fileName: 'lp_02.jpg',
      url: '/assets/photos/lp_02.jpg',
      width: 2048,
      height: 1358,
      thumbnailSrc: '/assets/photos/thumbnails/lp_02.jpg',
    },
  },
  {
    id: 'photo-23-lp-03-jpg',
    alt: 'Lp 03',
    title: 'Lp 03',
    asset: {
      fileName: 'lp_03.jpg',
      url: '/assets/photos/lp_03.jpg',
      width: 2048,
      height: 1357,
      thumbnailSrc: '/assets/photos/thumbnails/lp_03.jpg',
    },
  },
  {
    id: 'photo-24-lp-04-jpg',
    alt: 'Lp 04',
    title: 'Lp 04',
    asset: {
      fileName: 'lp_04.jpg',
      url: '/assets/photos/lp_04.jpg',
      width: 1356,
      height: 2048,
      thumbnailSrc: '/assets/photos/thumbnails/lp_04.jpg',
    },
  },
  {
    id: 'photo-25-lp-05-jpg',
    alt: 'Lp 05',
    title: 'Lp 05',
    asset: {
      fileName: 'lp_05.jpg',
      url: '/assets/photos/lp_05.jpg',
      width: 1442,
      height: 2048,
      thumbnailSrc: '/assets/photos/thumbnails/lp_05.jpg',
    },
  },
  {
    id: 'photo-26-lp-06-jpg',
    alt: 'Lp 06',
    title: 'Lp 06',
    asset: {
      fileName: 'lp_06.jpg',
      url: '/assets/photos/lp_06.jpg',
      width: 1365,
      height: 2048,
      thumbnailSrc: '/assets/photos/thumbnails/lp_06.jpg',
    },
  },
  {
    id: 'photo-27-lp-07-jpg',
    alt: 'Lp 07',
    title: 'Lp 07',
    asset: {
      fileName: 'lp_07.jpg',
      url: '/assets/photos/lp_07.jpg',
      width: 2048,
      height: 1350,
      thumbnailSrc: '/assets/photos/thumbnails/lp_07.jpg',
    },
  },
  {
    id: 'photo-28-lp-08-jpg',
    alt: 'Lp 08',
    title: 'Lp 08',
    asset: {
      fileName: 'lp_08.jpg',
      url: '/assets/photos/lp_08.jpg',
      width: 2048,
      height: 1381,
      thumbnailSrc: '/assets/photos/thumbnails/lp_08.jpg',
    },
  },
  {
    id: 'photo-29-lp-09-jpg',
    alt: 'Lp 09',
    title: 'Lp 09',
    asset: {
      fileName: 'lp_09.jpg',
      url: '/assets/photos/lp_09.jpg',
      width: 1358,
      height: 2048,
      thumbnailSrc: '/assets/photos/thumbnails/lp_09.jpg',
    },
  },
  {
    id: 'photo-30-lp-10-jpg',
    alt: 'Lp 10',
    title: 'Lp 10',
    asset: {
      fileName: 'lp_10.jpg',
      url: '/assets/photos/lp_10.jpg',
      width: 1358,
      height: 2048,
      thumbnailSrc: '/assets/photos/thumbnails/lp_10.jpg',
    },
  },
  {
    id: 'photo-31-lp-11-jpg',
    alt: 'Lp 11',
    title: 'Lp 11',
    asset: {
      fileName: 'lp_11.jpg',
      url: '/assets/photos/lp_11.jpg',
      width: 2048,
      height: 1358,
      thumbnailSrc: '/assets/photos/thumbnails/lp_11.jpg',
    },
  },
  {
    id: 'photo-32-lp-12-jpg',
    alt: 'Lp 12',
    title: 'Lp 12',
    asset: {
      fileName: 'lp_12.jpg',
      url: '/assets/photos/lp_12.jpg',
      width: 1358,
      height: 2048,
      thumbnailSrc: '/assets/photos/thumbnails/lp_12.jpg',
    },
  },
];

function compareByCreation(a: photoType, b: photoType): number {
  const ka = creationSortKey(a);
  const kb = creationSortKey(b);
  if (typeof ka === 'number' && typeof kb === 'number') return ka - kb;
  if (typeof ka === 'number') return -1;
  if (typeof kb === 'number') return 1;
  return String(ka).localeCompare(String(kb));
}

export const allPhotos: photoType[] = [...allPhotosUnsorted].sort(
  compareByCreation,
);

export const levendulaPiknikWebsitePhotos: photoType[] = [
  {
    id: 'website-levendulapiknik-1',
    alt: 'Levendula Piknik Website',
    title: 'Levendula Piknik Website',
    asset: {
      fileName: 'levendulapiknik.com_1.png',
      url: '/assets/websites/levendulapiknik.com_1.png',
      width: 1920,
      height: 1080,
    },
  },
];

export const hazepitesekWebsitePhotos: photoType[] = [
  {
    id: 'website-hazepitesek-1',
    alt: 'Házépítések Website - Page 1',
    title: 'Házépítések Website - Page 1',
    asset: {
      fileName: 'hazepitesek.hu_1.png',
      url: '/assets/websites/hazepitesek.hu_1.png',
      width: 1920,
      height: 1080,
    },
  },
  {
    id: 'website-hazepitesek-2',
    alt: 'Házépítések Website - Page 2',
    title: 'Házépítések Website - Page 2',
    asset: {
      fileName: 'hazepitesek.hu_2.png',
      url: '/assets/websites/hazepitesek.hu_2.png',
      width: 1920,
      height: 1080,
    },
  },
];

export const benifilmWebsitePhotos: photoType[] = [
  {
    id: 'website-benifilm-1',
    alt: 'Benifilm Website - Page 1',
    title: 'Benifilm Website - Page 1',
    asset: {
      fileName: 'benifilm.com_1.png',
      url: '/assets/websites/benifilm.com_1.png',
      width: 1920,
      height: 1080,
    },
  },
  {
    id: 'website-benifilm-2',
    alt: 'Benifilm Website - Page 2',
    title: 'Benifilm Website - Page 2',
    asset: {
      fileName: 'benifilm.com_2.png',
      url: '/assets/websites/benifilm.com_2.png',
      width: 1920,
      height: 1080,
    },
  },
];

export const gyubenWebsitePhotos: photoType[] = [
  {
    id: 'website-gyuben-1',
    alt: 'gyuben.com Website',
    title: 'gyuben.com Website',
    asset: {
      fileName: 'gyuben.com_1.png',
      url: '/assets/websites/gyuben.com_1.png',
      width: 1920,
      height: 1080,
    },
  },
];

export const mindenamifavagasWebsitePhotos: photoType[] = [
  {
    id: 'website-mindenamifavagas-1',
    alt: 'Mindenamifavágás Website - Page 1',
    title: 'Mindenamifavágás Website - Page 1',
    asset: {
      fileName: 'mindenamifavagas.hu_1.png',
      url: '/assets/websites/mindenamifavagas.hu_1.png',
      width: 1920,
      height: 1080,
    },
  },
  {
    id: 'website-mindenamifavagas-2',
    alt: 'Mindenamifavágás Website - Page 2',
    title: 'Mindenamifavágás Website - Page 2',
    asset: {
      fileName: 'mindenamifavagas.hu_2.png',
      url: '/assets/websites/mindenamifavagas.hu_2.png',
      width: 1920,
      height: 1080,
    },
  },
];

export const pressfitnessWebsitePhotos: photoType[] = [
  {
    id: 'website-pressfitness-1',
    alt: 'Press Fitness Website',
    title: 'Press Fitness Website',
    asset: {
      fileName: 'pressfitness.hu_1.png',
      url: '/assets/websites/pressfitness.hu_1.png',
      width: 1920,
      height: 1080,
    },
  },
  {
    id: 'website-pressfitness-2',
    alt: 'Press Fitness Website',
    title: 'Press Fitness Website',
    asset: {
      fileName: 'pressfitness.hu_2.png',
      url: '/assets/websites/pressfitness.hu_2.png',
      width: 1920,
      height: 1080,
    },
  },
];

export const portfolioWebsitePhotos: photoType[] = [
  {
    id: 'website-agocsvince-1',
    alt: 'agocsvince.com 1.0',
    title: 'agocsvince.com 1.0',
    asset: {
      fileName: 'agocsvince.com_1.png',
      url: '/assets/websites/agocsvince.com_1.png',
      width: 1920,
      height: 1080,
    },
  },
  {
    id: 'website-agocsvince-2',
    alt: 'agocsvince.com 1.0',
    title: 'agocsvince.com 1.0',
    asset: {
      fileName: 'agocsvince.com_2.png',
      url: '/assets/websites/agocsvince.com_2.png',
      width: 1920,
      height: 1080,
    },
  },
  {
    id: 'website-agocsvince-3',
    alt: 'agocsvince.com 1.0',
    title: 'agocsvince.com 1.0',
    asset: {
      fileName: 'agocsvince.com_3.png',
      url: '/assets/websites/agocsvince.com_3.png',
      width: 1920,
      height: 1080,
    },
  },
  {
    id: 'website-agocsvince-4',
    alt: 'agocsvince.com 1.0',
    title: 'agocsvince.com 1.0',
    asset: {
      fileName: 'agocsvince.com_4.png',
      url: '/assets/websites/agocsvince.com_4.png',
      width: 1920,
      height: 1080,
    },
  },
];
