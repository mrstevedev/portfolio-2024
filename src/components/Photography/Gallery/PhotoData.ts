import theRayImage from "@/public/images/the_ray.png";
import crystalLakeDark from "@/public/images/crystal_lake_dark.png";
import crystalLakeLight from "@/public/images/crystal_lake_light.png";

import theRayImageFull from "@/public/images/the_ray_apartments.webp";
import crystalLakeDarkFull from "@/public/images/crystal_lake_dark.webp";
import crystalLakeLightFull from "@/public/images/crystal_lake_light.webp";

export const photos = [
  {
    id: 1,
    location: "The Ray Apartments Downtown San Diego, CA",
    camera: "Nikon D3500",
    year: "June 6, 2017",
    thumbnail: theRayImage,
    cloudfrontUrl: theRayImageFull,
    alt: "The Ray Apartments",
  },
  {
    id: 2,
    location: "Crystal Lake",
    camera: "Nikon D3500",
    year: "November 6, 2017",
    thumbnail: crystalLakeDark,
    cloudfrontUrl: crystalLakeDarkFull,
    alt: "Crystal Lake 1",
  },
  {
    id: 3,
    location: "Crystal Lake",
    camera: "Nikon D3500",
    year: "November 6, 2017",
    thumbnail: crystalLakeLight,
    cloudfrontUrl: crystalLakeLightFull,
    alt: "Crystal Lake 2",
  },
];
