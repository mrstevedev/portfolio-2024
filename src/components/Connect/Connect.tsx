import Link from "next/link";
import { URL } from "@/constants/index";
import { Heading, Section } from "@radix-ui/themes";
import EmailConnect from "@/components/Connect/Email/EmailConnect";
import GithubConnect from "@/components/Connect/Github/GithubConnect";
import LinkedInConnect from "@/components/Connect/LinkedIn/LinkedInConnect";
import { HeadingText } from "@/types/types";

export default function LetsConnect({ headingSize }: HeadingText) {
  return (
    <Section className="text-center p-2">
      <Heading style={{ fontSize: headingSize }}>{`Let's connect`}</Heading>
      <Section className="flex justify-center items-center gap-4 p-2">
        <Link href={URL.URL_MAIL} target="_blank">
          <EmailConnect />
        </Link>
        <Link href={URL.URL_GITHUB} target="_blank">
          <GithubConnect />
        </Link>
        <Link href={URL.URL_LINKEDIN} target="_blank">
          <LinkedInConnect />
        </Link>
      </Section>
    </Section>
  );
}
