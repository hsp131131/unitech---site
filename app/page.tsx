"use client";

import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState<"en" | "zh">("en");

  const t = {
    brand: {
      en: "Unitech Chemical Ltd.",
      zh: "开平联技化工有限公司",
    },
    welcome: {
      en: "Sincerely welcome customers from home and abroad to cooperate sincerely and develop together.",
      zh: "热诚欢迎国内外客户精诚合作，共同发展",
    },
    about: {
      en: `Founded in 2006 with a registered capital of RMB 25.8 million, Unitech Chemical Ltd. 
            spans an area of 78,000 sqm and specializes in drilling fluid additives and fine chemicals. 
            Located in Kaiping City, Guangdong, at the heart of the Greater Bay Area, the company benefits 
            from excellent transport links. Our products are exported to 50+ countries worldwide and trusted 
            by global leaders such as Schlumberger, Baker Hughes, and Halliburton, as well as CNPC, Sinopec, and CNOOC.`,
      zh: `开平联技化工有限公司成立于2006年，占地面积78,000平方米，注册资金2584.89万元，主要生产经营油田钻井液助剂及精细化工产品。公司位于粤港澳大湾区核心的广东省开平市，交通便利。产品远销五十多个国家和地区，国际三大油服巨头斯伦贝谢、贝克休斯、哈里伯顿，以及中石油、中石化、中海油均是本公司重要客户。`,
    },
    appearance: {
      en: `We maintain an experienced team in R&D, manufacturing, and technical support. 
            Our portfolio includes water-based drilling fluid systems (fluid loss reducers, shale inhibitors, 
            viscosifiers, lubricants) and oil-based/synthetic-based drilling fluid systems (emulsifiers, wetting agents, 
            rheology modifiers). Recognized nationally for innovation in 2012, our “Oil-Based Drilling Fluid System” 
            and “Modified Starch” series are widely trusted in complex environments.`,
      zh: `公司拥有经验丰富的研发、制造及技术支持团队，生产水基钻井液降滤失剂、泥页岩抑制剂、增粘剂、润滑剂等产品及完整的水基体系，同时也生产油基/合成基乳化剂、润湿剂、增粘剂及降滤失剂等油基/合成基体系。2012年公司自主创新的“油田钻井液用油基体系”获国家科技奖励，自主研发的“改性淀粉”系列可适用于抗高温、抗钙、抗盐等复杂环境，深受国内外客户信赖。`,
    },
    productsTitle: { en: "Industry Products", zh: "行业产品" },
    products: {
      oil: [
        { code: "Dynamul-P", en: "Primary Emulsifier", zh: "主乳化剂", spec: "180KG/drum" },
        { code: "Dynamul-S", en: "Secondary Emulsifier", zh: "辅乳化剂", spec: "KG/drum" },
        { code: "Dynamul-HW", en: "High-Temp One-Drum Emulsifier", zh: "高温一桶型乳化剂", spec: "180KG/drum" },
        { code: "Dyna-HRP", en: "Organoclay Activator", zh: "有机土活化剂", spec: "200KG/barrel" },
        { code: "Dynawet", en: "Wetting Agent", zh: "润湿剂", spec: "180KG/drum" },
      ],
      water: [
        { code: "CMS-HT", en: "Crosslinked & Carboxymethyl Starch", zh: "交联羧甲基淀粉", spec: "25KG/bag" },
        { code: "FLO-TROL", en: "Non-ionic Crosslinked Starch", zh: "非离子交联淀粉", spec: "25KG/bag" },
        { code: "CMS", en: "Carboxymethyl Starch", zh: "羧甲基淀粉", spec: "25KG/bag" },
        { code: "DYNA-LUBE", en: "Water-Based Lubricant", zh: "水基润滑剂", spec: "200KG/drum" },
      ],
    },
    certifications: {
      en: [
        "Tier-1 Oilfield Chemicals Supplier",
        "CNPC Product Quality Certification",
        "Sinopec Resource Market Member",
        "CNOOC Gold Supplier",
        "National High-Tech Enterprise",
        "National Innovation Fund Award",
        "QMS / EMS / OHSMS Certified",
      ],
      zh: [
        "油田化学剂供应一级网络成员",
        "中国石油天然气集团公司产品质量认可",
        "中国石化集团油田化学剂资源市场成员",
        "中国海洋石油总公司金牌供应商",
        "国家高新技术企业",
        "国家科技型中小企业技术创新基金获得者",
        "质量 / 环境 / 职业健康安全 管理体系认证",
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
      zh: "© 2025 开平联技化工有限公司 版权所有 粤ICP备18098169号",
    },
  };

  return (
    <div className="font-sans text-gray-900">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b z-50">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
          <h1 className="font-bold">{t.brand[lang]}</h1>
          <nav className="flex gap-6">
            <a href="#about">{lang === "en" ? "About" : "关于我们"}</a>
            <a href="#products">{lang === "en" ? "Products" : "产品"}</a>
            <a href="#contact">{lang === "en" ? "Contact" : "联系我们"}</a>
          </nav>
          <button
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            className="border px-3 py-1 rounded"
          >
            {lang === "en" ? "中文" : "EN"}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="text-center py-16 bg-gradient-to-b from-blue-50 to-white">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">{t.tagline?.[lang]}</h2>
        <p className="text-lg mb-6">{t.welcome[lang]}</p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded">
          {lang === "en" ? "Request Consultation" : "立即咨询"}
        </button>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold mb-4">{lang === "en" ? "About Us" : "关于我们"}</h2>
        <p className="leading-relaxed">{t.about[lang]}</p>
      </section>

      {/* Company Appearance */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">{lang === "en" ? "Company Appearance" : "公司风貌"}</h2>
          <p>{t.appearance[lang]}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-gray-200 h-40 rounded">Image</div>
            <div className="bg-gray-200 h-40 rounded">Image</div>
            <div className="bg-gray-200 h-40 rounded">Image</div>
            <div className="bg-gray-200 h-40 rounded">Image</div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold mb-8">{t.productsTitle[lang]}</h2>
        <h3 className="font-semibold mb-4">{lang === "en" ? "Oil-Based Drilling Fluids" : "油基钻井液"}</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {t.products.oil.map((p) => (
            <div key={p.code} className="p-4 border rounded shadow bg-white">
              <h4 className="font-bold">{p.code} - {p[lang]}</h4>
              <p className="text-gray-600">{lang === "en" ? "Specification:" : "规格:"} {p.spec}</p>
              <button className="mt-2 text-blue-600">{lang === "en" ? "More" : "详情"}</button>
            </div>
          ))}
        </div>

        <h3 className="font-semibold mb-4">{lang === "en" ? "Water-Based Drilling Fluids" : "水基钻井液"}</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {t.products.water.map((p) => (
            <div key={p.code} className="p-4 border rounded shadow bg-white">
              <h4 className="font-bold">{p.code} - {p[lang]}</h4>
              <p className="text-gray-600">{lang === "en" ? "Specification:" : "规格:"} {p.spec}</p>
              <button className="mt-2 text-blue-600">{lang === "en" ? "More" : "详情"}</button>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">{lang === "en" ? "Certifications & Recognitions" : "荣誉与资质"}</h2>
          <ul className="list-disc ml-6 space-y-2">
            {(lang === "en" ? t.certifications.en : t.certifications.zh).map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold mb-6">{t.contact[lang].title}</h2>
        <p>{t.contact[lang].company}</p>
        <p>{t.contact[lang].address}</p>
        <p>{t.contact[lang].phone}</p>
        <p>{t.contact[lang].email}</p>

        <form className="mt-6 grid gap-4 max-w-lg">
          <input type="text" placeholder={lang === "en" ? "Your Name" : "姓名"} className="border p-2 rounded"/>
          <input type="email" placeholder={lang === "en" ? "Your Email" : "邮箱"} className="border p-2 rounded"/>
          <textarea placeholder={lang === "en" ? "Message" : "留言"} className="border p-2 rounded" rows={4}/>
          <button className="bg-blue-600 text-white py-2 rounded">{lang === "en" ? "Submit" : "提交"}</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm bg-gray-100">{t.footer[lang]}</footer>
    </div>
  );
}
