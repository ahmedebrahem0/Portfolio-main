type AiToolIconProps = { name: string };

// Local brand marks. Antigravity and AMP use assets from their official press kits.
const iconSlugs: Record<string, string> = {
  Codex: "openai",
  "Claude Code": "claude",
  "Cursor AI": "cursor",
  Windsurf: "windsurf",
  AMP: "amp",
};

export function AiToolIcon({ name }: AiToolIconProps) {
  if (name === "antigravity") return <span className="pf-ai-mark pf-ai-mark-antigravity" aria-hidden="true"><img src="/brands/antigravity-icon.png" alt="" /></span>;
  const slug = iconSlugs[name];
  if (slug) return <span className={`pf-ai-mark pf-ai-mark-${slug}`} aria-hidden="true"><img src={`/brands/${slug}.svg`} alt="" /></span>;
  return null;
}
