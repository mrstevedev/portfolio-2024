import { HeadingText } from "@/types/types";
import { Container, Grid, Heading, Section } from "@radix-ui/themes";
import RecentWorkItem from "@/components/Recent/RecentWorkItem";

export default function RecentWork({ headingSize }: HeadingText) {
  return (
    <Section
      className="sm:flex sm:justify-center sm:items-center sm:relative sm:p-8 sm:w-[788px] sm:mx-auto"
      style={{ left: "5.6rem" }}
    >
      <Container>
        <Heading style={{ fontSize: headingSize }} className="pb-1">
          Recent Work
        </Heading>

        <Grid style={{ display: "flex" }}>
          {recent.map((data) => (
            <RecentWorkItem key={data.id} item={data} />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

const recent = [
  {
    id: 1,
    company: "BBP Music Library",
    title: "Software Engineer",
    date: "July 2020 - Present",
  },
  {
    id: 2,
    company: "Rivian Automotive",
    title: "Software Engineer",
    date: "November 2021 - August 2024",
  },
  {
    id: 3,
    company: "Vistage Worldwide",
    title: "Software Developer",
    date: "May 2019 - June 2020",
  },
];
