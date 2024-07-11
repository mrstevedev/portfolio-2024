import { Heading, Section, Text } from "@radix-ui/themes";
import Link from "next/link";

export default function NotFound() {
  return (
    <Section className="text-center h-100 ">
      <Heading className="text-3xl">404</Heading>
      <Text className="text-xl block">
        The page you were <br /> looking for is not here
      </Text>

      <Text className="text-xl">
        <Link href="/" style={{ color: "#A1B4E4" }}>
          Back to the homepage
        </Link>
      </Text>
    </Section>
  );
}
