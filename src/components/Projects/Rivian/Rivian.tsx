import rivianLogo from "@/public/rivian-logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Rivian() {
  return (
    <div>
      <Link href={`/project/rivian-automotive`}>
        <Image
          src={rivianLogo}
          width={130}
          height={130}
          alt="Rivian Automotive Web Application development"
          priority
          className=""
        />
      </Link>
      <p className="text-center">Rivian Automotive</p>
    </div>
  );
}
