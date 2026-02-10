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
  webProjects: webProject[];
  footer: footerType;
};

export type webProject = {
  url: string;
  gitUrl: string | null;
  techStack: string[];
  id: string;
};

export type footerType = {
  links: linkType[];
  copyrightText: string;
};

export type linkType = {
  title: string;
  url: string;
  id: string;
};
export interface photoType {
  asset: assetType & {
    width: number;
    height: number;
    thumbnailSrc?: string;
  };
  alt: string;
  title: string;
  id: string;
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
  id?: string;
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
  disabled?: boolean;
};
