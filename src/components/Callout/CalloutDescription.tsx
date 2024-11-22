import { HeadingTextDescription } from "@/types/types";
import { Heading, Section, Text } from "@radix-ui/themes";
import { Love_Light } from "next/font/google";

const lovelight = Love_Light({ weight: "400", subsets: ["latin"] });

export default function CalloutDescription({
  textSize,
  headingSize,
}: HeadingTextDescription) {
  return (
    <Section className="sm:text-center p-3">
      <Heading style={{ fontSize: headingSize, lineHeight: 1 }}>Hi!</Heading>
      <Text style={{ fontSize: textSize }} className="block">
        My name is Steve, <br /> I am from beautiful{" "}
        <span
          className={lovelight.className}
          style={{ fontSize: "35px", color: "#A1B4E4" }}
        >
          &
        </span>{" "}
        classy, <span style={{ color: "#A1B4E4" }}>San Diego</span>, California
      </Text>

      <Section className="pt-5 lg:p-8">
        <Text style={{ fontSize: "20px" }}>
          I am a Sr. Software Engineer specializing in React, Next.js,
          JavaScript, Typescript, Node.js{" "}
          <span
            className={lovelight.className}
            style={{ fontSize: "27px", color: "#A1B4E4" }}
          >
            &
          </span>{" "}
          AWS
        </Text>
      </Section>
    </Section>
  );
}
