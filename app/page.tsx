"use client";

import { useEffect, useMemo, useState } from "react";
type Lang = "en" | "zh";

const I18N: Record<Lang, Record<string, string>> = {
  en: {
    "nav.about": "About",
    "nav.products": "Products",
    "nav.applications": "Applications",
    "nav.quality": "Quality",
    "nav.sustain": "Sustainability",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "hero.kicker": "Trusted Additives • Global Supply",
    "hero.title": "High-Performance Oilfield & Industrial Chemical Additives",
    "hero.sub":
      "From upstream production to water treatment, we formulate demulsifiers, corrosion and scale inhibitors, PPDs, and surfactants with ISO-driven quality and fast lead times.",
    "hero.moq": "Flexible MOQs",
    "cta.quote": "Get a Quote",
    "cta.view": "View Products",
    "stats.years.label": "Experience",
    "stats.years.val": "years",
    "stats.capacity.label": "Capacity",
    "stats.capacity.val": "tons/year",
    "stats.clients.label": "Clients",
    "stats.clients.val": "countries",
    "stats.lead.label": "Lead Time",
    "stats.lead.val": "days",
    "about.kicker": "Who We Are",
    "about.title": "Manufacturing in Kaiping, Guangdong • Serving the World",
    "about.p1":
      "Unitech Chemical specializes in tailored additives for oil & gas, water treatment, and industrial processing. With in-house R&D and strict QC, we deliver consistent performance and reliable logistics.",
    "about.p2":
      "We welcome OEM/ODM, toll-manufacturing, and long-term supply partnerships.",
    "about.values": "What Makes Us Different",
    "about.v1": "Fast lab screening and field-driven formulation.",
    "about.v2": "ISO 9001 quality system with batch COA/COQ.",
    "about.v3": "Export-ready docs: MSDS/SDS, REACH, RoHS.",
    "about.v4": "Flexible packaging: IBCs, drums, totes.",
    "prod.kicker": "Core Portfolio",
    "prod.title": "Featured Products",
    "prod.cta": "Request TDS/SDS",
    "prod.demul":
      "Fast water-oil separation for crude and produced water; optimized for temperature and salinity windows.",
    "prod.corr":
      "Film-forming and oxygen-scavenging packages for pipelines, tanks, and downhole metallurgy.",
    "prod.scale":
      "Phosphonate/polymer blends targeting CaCO₃, BaSO₄, and mixed-salt scales across pH and TDS ranges.",
    "prod.ppd":
      "Improve low-temperature flow, reduce wax deposition, and protect cold-start operations.",
    "prod.bio":
      "Broad-spectrum control against sulfate-reducing and slime-forming bacteria in systems.",
    "prod.surf":
      "Nonionic/anionic blends for wetting, cleaning, and emulsion stability tuning.",
    "app.kicker": "Where We Help",
    "app.title": "Applications & Industries",
    "app.oil": "Upstream Oil & Gas",
    "app.oilp":
      "Production chemicals for flow assurance, separation, H₂S control, and integrity.",
    "app.refine": "Refining & Petrochem",
    "app.refinep":
      "Anti-foulants, corrosion control, and process aids to stabilize throughput.",
    "app.water": "Water Treatment",
    "app.waterp":
      "Coagulants/dispersants and tailored chemistries for industrial wastewater.",
    "qual.kicker": "Quality & Reliability",
    "qual.title": "Certifications & Process",
    "qual.iso": "Documented SOPs, traceability, and corrective action loops.",
    "qual.reach": "Compliance-ready dossiers and restricted-substances control.",
    "qual.qc":
      "Viscosity, pH, FTIR, and performance testing with retain samples.",
    "qual.log": "IBCs, drums, totes; EXW/FOB/CIF/FCA—flexible incoterms.",
    "sus.kicker": "Sustainability",
    "sus.title": "Safer Chemistry, Lower Impact",
    "sus.p1":
      "We prioritize formulations with reduced VOCs, optimized treat rates, and responsible sourcing. Packaging take-back and recycling available for partners.",
    "sus.l1": "VOC-reduced and low-tox options.",
    "sus.l2": "Energy-efficient batch processes.",
    "sus.l3": "Waste minimization and water reuse.",
    "contact.kicker": "Contact",
    "contact.title": "Tell Us What You Need",
    "contact.p":
      "Share your crude specs, operating window, or application details. Our team will recommend a package and send TDS/SDS.",
    "form.name": "Your Name",
    "form.email": "Work Email",
    "form.company": "Company",
    "form.incoterm.none": "Incoterm",
    "form.msg":
      "Tell us about your application (temp, salinity, viscosity, etc.)",
    "form.send": "Send",
    "form.note":
      "Submitting opens your email client. For a hosted form, we can connect Formspree or your backend later.",
    "foot.tag":
      "High-performance additives • Reliable supply • Partner mindset",
    "foot.back": "Back to top",
  },
  zh: {
    "nav.about": "关于我们",
    "nav.products": "产品",
    "nav.applications": "应用领域",
    "nav.quality": "质量",
    "nav.sustain": "可持续",
    "nav.contact": "联系",
    "nav.menu": "菜单",
    "hero.kicker": "值得信赖的助剂 • 全球供应",
    "hero.title": "高性能油田与工业化学助剂",
    "hero.sub":
      "覆盖上游开采到水处理，我们提供破乳剂、缓蚀剂、阻垢剂、降凝剂与表面活性剂。严格的 ISO 质量体系，交期快速。",
    "hero.moq": "支持小批量",
    "cta.quote": "获取报价",
    "cta.view": "查看产品",
    "stats.years.label": "经验",
    "stats.years.val": "年",
    "stats.capacity.label": "产能",
    "stats.capacity.val": "吨/年",
    "stats.clients.label": "客户国家",
    "stats.clients.val": "个",
    "stats.lead.label": "交期",
    "stats.lead.val": "天",
    "about.kicker": "我们是谁",
    "about.title": "产自广东开平 • 服务全球",
    "about.p1":
      "Unitech Chemical 专注于油气、水处理与工业流程的定制助剂。自有研发与严格品控，确保稳定性能与可靠物流。",
    "about.p2": "支持 OEM/ODM、来料/来样代工以及长期供货合作。",
    "about.values": "我们的优势",
    "about.v1": "实验室快速筛选 + 现场反馈配方。",
    "about.v2": "ISO 9001 质量体系与批次 COA/COQ。",
    "about.v3": "出口合规文件：MSDS/SDS、REACH、RoHS。",
    "about.v4": "多样化包
