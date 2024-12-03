"use client";
import { usePathname } from "next/navigation";
import Logo from "@/components/Header/Logo/Logo";
import { Box, Container, Flex } from "@radix-ui/themes";
import Link from "next/link";

export default function Header() {
  const pathname = usePathname();

  return (
    <Container size="1" className="p-5">
      <Flex className="flex">
        <Box className="w-full"></Box>
        <Box>
          <Link href="/" className={pathname === "/" ? "color-slate-500" : ""}>
            <Logo />
          </Link>
        </Box>
        <Box className="flex w-full" style={{ justifyContent: "flex-end" }}>
          <ul className="flex items-center gap-4">
            <Link
              href="/"
              className={`hover:text-gray-300 hover:transition-all ${
                pathname === "/" ? "text-[#a1b4e4]" : ""
              }`}
            >
              <li>Home</li>
            </Link>
            <Link
              href="/about"
              className={`hover:text-gray-300 hover:transition-all ${
                pathname === "/about" ? "text-[#a1b4e4]" : ""
              }`}
            >
              <li>About</li>
            </Link>
            <Link
              href="/projects"
              className={`hover:text-gray-300 hover:transition-all ${
                pathname === "/projects" ? "text-[#a1b4e4]" : ""
              }`}
            >
              <li>Projects</li>
            </Link>
          </ul>
        </Box>
      </Flex>
    </Container>
  );
}
