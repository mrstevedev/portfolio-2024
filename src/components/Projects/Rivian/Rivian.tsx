import rivianLogo from "@/public/rivian-logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Rivian() {
  return (
    <div className="collection-img">
      <Link href={`/project/rivian-automotive`}>
        <Image
          src={rivianLogo}
          width={130}
          height={130}
          alt="Rivian Automotive Web Application development"
          priority
        />
      </Link>
      <p className="text-center">Rivian Automotive</p>
    </div>
  );
}
