"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [lang, setLang] = useState<"en" | "zh">("en");

  const t = {
    brand: {
      en: "Unitech Chemical Ltd.",
      zh: "开平联技化工有限公司",
    },
    tagline: {
      en: "High-performance oilfield and process additives — made in China, trusted worldwide.",
      zh: "高性能油田和化工助剂 — 中国制造，全球信赖。",
    },
    nav: {
      about: { en: "About Us", zh: "关于我们" },
      products: { en: "Products", zh: "行业产品" },
      contact: { en: "Contact", zh: "联系我们" },
    },
    about: {
      en: `Founded in 2006, Unitech Chemical Ltd. produces high-quality drilling fluid additives and specialty chemicals for oilfield and industrial applications.`,
      zh: `开平联技化工有限公司成立于2006年，主要生产高品质钻井液添加剂和精细化工产品。`,
    },
    contact: {
      en: {
        title: "Contact Us",
        company: "Unitech Chemical Ltd.",
        address: "Kaiping City, Guangdong Province, China",
        phone: "+86 750 2510777",
        email: "uck@uniteckp.com",
      },
      zh: {
        title: "联系我们",
        company: "开平联技化工有限公司",
        address: "中国广东省开平市",
        phone: "+86 750 2510777",
        email: "uck@uniteckp.com",
      },
    },
    footer: {
      en: "© 2025 Unitech Chemical Ltd. All rights reserved.",
      zh: "© 2025 开平联技化工有限公司 版权所有。",
    },
  };

  return (
    <div>
      {/* Header */}
      <header className="p-6 flex justify-between items-center border-b">
        <h1 className="text-xl font-bold">{t.brand[lang]}</h1>
        <nav className="flex gap-6">
          <a href="#about">{t.nav.about[lang]}</a>
          <a href="#products">{t.nav.products[lang]}</a>
          <a href="#contact">{t.nav.contact[lang]}</a>
        </nav>
        <button
          className="ml-4 border px-2 py-1 rounded"
          onClick={() => setLang(lang === "en" ? "zh" : "en")}
        >
          {lang === "en" ? "中文" : "EN"}
        </button>
      </header>

      {/* Hero */}
      <section className="text-center py-16">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold"
        >
          {t.tagline[lang]}
        </motion.h2>
      </section>

      {/* About */}
      <section id="about" className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-4">{t.nav.about[lang]}</h2>
        <p className="text-lg">{t.about[lang]}</p>
      </section>

      {/* Products */}
      <section id="products" className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">
          {t.nav.products[lang]}
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-4 border rounded shadow">
            <h3 className="font-semibold">
              {lang === "en" ? "Oil-Based Drilling Fluid Additives" : "油基钻井液材料"}
            </h3>
            <p>{lang === "en" ? "Reliable solutions for oilfield operations." : "油田作业的可靠解决方案。"}</p>
          </div>
          <div className="p-4 border rounded shadow">
            <h3 className="font-semibold">
              {lang === "en" ? "Water-Based Drilling Fluid Additives" : "水基钻井液材料"}
            </h3>
            <p>{lang === "en" ? "Eco-friendly, high-performance additives." : "环保高性能的添加剂。"}</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-white">
        <h2 className="text-2xl font-bold mb-6">{t.contact[lang].title}</h2>
        <p>{t.contact[lang].company}</p>
        <p>{t.contact[lang].address}</p>
        <p>{t.contact[lang].phone}</p>
        <p>{t.contact[lang].email}</p>

        <form className="mt-6 grid gap-4 max-w-md">
          <input
            type="text"
            placeholder={lang === "en" ? "Your Name" : "姓名"}
            className="border p-2 rounded"
          />
          <input
            type="email"
            placeholder={lang === "en" ? "Your Email" : "邮箱"}
            className="border p-2 rounded"
          />
          <textarea
            placeholder={lang === "en" ? "Message" : "留言"}
            className="border p-2 rounded"
            rows={4}
          />
          <button className="bg-blue-600 text-white py-2 rounded">
            {lang === "en" ? "Submit" : "提交"}
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm bg-gray-100">
        {t.footer[lang]}
      </footer>
    </div>
  );
}
