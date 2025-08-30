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
      en: `Founded in 2006, Unitech Chemical Ltd. produces high-quality drilling fluid additives... (shortened)`,
      zh: `开平联技化工有限公司成立于2006年，主要生产高品质钻井液添加剂... （简化版）`,
    },
    contact: {
      en: {
        title: "Contact Us",
        company: "Unitech Chemical Ltd.",
        address: "Baisha Town, Kaiping, Guangdong, China",
        phone: "Tel: +86-750-2510777",
        email: "E-mail: uck@unitechkp.com",
      },
      zh: {
        title: "联系我们",
        company: "开平联技化工有限公司",
        address: "广东省开平市百合镇中调",
        phone: "电话: +86-750-2510777",
        email: "邮箱: uck@unitechkp.com",
      },
    },
    footer: {
      en: "© 2018–2024 Unitech Chemical Ltd. All rights reserved.",
      zh: "© 2018–2024 开平联技化工有限公司 版权所有 粤ICP备18098169号",
    },
  };

  const current = lang === "en" ? t : { ...t, ...Object.fromEntries(Object.entries(t).map(([k,v]:any)=>[k, Object.fromEntries(Object.entries(v).map(([kk,vv]:any)=>[kk,vv.zh]))])) };

  return (
    <div className="min-h-screen font-sans text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 border-b bg-white sticky top-0">
        <div className="font-bold">{current.brand}</div>
        <div className="flex gap-6">
          <a href="#about">{current.nav.about}</a>
          <a href="#products">{current.nav.products}</a>
          <a href="#contact">{current.nav.contact}</a>
        </div>
        <button
          className="px-3 py-1 border rounded"
          onClick={() => setLang(lang === "en" ? "zh" : "en")}
        >
          {lang === "en" ? "中文" : "EN"}
        </button>
      </nav>

      {/* Hero */}
      <header className="text-center py-20 bg-gradient-to-r from-blue-50 to-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold"
        >
          {current.tagline}
        </motion.h1>
      </header>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold mb-4">{current.nav.about}</h2>
        <p className="leading-relaxed">{current.about[lang]}</p>
      </section>

      {/* Products */}
      <section id="products" className="bg-gray-50 py-16 px-6">
        <h2 className="text-2xl font-bold mb-6">{current.nav.products}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { code: "Dynamul-P", name: { en: "Primary Emulsifier", zh: "主乳化剂" }, spec: "180KG" },
            { code: "Dyna-LUBE", name: { en: "Lubricant", zh: "润滑剂" }, spec: "200KG" },
            { code: "CMS-HT", name: { en: "Viscosifier", zh: "高温淀粉" }, spec: "25KG" },
          ].map((p) => (
            <div key={p.code} className="p-4 bg-white border rounded shadow-sm">
              <h3 className="font-semibold">{p.name[lang]}</h3>
              <p>{lang === "en" ? "Product Code" : "产品代号"}: {p.code}</p>
              <p>{lang === "en" ? "Package" : "包装规格"}: {p.spec}</p>
              <button className="mt-2 px-3 py-1 bg-blue-600 text-white rounded">
                {lang === "en" ? "More" : "详情"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6 bg-white">
        <h2 className="text-2xl font-bold mb-4">{current.contact[lang].title}</h2>
        <p>{current.contact[lang].company}</p>
        <p>{current.contact[lang].address}</p>
        <p>{current.contact[lang].phone}</p>
        <p>{current.contact[lang].email}</p>
        <form className="mt-4 grid gap-3 max-w-md">
          <input type="text" placeholder={lang==="en"?"Your Name":"姓名"} className="border p-2 rounded"/>
          <input type="email" placeholder={lang==="en"?"Your Email":"邮箱"} className="border p-2 rounded"/>
          <textarea placeholder={lang==="en"?"Message":"留言"} className="border p-2 rounded"></textarea>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            {lang==="en"?"Submit":"提交"}
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm bg-gray-100">
        {current.footer[lang]}
      </footer>
    </div>
  );
}
