import { useEffect, useRef, useState, type CSSProperties, type FocusEvent } from "react";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import "./project-chapters.css";

const midpoint = Math.ceil(projects.length / 2);
const rows = [projects.slice(0, midpoint), projects.slice(midpoint).reverse()];
const descriptors = [
  "Live furniture commerce · Next.js", "Arabic storefront · RTL commerce",
  "Operations platform · Four roles", "School operations · Analytics",
  "Shopping experience · React", "Product dashboard · Data",
  "Live forecast · OpenWeather", "Healthcare awareness · React",
  "Business website · Frontend", "School website · Responsive",
  "Medical website · Frontend", "Landing experience · Bootstrap",
  "Responsive page · Bootstrap", "Personal website · Frontend",
  "Organization website · IEEE", "Team workspace · Real-time",
];
const imagePositions: Record<number, string> = {
  0: "30% 50%", // Keep the YUMA logo and hero copy in view.
  8: "25% 50%", // Keep the Alkohlany headline and illustration together.
  9: "30% 50%", // Preserve the school site's left-aligned identity.
  10: "75% 50%", // Favor the prosthetic-care headline on the right.
  15: "50% 25%", // Keep the taller task-management form heading visible.
};
const pad = (number: number) => String(number).padStart(2, "0");
const pinQuery = "(prefers-reduced-motion: no-preference) and (min-height: 700px), (prefers-reduced-motion: no-preference) and (max-width: 799px) and (orientation: portrait) and (min-height: 600px)";
const external = { target: "_blank", rel: "noopener noreferrer" } as const;

