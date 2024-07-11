import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { HeadingTextDescription } from "@/types/types";
import {
  Box,
  Container,
  Heading,
  IconButton,
  Section,
  Text,
} from "@radix-ui/themes";
import { photos } from "@/components/Photography/Gallery/PhotoData";
import PhotoGalleryItem from "@/components/Photography/Gallery/PhotoGalleryItem";

export default function PhotographyGallery({
  headingSize,
  textSize,
}: HeadingTextDescription) {
  return (
    <Section style={{ width: "600px", margin: "0 auto" }} className="pt-4">
      <Box className="flex justify-start pl-8 pr-8 p-4">
        <Container>
          <Heading style={{ fontSize: headingSize }}>Photography</Heading>
          <Text style={{ fontSize: textSize }}>
            Photos I have taken over the years with my{" "}
            <span style={{ color: "#A1B4E4" }}>Nikon-D3500</span>
          </Text>
        </Container>
      </Box>
      <Box className="pl-8 flex gap-4">
        {photos.map((data) => (
          <Dialog.Root key={data.id}>
            <Dialog.Trigger asChild>
              <Link href="#">
                <PhotoGalleryItem key={data.id} photo={data} />
              </Link>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Box
                className="absolute"
                style={{
                  zIndex: 9,
                  right: "2rem",
                  top: "2rem",
                  fontSize: "1.2rem",
                  fontFamily: "fantasy",
                }}
              >
                <Dialog.Close>
                  <Link href="#">
                    <button className="IconButton" aria-label="Close">
                      x
                    </button>
                  </Link>
                </Dialog.Close>
              </Box>
              <Dialog.Overlay className="DialogOverlay" />
              <Dialog.Content className="DialogContent">
                <Section className="flex">
                  <Box>
                    <img
                      src={data.cloudfrontUrl.src}
                      width={data.cloudfrontUrl.width}
                      height={data.cloudfrontUrl.height}
                      alt={data.alt}
                      className="rounded-lg"
                    />
                  </Box>
                  <Box className="p-8 w-[312px]">
                    <Section className="pt-4">
                      <Heading className="text-2xl">Location</Heading>
                      <Text className="text-sm text-gray-400 block">
                        {data.location}
                      </Text>
                    </Section>
                    <Section className="pt-4">
                      <Heading className="text-2xl">Camera</Heading>
                      <Text className="text-sm text-gray-400 block">
                        {data.camera}
                      </Text>
                    </Section>
                    <Section className="pt-4">
                      <Heading className="text-2xl">Year</Heading>
                      <Text className="text-sm text-gray-400 block">
                        {data.year}
                      </Text>
                    </Section>

                    {/* Next/Prev Buttons */}
                    {/* <Section>
                      <IconButton className="block" variant="soft">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ width: "25px", height: "25px" }}
                        >
                          <path
                            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                            fill="currentColor"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </IconButton>
                      <IconButton className="block">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ width: "25px", height: "25px" }}
                        >
                          <path
                            d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                            fill="currentColor"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </IconButton>
                    </Section> */}
                  </Box>
                </Section>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        ))}
      </Box>
    </Section>
  );
}
