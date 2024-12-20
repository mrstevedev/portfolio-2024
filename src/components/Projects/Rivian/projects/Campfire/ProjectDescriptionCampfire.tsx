import { Text } from "@radix-ui/themes";

export default function ProjectDescriptionCampfire({ data }: any) {
  return (
    <Text
      className="text-lg leading-7 mb-8"
      dangerouslySetInnerHTML={{ __html: data?.description as string }}
    />
  );
}
