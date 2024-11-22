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
          <ul className="flex items-center gap-4">
            <Link href="/" className="hover:text-gray-300 hover:transition-all">
              <li>Home</li>
            </Link>
            <Link
              href="/about"
              className="hover:text-gray-300 hover:transition-all"
            >
              <li>About</li>
            </Link>
            <Link
              href="/projects"
              className="hover:text-gray-300 hover:transition-all"
            >
              <li>Projects</li>
            </Link>
          </ul>
          {/* <ThemeToggle /> */}
        </Box>
      </Flex>
    </Container>
  );
}
