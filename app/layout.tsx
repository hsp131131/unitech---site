import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Unitech Chemical – 高性能化学助剂",
  description:
    "High-performance chemical additives for oil & gas and industrial applications. 全球供应，高品质助剂。",
  icons: { icon: "/assets/favicon.ico" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