export function ProjectChapters() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRefs = useRef<(HTMLDivElement | null)[]>([]);
  const railRefs = useRef<(HTMLDivElement | null)[]>([]);
  const railCountRefs = useRef<(HTMLOutputElement | null)[]>([]);
  const progressRef = useRef<HTMLSpanElement>(null);
  const numberRef = useRef<HTMLOutputElement>(null);
  const [pinned, setPinned] = useState(() => window.matchMedia(pinQuery).matches);

  useEffect(() => {
    const media = window.matchMedia(pinQuery);
    const update = () => setPinned(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!pinned) return;
    const section = sectionRef.current;
    if (!section) return;
    let frame = 0;
    let target = 0;
    let displayed = 0;
    let lastTime = 0;
    const draw = (progress: number) => {
      trackRefs.current.forEach((track, index) => {
        const viewport = track?.parentElement;
        if (!track || !viewport) return;
        const travel = Math.max(0, track.scrollWidth - viewport.clientWidth);
        track.style.transform = `translate3d(${index === 0 ? -travel * progress : -travel * (1 - progress)}px, 0, 0)`;
      });
      if (progressRef.current) progressRef.current.style.width = `${progress * 100}%`;
      if (numberRef.current) numberRef.current.value = `${pad(Math.min(projects.length, Math.max(1, Math.ceil(progress * projects.length))))} / ${pad(projects.length)}`;
      railCountRefs.current.forEach((count) => { if (count) count.value = `${pad(Math.min(midpoint, Math.max(1, Math.ceil(progress * midpoint))))} / ${pad(midpoint)}`; });
    };
    const tick = (time: number) => {
      frame = 0;
      const elapsed = lastTime ? Math.min(64, time - lastTime) : 16;
      lastTime = time;
      const blend = 1 - Math.exp(-elapsed / 120);
      displayed += (target - displayed) * blend;
      if (Math.abs(target - displayed) < .0003) displayed = target;
      draw(displayed);
      if (displayed !== target) frame = requestAnimationFrame(tick);
      else lastTime = 0;
    };
    const request = () => {
      const distance = Math.max(1, section.offsetHeight - window.innerHeight);
      target = Math.max(0, Math.min(1, -section.getBoundingClientRect().top / distance));
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const observer = new ResizeObserver(request);
    observer.observe(section);
    trackRefs.current.forEach((track) => { if (track) observer.observe(track); });
    request();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
    };
  }, [pinned]);

  useEffect(() => {
    const reveal = () => {
      if (window.location.hash !== "#logistics-project") return;
      requestAnimationFrame(() => {
        if (!pinned) {
          document.getElementById("logistics-project")?.scrollIntoView({ block: "center" });
          return;
        }
        const section = sectionRef.current;
        if (!section) return;
        const distance = Math.max(1, section.offsetHeight - window.innerHeight);
        window.scrollTo({ top: window.scrollY + section.getBoundingClientRect().top + distance * .32, behavior: "instant" });
      });
    };
    reveal();
    window.addEventListener("hashchange", reveal);
    return () => window.removeEventListener("hashchange", reveal);
  }, [pinned]);

  const bringIntoView = (event: FocusEvent<HTMLElement>, rowIndex: number) => {
    if (!pinned) return;
    const section = sectionRef.current;
    const track = trackRefs.current[rowIndex];
    const viewport = track?.parentElement;
    const card = event.currentTarget;
    if (!section || !track || !viewport) return;
    const travel = track.scrollWidth - viewport.clientWidth;
    if (travel <= 0) return;
    const distance = Math.max(1, section.offsetHeight - window.innerHeight);
    const current = Math.max(0, Math.min(1, -section.getBoundingClientRect().top / distance));
    const visibleOffset = rowIndex === 0 ? travel * current : travel * (1 - current);
    const left = card.offsetLeft - visibleOffset;
    if (left >= 12 && left + card.offsetWidth <= viewport.clientWidth - 12) return;
    const centerOffset = Math.max(0, Math.min(travel, card.offsetLeft + card.offsetWidth / 2 - viewport.clientWidth / 2));
    const progress = rowIndex === 0 ? centerOffset / travel : 1 - centerOffset / travel;
    window.scrollTo({ top: window.scrollY + section.getBoundingClientRect().top + distance * progress, behavior: "instant" });
  };

  const updateRailCount = (rowIndex: number) => {
    if (pinned) return;
    const rail = railRefs.current[rowIndex];
    const count = railCountRefs.current[rowIndex];
    const card = rail?.querySelector<HTMLElement>(".pc-card");
    if (!rail || !count || !card) return;
    const gap = parseFloat(getComputedStyle(card.parentElement!).gap) || 0;
    const position = Math.min(rows[rowIndex].length, Math.max(1, Math.round(rail.scrollLeft / (card.offsetWidth + gap)) + 1));
    count.value = `${pad(position)} / ${pad(rows[rowIndex].length)}`;
  };

  return (
    <section id="project-archive" ref={sectionRef} className={`pc-gallery ${pinned ? "is-pinned" : ""}`} aria-labelledby="pc-title">
      <div className="pc-gallery-sticky">
        <header className="pc-gallery-heading pf-wrap">
          <div>
            <span className="pc-overline"><i /> EXPLORE THE WORK / {pad(projects.length)}</span>
            <h3 id="pc-title">The project <em>index.</em></h3>
          </div>
          <div className="pc-gallery-heading-aside">
            <p>Sixteen ideas, built and shipped.<br />Scroll through the work.</p>
            <a href="?archive=classic#project-archive">View classic index <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
        </header>
        <div className="pc-gallery-rows">
          {rows.map((row, rowIndex) => (
            <div className="pc-gallery-row" key={rowIndex}>
              <div className="pc-gallery-row-top pf-wrap">
                <span className="pc-row-label"><b>{pad(rowIndex + 1)}</b> / <span className="pc-row-label-long">{rowIndex === 0 ? "FEATURED & RECENT" : "MORE FROM THE ARCHIVE"}</span><span className="pc-row-label-short">{rowIndex === 0 ? "FEATURED WORK" : "ARCHIVE WORK"}</span></span>
                <span className="pc-row-direction">{rowIndex === 0 ? "MOVE LEFT" : "MOVE RIGHT"} <ArrowRight size={13} aria-hidden="true" /></span>
                <output className="pc-rail-position" ref={(node) => { railCountRefs.current[rowIndex] = node; }} aria-label={`Position in row ${rowIndex + 1}`}>01 / {pad(row.length)}</output>
              </div>
              <div className="pc-gallery-window" ref={(node) => { railRefs.current[rowIndex] = node; }} onScroll={() => updateRailCount(rowIndex)}>
                <div className="pc-gallery-track" ref={(node) => { trackRefs.current[rowIndex] = node; }}>
                  {row.map((project) => {
                    const index = projects.indexOf(project);
                    return (
                      <article className="pc-card" id={index === 2 ? "logistics-project" : undefined} key={project.title} onFocus={(event) => bringIntoView(event, rowIndex)}>
                        <a className={index === 10 ? "pc-card-image pc-card-image--prosthetic" : "pc-card-image"} href={project.liveDemo} {...external} aria-label={`View ${project.title} live`} style={{ "--pc-position": imagePositions[index] || "50% 50%" } as CSSProperties}>
                          <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" decoding="async" />
                          <span className="pc-card-image-action">VISIT PROJECT <ArrowUpRight size={16} /></span>
                        </a>
                        <div className="pc-card-info">
                          <span className="pc-card-number">{pad(index + 1)}<small> / {pad(projects.length)}</small></span>
                          <div className="pc-card-copy"><h4>{project.title}</h4><p>{descriptors[index]}</p></div>
                          <div className="pc-card-links">
                            <a href={project.liveDemo} {...external} aria-label={`Open ${project.title} live project`} title="Live project"><ArrowUpRight size={19} /></a>
                            {"github" in project && project.github && <a href={project.github} {...external} aria-label={`Open ${project.title} source code`} title="Source code"><Github size={18} /></a>}
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
        <footer className="pc-gallery-footer pf-wrap">
          <span>SCROLL TO EXPLORE <ArrowRight size={13} aria-hidden="true" /></span>
          <span className="pc-gallery-progress" aria-hidden="true"><span ref={progressRef} /></span>
          <output ref={numberRef} aria-label="Project gallery progress">01 / {pad(projects.length)}</output>
          <a href="#experience">SKIP TO EXPERIENCE <ArrowUpRight size={13} /></a>
        </footer>
      </div>
    </section>
  );
}
