export type portfolioType = {
  buttons: string[];
  email: string;
  heading: string;
  postHeading: string;
  preHeading: string;
  portrait: assetType;
  photos: assetType[];
  videos: assetType[];
};

type assetType = {
  fileName: string;
  id: string;
  url: string;
};
