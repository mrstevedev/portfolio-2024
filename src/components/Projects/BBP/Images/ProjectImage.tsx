"use client";
import Image from "next/image";

export default function ProjectImage({ data }: any) {
  return (
    <>
      {data?.images.map((image: any) => {
        return (
          <img
            key={image}
            src={image.src}
            width={400}
            height={400}
            alt={data.name}
            className="w-full"
          />
        );
      })}
    </>
  );
}
