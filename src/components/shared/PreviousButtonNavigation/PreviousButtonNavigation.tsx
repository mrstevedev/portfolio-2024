"use client";
import Link from "next/link";
import { Fragment } from "react";
import { useRouter } from "next/navigation";
import { DoubleArrowLeftIcon } from "@radix-ui/react-icons";
import { Flex } from "@radix-ui/themes";

export default function PreviousButtonNavigation() {
  const router = useRouter();
  return (
    <Fragment>
      {" "}
      <Flex className="items-center w-80 gap-1">
        <Link href="#" onClick={() => router.back()}>
          <DoubleArrowLeftIcon />{" "}
        </Link>
        <Link
          href="#"
          onClick={() => router.back()}
          className="hover:underline"
        >
          Back to projects
        </Link>
      </Flex>
    </Fragment>
  );
}
