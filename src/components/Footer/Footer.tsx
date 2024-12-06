import { Box, Text } from "@radix-ui/themes";
import { Allura } from "next/font/google";
const allura = Allura({ weight: "400", subsets: ["latin"] });

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <Box
      className="bg-black w-full h-26 p-3 fixed bottom-0 flex items-center gap-2"
      style={{ justifyContent: "flex-end" }}
    >
      <Text className="text-white text-xs">© {date}</Text>
      <Text className={allura.className}>Steven Pulido</Text>
    </Box>
  );
}
