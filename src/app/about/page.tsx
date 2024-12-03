/* eslint-disable @next/next/no-img-element */
import { Box, Container, Flex } from "@radix-ui/themes";
import { Love_Light } from "next/font/google";
import collectionTwo from "@/public/images/collection2.jpg";
import Link from "next/link";

const lovelight = Love_Light({ weight: "400", subsets: ["latin"] });

export default function page() {
  return (
    <Container className="p-4 lg:p-32 xl:w-[1200px] mx-auto">
      <Flex>
        <Box className="w-full">
          {" "}
          <h1 className="w-[550px] mx-auto text-2xl">About Me</h1>
          <p className="w-[550px] mx-auto leading-7">
            I am a developer from San Diego, California. I have worked in
            various industries from Telecommunications, Heath{" "}
            <span
              className={lovelight.className}
              style={{ fontSize: "24px", color: "#A1B4E4" }}
            >
              &
            </span>{" "}
            Wellness, Automotive, with E-Commerce being my current project in{" "}
            <strong>BBP Music Library</strong>.
          </p>
          <br />
          <p className="w-[550px] mx-auto leading-7">
            When I&apos;m not coding, I&apos;m enjoying a San Diego Padres
            baseball game, record shopping or listening to vinyl records from my
            vinyl record collection.
          </p>
        </Box>
      </Flex>
      <Flex className="pt-4">
        <Box className="m-auto flex flex-col">
          <img
            src={collectionTwo.src}
            alt="My Vinyl Record Collection"
            width={550}
            height={550}
            className="w-[550px] mx-auto rounded-lg transition-all hover:opacity-90"
          />
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
