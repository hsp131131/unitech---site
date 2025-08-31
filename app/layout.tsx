import "./globals.css";

export const metadata = {
  title: "Unitech Chemical – 高性能化学助剂",
  description:
    "High-performance additives for oil & gas and industrial applications. 全球供应，高品质助剂。",
  icons: { icon: "/assets/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
