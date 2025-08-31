"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import "./globals.css";

type Lang = "en" | "zh";

const t = {
  brand: { en: "Unitech Chemical Ltd.", zh: "开平联技化工有限公司" },
  nav: {
    home: { en: "Home", zh: "首页" },
    about: { en: "About Us", zh: "关于我们" },
    products: { en: "Products", zh: "产品中心" },
    contact: { en: "Contact", zh: "联系我们" },
  },
  footer: {
    rights: {
      en: "All rights reserved.",
      zh: "版权所有。",
    },
  },
  langBtn: { en: "中文", zh: "EN" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState<Lang>("en");

  // Load saved language on first render
  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "zh") {
      setLang(saved);
    }
  }, []);

  // Persist language + set <html lang="">
  useEffect(() => {
    localStorage.setItem("lang", lang);
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {/* Top navigation */}
        <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-200">
          <nav className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight">
              {t.brand[lang]}
            </Link>

            <div className="flex items-center gap-6 text-sm">
              <Link href="/" className="hover:underline">
                {t.nav.home[lang]}
              </Link>
              <Link href="/about" className="hover:underline">
                {t.nav.about[lang]}
              </Link>
              <Link href="/products" className="hover:underline">
                {t.nav.products[lang]}
              </Link>
              <Link href="/contact" className="hover:underline">
                {t.nav.contact[lang]}
              </Link>

              <button
                className="ml-2 h-9 rounded-lg border px-3 hover:bg-slate-50"
                onClick={() => setLang((p) => (p === "en" ? "zh" : "en"))}
                aria-label="Toggle language"
                title="Toggle language"
              >
                {t.langBtn[lang]}
              </button>
            </div>
          </nav>
        </header>

        {/* Page content wrapper */}
        <main className="min-h-[70vh]">
          {/* top spacer for sticky header on very small screens */}
          <div className="h-2" aria-hidden />
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-3">
            <div>© {new Date().getFullYear()} {t.brand[lang]}</div>
            <div>{t.footer.rights[lang]}</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
