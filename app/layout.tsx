import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
const inter = Inter({ subsets: ["latin"] });
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
export const metadata: Metadata = {
  title: "Houssem Mehouachi",
  description:
    "Houssem Mehouachi is a web developer with experience in React, TypeScript, and Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" >
      <body className={`${inter.className} bg-bg-gradient text-gray-950 relative h-[3000px] pt-11 sm:pt-11 `}>
        {/*    <div
          className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"
        ></div>
          <div
          className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
        ></div> */}
        <div className=" absolute -top-11 h-full w-full -z-10 overflow-hidden p-0 m-0 ">

        </div>

        <Header />

        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
