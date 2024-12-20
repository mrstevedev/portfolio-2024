import bbpLogo from "@/public/bbp-logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function BbpMusicLibrary() {
  return (
    <div className="collection-img">
      <Link href={`/project/bbp-music-library`}>
        <Image
          src={bbpLogo}
          alt="Bonita Basics Productions Music Library"
          width={200}
          height={200}
          priority
        />
      </Link>
      <p className="text-center">BBP Music Library</p>
    </div>
  );
}
