"use client";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { Section, Box, Heading, Text } from "@radix-ui/themes";
import { Fragment, useState } from "react";
import SelectionButtonGroup from "../SelectionButtonGroup";

export default function ProjectImageCampfire({ data }: any) {
  const [currentImageSrc, setCurrentImageSrc] = useState(
    data.image_thumbnail[0].src
  );
  const [currentImageFullSrc, setCurrentImageFullSrc] = useState(
    data.image_full[0].src
  );
  const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    const parent = target.parentNode as HTMLDivElement;
    const buttons = Array.from(parent.children);

    buttons.forEach((button: any) => {
      button.classList.remove("bg-slate-500");
      button.classList.add("bg-black");
    });

    target.classList.add("bg-slate-500");

    console.log("parent.children", parent.children);
    console.log("Array.from(parent.children)", Array.from(parent.children));

    const index = Array.from(parent.children).indexOf(target);

    const currentImageSrc = data.image_thumbnail[index];
    const currentImageFullSrc = data.image_full[index];

    setCurrentImageSrc(currentImageSrc.src);
    setCurrentImageFullSrc(currentImageFullSrc.src);
  };
  return (
    <Fragment>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <Image
            unoptimized
            src={currentImageSrc}
            width={400}
            height={316}
            alt="Campfire"
            className="w-full cursor-pointer collection-img"
          />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Box className="absolute z-50 right-8 top-8 text-md font-sans font-extralight">
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
            <Section className="sm:flex">
              <Box className="sm:w-full">
                <Image
                  unoptimized
                  src={currentImageFullSrc}
                  alt="Campfire"
                  width={1050}
                  height={590}
                  className="w-[1050px] mx-auto rounded-lg collection-img"
                />
              </Box>
              <Box className="p-8 sm:w-[312px]">
                <Section>
                  <Dialog.Title className="DialogTitle text-2xl">
                    <Heading className="text-2xl">Project</Heading>
                  </Dialog.Title>
                  <Text className="text-sm text-gray-400 block">
                    {data.name}
                  </Text>
                </Section>
                <Section className="pt-4">
                  <Dialog.Title className="DialogTitle text-2xl">
                    <Heading className="text-2xl">Team Size</Heading>
                  </Dialog.Title>
                  <Text className="text-sm text-gray-400 block">12</Text>
                </Section>
                <Section className="pt-4">
                  <Dialog.Title className="DialogTitle text-2xl">
                    <Heading className="text-2xl">Team Structure</Heading>
                  </Dialog.Title>
                  <Text className="text-sm text-gray-400 block">
                    <ul className="leading-normal">
                      <li>1. Product Owner - x2</li>
                      <li>2. Frontend Engineer - x4</li>
                      <li>3. Backend Engineer - x2</li>
                      <li>4. Project Manager - x2</li>
                      <li>5. Quality Assurance - x2</li>
                    </ul>{" "}
                  </Text>
                </Section>
              </Box>
            </Section>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      <SelectionButtonGroup onClick={handleOnClick} data={data} />
    </Fragment>
  );
}
