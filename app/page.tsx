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
      en: "High-performance oilfield and process additives — made in China, trusted worldwide.",
      zh: "高性能油田和化工助剂 — 中国制造，全球信赖。",
    },
    welcome: {
      en: "Sincerely welcome customers from home and abroad to cooperate sincerely and develop together.",
      zh: "热诚欢迎国内外客户精诚合作，共同发展。",
    },
    about: {
      en: `Founded in 2006 with a registered capital of RMB 25.8 million, Unitech Chemical Ltd. 
      spans an area of 78,000 sqm and specializes in drilling fluid additives and fine chemicals. 
      Located in Kaiping City, Guangdong, at the heart of the Greater Bay Area, the company benefits 
      from excellent transport links. Our products are exported to 50+ countries worldwide and trusted 
      by global leaders such as Schlumberger, Baker Hughes, and Halliburton, as well as CNPC, Sinopec, and CNOOC.`,
      zh: `开平联技化工有限公司成立于2006年，占地面积78,000平方米，注册资金2584.89万元，
      主要生产经营油田钻井液助剂及精细化工产品。公司位于粤港澳大湾区核心地带，交通便利。
      产品远销亚洲、美洲、非洲、欧洲等50多个国家，是斯伦贝谢、贝克休斯、哈里伯顿等国际巨头，
      以及中石油、中石化、中海油等国内能源集团的重要合作伙伴。`,
    },
    appearance: {
      en: `We maintain an experienced team in R&D, manufacturing, and technical support. 
      Our portfolio includes water-based and oil-based drilling fluid systems featuring 
      emulsifiers, wetting agents, viscosifiers, and fluid loss control agents. 
      These systems are user-friendly, reliable, and field-proven. 
      Certifications include QMS, EMS, and OHSMS.`,
      zh: `公司拥有经验丰富的技术研发、生产制造及现场技术支持团队。
      产品组合包括水基与油基钻井液体系，涵盖乳化剂、润湿剂、增粘剂及降滤失剂等。
      体系配方简单、维护方便、效果卓越。公司通过了质量管理体系(QMS)、环境管理体系(EMS)、
      职业健康安全管理体系(OHSMS)认证。`,
    },
    products: {
      en: [
        { name: "Dynamul-P", desc: "Primary Emulsifier for Oil-Base Mud", spec: "180KG/drum" },
        { name: "Dynamul-S", desc: "Secondary Emulsifier for Oil-Base Mud", spec: "KG/drum" },
        { name: "Dynamul-HW", desc: "High-Temperature One-Drum Emulsifier", spec: "180KG/drum" },
        { name: "Dynamul-HT", desc: "High-Temperature Emulsifier for Oil & Synthetic Mud", spec: "KG/drum" },
        { name: "Dyna-HRP", desc: "Organoclay Activator", spec: "200KG/barrel" },
        { name: "Dynamod", desc: "Rheology Modifier", spec: "170KG/barrel" },
        { name: "Dynawet", desc: "Wetting Agent for Oil-Base Mud", spec: "180KG/drum" },
        { name: "Dynagel-83", desc: "High-Temp Organophilic Clay", spec: "25KG/bag" },
        { name: "TP-L3", desc: "Organophilic Lignite Product", spec: "25KG/bag" },
        { name: "TP-L4", desc: "Organophilic Lignite Product", spec: "25KG/bag" },
        { name: "Dynagel-83 Plus", desc: "Super High-Temp Organophilic Clay", spec: "25KG/bag" },
        { name: "GD18 Plus", desc: "Specialty Starch Product", spec: "25KG/bag" },
        { name: "DYNA-LUBE", desc: "Water-base Mud Lubricant", spec: "200KG/drum" },
        { name: "CACL-VIS", desc: "Modified Starch for Calcium Chloride Drilling", spec: "25KG/bag" },
        { name: "CMS-HT", desc: "Crosslinked Carboxymethyl Starch", spec: "25KG/bag" },
        { name: "FLO-TROL", desc: "Non-ionic Crosslinked Starch", spec: "25KG/bag" },
        { name: "CMS", desc: "Carboxymethyl Starch", spec: "25KG/bag" },
      ],
      zh: [
        { name: "Dynamul-P", desc: "油基泥浆用主乳化剂", spec: "180KG/桶" },
        { name: "Dynamul-S", desc: "油基泥浆用辅乳化剂", spec: "KG/桶" },
        { name: "Dynamul-HW", desc: "高温单桶乳化剂", spec: "180KG/桶" },
        { name: "Dynamul-HT", desc: "高温乳化剂（油基/合成基）", spec: "KG/桶" },
        { name: "Dyna-HRP", desc: "有机膨润土活化剂", spec: "200KG/桶" },
        { name: "Dynamod", desc: "流变调节剂", spec: "170KG/桶" },
        { name: "Dynawet", desc: "油基泥浆润湿剂", spec: "180KG/桶" },
        { name: "Dynagel-83", desc: "高温有机土", spec: "25KG/袋" },
        { name: "TP-L3", desc: "有机褐煤降滤失剂", spec: "25KG/袋" },
        { name: "TP-L4", desc: "有机褐煤降滤失剂", spec: "25KG/袋" },
        { name: "Dynagel-83 Plus", desc: "超高温有机土", spec: "25KG/袋" },
        { name: "GD18 Plus", desc: "专用改性淀粉产品", spec: "25KG/袋" },
        { name: "DYNA-LUBE", desc: "水基泥浆润滑剂", spec: "200KG/桶" },
        { name: "CACL-VIS", desc: "氯化钙钻井液专用淀粉", spec: "25KG/袋" },
        { name: "CMS-HT", desc: "交联羧甲基淀粉", spec: "25KG/袋" },
        { name: "FLO-TROL", desc: "非离子交联淀粉", spec: "25KG/袋" },
        { name: "CMS", desc: "羧甲基淀粉", spec: "25KG/袋" },
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
    footer: {
      en: "© 2025 Unitech Chemical Ltd. All rights reserved.",
      zh: "© 2025 开平联技化工有限公司 版权所有。",
    },
  };

  return (
    <div className="font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-gray-100 shadow">
        <h1 className="font-bold text-xl">{t.brand[lang]}</h1>
        <nav className="space-x-6">
          <a href="#about">{lang === "en" ? "About Us" : "关于我们"}</a>
          <a href="#products">{lang === "en" ? "Products" : "产品中心"}</a>
          <a href="#contact">{lang === "en" ? "Contact" : "联系我们"}</a>
        </nav>
        <button
          onClick={() => setLang(lang === "en" ? "zh" : "en")}
          className="border px-3 py-1 rounded"
        >
          {lang === "en" ? "中文" : "EN"}
        </button>
      </header>

      {/* Hero */}
      <section className="text-center py-16 bg-gradient-to-b from-blue-50 to-white">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">{t.tagline[lang]}</h2>
        <p className="text-lg mb-6">{t.welcome[lang]}</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded">
          {lang === "en" ? "Request Consultation" : "立即咨询"}
        </button>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-6">{lang === "en" ? "About Us" : "关于我们"}</h2>
        <p className="text-gray-700 whitespace-pre-line">{t.about[lang]}</p>
        <p className="text-gray-700 mt-6 whitespace-pre-line">{t.appearance[lang]}</p>
      </section>

      {/* Products */}
      <section id="products" className="bg-gray-50 py-16 px-6">
        <h2 className="text-2xl font-bold mb-10 text-center">
          {lang === "en" ? "Industry Products" : "行业产品"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {t.products[lang].map((p, i) => (
            <div key={i} className="p-6 border rounded-lg bg-white shadow">
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p className="text-sm text-gray-600">{p.desc}</p>
              <p className="text-xs text-gray-500 mt-2">Spec: {p.spec}</p>
              <button className="mt-4 text-blue-600 hover:underline">
                {lang === "en" ? "More" : "更多"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-16">
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
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
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
