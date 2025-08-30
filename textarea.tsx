import * as React from "react";
export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={"w-full rounded-xl border px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-slate-200 " + (props.className || "")} />;
}