import { SetStateAction } from 'react';

export type portfolioType = {
  buttons: string[];
  email: string;
  heading: string;
  postHeading: string;
  intro: string;
  preHeading: string;
  portrait: assetType;
  photos: photoType[];
  videos: videoType[];
};

export interface photoType extends assetType {
  height: number;
  width: number;
}

export interface videoType {
  id: string;
  date: `${number}-${number}-${number}`;
  type: string;
  title: string;
  description: string | null;
  asset: assetType;
  url: string;
}

export type assetType = {
  fileName: string;
  id: string;
  url: string;
  mimeType?: string;
};

type switchColorType =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning';

export type switcherPropsType<T> = {
  state: T;
  setState: React.Dispatch<SetStateAction<T>>;
  labels: [string, string];
  color?: switchColorType;
  className?: string;
};
