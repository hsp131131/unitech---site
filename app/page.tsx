"use client";

import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState<"en" | "zh">("en");

  const t = {
    brand: {
      en: "Unitech Chemical Ltd.",
      zh: "开平联技化工有限公司",
    },
    tagline: {
      en: "High-Performance Oilfield And Process Additives — Made In China, Trusted Worldwide",
      zh: "高性能油田和化工助剂 — 中国制造，全球信赖。",
    },
    welcome: {
      en: "Sincerely welcome customers from home and abroad to cooperate sincerely and develop together.",
      zh: "热诚欢迎国内外客户精诚合作，共同发展。",
    },
    about: {
      en: `Founded in 2006, Unitech Chemical Ltd. spans an area of 78,000 sqm and specializes in drilling fluid additives and fine chemicals. 
Located in Kaiping City, Guangdong Province — at the heart of the Greater Bay Area — the company benefits from excellent transport links. 
Our products are exported to more than 50 countries worldwide and trusted by global leaders such as Schlumberger, Baker Hughes, and Halliburton, 
as well as major national oil corporations including CNPC, Sinopec, and CNOOC.`,
      zh: `开平联技化工有限公司成立于2006年，占地面积78,000平方米，主要生产经营油田钻井液助剂及精细化工产品。
公司位于广东省开平市，地处粤港澳大湾区核心地带，交通便利。
产品远销50多个国家，主要客户包括斯伦贝谢、贝克休斯、哈里伯顿，
以及中石油、中石化和中海油等国内主要石油公司。`,
    },
    appearance: {
      en: `We maintain an experienced team specializing in R&D, manufacturing, and technical support. 
Our portfolio includes water-based additives (fluid loss reducers, shale inhibitors, viscosifiers, lubricants) 
and fully integrated oil-based drilling fluid systems. These systems are user-friendly, easy to maintain in the field, 
and deliver excellent performance.`,
      zh: `公司拥有经验丰富的研发、制造和现场技术支持团队。
产品组合涵盖水基钻井液助剂（降滤失剂、页岩抑制剂、增粘剂、润滑剂）及完整的水基体系，
同时生产油基/合成基钻井液体系（主/辅乳化剂、润湿剂、增粘剂、降滤失剂），
配方简单，维护方便，应用效果卓越。`,
    },
    certifications: {
      en: `Recognitions include: Tier-1 Network Supplier of Oilfield Chemicals, CNPC Product Quality Certification, 
Sinopec Oilfield Chemicals Resource Market Member, Gold Supplier to CNOOC, National High-Tech Enterprise, 
Recipient of National Innovation Fund, and more. Certified under QMS, EMS, and OHSMS standards.`,
      zh: `荣誉与认证包括：油田化学剂供应一级网络成员、中石油产品质量认可、
中石化油田化学剂资源市场成员、中海油金牌供应商、国家高新技术企业、
国家科技型中小企业技术创新基金获得者等。通过QMS、EMS和OHSMS体系认证。`,
    },
    products: {
      en: "Industry Products",
      zh: "行业产品",
    },
    productList: {
      en: [
        "Dynamul-P — Primary Emulsifier for Oil-Base Mud",
        "Dynamul-S — Secondary Emulsifier for Oil-Base Mud",
        "Dynamul-HW — High-Temperature One-Drum Emulsifier",
        "Dynamul-HT — High-Temperature Emulsifier for Oil & Synthetic Mud",
        "Dyna-HRP — Organoclay Activator",
        "Dynamod — Rheology Modifier",
        "Dynawet — Wetting Agent for Oil-Base Mud",
        "Dynagel-83 — High-Temperature Organophilic Clay",
        "TP-L4 — Organophilic Lignite Product",
        "TP-L3 — Organophilic Lignite Product",
        "Dynagel-83 Plus — Super High-Temperature Clay",
        "GD18 Plus — Starch Product",
        "DYNA-LUBE — Water-Based Mud Lubricant",
        "CACL-VIS — Modified Starch for Calcium Chloride Mud",
        "CMS-HT — Crosslinked & Carboxymethyl Starch",
        "FLO-TROL — Non-Ionic Crosslinked Starch",
        "CMS — Carboxymethyl Starch",
      ],
      zh: [
        "Dynamul-P — 油基泥浆主乳化剂",
        "Dynamul-S — 油基泥浆辅乳化剂",
        "Dynamul-HW — 高温一桶式乳化剂",
        "Dynamul-HT — 高温油基/合成基乳化剂",
        "Dyna-HRP — 有机土活化剂",
        "Dynamod — 流变调节剂",
        "Dynawet — 油基泥浆润湿剂",
        "Dynagel-83 — 高温有机膨润土",
        "TP-L4 — 有机褐煤产品",
        "TP-L3 — 有机褐煤产品",
        "Dynagel-83 Plus — 超高温有机膨润土",
        "GD18 Plus — 淀粉产品",
        "DYNA-LUBE — 水基润滑剂",
        "CACL-VIS — 钙盐钻井液专用改性淀粉",
        "CMS-HT — 交联羧甲基淀粉",
        "FLO-TROL — 非离子交联淀粉",
        "CMS — 羧甲基淀粉",
      ],
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
  };

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-gray-100 shadow">
        <h1 className="font-bold text-xl">{t.brand[lang]}</h1>
        <nav className="flex gap-6">
          <a href="#about">{lang === "en" ? "About Us" : "关于我们"}</a>
          <a href="#products">{lang === "en" ? "Products" : "产品"}</a>
          <a href="#contact">{lang === "en" ? "Contact" : "联系我们"}</a>
        </nav>
        <button
          className="border px-3 py-1 rounded"
          onClick={() => setLang(lang === "en" ? "zh" : "en")}
        >
          {lang === "en" ? "中文" : "EN"}
        </button>
      </header>

      {/* Hero */}
      <section className="text-center py-16 bg-gradient-to-b from-blue-50 to-white">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-snug max-w-4xl mx-auto capitalize">
          {t.tagline[lang]
            .split(" — ")
            .map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
        </h2>
        <p className="text-lg mb-6">{t.welcome[lang]}</p>
        <button className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-8 py-3 rounded-lg shadow-md">
          {lang === "en" ? "Request Consultation" : "立即咨询"}
        </button>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">{lang === "en" ? "About Us" : "关于我们"}</h2>
        <p className="text-gray-700 whitespace-pre-line">{t.about[lang]}</p>
        <p className="text-gray-700 mt-4 whitespace-pre-line">{t.appearance[lang]}</p>
        <p className="text-gray-700 mt-4 whitespace-pre-line">{t.certifications[lang]}</p>
      </section>

      {/* Products */}
      <section id="products" className="bg-gray-50 py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">{t.products[lang]}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {t.productList[lang].map((product, i) => (
            <div key={i} className="p-4 border rounded shadow-sm bg-white">
              {product}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6">
        <h2 className="text-2xl font-bold mb-6">{t.contact[lang].title}</h2>
        <p>{t.contact[lang].company}</p>
        <p>{t.contact[lang].address}</p>
        <p>{t.contact[lang].phone}</p>
        <p>{t.contact[lang].email}</p>
        <form className="mt-6 max-w-lg">
          <input
            type="text"
            placeholder={lang === "en" ? "Your Name" : "姓名"}
            className="w-full border p-2 rounded mb-3"
          />
          <input
            type="email"
            placeholder={lang === "en" ? "Your Email" : "邮箱"}
            className="w-full border p-2 rounded mb-3"
          />
          <textarea
            placeholder={lang === "en" ? "Message" : "留言"}
            className="w-full border p-2 rounded mb-3"
            rows={4}
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
            {lang === "en" ? "Submit" : "提交"}
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm bg-gray-100">
        © 2025 {t.brand[lang]}. All rights reserved.
      </footer>
    </div>
  );
}
