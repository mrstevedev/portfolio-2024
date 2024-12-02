import { Box, Container, Flex } from "@radix-ui/themes";
import { Love_Light } from "next/font/google";
import Image from "next/image";
import vinylImg from "@/public/images/vinyl_image.webp";
import collectionOne from "@/public/images/collection1.jpg";
import collectionTwo from "@/public/images/collection2.jpg";

const lovelight = Love_Light({ weight: "400", subsets: ["latin"] });

export default function page() {
  return (
    <Container className="p-4 lg:p-32 xl:w-[1200px] mx-auto">
      <Flex className="flex">
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
        <Box className="w-full">
          <Image
            src={collectionTwo}
            alt="My Vinyl Record Collection"
            width={550}
            height={550}
            className="w-[550px] mx-auto rounded-lg"
          />
          <p className="w-[550px] mx-auto mt-[0.5rem] text-sm italic">
            The photo above is my vinyl record collection
          </p>
        </Box>
      </Flex>
    </Container>
  );
}
