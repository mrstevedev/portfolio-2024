import { HeadingText } from "@/types/types";
import { Container, Grid, Heading, Section } from "@radix-ui/themes";
import RecentWorkItem from "@/components/Recent/RecentWorkItem";

export default function RecentWork({ headingSize }: HeadingText) {
  return (
    <Section
      className="flex justify-center items-center relative p-8"
      style={{
        left: "5.6rem",
        margin: "0 auto",
        width: "788px",
      }}
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
    title: "Sr. Software Engineer",
    date: "June 2021 - Present",
  },
  {
    id: 2,
    company: "Rivian Automotive",
    title: "Sr. Software Engineer",
    date: "November 2021 - June 2024",
  },
  {
    id: 3,
    company: "Vistage Worldwide",
    title: "Software Developer",
    date: "May 2019 - June 2020",
  },
];
