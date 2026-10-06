import { useEffect, useRef, useState, type PointerEvent } from "react";
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
        <button className="arch-row arch-folder" type="button" data-arch-path={path} style={{ paddingLeft: `${12 + depth * 18}px` }} aria-expanded={open} onClick={() => toggle(path)}>
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

function GuideHand() {
  // FaHandPointUp from Font Awesome Free 5.15.4 (CC BY 4.0): https://fontawesome.com/license/free
  return <svg className="arch-guide-hand" viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
    <path d="M135.652 0c23.625 0 43.826 20.65 43.826 44.8v99.851c17.048-16.34 49.766-18.346 70.944 6.299 22.829-14.288 53.017-2.147 62.315 16.45C361.878 158.426 384 189.346 384 240c0 2.746-.203 13.276-.195 16 .168 61.971-31.065 76.894-38.315 123.731C343.683 391.404 333.599 400 321.786 400H150.261l-.001-.002c-18.366-.011-35.889-10.607-43.845-28.464C93.421 342.648 57.377 276.122 29.092 264 10.897 256.203.008 242.616 0 224c-.014-34.222 35.098-57.752 66.908-44.119 8.359 3.583 16.67 8.312 24.918 14.153V44.8c0-23.45 20.543-44.8 43.826-44.8zM136 416h192c13.255 0 24 10.745 24 24v48c0 13.255-10.745 24-24 24H136c-13.255 0-24-10.745-24-24v-48c0-13.255 10.745-24 24-24zm168 28c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20z" />
  </svg>;
}

