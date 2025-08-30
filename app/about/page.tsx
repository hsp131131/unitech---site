type Lang = "en" | "zh";

const content = {
  title: {
    en: "About Us",
    zh: "关于我们",
  },
  intro: {
    en: `Founded in 2006, Unitech Chemical Ltd. spans an area of 78,000 sqm and specializes in high-performance oilfield drilling fluid additives and fine chemicals. Based in Kaiping City, Guangdong Province — at the heart of the Greater Bay Area — our location benefits from excellent transport links and global connectivity.`,
    zh: `开平联技化工有限公司成立于2006年，占地面积78,000平方米，专业生产高性能油田钻井液助剂及精细化工产品。公司位于广东省开平市粤港澳大湾区核心地带，交通便利，联通全球。`,
  },
  global: {
    en: `Our products are exported to more than 50 countries across Asia, Europe, the Americas, and Africa. We are proud to serve world-leading oilfield service companies including Schlumberger, Baker Hughes, and Halliburton, as well as China’s leading national oil corporations: CNPC, Sinopec, and CNOOC.`,
    zh: `我们的产品远销亚洲、美洲、欧洲和非洲50多个国家和地区。主要客户包括国际知名油服公司斯伦贝谢、贝克休斯、哈里伯顿，以及国内三大石油集团：中国石油、中国石化和中国海油。`,
  },
  innovation: {
    en: `With an experienced team specializing in R&D, manufacturing, and on-site technical support, Unitech delivers cutting-edge solutions that perform reliably under the most demanding drilling conditions. Our portfolio includes fluid loss reducers, shale inhibitors, viscosifiers, lubricants, emulsifiers, and complete drilling fluid systems.`,
    zh: `公司拥有经验丰富的研发、制造及现场技术支持团队，致力于为复杂工况提供可靠的解决方案。主要产品包括降滤失剂、泥页岩抑制剂、增粘剂、润滑剂、乳化剂及完整的钻井液体系。`,
  },
  certifications: {
    en: [
      "ISO-certified Quality, Environment & Safety Management Systems",
      "Recognized as a National High-Tech Enterprise",
      "Trusted Gold Supplier of CNOOC Services Corporation",
      "Holder of multiple proprietary R&D patents",
    ],
    zh: [
      "ISO质量、环境与安全管理体系认证",
      "国家高新技术企业",
      "中海油服金牌供应商",
      "拥有多项自主研发专利",
    ],
  },
  closing: {
    en: "At Unitech Chemical Ltd., we are committed to quality, innovation, and global collaboration.",
    zh: "联技化工始终坚持质量第一、持续创新、全球合作的理念。",
  },
};

export default function AboutPage({ params }: { params?: { lang?: Lang } }) {
  // fallback: default to English
  const lang: Lang = params?.lang === "zh" ? "zh" : "en";

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 text-gray-800">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-blue-700">
        {content.title[lang]}
      </h1>

      <p className="text-lg leading-relaxed mb-6 text-center">
        {content.intro[lang]}
      </p>

      <section className="grid md:grid-cols-2 gap-10 mt-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">🌍 {lang === "en" ? "Global Reach" : "全球市场"}</h2>
          <p className="leading-relaxed">{content.global[lang]}</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">⚙️ {lang === "en" ? "Innovation & Expertise" : "创新与技术"}</h2>
          <p className="leading-relaxed">{content.innovation[lang]}</p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">🏆 {lang === "en" ? "Certifications & Recognition" : "资质与荣誉"}</h2>
        <ul className="list-disc pl-6 space-y-2">
          {content.certifications[lang].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <p className="mt-12 text-lg text-center font-semibold text-gray-700">
        {content.closing[lang]}
      </p>
    </main>
  );
}
