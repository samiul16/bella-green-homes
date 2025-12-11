import { House } from "../_types/type";

// Using high-quality placeholder images and videos
export const HOUSE_DATA: House[] = [
  {
    id: "1",
    series: "M SERIES",
    name: "Adina",
    status: "AWARD WINNER",
    facadeImage: "/landing/2.avif",
    facadeImagePoster: "/landing/2.avif", // Shows while video loads
    facadeVideo: "/landing/1.mp4",
    floorplanImage: "/landing/floorplan-1.png",
    specs: {
      beds: 4,
      baths: 2,
      powder: 1,
      living: 1,
      cars: 2,
      widthSq: 12.5,
    },
    dimensions: {
      width: "10.9m",
      depth: "23.2m",
      totalArea: "222.3m²",
    },
  },
  {
    id: "2",
    series: "J SERIES",
    name: "Brighton",
    status: "JUST RELEASED",
    facadeImage: "/landing/4.avif",
    facadeImagePoster: "/landing/4.avif", // Shows while video loads
    facadeVideo: "/landing/3.mp4",
    floorplanImage: "/landing/floorplan-2.jpg",
    specs: {
      beds: 4,
      baths: 2,
      powder: 0,
      living: 2,
      cars: 2,
      widthSq: 13.3,
    },
    dimensions: {
      width: "11.5m",
      depth: "20m",
      totalArea: "227.3m²",
    },
  },
  {
    id: "3",
    series: "M SERIES",
    name: "Chevron",
    status: "DUPLEX",
    facadeImage: "/landing/5.avif",
    facadeImagePoster: "/landing/5.avif", // Shows while video loads
    facadeVideo: "/landing/6.mp4",
    floorplanImage: "/landing/floorplan-3.png",
    specs: {
      beds: 8,
      baths: 4,
      powder: 2,
      living: 4,
      cars: 2,
      widthSq: 23,
    },
    dimensions: {
      width: "20.1m",
      depth: "12.5m",
      totalArea: "426.2m²",
    },
  },
];
