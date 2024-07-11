import { Box, Text } from "@radix-ui/themes";
import { Allura } from "next/font/google";
const allura = Allura({ weight: "400", subsets: ["latin"] });

export default function Footer() {
  return (
    <Box
      className="bg-black w-full h-26 p-3 fixed bottom-0 flex"
      style={{ justifyContent: "flex-end" }}
    >
      <Text className={allura.className}>&copy;2024 Steven Pulido</Text>
    </Box>
  );
}
