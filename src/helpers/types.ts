import { SetStateAction } from "react";

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

type switchColorType = "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning"

export type switcherPropsType<T> = { state: T; setState: React.Dispatch<SetStateAction<T>>, labels: [string, string], color?: switchColorType }