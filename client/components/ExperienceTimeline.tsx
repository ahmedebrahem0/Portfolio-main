import { useEffect, useRef, type CSSProperties } from "react";
import { BriefcaseBusiness, CalendarDays, Layers3, MapPin, Plus } from "lucide-react";
import { experiences } from "@/data/portfolio";
import "./experience-timeline.css";

const number = (value: number) => String(value).padStart(2, "0");
const highlighted = /^(architecture|authentication|seo|api|integration|react|redux|state|management|production)$/i;

function IlluminatedText({ text }: { text: string }) {
  return <>{text.split(/(\s+)/).map((word, index) => /^\s+$/.test(word) ? word : (
    <span className={`pf-career-word${highlighted.test(word.replace(/[^\w]/g, "")) ? " is-key" : ""}`} style={{ "--word-index": index } as CSSProperties} key={index}>{word}</span>
  ))}</>;
}

function AchievementList({ items }: { items: readonly string[] }) {
  return <ol>{items.map((item, index) => <li key={item}><span className="pf-career-achievement-index">{number(index + 1)}</span><span><IlluminatedText text={item} /></span></li>)}</ol>;
}

export function ExperienceTimeline({ motionDisabled }: { motionDisabled: boolean }) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const trackRef = useRef<SVGPathElement>(null);
  const fillRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    const svg = svgRef.current;
    const track = trackRef.current;
    const fill = fillRef.current;
    if (!timeline || !svg || !track || !fill) return;

    const entries = Array.from(timeline.querySelectorAll<HTMLElement>(".pf-career-entry"));
    let measureFrame = 0;
    let scrollFrame = 0;
    let disposed = false;
    let length = 0;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const update = () => {
      const marker = window.innerHeight * .57;
      const bounds = timeline.getBoundingClientRect();
      const targetY = Math.max(0, Math.min(bounds.height, marker - bounds.top));
      let progressLength = length;
      if (!motionDisabled && !prefersReduced && targetY < bounds.height && length) {
        let lo = 0;
        let hi = length;
        for (let i = 0; i < 16; i++) {
          const mid = (lo + hi) / 2;
          if (fill.getPointAtLength(mid).y < targetY) lo = mid;
          else hi = mid;
        }
        progressLength = (lo + hi) / 2;
      }
      fill.style.strokeDashoffset = `${Math.max(0, length - progressLength)}`;
      entries.forEach((entry) => {
        const node = entry.querySelector<HTMLElement>(".pf-career-node");
        if (!node) return;
        const active = motionDisabled || prefersReduced || node.getBoundingClientRect().top <= marker;
        entry.classList.toggle("is-lit", active);
        entry.classList.toggle("is-revealed", active);
      });
    };

    const measure = () => {
      measureFrame = 0;
      const box = timeline.getBoundingClientRect();
      const mobile = window.matchMedia("(max-width: 799px)").matches;
      const points = entries.map((entry) => {
        const node = entry.querySelector<HTMLElement>(".pf-career-node")!;
        const rect = node.getBoundingClientRect();
        return { x: rect.left + rect.width / 2 - box.left, y: rect.top + rect.height / 2 - box.top };
      });
      if (!points.length || box.height === 0) return;
      const center = mobile ? points[0].x : box.width / 2;
      let d = `M ${center} 0 L ${points[0].x} ${points[0].y}`;
      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const next = points[i];
        const mid = (prev.y + next.y) / 2;
        const wave = mobile ? 0 : (i % 2 ? 1 : -1) * Math.min(20, box.width * .015);
        d += ` C ${prev.x} ${prev.y + (mid - prev.y) * .54}, ${center + wave} ${mid - 30}, ${center + wave} ${mid}`;
        d += ` C ${center + wave} ${mid + 30}, ${next.x} ${next.y - (next.y - mid) * .54}, ${next.x} ${next.y}`;
      }
      d += ` L ${center} ${box.height}`;
      svg.setAttribute("viewBox", `0 0 ${box.width} ${box.height}`);
      track.setAttribute("d", d);
      fill.setAttribute("d", d);
      length = fill.getTotalLength();
      fill.style.strokeDasharray = `${length}`;
      update();
    };

    const scheduleMeasure = () => { if (!disposed && !measureFrame) measureFrame = requestAnimationFrame(measure); };
    const scheduleUpdate = () => { if (!disposed && !scrollFrame) scrollFrame = requestAnimationFrame(() => { scrollFrame = 0; update(); }); };
    if (!motionDisabled && !prefersReduced) {
      timeline.classList.add("is-animated");
    }
    measure();
    const resizeObserver = new ResizeObserver(scheduleMeasure);
    resizeObserver.observe(timeline);
    entries.forEach((entry) => resizeObserver.observe(entry));
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleMeasure);
    document.fonts?.ready.then(scheduleMeasure);
    return () => {
      disposed = true;
      resizeObserver.disconnect();
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleMeasure);
      cancelAnimationFrame(measureFrame);
      cancelAnimationFrame(scrollFrame);
      timeline.classList.remove("is-animated");
    };
  }, [motionDisabled]);

  return <div ref={timelineRef} className={`pf-career-timeline${motionDisabled ? " is-static" : ""}`}>
    <svg ref={svgRef} className="pf-career-rail-svg" preserveAspectRatio="none" aria-hidden="true"><path ref={trackRef} className="pf-career-rail-track" /><path ref={fillRef} className="pf-career-rail-fill" /></svg>
    {experiences.map((experience, index) => <article className={`pf-career-entry${index % 2 ? " is-right" : " is-left"}`} key={experience.company}>
      <span className="pf-career-node" aria-hidden="true"><span /></span>
      <span className="pf-career-date"><CalendarDays size={13} aria-hidden="true" />{experience.period}</span>
      <aside className="pf-career-contributions" aria-label={`${experience.company} contributions`}>
        <details open><summary><Layers3 size={16} aria-hidden="true" /><span>Contributions</span><Plus size={16} aria-hidden="true" /></summary><AchievementList items={experience.achievements} /></details>
      </aside>
      <div className="pf-career-card">
        <div className="pf-career-card-top"><span className="pf-career-card-index">{number(index + 1)} / {number(experiences.length)}</span>{index === 0 && <span className="pf-career-now"><i /> CURRENT CHAPTER</span>}</div>
        <span className="pf-career-company"><BriefcaseBusiness size={16} aria-hidden="true" />{experience.company}</span>
        <h3>{experience.title}</h3>
        <div className="pf-career-facts"><span><MapPin size={15} aria-hidden="true" />{experience.location}</span></div>
        <p><IlluminatedText text={experience.description} /></p>
        <details className="pf-career-mobile-details"><summary><Layers3 size={17} aria-hidden="true" /> Contributions <Plus size={16} aria-hidden="true" /></summary><AchievementList items={experience.achievements} /></details>
      </div>
    </article>)}
  </div>;
}
