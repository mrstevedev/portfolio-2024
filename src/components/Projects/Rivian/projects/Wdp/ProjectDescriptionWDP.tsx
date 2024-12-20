import { Text } from "@radix-ui/themes";

export default function ProjectCard({ data }: any) {
  return (
    <Text
      className="text-lg leading-7"
      dangerouslySetInnerHTML={{ __html: data?.description as string }}
    />
  );
}
