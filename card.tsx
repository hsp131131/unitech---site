import * as React from "react";
export function Card({ className = "", children }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={["bg-white rounded-2xl shadow border", className].join(" ")}>{children}</div>;
}
export function CardHeader({ className = "", children }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={["p-4 border-b", className].join(" ")}>{children}</div>;
}
export function CardTitle({ className = "", children }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={["font-semibold", className].join(" ")}>{children}</div>;
}
export function CardContent({ className = "", children }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={["p-4", className].join(" ")}>{children}</div>;
}