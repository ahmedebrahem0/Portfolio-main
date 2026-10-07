import { useRef, type CSSProperties, type ReactNode } from "react";
import { useInView } from "framer-motion";

const primary = ["Architecture", "Scalable", "Feature-based", "React", "Next.js", "TypeScript", "Performance", "Accessibility", "SEO", "Lighthouse", "API Integration", "State Management", "RBAC", "Real-world Systems", "ITI", "NTI", "Google", "IEEE"];
const secondary = ["Maintainable", "Reusable", "Separation of Concerns", "Redux", "RTK Query", "Responsive", "Error Handling", "Authentication", "Authorization", "Role-based", "Order Lifecycle", "Data Visualization"];
const terms = [...primary, ...secondary].sort((a, b) => b.length - a.length);
const escape = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const matcher = new RegExp(`\\b(?:${terms.map(escape).join("|")})\\b`, "gi");

function signalLetters(value: string) {
  let letterIndex = 0;
  return value.split(/(\s+)/).map((part, partIndex) => {
    if (/^\s+$/.test(part)) {
      letterIndex += part.length;
      return part;
    }
    return (
      <span className="pf-signal-word" key={partIndex}>
        {Array.from(part).map((letter) => {
          const index = letterIndex++;
          return (
            <span
              className="pf-signal-char"
              key={index}
              style={{ "--signal-index": index } as CSSProperties}
            >
              {letter}
            </span>
          );
        })}
      </span>
    );
  });
}

/** Keeps every word as readable DOM text, including before the reveal. */
export function SignalText({ text, disabled = false, select }: { text: string; disabled?: boolean; select?: readonly string[] }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.45, margin: "0px 0px -8% 0px" });
  const selected = select?.map((term) => term.toLowerCase());
  const pieces: ReactNode[] = [];
  let from = 0;
  for (const match of text.matchAll(matcher)) {
    const index = match.index;
    if (index > from) pieces.push(text.slice(from, index));
    const value = match[0];
    const enabled = !selected || selected.includes(value.toLowerCase());
    if (enabled) {
      const tier = primary.some((term) => term.toLowerCase() === value.toLowerCase()) ? "primary" : "secondary";
      pieces.push(
        <mark className={`pf-signal pf-signal-${tier}`} key={`${index}-${value}`}>
          {signalLetters(value)}
        </mark>
      );
    } else pieces.push(value);
    from = index + value.length;
  }
  if (from < text.length) pieces.push(text.slice(from));
  return <span ref={ref} className={`pf-signal-text ${inView || disabled ? "is-visible" : ""} ${disabled ? "is-static" : ""}`}>{pieces}</span>;
}
