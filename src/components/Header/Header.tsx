import Logo from "@/components/Header/Logo/Logo";
import { Box, Container, Flex } from "@radix-ui/themes";
import ThemeToggle from "@/components/Header/DarkLightToggle/ThemeToggle";
import Link from "next/link";

export default function Header() {
  return (
    <Container size="1" className="p-5">
      <Flex className="flex">
        <Box className="w-full"></Box>
        <Box>
          <Link href="/">
            <Logo />
          </Link>
        </Box>
        <Box className="flex w-full" style={{ justifyContent: "flex-end" }}>
          <ThemeToggle />
        </Box>
      </Flex>
    </Container>
  );
}
