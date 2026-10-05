import { useEffect, useRef, useState, type CSSProperties } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Github,
  Menu,
  X,
  Plus,
  Download,
  Pause,
  Play,
  Code2,
  Home, User, BriefcaseBusiness, GraduationCap, BookOpen, Layers3, Cpu, Mail,
  MapPin, Linkedin, Phone, CalendarDays, Network, Gauge, ShieldCheck, Rocket, Braces, Users,
} from "lucide-react";
import { TechnologyIcon } from "@/components/TechnologyIcon";
import { AiToolIcon } from "@/components/AiToolIcon";
import { ArchitectureTree } from "@/components/ArchitectureTree";
import { PixelPortrait } from "@/components/PixelPortrait";
import { SignalText } from "@/components/SignalText";
import {
  projects,
  skillCategories,
  experiences,
  education,
  internships,
  memberships,
} from "@/data/portfolio";
import "./portfolio.css";

const email = "ahmed.ebrahem.ebdelazem@gmail.com";
const whatsapp = "https://wa.me/201099491558";

function GmailMark({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
    <path d="M2.5 7.1v10.6c0 .7.55 1.25 1.25 1.25H6.1V9.8L2.5 7.1Z" fill="#4285F4" />
    <path d="M17.9 9.8v9.15h2.35c.7 0 1.25-.55 1.25-1.25V7.1l-3.6 2.7Z" fill="#34A853" />
    <path d="m2.5 7.1 3.6 2.7L12 14.2l5.9-4.4 3.6-2.7V6.2c0-1.32-1.5-2.06-2.55-1.27L12 10.15 5.05 4.93C4 4.14 2.5 4.88 2.5 6.2v.9Z" fill="#EA4335" />
    <path d="m17.9 9.8 3.6-2.7v-.9c0-1.32-1.5-2.06-2.55-1.27L17.9 5.7v4.1Z" fill="#FBBC04" />
  </svg>;
}

function WhatsAppMark({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
    <path d="M20.6 11.5a8.6 8.6 0 0 1-12.9 7.45L3 20.5l1.55-4.65A8.6 8.6 0 1 1 20.6 11.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M8.3 7.7c-.35.3-.62.9-.56 1.53.11 1.36 1.08 2.91 2.32 4.14 1.24 1.23 2.77 2.2 4.13 2.32.63.05 1.23-.22 1.54-.57l.53-.62-1.96-.95-.75.93c-1.64-.66-2.9-1.92-3.55-3.55l.93-.75-.95-1.96-.63.53Z" fill="currentColor" />
  </svg>;
}

function LinkedInMark() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
    <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.75 1.36-1.55 2.79-1.55 2.99 0 3.58 1.97 3.58 4.54v5.26Z" />
  </svg>;
}

function DriveMark() {
  return <svg width="19" height="19" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path fill="#00875A" d="M8.2 2h5.1L5.1 16.2 2.5 11.8 8.2 2Z" />
    <path fill="#FFBA00" d="m5.1 16.2 2.6 4.4h12.1l2.6-4.4H5.1Z" />
    <path fill="#2684FC" d="M13.3 2h-5l8.2 14.2h5.9L13.3 2Z" />
  </svg>;
}
const resume =
  "https://drive.google.com/file/d/1yrsGISsfnTXcjxD0zgiS2cmJh9ES7-j4/view?usp=sharing";
const selectedProjects = projects.filter((p) => p.featured);
const defaultProjectSignals = ["Feature-based", "Next.js", "TypeScript", "RBAC", "Performance", "SEO", "API Integration", "Authorization", "Role-based", "Order Lifecycle", "Error Handling", "Reusable", "Responsive", "RTK Query"];
const projectSignals: Record<string, readonly string[]> = {
  "EduSystem — School Management": ["RBAC", "Architecture", "Data Visualization"],
  "E-Commerce Platform": ["React", "API Integration", "Responsive"],
  "Product Management System": ["Redux", "State Management", "Data Visualization"],
  "Breast Cancer Awareness Graduation Project": ["API Integration", "Authentication", "Authorization"],
};
const signalsFor = (project: (typeof projects)[number]) => projectSignals[project.title] ?? defaultProjectSignals;
const aiTools = [
  "Codex", "Claude Code", "Cursor AI", "antigravity", "AMP", "Windsurf",
];
type Project = (typeof projects)[number];
const external = { target: "_blank", rel: "noopener noreferrer" };
const number = (n: number) => String(n).padStart(2, "0");
const navigation = [
  { id: "home", label: "Home", icon: Home }, { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Cpu }, { id: "projects", label: "Projects", icon: Layers3 },
  { id: "experience", label: "Experience", icon: BriefcaseBusiness }, { id: "education", label: "Education", icon: GraduationCap },
  { id: "internships", label: "Internships", icon: BookOpen }, { id: "contact", label: "Contact", icon: Mail },
];
const techs = [
  [
    "React.js",
    "⚛",
    "Component-driven interfaces, reusable architecture, and production applications.",
    "#86dcf6",
  ],
  [
    "Next.js",
    "N",
    "Production storefronts, server components, SEO architecture, and scalable platforms.",
    "#f4f1e8",
  ],
  [
    "TypeScript",
    "TS",
    "Typed application architecture for maintainable dashboards and reliable integrations.",
    "#91b8ff",
  ],
  [
    "Redux Toolkit",
    "R",
    "Predictable state, RTK Query, and synchronized customer journeys.",
    "#c5b1ff",
  ],
  [
    "Tailwind CSS",
    "≈",
    "Responsive interfaces, coherent design systems, and carefully crafted visual details.",
    "#85e5de",
  ],
  [
    "JavaScript",
    "JS",
    "Interactive experiences, application logic, and strong web fundamentals.",
    "#e6ee91",
  ],
  [
    "Figma",
    "F",
    "Bringing ideas into focus, from visual hierarchy to responsive user experiences.",
    "#f2b8a6",
  ],
  [
    "Git & GitHub",
    "G",
    "Version control, collaborative workflows, and continuous delivery.",
    "#f3ac95",
  ],
];
function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <p className="pf-label">
      <Braces size={17} aria-hidden="true" />
      <span>{index}</span>
      <span>{children}</span>
    </p>
  );
}
function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="pf-project-links">
      <a className="pf-outline-action" href={project.liveDemo} {...external}>
        Visit live site <ArrowUpRight size={16} />
      </a>
      {project.github && (
        <a className="pf-outline-action pf-sweep-action pf-source-link" href={project.github} {...external}>
          <span className="pf-sweep-content"><Github size={16} /> Source</span>
          <span className="pf-sweep-content pf-sweep-content-filled" aria-hidden="true"><Github size={16} /> Source</span>
        </a>
      )}
    </div>
  );
}
function SkillOrbit({ paused }: { paused: boolean }) {
  const [active, setActive] = useState(0),
    [stopped, setStopped] = useState(false);
  return (
    <div className="pf-skill-layout">
      <div className={`pf-orbits ${paused || stopped ? "pf-paused" : ""}`}>
        <div className="pf-orbit-track pf-track-one" />
        <div className="pf-orbit-track pf-track-two" />
        <div className="pf-orbit-track pf-track-three" />
        <div className="pf-orbit-core">
          <Code2 size={34} />
          <span>MY STACK</span>
        </div>
        {techs.map(([name, , , color], i) => (
          <div
            key={name}
            className={`pf-orbit-arm ${i < 3 ? "pf-orbit-inner" : "pf-orbit-outer"}`}
            style={
              {
                "--angle": `${i * 47}deg`,
                "--duration": i < 3 ? "40s" : "58s",
              } as CSSProperties
            }
          >
            <button
              className={`pf-orbit-tech ${active === i ? "is-active" : ""}`}
              style={{ "--tech-color": color } as CSSProperties}
              onClick={() => setActive(i)}
              aria-label={`Explore ${name}`}
              aria-pressed={active === i}
            >
              <TechnologyIcon name={name} size={30} />
              <span>{name}</span>
            </button>
          </div>
        ))}
        {/* <button
          className="pf-orbit-pause"
          disabled={paused}
          aria-pressed={paused || stopped}
          onClick={() => setStopped(!stopped)}
        >
          {paused || stopped ? <Play size={13} /> : <Pause size={13} />}{" "}
          {paused
            ? "MOTION DISABLED"
            : stopped
              ? "RESUME ORBITS"
              : "PAUSE ORBITS"}
        </button> */}
      </div>
      <div className="pf-skill-copy">
        <span className="pf-eyebrow">CONNECTED BY CURIOSITY</span>
        <h3>
          {techs[active][0]}
          <span style={{ color: techs[active][3] }}>.</span>
        </h3>
        <p>{techs[active][2]}</p>
        <div className="pf-skill-selectors">
          {techs.map(([name], i) => (
            <button
              key={name}
              onClick={() => setActive(i)}
              className={active === i ? "is-active" : ""}
              aria-pressed={active === i}
            >
              <TechnologyIcon name={name} size={18} /> {name}
            </button>
          ))}
        </div>
        <span className="pf-small-note">
          Select a technology. Explore the possibilities.
        </span>
      </div>
    </div>
  );
}
function ProjectHelix({ reduced, motionDisabled }: { reduced: boolean; motionDisabled: boolean }) {
  const section = useRef<HTMLDivElement>(null);
  const sticky = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0),
    [compact, setCompact] = useState(() => window.innerWidth < 800);
  const linear = reduced;
  const active = Math.min(selectedProjects.length - 1, Math.round(progress));
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setCompact(window.innerWidth < 800);
      if (!section.current) return;
      const r = section.current.getBoundingClientRect();
      const travel = section.current.offsetHeight - (sticky.current?.offsetHeight ?? window.innerHeight);
      setProgress(
        Math.max(
          0,
          Math.min(
            selectedProjects.length - 1,
            (-r.top / Math.max(1, travel)) * (selectedProjects.length - 1),
          ),
        ),
      );
    };
    const request = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
    };
  }, []);
  const go = (index: number) => {
    if (!section.current) return;
    window.scrollTo({
      top:
        section.current.getBoundingClientRect().top +
        window.scrollY +
        (index / (selectedProjects.length - 1)) *
        (section.current.offsetHeight - (sticky.current?.offsetHeight ?? window.innerHeight)),
      behavior: reduced ? "instant" : "smooth",
    });
  };
  return (
    <div
      ref={section}
      className={`pf-helix-section ${linear ? "pf-helix-linear" : ""}`}
    >
      <div ref={sticky} className="pf-helix-sticky">
        <div className="pf-work-heading">
          <div>
            <SectionLabel index="03">PROJECTS</SectionLabel>
            <h2>Selected projects<span className="pf-title-dot">.</span></h2>
          </div>
          <div className="pf-work-intro">
            <p>
              Real platforms. Real challenges.
              <br />A few things I’ve brought to life.
            </p>
            <a href="#project-archive">
              Browse all {projects.length} projects <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
        <div className="pf-project-stage">
          <div className="pf-helix-scene">
            <div className="pf-helix-axis" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            {selectedProjects.map((p, i) => {
              const d = i - progress,
                a = d * 1.12,
                focus = active === i;
              // Keep the large focused screenshot inside the narrow scene throughout
              // its full focus interval; ease back to a wide orbit for side cards.
              const orbitBlend = Math.max(0, Math.min(1, (Math.abs(d) - 0.5) * 2));
              const mobileRadius = 8 + 80 * orbitBlend * orbitBlend * (3 - 2 * orbitBlend);
              const style: CSSProperties = linear
                ? {}
                : {
                  transform: `translate(-50%,-50%) translate3d(${Math.sin(a) * (compact ? mobileRadius : 125)}px,${d * (compact ? 90 : 140)}px,${(Math.cos(a) - 1) * (compact ? 125 : 180)}px) rotateY(${-Math.sin(a) * (compact ? 38 : 30)}deg) rotateZ(${Math.sin(a) * 4}deg)`,
                  opacity:
                    Math.abs(d) > 2.4
                      ? 0
                      : Math.max(0.12, 1 - Math.abs(d) * 0.32),
                  zIndex: 20 - Math.round(Math.abs(d) * 4),
                  pointerEvents: "auto",
                  visibility: Math.abs(d) > 2.5 ? "hidden" : "visible",
                };
              return (
                <article
                  className={`pf-helix-card ${focus ? "is-focused" : ""}`}
                  key={p.title}
                  style={style}
                >
                  <a className="pf-card-full-link" href={p.liveDemo} {...external} tabIndex={linear || focus ? 0 : -1} aria-label={`Visit ${p.title}`}>
                    <div className="pf-card-top">
                      <span>
                        {number(i + 1)} / {number(selectedProjects.length)}
                      </span>
                      <span>{p.technologies[0]}</span>
                      <ArrowUpRight size={15} />
                    </div>
                    <img
                      src={p.image}
                      alt={`${p.title} interface`}
                      loading="lazy"
                    />
                    <div className="pf-card-caption">
                      <h3>{p.title}</h3>
                      <ArrowUpRight size={21} />
                    </div>
                  </a>
                  {linear && (
                    <>
                      <p className="pf-mobile-project-description">
                        <SignalText text={p.description} disabled={motionDisabled} select={signalsFor(p)} />
                      </p>
                      <ProjectLinks project={p} />
                    </>
                  )}
                </article>
              );
            })}
          </div>
          {!linear && (
            <aside className="pf-project-sidebar">
              <div className="pf-project-info" key={active} role="region" aria-label={`${selectedProjects[active].title} details`} tabIndex={0}>
                <span className="pf-eyebrow">
                  <CalendarDays size={16} />
                  {selectedProjects[active].period || "SELECTED PROJECT"}
                </span>
                <h3>{selectedProjects[active].title}</h3>
                <p><SignalText text={selectedProjects[active].description} disabled={motionDisabled} select={signalsFor(selectedProjects[active])} /></p>
                <div className="pf-tags">{selectedProjects[active].technologies.map(tech => <span key={tech}><TechnologyIcon name={tech} size={15} />{tech}</span>)}</div>
                <ProjectLinks project={selectedProjects[active]} />
              </div>
              <div className="pf-helix-controls">
                <span className="pf-big-counter">
                  {number(active + 1)}
                  <small> / {number(selectedProjects.length)}</small>
                </span>
                <div>
                  <button
                    disabled={active === 0}
                    onClick={() => go(active - 1)}
                    aria-label="Previous project"
                  >
                    <ArrowLeft size={19} />
                  </button>
                  <span className="pf-eyebrow">SCROLL TO ROTATE</span>
                  <button
                    disabled={active === selectedProjects.length - 1}
                    onClick={() => go(active + 1)}
                    aria-label="Next project"
                  >
                    <ArrowRight size={19} />
                  </button>
                </div>
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
function Archive() {
  type ArchiveFilter = "all" | "framework" | "vanilla";
  const [filter, setFilter] = useState<ArchiveFilter>("all");
  const [selected, setSelected] = useState(projects[0].title);
  const [pickerOpen, setPickerOpen] = useState(false);
  const railRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLElement>(null);
  const chooserRef = useRef<HTMLDivElement>(null);
  const chooserButtonRef = useRef<HTMLButtonElement>(null);
  const shippingTitle = "Logistics & Shipping Management System";
  useEffect(() => {
    const revealShipping = () => {
      if (window.location.hash !== "#logistics-project") return;
      setFilter("all");
      setSelected(shippingTitle);
      requestAnimationFrame(() => {
        if (window.matchMedia("(max-width: 799px)").matches) scrollToMobilePreview();
        else document.getElementById("logistics-project")?.scrollIntoView();
      });
    };
    const onShippingClick = (event: MouseEvent) => {
      if ((event.target as Element).closest('a[href="#logistics-project"]')) {
        setFilter("all");
        setSelected(shippingTitle);
      }
    };
    revealShipping();
    window.addEventListener("hashchange", revealShipping);
    document.addEventListener("click", onShippingClick);
    return () => {
      window.removeEventListener("hashchange", revealShipping);
      document.removeEventListener("click", onShippingClick);
    };
  }, []);
  const framework = (p: Project) =>
    p.technologies.some((t) =>
      /React|Next\.js|Redux|Context API|RTK Query/.test(t),
    );
  const matchesFilter = (p: Project, selected: ArchiveFilter) =>
    selected === "all" ||
    (selected === "framework" ? framework(p) : !framework(p));
  const filters: { id: ArchiveFilter; title: string }[] = [
    { id: "all", title: "All work" },
    { id: "framework", title: "React / Next.js" },
    { id: "vanilla", title: "Core frontend" },
  ];
  const visibleProjects = projects.filter((p) => matchesFilter(p, filter));
  const activeProject = visibleProjects.find((p) => p.title === selected) ?? visibleProjects[0];
  const activeIndex = projects.indexOf(activeProject);
  const visibleIndex = visibleProjects.indexOf(activeProject);
  const scrollToMobilePreview = () => {
    if (!window.matchMedia("(max-width: 799px)").matches) return;
    const top = previewRef.current?.getBoundingClientRect().top;
    if (top === undefined) return;
    window.scrollTo({ top: window.scrollY + top - 70, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  };
  const selectProject = (project: Project, fromChooser = false) => {
    setSelected(project.title);
    if (window.matchMedia("(max-width: 799px)").matches) {
      setPickerOpen(false);
      if (fromChooser) chooserButtonRef.current?.focus();
      requestAnimationFrame(scrollToMobilePreview);
    }
  };
  useEffect(() => {
    if (!pickerOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setPickerOpen(false);
        chooserButtonRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!chooserRef.current?.contains(event.target as Node) && !chooserButtonRef.current?.contains(event.target as Node)) setPickerOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [pickerOpen]);
  const onRailKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(event.key)) return;
    const current = visibleProjects.findIndex((p) => p.title === activeProject.title);
    const next = event.key === "Home" ? 0 : event.key === "End" ? visibleProjects.length - 1 :
      (current + (event.key === "ArrowDown" ? 1 : -1) + visibleProjects.length) % visibleProjects.length;
    event.preventDefault();
    selectProject(visibleProjects[next]);
    railRef.current?.querySelectorAll<HTMLButtonElement>(".pf-command-item")[next]?.focus();
  };
  return (
    <div id="project-archive" className="pf-archive pf-wrap">
      <div className="pf-archive-heading">
        <div>
          <span className="pf-command-kicker">EXPLORE THE WORK / 03—16</span>
          <h3>The project index<span> / {number(projects.length)}</span></h3>
        </div>
        <div className="pf-filter" aria-label="Filter projects">
          {filters.map(({ id, title }) => (
            <button
              key={id}
              onClick={() => {
                setFilter(id);
                setPickerOpen(false);
                const first = projects.find((p) => matchesFilter(p, id));
                if (first) setSelected(first.title);
              }}
              aria-pressed={filter === id}
              className={filter === id ? "is-active" : ""}
            >
              <span>{title}</span>
              <span className="pf-filter-count">
                {number(projects.filter((p) => matchesFilter(p, id)).length)}
              </span>
            </button>
          ))}
        </div>
      </div>
      <span id="logistics-project" className="pf-command-anchor" aria-hidden="true" />
      <div className="pf-command-center">
        <div className="pf-command-rail" aria-label="Choose a project">
          <div className="pf-command-rail-header">
            <span>PROJECT DIRECTORY</span><span>{number(visibleProjects.length)} ENTRIES</span>
          </div>
          <div ref={railRef} className="pf-command-list" onKeyDown={onRailKeyDown}>
            {visibleProjects.map((p) => (
              <button key={p.title} type="button" className={`pf-command-item ${activeProject.title === p.title ? "is-active" : ""}`}
                onClick={() => selectProject(p)} aria-pressed={activeProject.title === p.title}
                aria-label={`Show ${p.title}`}>
                <span className="pf-command-number">{number(projects.indexOf(p) + 1)}</span>
                <span className="pf-command-name">{p.title}</span>
                <ArrowUpRight size={15} aria-hidden="true" />
              </button>
            ))}
          </div>
          <div className="pf-command-rail-footer"><span>SELECT A PROJECT</span><span>↑ ↓ TO NAVIGATE</span></div>
        </div>
        <article ref={previewRef} className="pf-command-preview" aria-label={`${activeProject.title} project details`}>
          <div className="pf-command-mobile-switcher">
            <div className="pf-command-mobile-toolbar" aria-label="Project navigation">
              <button type="button" className="pf-command-mobile-step" onClick={() => selectProject(visibleProjects[(visibleIndex - 1 + visibleProjects.length) % visibleProjects.length])} aria-label="Previous project"><ArrowLeft size={19} /></button>
              <button ref={chooserButtonRef} type="button" className="pf-command-mobile-choose" aria-expanded={pickerOpen} aria-controls="pf-mobile-project-chooser" onClick={() => setPickerOpen(!pickerOpen)}>
                <span className="pf-command-mobile-position">{number(visibleIndex + 1)} / {number(visibleProjects.length)} <span>· CHOOSE PROJECT</span></span>
                <span className="pf-command-mobile-title">{activeProject.title}</span>
              </button>
              <button type="button" className="pf-command-mobile-step" onClick={() => selectProject(visibleProjects[(visibleIndex + 1) % visibleProjects.length])} aria-label="Next project"><ArrowRight size={19} /></button>
            </div>
            {pickerOpen && <div id="pf-mobile-project-chooser" ref={chooserRef} className="pf-command-mobile-chooser" aria-label="Select a project">
              <div className="pf-command-mobile-chooser-heading"><span>PROJECT DIRECTORY</span><button type="button" onClick={() => { setPickerOpen(false); chooserButtonRef.current?.focus(); }} aria-label="Close project chooser"><X size={18} /></button></div>
              <div className="pf-command-mobile-options">{visibleProjects.map((p, index) => <button key={p.title} type="button" aria-current={p.title === activeProject.title ? "true" : undefined} onClick={() => selectProject(p, true)}><span>{number(index + 1)}</span><span>{p.title}</span>{p.title === activeProject.title && <span className="pf-command-mobile-current">VIEWING</span>}</button>)}</div>
            </div>}
          </div>
          <div className="pf-command-preview-top">
            <span><span className="pf-command-live-dot" /> PROJECT {number(activeIndex + 1)} / {number(projects.length)}</span>
            <span>{activeProject.technologies[0]}</span>
          </div>
          <div key={activeProject.title} className="pf-command-channel">
            <div className="pf-command-visual">
              <img src={activeProject.image} alt={`${activeProject.title} interface screenshot`} loading="lazy" />
              <span className="pf-command-visual-label">VISUAL PREVIEW — {number(activeIndex + 1)}</span>
            </div>
            <div className="pf-command-content">
              <div className="pf-command-title-row">
                <div>
                  <span className="pf-command-kicker">{activeProject.period || "SELECTED WORK"}</span>
                  <h4>{activeProject.title}</h4>
                </div>
                <span className="pf-command-large-number" aria-hidden="true">{number(activeIndex + 1)}</span>
              </div>
              <p>{activeProject.description}</p>
              <div className="pf-tags">{activeProject.technologies.map((t) => <span key={t}><TechnologyIcon name={t} size={15} />{t}</span>)}</div>
              <ProjectLinks project={activeProject} />
            </div>
          </div>
          <div className="pf-command-progress" aria-hidden="true"><span style={{ width: `${((activeIndex + 1) / projects.length) * 100}%` }} /></div>
        </article>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [menu, setMenu] = useState(false),
    [paused, setPaused] = useState(false),
    [reduced, setReduced] = useState(
      () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  const page = useRef<HTMLDivElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!menu) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenu(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [menu]);
  useEffect(() => {
    const sections = Array.from(
      page.current?.querySelectorAll<HTMLElement>("main > section") ?? [],
    );
    if (paused || reduced) {
      sections.forEach((section) =>
        section.style.removeProperty("--scene-progress"),
      );
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const height = window.innerHeight;
      sections.forEach((section) => {
        const bounds = section.getBoundingClientRect();
        if (bounds.bottom < 0 || bounds.top > height) return;
        const progress = Math.max(
          0,
          Math.min(1, (height - bounds.top) / (height + bounds.height)),
        );
        section.style.setProperty("--scene-progress", progress.toFixed(4));
      });
    };
    const request = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
    };
  }, [paused, reduced]);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    media.addEventListener("change", update);
    const reveals = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            reveals.unobserve(e.target);
          }
        }),
      { threshold: 0.08 },
    );
    page.current
      ?.querySelectorAll(".pf-reveal")
      .forEach((e) => reveals.observe(e));
    const motion = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) =>
          e.target.classList.toggle("pf-offscreen", !e.isIntersecting),
        ),
      { rootMargin: "100px" },
    );
    page.current
      ?.querySelectorAll(".pf-sculpture,.pf-orbits")
      .forEach((e) => motion.observe(e));
    return () => {
      media.removeEventListener("change", update);
      reveals.disconnect();
      motion.disconnect();
    };
  }, []);
  return (
    <div ref={page} className={`pf ${paused || reduced ? "pf-paused" : ""}`}>
      <a className="pf-skip" href="#main-content">
        Skip to content
      </a>
      <header className="pf-nav">
        <a href="#home" className="pf-brand" aria-label="Ahmed Ebrahem home">
          Ahmed<span>Ebrahem.</span>
        </a>
        <nav
          id="portfolio-navigation"
          aria-label="Main navigation"
          className={menu ? "is-open" : ""}
        >
          {navigation.map(({ id, label, icon: Icon }) => (
            <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>
              <Icon size={15} aria-hidden="true" /> {label}
            </a>
          ))}
        </nav>
        <button
          ref={menuButton}
          className="pf-mobile-menu"
          aria-label={menu ? "Close navigation" : "Open navigation"}
          aria-expanded={menu}
          aria-controls="portfolio-navigation"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>
      <main id="main-content">
        <section id="home" className="pf-hero pf-wrap">
          <div className="pf-personal-hero">
            <div className="pf-intro-left">
              <span className="pf-eyebrow"><span className="pf-status" /> Hello, I’m</span>
              <h1>Ahmed<br /><span>Ebrahem.</span></h1>
              <p className="pf-hero-role"><Code2 size={22} /> Front-End Engineer</p>
              <p className="pf-hero-description">Turning complex ideas into intuitive, high-performance digital experiences.</p>
              <div className="pf-hero-actions">
                <a className="pf-button" href="#projects">
                  <Layers3 size={18} /> View projects <ArrowUpRight size={18} />
                </a>
                <a className="pf-text-link pf-resume-link pf-sweep-action" href={resume} {...external}>
                  <span className="pf-sweep-content"><Download size={18} /> My résumé</span>
                  <span className="pf-sweep-content pf-sweep-content-filled" aria-hidden="true"><Download size={18} /> My résumé</span>
                </a>
              </div>
            </div>
            <div className="pf-hero-portrait">
              <div className="pf-portrait-aura" aria-hidden="true" />
              <div className="pf-portrait-orbit" aria-hidden="true" />
              <PixelPortrait motionDisabled={paused || reduced} />
              <span className="pf-floating-tech pf-floating-react"><TechnologyIcon name="React" size={34} /></span>
              <span className="pf-floating-tech pf-floating-next"><TechnologyIcon name="Next.js" size={30} /></span>
              <span className="pf-floating-tech pf-floating-ts"><TechnologyIcon name="TypeScript" size={30} /></span>
              <span className="pf-portrait-location"><MapPin size={16} /> Cairo, Egypt</span>
            </div>
            <div className="pf-intro-right">
              <span className="pf-eyebrow"><Cpu size={18} /> React & Next.js specialist</span>
              <h2>From a great idea to a <em>real experience.</em></h2>
              <p>I own frontend development across customer-facing brands and internal systems at BIG GROUP — from architecture and authentication to production.</p>
              <a className="pf-hero-proof" href="#logistics-project" aria-label="View Logistics Dashboard project: 100/100 Lighthouse score">
                <Gauge size={23} aria-hidden="true" />
                <span><strong>100/100 Lighthouse</strong><br />Logistics Dashboard</span>
                <ArrowRight className="pf-hero-proof-arrow" size={20} aria-hidden="true" />
              </a>
              <div className="pf-hero-socials">
                <a href="https://github.com/ahmedebrahem0" {...external} aria-label="Ahmed on GitHub" className="pf-social-github"><Github size={21} aria-hidden="true" /></a>
                <a href="https://www.linkedin.com/in/ahmedebrahem" {...external} aria-label="Ahmed on LinkedIn" className="pf-social-linkedin"><Linkedin size={21} aria-hidden="true" /></a>
                <a href={`mailto:${email}`} aria-label="Email Ahmed" className="pf-social-gmail"><GmailMark size={21} /></a>
                <a href={whatsapp} {...external} aria-label="WhatsApp Ahmed at +20 109 949 1558" className="pf-social-whatsapp"><WhatsAppMark size={23} /></a>
              </div>
            </div>
          </div>
          <div className="pf-hero-bottom">
            <a href="#about">
              <span className="pf-scroll-icon">
                <ArrowDown size={15} />
              </span>{" "}
              SCROLL TO EXPLORE
            </a>
            <div>
              {["React", "Next.js", "TypeScript"].map(name => <span className="pf-inline-icon" key={name}><TechnologyIcon name={name} size={19} />{name}</span>)}
            </div>
            <button
              onClick={() => setPaused(!paused)}
              disabled={reduced}
              aria-pressed={paused || reduced}
              aria-label={
                reduced
                  ? "Ambient animations disabled by reduced motion preference"
                  : paused
                    ? "Resume ambient animations"
                    : "Pause ambient animations"
              }
            >
              {paused ? <Play size={13} /> : <Pause size={13} />} MOTION{" "}
              {paused || reduced ? "OFF" : "ON"}
            </button>
          </div>
        </section>
        <section id="about" className="pf-about pf-wrap">
          <div className="pf-about-heading pf-reveal">
            <SectionLabel index="01">THE HUMAN BEHIND THE CODE</SectionLabel>
            <h2 className="pb-3">
              {/* Thoughtful by nature.{" "}
              <em>Engineer by craft.</em> */}
              Building Scalable Systems & High-Performance Web Apps
            </h2>
          </div>
          <div className="pf-about-layout">
            <ArchitectureTree />
            <div className="pf-about-copy pf-reveal">
              <strong>
                I build systems,
                not just interfaces.
              </strong>
              <p><SignalText disabled={paused || reduced} text="I’m a Front-End Engineer working across React and Next.js products. At BIG GROUP, I own frontend development for customer-facing brands and internal systems — shaping the architecture, API integration, and production stability of each release." select={["Architecture", "API Integration"]} /></p>
              <p><SignalText disabled={paused || reduced} text="I build real-world systems that can grow: features have clear ownership and separation of concerns. On a Logistics Dashboard, I designed multi-layer RBAC and an order lifecycle state machine, and achieved a 100/100 Lighthouse score across performance, accessibility, Best Practices, and SEO. I also led a 4-month Frontend program at GDSC." select={["Real-world Systems", "Separation of Concerns", "RBAC", "Lighthouse", "Accessibility"]} /></p>
              <div className="pf-about-facts">
                <div>
                  <strong>
                    100<span>/100</span>
                  </strong>
                  <span>
                    Lighthouse score
                    <br />
                    Logistics Dashboard
                  </span>
                </div>
              </div>
              {/* <a href={resume} {...external} className="pf-text-link pf-outline-action">
                View my résumé <Download size={16} />
              </a> */}
              {/* <div className="pf-personal">
                <span>Cairo, Egypt</span>
                <span>Born September 20, 2002</span>
                <a href="tel:+201099491558">01099491558</a>
              </div> */}
              <div className="pf-principles">
                {[
                  ["01", "Architecture", "Scalable, maintainable systems."],
                  ["02", "Performance", "98–100 Lighthouse scores."],
                  ["03", "System design", "RBAC, state machines, workflows."],
                  ["04", "Ownership", "From development to live."],
                ].map(([n, title, detail], i) => (
                  <div key={n} className="pf-principle-card">
                    <span className="pf-inline-icon">{[<Network size={19} />, <Gauge size={19} />, <ShieldCheck size={19} />, <Rocket size={19} />][i]} {n}</span>
                    <h3>{title}</h3>
                    <p><SignalText text={detail} disabled={paused || reduced} select={["Scalable", "Maintainable", "RBAC"]} /></p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="pf-skills">
          <div className="pf-wrap">
            <div className="pf-section-heading pf-reveal">
              <div>
                <SectionLabel index="02">THE CREATIVE TOOLKIT</SectionLabel>
                <h2>
                  A universe{" "}
                  of <em>possibilities.</em>
                </h2>
              </div>
              <p><SignalText disabled={paused || reduced} text="From typed interfaces to reliable data flow, I keep state management predictable as products grow." select={["State Management"]} /></p>
            </div>
            <SkillOrbit paused={paused || reduced} />
            <div className="pf-skill-inventory pf-reveal">
              {Object.entries(skillCategories).map(([category, skills], i) => (
                <details key={category}>
                  <summary>
                    <span>{number(i + 1)}</span>
                    {category}
                    <Plus size={16} />
                  </summary>
                  <div className="pf-tags">
                    {skills.map((s) => (
                      <span key={s.name}><TechnologyIcon name={s.name} size={17} />{s.name}</span>
                    ))}
                  </div>
                </details>
              ))}
            </div>
            <div className="pf-human-skills pf-reveal">
              <span className="pf-eyebrow"><Users size={16} /> THE HUMAN SKILLS</span>
              <p>Team Collaboration · Problem Solving · Adaptability · Continuous Learning · Growth Mindset · Time Management · Multitasking · Deadline-Oriented</p>
            </div>
            <aside className="pf-ai-workflow pf-reveal" aria-labelledby="pf-ai-workflow-title">
              <div className="pf-ai-workflow-heading">
                <div>
                  <span className="pf-eyebrow">HOW I WORK</span>
                  <h3 id="pf-ai-workflow-title">Human curiosity. <em>AI-assisted momentum.</em></h3>
                </div>
              </div>
              <ul className="pf-ai-tools" aria-label="AI tools in my workflow">
                {aiTools.map((tool) => <li key={tool}><AiToolIcon name={tool} /><span>{tool}</span></li>)}
              </ul>
            </aside>
          </div>
        </section>
        <section id="projects" className="pf-projects">
          <ProjectHelix reduced={reduced} motionDisabled={paused || reduced} />
          <Archive />
        </section>
        <section id="experience" className="pf-journey pf-wrap">
          <div className="pf-section-heading pf-reveal">
            <div>
              <SectionLabel index="04">ALWAYS MOVING FORWARD</SectionLabel>
              <h2>
                Built through{" "}
                <em>experience.</em>
              </h2>
            </div>
            <p>
              Learning. Building. Sharing.
              <br />
              Every chapter adds a new perspective.
            </p>
          </div>
          <div className="pf-timeline">
            {experiences.map((e, i) => (
              <article className="pf-timeline-item" key={e.company} style={{ "--stack-index": i } as CSSProperties}>
                <div className="pf-timeline-meta">
                  <BriefcaseBusiness size={29} className="pf-career-icon" />
                  <span><CalendarDays size={16} />{e.period}</span>
                  <span><MapPin size={16} />{e.location}</span>
                  {i === 0 && (
                    <b>
                      <i className="pf-status" /> CURRENT CHAPTER
                    </b>
                  )}
                </div>
                <div className="pf-timeline-content">
                  <span className="pf-eyebrow">{e.company}</span>
                  <h3>{e.title}</h3>
                  <p><SignalText text={e.description} disabled={paused || reduced} select={["Authentication", "React", "Redux"]} /></p>
                  <details>
                    <summary>
                      <Layers3 size={17} /> Contributions <Plus size={16} />
                    </summary>
                    <ul>
                      {e.achievements.map((a) => (
                        <li key={a}><SignalText text={a} disabled={paused || reduced} select={["Architecture", "SEO", "API Integration", "Authentication", "Redux", "State Management"]} /></li>
                      ))}
                    </ul>
                  </details>
                </div>
                <span className="pf-timeline-number">{number(i + 1)}</span>
              </article>
            ))}
          </div>
          <div className="pf-foundations">
            <div id="education" className="pf-reveal">
              <SectionLabel index="↗">THE FOUNDATION</SectionLabel>
              {education.map((e) => (
                <article key={e.degree}>
                  <span className="pf-eyebrow">
                    {e.period} / {e.location}
                  </span>
                  <h3>{e.degree}</h3>
                  <h4>{e.institution}</h4>
                  <p>{e.description}</p>
                </article>
              ))}
            </div>
            <div id="internships" className="pf-reveal">
              <SectionLabel index="↗">LEARNING & COMMUNITY</SectionLabel>
              {[...internships, ...memberships].map((e) => (
                <details key={e.organization}>
                  <summary>
                    <span>{e.organization}</span>
                    <Plus size={16} />
                  </summary>
                  <span className="pf-eyebrow">{e.period}</span>
                  <h4>{e.title}</h4>
                  {"location" in e && typeof e.location === "string" && (
                    <p>{e.location}</p>
                  )}
                  <p>{e.description}</p>
                  <ul>
                    {e.achievements.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="pf-contact">
          <div className="pf-contact-orbit" aria-hidden="true" />
          <div className="pf-wrap">
            <SectionLabel index="05">THE NEXT CHAPTER</SectionLabel>
            <div className="pf-contact-top pf-reveal">
              <h2>
                Have something{" "}
                <em>in mind?</em>
                <span>↗</span>
              </h2>
              <p>
                I turn complex product ideas into clear, dependable web experiences—built
                with thoughtful architecture and attention to detail.
              </p>
            </div>
            <a className="pf-contact-email" href={`mailto:${email}`}>
              <span>Let’s make it happen.</span>
              <ArrowUpRight />
            </a>
            <div className="pf-contact-details">
              <a href={`mailto:${email}`} className="pf-contact-gmail"><GmailMark size={20} />{email}</a>
              <a href="tel:+201099491558"><Phone size={18} />+20 109 949 1558</a>
              <span><MapPin size={18} />CAIRO, EGYPT</span>
            </div>
            <footer className="pf-footer">
              <a href="#home" className="pf-brand">
                Ahmed<span>Ebrahem.</span>
              </a>
              <div className="pf-footer-links" aria-label="Social and résumé links">
                <a className="pf-footer-github" href="https://github.com/ahmedebrahem0" {...external} aria-label="Ahmed on GitHub (opens in a new tab)">
                  <Github size={19} aria-hidden="true" /> GitHub <ArrowUpRight size={14} aria-hidden="true" />
                </a>
                <a
                  className="pf-footer-linkedin"
                  href="https://www.linkedin.com/in/ahmedebrahem"
                  {...external}
                  aria-label="Ahmed on LinkedIn (opens in a new tab)"
                >
                  <LinkedInMark /> LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
                </a>
                <a className="pf-footer-whatsapp" href={whatsapp} {...external} aria-label="WhatsApp Ahmed at +20 109 949 1558 (opens in a new tab)">
                  <WhatsAppMark size={19} /> WhatsApp <ArrowUpRight size={14} aria-hidden="true" />
                </a>
                <a className="pf-footer-resume" href={resume} {...external} aria-label="View Ahmed’s résumé on Google Drive (opens in a new tab)">
                  <DriveMark /> Résumé <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
              <a href="#home" className="pf-back-top" aria-label="Back to top">
                <ArrowDown size={20} />
              </a>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
