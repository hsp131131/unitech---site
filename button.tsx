import * as React from "react";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default" | "outline" | "ghost"; size?: "sm" | "md" | "lg" };
export function Button({ className = "", variant = "default", size = "md", ...props }: Props) {
  const base = "inline-flex items-center justify-center rounded-2xl transition px-4 py-2 text-sm font-medium";
  const variants = {
    default: "bg-slate-900 text-white hover:opacity-90",
    outline: "border border-slate-300 bg-white hover:bg-slate-50",
    ghost: "hover:bg-slate-100"
  };
  const sizes = { sm: "py-1 px-3 text-sm", md: "", lg: "px-5 py-3 text-base" };
  return <button className={[base, variants[variant], sizes[size], className].join(" ")} {...props} />;
}