import { useState } from "react";
import { ChevronDown, ChevronRight, Code2, Image, Layers3, FileText, FileCode2 } from "lucide-react";
import { architectureProjects, countArchitectureNodes, type ArchitectureNode } from "@/data/projectArchitecture";
import "./architecture-tree.css";

const allFolderPaths = (nodes: ArchitectureNode[], prefix = ""): string[] =>
  nodes.flatMap((node) => {
    if (!node.children) return [];
    const path = prefix ? `${prefix}/${node.name}` : node.name;
    return [path, ...allFolderPaths(node.children, path)];
  });

const folderColors: Record<string, string> = {
  src: "green", app: "coral", components: "yellow", common: "yellow", ui: "yellow",
  config: "cyan", constants: "cyan", features: "green", auth: "amber", cart: "teal",
  hooks: "purple", lib: "yellow", store: "coral", types: "blue", api: "blue",
  assets: "pink", images: "pink", pages: "coral", layouts: "cyan", context: "purple",
  providers: "purple", services: "blue", validation: "amber", schema: "amber",
  test: "teal", tests: "teal", mocks: "teal", utils: "yellow", middleware: "purple",
  selectors: "purple", slices: "coral", public: "green", styles: "pink",
};

function FolderIcon({ open }: { open: boolean }) {
  return <svg width="19" height="17" viewBox="0 0 24 20" fill="none" aria-hidden="true">
    <path d="M2 3.5A2.5 2.5 0 0 1 4.5 1h5.1l2 2H20a2 2 0 0 1 2 2v11.5a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 16.5v-13Z" fill="currentColor" opacity=".62" />
    {open ? <path d="M4.7 8h17.1a1.5 1.5 0 0 1 1.43 1.94l-2.12 7A2.5 2.5 0 0 1 18.72 19H3.1a2 2 0 0 1-1.92-2.57L3.28 9A1.5 1.5 0 0 1 4.7 8Z" fill="currentColor" /> : <path d="M2 7h20v9.5a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 16.5V7Z" fill="currentColor" />}
  </svg>;
}

function FileIcon({ name }: { name: string }) {
  const extension = name.split(".").pop()?.toLowerCase() ?? "";
  if (["png", "jpg", "jpeg", "webp", "avif", "svg", "ico", "gif"].includes(extension)) {
    return <span className="arch-file-icon arch-file-image" aria-hidden="true"><Image size={14} strokeWidth={2.2} /></span>;
  }
  if (extension === "ts" || extension === "tsx" || extension === "js" || extension === "jsx") {
    return <span className={`arch-file-icon arch-file-${extension}`} aria-hidden="true">{extension === "tsx" ? "TX" : extension === "jsx" ? "JX" : extension.toUpperCase()}</span>;
  }
  if (extension === "css") return <span className="arch-file-icon arch-file-css" aria-hidden="true">#</span>;
  if (extension === "json") return <span className="arch-file-icon arch-file-json" aria-hidden="true">{`{}`}</span>;
  if (extension === "md") return <span className="arch-file-icon arch-file-md" aria-hidden="true"><FileText size={14} /></span>;
  return <span className="arch-file-icon arch-file-generic" aria-hidden="true"><FileCode2 size={14} /></span>;
}

function TreeNode({ node, depth, path, expanded, toggle }: { node: ArchitectureNode; depth: number; path: string; expanded: Set<string>; toggle: (path: string) => void }) {
  const branch = Boolean(node.children);
  const open = expanded.has(path);
  return (
    <li className="arch-node">
      {branch ? (
        <button className="arch-row arch-folder" type="button" style={{ paddingLeft: `${12 + depth * 18}px` }} aria-expanded={open} onClick={() => toggle(path)}>
          {open ? <ChevronDown className="arch-chevron" size={13} /> : <ChevronRight className="arch-chevron" size={13} />}
          <span className={`arch-folder-icon arch-folder-${folderColors[node.name.toLowerCase()] ?? "slate"}`} aria-hidden="true"><FolderIcon open={open} /></span>
          <span>{node.name}</span>
        </button>
      ) : (
        <div className="arch-row arch-file" style={{ paddingLeft: `${30 + depth * 18}px` }}>
          <FileIcon name={node.name} /><span>{node.name}</span>
        </div>
      )}
      {branch && open && <ul className="arch-list">{node.children!.map((child) => <TreeNode key={child.name} node={child} depth={depth + 1} path={`${path}/${child.name}`} expanded={expanded} toggle={toggle} />)}</ul>}
    </li>
  );
}

export function ArchitectureTree() {
  const [active, setActive] = useState(0);
  const [expandedByProject, setExpandedByProject] = useState<Record<number, Set<string>>>(() => Object.fromEntries(architectureProjects.map((_, index) => [index, new Set(index === 0 ? ["src", "src/features", "src/features/orders", "src/features/orders/components"] : ["src", "src/features"])])));
  const expanded = expandedByProject[active];
  const project = architectureProjects[active];
  const counts = countArchitectureNodes(project.tree);
  const allPaths = allFolderPaths(project.tree);
  const toggle = (path: string) => setExpandedByProject((previous) => {
    const next = new Set(previous[active]);
    if (next.has(path)) next.delete(path); else next.add(path);
    return { ...previous, [active]: next };
  });
  const setAll = (open: boolean) => setExpandedByProject((previous) => ({ ...previous, [active]: new Set(open ? allPaths : ["src"]) }));

  return (
    <section className="arch-panel pf-reveal" aria-label="Project architecture explorer">
      <div className="arch-heading"><span className="arch-heading-icon"><Layers3 size={17} /></span><div>
        {/* <span className="arch-kicker">INSIDE THE BUILD</span> */}
        {/* <h3>Project architecture<span>.</span> */}
        <h3>How I Structure Real Applications<span>.</span>
        </h3>
      </div>
      </div>
      {/* <p className="arch-intro">A closer look at how I structure real applications.</p> */}
      <div className="arch-projects" aria-label="Select a project">{architectureProjects.map((item, index) => <button key={item.name} type="button" className={`arch-project ${active === index ? "is-active" : ""}`} aria-pressed={active === index} onClick={() => setActive(index)}><span>{String(index + 1).padStart(2, "0")}</span>{item.short}</button>)}</div>
      <div className="arch-editor" key={active}>
        <div className="arch-editor-bar"><span className="arch-editor-dots" aria-hidden="true"><i /><i /><i /></span><span className="arch-editor-title"><Code2 size={13} /> {project.name}</span><span className="arch-editor-count">{String(active + 1).padStart(2, "0")} / 04</span></div>
        <div className="arch-editor-meta"><span>{project.stack}</span><span>{counts.folders} FOLDERS · {counts.files} FILES</span></div>
        <div className="arch-tree-actions"><span className="arch-pan-hint" aria-hidden="true">SWIPE ↔ TO SEE DEEP PATHS</span><button type="button" onClick={() => setAll(true)}>Expand all</button><button type="button" onClick={() => setAll(false)}>Collapse all</button></div>
        <div className="arch-scroll" role="region" aria-label={`${project.name} source tree`} tabIndex={0}><ul className="arch-list">{project.tree.map((node) => <TreeNode key={node.name} node={node} depth={0} path={node.name} expanded={expanded} toggle={toggle} />)}</ul></div>
        <div className="arch-editor-foot"><span className="arch-status-dot" /> {project.note}</div>
      </div>
      <p className="arch-caption">Explore the complete source structure <span>↗</span></p>
    </section>
  );
}
