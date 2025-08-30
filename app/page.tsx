"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Factory, ShieldCheck, Phone, Mail, MapPin, Download, Languages, FlaskConical, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Home(){
  const [lang,setLang]=useState<"en"|"zh">("en");
  const t=(k:string)=>({brand:{en:"Unitech Chemical Ltd.",zh:"开平联技化工有限公司"},tagline:{en:"High-performance oilfield and process additives — made in China, trusted worldwide.",zh:"高性能油田及工艺助剂——中国制造，服务全球。"},ctaQuote:{en:"Request a Quote",zh:"获取报价"},ctaCatalog:{en:"Download Product Catalog",zh:"下载产品目录"},navProducts:{en:"Products",zh:"产品"},navIndustries:{en:"Industries",zh:"行业"},navQuality:{en:"Quality",zh:"质量"},navAbout:{en:"About",zh:"关于我们"},navContact:{en:"Contact",zh:"联系我们"},productsTitle:{en:"Core Product Lines",zh:"核心产品线"},industriesTitle:{en:"Industries We Serve",zh:"服务行业"},qualityTitle:{en:"Quality & Compliance",zh:"质量与合规"},qualityCopy:{en:"ISO 9001-ready quality system, COA/COQ per batch, REACH/TSCA awareness, full traceability.",zh:"ISO 9001 质量体系、每批次 COA/COQ、符合 REACH/TSCA 认知管理、全流程可追溯。"},aboutTitle:{en:"About Unitech",zh:"关于优尼泰科"},aboutCopy:{en:"Based in Kaiping, Guangdong, we manufacture oilfield & process additives and export globally.",zh:"公司位于广东开平，专注油田与工艺助剂的研发生产并面向全球出口。"},contactTitle:{en:"Contact Us",zh:"联系我们"},contactLead:{en:"Share your specs for a rapid RFQ (FCA/FOB/CIF).",zh:"欢迎提供规格以快速获取报价（FCA/FOB/CIF）。"},name:{en:"Your Name",zh:"您的姓名"},email:{en:"Work Email",zh:"邮箱"},phone:{en:"Phone / WeChat",zh:"电话 / 微信"},company:{en:"Company",zh:"公司"},message:{en:"Tell us your requirements (product, spec, volume, incoterms)",zh:"请描述需求（产品、规格、数量、贸易条款）"},send:{en:"Send RFQ",zh:"发送询盘"},address:{en:"Kaiping, Guangdong • China",zh:"中国 • 广东开平"}} as any)[k]?.[lang]??k;
  const NavLink=({href,children}:{href:string;children:any})=> <a href={href} className="text-sm hover:opacity-80">{children}</a>;
  return (<div className="min-h-screen">
    <div className="sticky top-0 z-50 backdrop-blur bg-white/60 border-b">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold"><Factory className="w-5 h-5"/><span>{t("brand")}</span><Badge className="ml-2">{lang==="en"?"Made in China":"中国制造"}</Badge></div>
        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="#products">{t("navProducts")}</NavLink><NavLink href="#industries">{t("navIndustries")}</NavLink><NavLink href="#quality">{t("navQuality")}</NavLink><NavLink href="#about">{t("navAbout")}</NavLink><NavLink href="#contact">{t("navContact")}</NavLink>
        </nav>
        <div className="flex items-center gap-2"><Button variant="ghost" onClick={()=>setLang(lang==="en"?"zh":"en")}><Languages className="w-4 h-4 mr-2"/> {lang==="en"?"中文":"EN"}</Button><Button>{t("ctaQuote")}</Button></div>
      </div>
    </div>
    <header className="max-w-6xl mx-auto px-4 py-14 md:py-20 grid md:grid-cols-2 gap-8 items-center">
      <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.5}}>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">{t("tagline")}</h1>
        <p className="mt-4 text-slate-600">{lang==="en"?"Fast lead times, consistent batches, and documentation.":"交期快速、批次稳定、技术文档齐全。"}</p>
        <div className="mt-6 flex gap-3"><Button><ArrowRight className="w-4 h-4 mr-2"/>{t("ctaQuote")}</Button><Button variant="outline"><Download className="w-4 h-4 mr-2"/>{t("ctaCatalog")}</Button></div>
      </motion.div>
      <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="md:justify-self-end">
        <div className="bg-white rounded-3xl shadow-lg p-6 border">
          <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1600&auto=format&fit=crop" className="rounded-2xl object-cover h-64 w-full" alt="Lab"/>
        </div>
      </motion.div>
    </header>
    <section id="products" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2"><FlaskConical className="w-6 h-6"/>{t("productsTitle")}</h2>
      <div className="grid md:grid-cols-2 gap-10">
        <div><h3 className="text-xl font-semibold mb-4">{lang==="en"?"Oil-Based Drilling Fluid Additives":"油基钻井液材料"}</h3></div>
        <div><h3 className="text-xl font-semibold mb-4">{lang==="en"?"Water-Based Drilling Fluid Additives":"水基钻井液材料"}</h3></div>
      </div>
    </section>
    <section id="quality" className="max-w-6xl mx-auto px-4 py-12"><h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2"><ShieldCheck className="w-6 h-6"/>{t("qualityTitle")}</h2><p className="text-slate-600 max-w-3xl">{t("qualityCopy")}</p></section>
    <Separator className="my-4"/>
    <section id="about" className="max-w-6xl mx-auto px-4 py-12"><h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2"><Globe className="w-6 h-6"/>{t("aboutTitle")}</h2><p className="text-slate-600 max-w-4xl">{t("aboutCopy")}</p></section>
    <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-2"><Phone className="w-6 h-6"/>{t("contactTitle")}</h2>
      <p className="text-slate-600 mb-6">{t("contactLead")}</p>
      <div className="grid md:grid-cols-2 gap-8">
        <Card><CardContent className="pt-6">
          <form action="mailto:sales@uckpsh.com" method="post" encType="text/plain" className="space-y-3">
            <div className="grid grid-cols-2 gap-3"><Input placeholder={t("name")} required/><Input type="email" placeholder={t("email")} required/></div>
            <div className="grid grid-cols-2 gap-3"><Input placeholder={t("phone")} /><Input placeholder={t("company")} /></div>
            <Textarea rows={5} placeholder={t("message")} />
            <Button type="submit" className="w-full">{t("send")}</Button>
          </form>
        </CardContent></Card>
        <div className="space-y-4"><div className="flex items-center gap-3 text-slate-700"><MapPin className="w-5 h-5"/>{t("address")}</div><div className="flex items-center gap-3 text-slate-700"><Phone className="w-5 h-5"/>+86 (000) 0000-0000</div><div className="flex items-center gap-3 text-slate-700"><Mail className="w-5 h-5"/>sales@uckpsh.com</div></div>
      </div>
    </section>
  </div>)
}
