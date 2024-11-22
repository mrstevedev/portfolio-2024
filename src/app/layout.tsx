import type { Metadata } from "next";
import { Junge } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import Providers from "@/providers/providers";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Theme } from "@radix-ui/themes";

const junge = Junge({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Steven Pulido | Senior Frontend Software Engineer | San Diego, California",
  description:
    "I am a Sr. Software Engineer specializing in React, Next.js, JavaScript, Typescript, Node.js & AWS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ borderTop: "solid 4px #000" }}>
      <body className={junge.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
