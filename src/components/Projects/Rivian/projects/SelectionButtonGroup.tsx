import { Box } from "@radix-ui/themes";
import { Fragment } from "react";

export default function SelectionButtonGroup({ onClick, data }: any) {
  return (
    <Fragment>
      <Box className="justify-center mt-8 mb-4 w-full flex gap-2 mx-auto">
        {data?.image_thumbnail.map((img: any, index: number) => {
          if (index === 0) {
            return (
              <Box
                key={img.src}
                onClick={onClick}
                className="w-9 h-0.5 bg-slate-500 cursor-pointer"
              ></Box>
            );
          }
          return (
            <Box
              key={img.src}
              onClick={onClick}
              className="w-9 h-0.5 bg-black cursor-pointer"
            ></Box>
          );
        })}
      </Box>
    </Fragment>
  );
}
