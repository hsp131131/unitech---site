import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata={title:"Unitech Chemical Ltd.",description:"High-performance oilfield and process additives — made in China, trusted worldwide."};
export default function RootLayout({children}:{children:React.ReactNode}){return(<html lang="en"><body className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-800">{children}</body></html>)}
