// app/layout.tsx
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Unitech Chemical Ltd.",
  description:
    "High-performance oilfield and process additives — made in China, trusted worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <header className="flex justify-between items-center py-6 border-b border-slate-200">
            <h1 className="font-bold text-xl">Unitech Chemical Ltd.</h1>
            <nav className="flex items-center gap-6 text-sm">
              <Link className="hover:text-blue-600" href="/">Home</Link>
              <Link className="hover:text-blue-600" href="/about">About Us</Link>
              <Link className="hover:text-blue-600" href="/products">Products</Link>
              <Link className="hover:text-blue-600" href="/contact">Contact</Link>
            </nav>
          </header>

          {/* Page content */}
          <main>{children}</main>

          {/* Footer */}
          <footer className="py-10 mt-16 border-t border-slate-200 text-sm text-slate-600">
            © {new Date().getFullYear()} Unitech Chemical Ltd. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
