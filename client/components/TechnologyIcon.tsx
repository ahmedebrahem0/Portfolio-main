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

/** Brand-shaped marks used by the skills ring; never falls back to a generic code icon. */
export function SkillTechnologyIcon({ name, size = 27 }: { name: string; size?: number }) {
  const localBrandMarks: Record<string, string> = {
    "React Query": "/brands/skill-reactquery.svg",
    Axios: "/brands/skill-axios.svg",
    Postman: "/brands/skill-postman.svg",
    yarn: "/brands/skill-yarn.svg",
    "Styled Components": "/brands/skill-styledcomponents.svg",
  };
  if (localBrandMarks[name]) {
    return <img src={localBrandMarks[name]} width={size} height={size} className="pf-tech-icon" alt="" aria-hidden="true" />;
  }
  if (["React.js", "Next.js", "TypeScript", "JavaScript (ES6)", "Tailwind CSS", "Redux Toolkit", "GitHub", "Figma"].includes(name)) {
    return <TechnologyIcon name={name} size={size} />;
  }
  const base = { width: size, height: size, viewBox: "0 0 24 24", "aria-hidden": true as const, className: "pf-tech-icon" };
  switch (name) {
    case "HTML":
    case "CSS": {
      const html = name === "HTML";
      return <svg {...base} viewBox="0 0 32 36"><path d="M2 1h28l-2.6 30L16 35 4.6 31Z" fill={html ? "#e44d26" : "#1572b6"}/><path d="M16 32.5 25 29l2.1-25H16Z" fill={html ? "#f16529" : "#33a9dc"}/><path d={html ? "M7 7h18l-.4 4H11.2l.4 4h12.7l-1 11L16 28l-7.2-2-.5-6h4.1l.2 2.8 3.4.9 3.4-.9.4-4H7.9Z" : "M7.1 7H25l-.4 4H11.2l.4 4H24l-1 11-7 2-7-2-.5-6h4l.2 2.8 3.3.9 3.4-.9.4-4H8Z"} fill="#fff"/></svg>;
    }
    case "Bootstrap": return <svg {...base}><rect x="1" y="1" width="22" height="22" rx="5" fill="#7952b3"/><path d="M7 5.5h5.7c3.1 0 4.8 1.3 4.8 3.5 0 1.5-.9 2.5-2.1 2.9 1.6.3 2.6 1.4 2.6 3.1 0 2.5-2 4-5.1 4H7Zm3.3 2.8v2.9h2.2c1.1 0 1.7-.5 1.7-1.4 0-1-.7-1.5-1.8-1.5Zm0 5.5v3.1h2.5c1.2 0 1.9-.5 1.9-1.5 0-1-.7-1.6-1.9-1.6Z" fill="#fff"/></svg>;
    case "Material UI": return <svg {...base} fill="none" stroke="#0081cb" strokeWidth="2.4" strokeLinejoin="round"><path d="M2 5v9l6 4 6-4V5l-6 4-6-4Zm6 4v9"/><path d="m14 14 5 3 3-2V6l-3 2v9"/></svg>;
    case "Vite": return <svg {...base} viewBox="0 0 24 24"><path d="M1 4.5 12 23 23 4.5 17.4 3l-5.4 9-5.4-9Z" fill="#646cff"/><path d="m12 2-4 11 4-1.2-1 7.7 6-11.2-4.5 1.1L15 2Z" fill="#ffd62e"/></svg>;
    case "Webpack": return <svg {...base} fill="none" stroke="#8ed6fb" strokeWidth="1.3" strokeLinejoin="round"><path d="m12 1 9.5 5.5v11L12 23l-9.5-5.5v-11Z"/><path d="m12 5 6 3.5v7L12 19l-6-3.5v-7Zm0-4v4m0 14v4M2.5 6.5 6 8.5m15.5-2L18 8.5M2.5 17.5 6 15.5m15.5 2L18 15.5"/></svg>;
    case "npm": return <svg {...base}><rect x="1" y="5" width="22" height="14" fill="#cb3837"/><path d="M4 8h16v8h-3v-5h-3v5H4Z" fill="#fff"/><path d="M7 11h2v5H7Zm4 0h2v5h-2Z" fill="#cb3837"/></svg>;
    case "Git": return <svg {...base}><rect x="4" y="4" width="16" height="16" rx="2" transform="rotate(45 12 12)" fill="#f05032"/><path d="M9 8v8m0-5 6 3m0-3v6" fill="none" stroke="#fff" strokeWidth="1.8"/><circle cx="9" cy="8" r="1.5" fill="#fff"/><circle cx="9" cy="16" r="1.5" fill="#fff"/><circle cx="15" cy="11" r="1.5" fill="#fff"/></svg>;
    case "VS Code": return <svg {...base}><path d="m17.3 1 5.2 2.5v17L17.3 23 7.5 15.3 3.2 18.7 1 17v-3l4.1-2L1 10V7l2.2-1.7 4.3 3.4Z" fill="#22a7f2"/><path d="m17.3 1-9.8 7.7L5.1 12l2.4 3.3 9.8 7.7Z" fill="#007acc"/><path d="m17.3 5.8-7.8 6.2 7.8 6.2Z" fill="#fff" opacity=".86"/></svg>;
    case "React Hook Form": return <svg {...base}><rect x="3" y="2" width="18" height="20" rx="3" fill="#ec5990"/><rect x="7" y="7" width="10" height="2.4" rx="1" fill="#fff"/><rect x="7" y="11" width="10" height="2.4" rx="1" fill="#fff"/><rect x="7" y="15" width="6" height="2.4" rx="1" fill="#fff"/></svg>;
    case "Formik": return <svg {...base}><rect x="2" y="2" width="20" height="20" rx="4" fill="#2563eb"/><path d="M8 6h9v2.6h-6v2.2h5v2.6h-5V18H8Z" fill="#fff"/></svg>;
    default: return null;
  }
}
