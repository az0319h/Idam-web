import type { Metadata } from "next";
import { freesentation } from "@/components/sites/a365/fonts";
import "./globals.css";
import "@/components/sites/a365/a365.css";

export const metadata: Metadata = {
  title: "이담건축",
  description: "이담건축은 경기 북부에서 목조·경량 철골 주택을 직접 짓습니다. 현장 상담과 방문은 무료입니다.",
  icons: { icon: "/sites/idam/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${freesentation.variable} h-full`}>
      <body className="a365 min-h-full flex flex-col">{children}</body>
    </html>
  );
}
