export enum MediaType {
  IMAGE = "image",
  VIDEO = "video",
}

export interface SlideData {
  id: number;
  type: MediaType;
  src: string;
  posterImage?: string; // Poster image for video while loading
  title: string;
  subtitle: string;
  ctaText: string;
}

export enum ViewMode {
  FACADE = "FACADE",
  FLOORPLAN = "FLOORPLAN",
}

export interface HouseSpecs {
  beds: number;
  baths: number;
  powder: number;
  living: number;
  cars: number;
  widthSq: number; // For the icon with measuring tape
}

export interface HouseDimensions {
  width: string;
  depth: string;
  totalArea: string;
}

export interface House {
  id: string;
  series: string;
  name: string;
  status?: string; // e.g. "AWARD WINNER", "JUST RELEASED", "DUPLEX"
  facadeImage: string;
  facadeImagePoster?: string; // Poster image for facade video while loading
  facadeVideo: string;
  floorplanImage: string;
  specs: HouseSpecs;
  dimensions: HouseDimensions;
}
