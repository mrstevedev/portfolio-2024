import { Love_Light } from "next/font/google";
import { Box, Container, Flex } from "@radix-ui/themes";
import Rivian from "@/components/Projects/Rivian/Rivian";
import BbpMusicLibrary from "@/components/Projects/BBPMusicLibrary/BbpMusicLibrary";
const lovelight = Love_Light({ weight: "400", subsets: ["latin"] });

export default function Projects() {
  return (
    <Container className="p-4 lg:p-32 xl:w-[700px] mx-auto">
      <h1 className="text-center text-2xl">My Recent Projects</h1>
      <p className="text-center text-lg">
        Below are a few of my current{" "}
        <span
          className={lovelight.className}
          style={{ fontSize: "24px", color: "#A1B4E4" }}
        >
          &
        </span>{" "}
        past projects
      </p>

      <Box className="m-4">
        <Flex className="gap-4 justify-center items-center">
          <BbpMusicLibrary />
          <Rivian />
        </Flex>
      </Box>
    </Container>
  );
}
