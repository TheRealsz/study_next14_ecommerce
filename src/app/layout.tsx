import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Define o template para o metadata (alguma coisa | NextJS 14 Study), juntamente com um título padrão caso não seja passado
export const metadata: Metadata = {
  title: {
    template: "%s | NextJS 14 Study",
    default: "NextJS 14 Study",
  },
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