export function ArchitectureTree() {
  const [active, setActive] = useState(0);
  const [expandedByProject, setExpandedByProject] = useState<Record<number, Set<string>>>(() => Object.fromEntries(architectureProjects.map((_, index) => [index, new Set(index === 0 ? ["src", "src/features", "src/features/orders", "src/features/orders/components"] : ["src", "src/features"])])));
  const [visible, setVisible] = useState(false);
  const [motionAllowed, setMotionAllowed] = useState(false);
  const [visitorTookOver, setVisitorTookOver] = useState(false);
  const [guide, setGuide] = useState<{ x: number; y: number; pressing: boolean } | null>(null);
  const [following, setFollowing] = useState(false);
  const panelRef = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const demoOpenRef = useRef<string | null>(null);
  const mouseFrameRef = useRef<number | null>(null);
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

  const stopDemo = () => {
    if (mouseFrameRef.current !== null) {
      cancelAnimationFrame(mouseFrameRef.current);
      mouseFrameRef.current = null;
    }
    setVisitorTookOver(true);
    const demoPath = demoOpenRef.current;
    demoOpenRef.current = null;
    if (demoPath) setExpandedByProject((previous) => {
      const next = new Set(previous[0]);
      next.delete(demoPath);
      return { ...previous, 0: next };
    });
    setGuide(null);
  };

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting && entry.intersectionRatio > .3), { threshold: [.3, .5] });
    observer.observe(panel);
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setMotionAllowed(!media.matches && !document.hidden && !panel.closest(".pf-paused"));
    updateMotion();
    media.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateMotion);
    const classObserver = new MutationObserver(updateMotion);
    let parent = panel.parentElement;
    while (parent) { classObserver.observe(parent, { attributes: true, attributeFilter: ["class"] }); parent = parent.parentElement; }
    return () => { observer.disconnect(); classObserver.disconnect(); media.removeEventListener("change", updateMotion); document.removeEventListener("visibilitychange", updateMotion); };
  }, []);

  useEffect(() => {
    if (!visible || !motionAllowed || visitorTookOver || active !== 0 || following) return;
    let cancelled = false;
    const timers = new Set<ReturnType<typeof setTimeout>>();
    const wait = (ms: number) => new Promise<void>((resolve) => { const timer = setTimeout(() => { timers.delete(timer); resolve(); }, ms); timers.add(timer); });
    const moveTo = (path: string, pressing = false) => {
      const viewport = viewportRef.current;
      const row = [...(scrollRef.current?.querySelectorAll<HTMLButtonElement>("[data-arch-path]") ?? [])].find((item) => item.dataset.archPath === path);
      if (!viewport || !row || cancelled) return false;
      const box = row.getBoundingClientRect();
      const frame = viewport.getBoundingClientRect();
      if (box.bottom < frame.top || box.top > frame.bottom) return false;
      setGuide({ x: box.left - frame.left + 35, y: box.top - frame.top + box.height / 2, pressing });
      return true;
    };
    const demoToggle = (path: string, open: boolean) => {
      if (cancelled) return;
      demoOpenRef.current = open ? path : null;
      setExpandedByProject((previous) => {
        const next = new Set(previous[0]);
        if (open) next.add(path); else next.delete(path);
        return { ...previous, 0: next };
      });
    };
    const run = async () => {
      await wait(800);
      while (!cancelled) {
        if (!moveTo("src/app")) break;
        await wait(1050); if (cancelled) break;
        moveTo("src/app", true); await wait(330); if (cancelled) break;
        demoToggle("src/app", true); moveTo("src/app"); await wait(2200); if (cancelled) break;
        moveTo("src/app", true); await wait(260); if (cancelled) break;
        demoToggle("src/app", false); moveTo("src/app"); await wait(700); if (cancelled) break;
        moveTo("src/components"); await wait(1200); if (cancelled) break;
        moveTo("src/components", true); await wait(280); if (cancelled) break;
        demoToggle("src/components", true); moveTo("src/components"); await wait(1450); if (cancelled) break;
        moveTo("src/components", true); await wait(250); if (cancelled) break;
        demoToggle("src/components", false); moveTo("src/components"); await wait(650); if (cancelled) break;
        moveTo("src/constants"); await wait(1100); if (cancelled) break;
        moveTo("src/app"); await wait(700);
      }
    };
    void run();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
      const open = demoOpenRef.current;
      demoOpenRef.current = null;
      if (open) setExpandedByProject((previous) => { const next = new Set(previous[0]); next.delete(open); return { ...previous, 0: next }; });
      setGuide(null);
    };
  }, [visible, motionAllowed, visitorTookOver, active, following]);

  const movePointer = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || !window.matchMedia("(hover: hover) and (pointer: fine)").matches || !motionAllowed) return;
    if (mouseFrameRef.current !== null) cancelAnimationFrame(mouseFrameRef.current);
    const x = event.clientX; const y = event.clientY;
    mouseFrameRef.current = requestAnimationFrame(() => {
      const frame = viewportRef.current?.getBoundingClientRect();
      if (frame) setGuide({ x: x - frame.left, y: y - frame.top, pressing: false });
      mouseFrameRef.current = null;
    });
  };

  useEffect(() => () => { if (mouseFrameRef.current !== null) cancelAnimationFrame(mouseFrameRef.current); }, []);

  return (
    <section ref={panelRef} className="arch-panel pf-reveal" aria-label="Project architecture explorer">
      <div className="arch-heading"><span className="arch-heading-icon"><Layers3 size={17} /></span><div>
        {/* <span className="arch-kicker">INSIDE THE BUILD</span> */}
        {/* <h3>Project architecture<span>.</span> */}
        <h3>How I Structure Real Applications<span>.</span>
        </h3>
      </div>
      </div>
      {/* <p className="arch-intro">A closer look at how I structure real applications.</p> */}
      <div className="arch-projects" aria-label="Select a project">{architectureProjects.map((item, index) => <button key={item.name} type="button" className={`arch-project ${active === index ? "is-active" : ""}`} aria-pressed={active === index} onClick={() => { stopDemo(); setActive(index); }}><span>{String(index + 1).padStart(2, "0")}</span>{item.short}</button>)}</div>
      <div className="arch-editor" key={active}>
        <div className="arch-editor-bar"><span className="arch-editor-dots" aria-hidden="true"><i /><i /><i /></span><span className="arch-editor-title"><Code2 size={13} /> {project.name}</span><span className="arch-editor-count">{String(active + 1).padStart(2, "0")} / 04</span></div>
        <div className="arch-editor-meta"><span>{project.stack}</span><span>{counts.folders} FOLDERS · {counts.files} FILES</span></div>
        <div className="arch-tree-actions"><span className="arch-pan-hint" aria-hidden="true">SWIPE ↔ TO SEE DEEP PATHS</span><button type="button" onClick={() => { stopDemo(); setAll(true); }}>Expand all</button><button type="button" onClick={() => { stopDemo(); setAll(false); }}>Collapse all</button></div>
        <div className={`arch-tree-viewport ${following && motionAllowed ? "is-following" : ""}`} ref={viewportRef} onPointerEnter={(event) => { if (event.pointerType === "mouse" && motionAllowed && window.matchMedia("(hover: hover) and (pointer: fine)").matches) setFollowing(true); }} onPointerMove={movePointer} onPointerLeave={() => { if (mouseFrameRef.current !== null) { cancelAnimationFrame(mouseFrameRef.current); mouseFrameRef.current = null; } setFollowing(false); setGuide(null); }} onPointerDown={() => stopDemo()} onKeyDown={() => stopDemo()} onWheel={() => stopDemo()}>
          <div className="arch-scroll" ref={scrollRef} role="region" aria-label={`${project.name} source tree`} tabIndex={0}><ul className="arch-list">{project.tree.map((node) => <TreeNode key={node.name} node={node} depth={0} path={node.name} expanded={expanded} toggle={toggle} />)}</ul></div>
          {guide && motionAllowed && <div className={`arch-guide ${guide.pressing ? "is-pressing" : ""} ${following ? "is-live" : ""}`} style={{ transform: `translate3d(${guide.x}px, ${guide.y}px, 0)` }} aria-hidden="true"><span className="arch-guide-halo" /><GuideHand /></div>}
        </div>
        <div className="arch-editor-foot"><span className="arch-status-dot" /> {project.note}</div>
      </div>
      <p className="arch-caption"><span className="arch-discovery-dot" aria-hidden="true" /><span className="arch-hint-desktop">Click folders to explore</span><span className="arch-hint-touch">Tap folders to explore</span><span className="arch-caption-arrow" aria-hidden="true">↗</span></p>
    </section>
  );
}
