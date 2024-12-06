import Image, { StaticImageData } from "next/image";
import React from "react";

export type Photo = {
  photo: {
    id: number;
    location: string;
    camera: string;
    year: string;
    thumbnail: StaticImageData;
    cloudfrontUrl: StaticImageData;
    alt: string;
  };
};

export default function PhotoGalleryItem({ photo }: Photo) {
  return (
    <Image
      unoptimized
      src={photo.thumbnail.src}
      width={149}
      height={98}
      alt={photo.alt}
      className="collection-img"
    />
  );
}
