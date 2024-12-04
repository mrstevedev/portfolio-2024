import { Container } from "@radix-ui/themes";
import LetsConnect from "@/components/Connect/Connect";
import CalloutDescription from "@/components/Callout/CalloutDescription";
import RecentWork from "@/components/Recent/RecentWork";
import PhotoGallery from "@/components/Photography/Gallery/PhotoGallery";

export default function Home() {
  return (
    <Container className="p-4 lg:p-32">
      <CalloutDescription headingSize="50px" textSize="33px" />
      <LetsConnect headingSize="18px" />
      <RecentWork headingSize="20px" />
      <PhotoGallery headingSize="20px" textSize="13px" />
    </Container>
  );
}
