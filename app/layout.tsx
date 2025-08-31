import "./globals.css";
import Nav from "../components/Nav";

export const metadata = {
  title: "Unitech Chemical – 高性能化学助剂",
  description:
    "High-performance additives for oil & gas and industrial applications. 全球供应，高品质助剂。",
  icons: { icon: "/assets/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <footer className="foot">
          <div className="wrap footgrid">
            <div>
              <div className="brand"><span className="logo">U</span> <strong>Unitech Chemical</strong></div>
              <p className="muted mt">高性能助剂 • 稳定供货 • 合作共赢</p>
            </div>
            <div className="right-end">
              <a href="#top" className="chip">Back to top / 返回顶部</a>
              <small>© {new Date().getFullYear()} Unitech Chemical</small>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
