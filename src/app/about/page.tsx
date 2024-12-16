/* eslint-disable @next/next/no-img-element */
import { Box, Container, Flex, Heading, Section, Text } from "@radix-ui/themes";
import { Love_Light } from "next/font/google";
import collectionTwo from "@/public/images/collection2.webp";
import Link from "next/link";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";

const lovelight = Love_Light({ weight: "400", subsets: ["latin"] });

export default function page() {
  return (
    <Container className="p-4 lg:p-32 xl:w-[1200px] mx-auto">
      <Flex>
        <Box className="w-full">
          {" "}
          <h1 className="lg:w-[550px] mx-auto text-2xl">About Me</h1>
          <p className="lg:w-[550px] mx-auto leading-7">
            I am a developer from San Diego, California. I have worked in
            various industries from Telecommunications, Health{" "}
            <span
              className={lovelight.className}
              style={{ fontSize: "24px", color: "#A1B4E4" }}
            >
              &{" "}
            </span>
            Wellness, Automotive, with E-Commerce being my current project in{" "}
            <strong>BBP Music Library</strong>.
          </p>
          <br />
          <p className="lg:w-[550px] mx-auto leading-7">
            When I&apos;m not coding, I&apos;m enjoying a San Diego Padres
            baseball game, record shopping or listening to vinyl records from my
            vinyl record collection.
          </p>
        </Box>
      </Flex>
      <Flex className="pt-4">
        <Box className="m-auto flex flex-col">
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Image
                unoptimized
                src={collectionTwo}
                alt="My Vinyl Record Collection"
                width={550}
                height={412}
                className="w-[550px] mx-auto rounded-lg cursor-pointer collection-img"
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
                      src={collectionTwo}
                      alt="My Vinyl Record Collection"
                      width={1050}
                      height={912}
                      className="w-[1050px] mx-auto rounded-lg collection-img"
                    />
                  </Box>
                  <Box className="p-8 sm:w-[312px]">
                    <Section>
                      <Heading className="text-2xl">Location</Heading>
                      <Text className="text-sm text-gray-400 block">
                        My music studio - San Diego, California
                      </Text>
                    </Section>
                    <Section className="pt-4">
                      <Heading className="text-2xl">Camera</Heading>
                      <Text className="text-sm text-gray-400 block">
                        Nikon D3500
                      </Text>
                    </Section>
                    <Section className="pt-4">
                      <Heading className="text-2xl">Year</Heading>
                      <Text className="text-sm text-gray-400 block">2024</Text>
                    </Section>
                  </Box>
                </Section>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>

          <Flex className="m-auto w-full items-center">
            <p className="mx-auto m-[0.5rem] text-sm italic w-full">
              The photo above is my vinyl record collection
            </p>
          </Flex>

          <Box className="m-auto w-full">
            <Link
              href="https://www.discogs.com/user/eckosneekz"
              target="_blank"
              className="text-xs border-b hover:border-0 active:bg-slate-700 p-0.3"
            >
              I&apos;m on Discogs!
            </Link>
          </Box>
          <Box className="m-auto w-full">
            <Link
              href="https://www.instagram.com/spdaillkid"
              target="_blank"
              className="text-xs border-b hover:border-0 active:bg-slate-700 p-0.3"
            >
              I&apos;m on Instagram!
            </Link>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
