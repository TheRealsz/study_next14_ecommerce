import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce | NextJS 14 Study",
  description: "Project to apply the concepts of NextJS 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={`bg-zinc-950 text-zinc-50 antialiased ${inter.className}`}>{children}</body>
    </html>
  );
}
