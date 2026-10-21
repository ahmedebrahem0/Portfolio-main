type AiToolIconProps = { name: string };

// Local brand marks for the tools shown in the workflow list.
const iconSlugs: Record<string, string> = {
  Codex: "openai",
  "Claude Code": "claude",
  "Cursor AI": "cursor",
  Windsurf: "windsurf",
  OpenCode: "opencode",
};

export function AiToolIcon({ name }: AiToolIconProps) {
  if (name === "antigravity") return <span className="pf-ai-mark pf-ai-mark-antigravity" aria-hidden="true"><img src="/brands/antigravity-icon.png" alt="" /></span>;
  const slug = iconSlugs[name];
  if (slug) return <span className={`pf-ai-mark pf-ai-mark-${slug}`} aria-hidden="true"><img src={`/brands/${slug}.svg`} alt="" /></span>;
  return null;
}
