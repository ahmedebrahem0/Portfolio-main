import { Github, Code2 } from "lucide-react";

/** Inline brand marks: no remote image requests or icon font dependency. */
export function TechnologyIcon({ name, size = 28 }: { name: string; size?: number }) {
  const props = { width: size, height: size, viewBox: "0 0 24 24", "aria-hidden": true as const, className: "pf-tech-icon" };
  if (/github|git &/i.test(name)) return <Github size={size} aria-hidden="true" className="pf-tech-icon" />;
  if (/react/i.test(name)) return <svg {...props} fill="none" stroke="#61dafb" strokeWidth="1"><ellipse cx="12" cy="12" rx="11" ry="4.2"/><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)"/><circle cx="12" cy="12" r="2" fill="#61dafb" stroke="none"/></svg>;
  if (/next/i.test(name)) return <svg {...props}><circle cx="12" cy="12" r="11.5" fill="#fafafa"/><path d="M7 17V7h1.8l9.1 12M16 7v7" fill="none" stroke="#111" strokeWidth="1.8"/></svg>;
  if (/typescript|javascript/i.test(name)) return <svg {...props}><rect width="24" height="24" rx="2" fill={/typescript/i.test(name) ? "#3178c6" : "#f7df1e"}/><text x="22" y="20" textAnchor="end" fontSize="13" fontFamily="Arial,sans-serif" fontWeight="700" fill={/typescript/i.test(name) ? "white" : "#171717"}>{/typescript/i.test(name) ? "TS" : "JS"}</text></svg>;
  if (/tailwind/i.test(name)) return <svg {...props} fill="#38bdf8"><path d="M12 5c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.5.9 2.3 1.7 1.3 1.3 2.8 2.8 6.1 2.8 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.5-.9-2.3-1.7C16.8 6.5 15.3 5 12 5ZM5.4 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.5.9 2.3 1.7 1.3 1.3 2.8 2.8 6.1 2.8 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.5-.9-2.3-1.7C10.2 13.5 8.7 12 5.4 12Z"/></svg>;
  if (/figma/i.test(name)) return <svg {...props}><path d="M8 24a4 4 0 0 0 4-4v-4H8a4 4 0 0 0 0 8Z" fill="#0acf83"/><path d="M8 16h4V8H8a4 4 0 0 0 0 8Z" fill="#a259ff"/><path d="M8 8h4V0H8a4 4 0 0 0 0 8Z" fill="#f24e1e"/><path d="M12 0h4a4 4 0 0 1 0 8h-4Z" fill="#ff7262"/><circle cx="16" cy="12" r="4" fill="#1abcfe"/></svg>;
  if (/redux/i.test(name)) return <svg {...props} fill="none" stroke="#b59bf5" strokeWidth="1.65"><path d="M7 16c-4-2-3-8 1-10 4-3 8 0 8 4M10 5c4-1 9 3 9 7 0 5-4 8-8 6M19 14c-1 5-7 8-11 5-4-2-4-6-2-8"/><circle cx="16" cy="10" r="1.5" fill="#b59bf5"/><circle cx="7" cy="16" r="1.5" fill="#b59bf5"/><circle cx="6" cy="11" r="1.5" fill="#b59bf5"/></svg>;
  return <Code2 size={size} aria-hidden="true" className="pf-tech-icon" />;
}
