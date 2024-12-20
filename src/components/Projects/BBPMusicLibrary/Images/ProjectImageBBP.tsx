"use client";
import Image from "next/image";

export default function ProjectImageBBP({ data }: any) {
  return (
    <>
      {data?.images.map((image: any) => {
        return (
          <Image
            unoptimized
            key={image}
            src={image.src}
            width={400}
            height={315}
            alt={data.name}
            className="w-full collection-img"
          />
        );
      })}
    </>
  );
}
