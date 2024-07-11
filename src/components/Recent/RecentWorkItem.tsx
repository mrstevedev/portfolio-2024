import { Box, Grid, Section, Text } from "@radix-ui/themes";
import { Love_Light } from "next/font/google";
import { Fragment } from "react";

const lovelight = Love_Light({ weight: "400", subsets: ["latin"] });

export type RecentWorkItem = {
  item: {
    id: number;
    company: string;
    title: string;
    date: string;
  };
};

export default function RecentWorkItem({ item }: RecentWorkItem) {
  const { id, company, title, date } = item;
  return (
    <Grid
      style={{ display: "grid", gridTemplateColumns: "2fr 1fr" }}
      className="grid-item"
    >
      <Box>
        <Text style={{ fontSize: "16px" }} className="block">
          {company}
        </Text>
        <Text style={{ fontSize: "14px" }} className="block">
          {title}
        </Text>
        <Text style={{ fontSize: "12px" }} className="block">
          {date}
        </Text>
      </Box>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <Box>
            <span
              className={lovelight.className}
              style={{ fontSize: "24px", color: "#A1B4E4" }}
            >
              &
            </span>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
}
