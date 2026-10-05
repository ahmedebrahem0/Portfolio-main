import { useEffect, useRef, useState, type CSSProperties } from "react";

const SOURCE = "/images/my-photo - Copy.png";
const COLUMNS = 6;
const ROWS = 8;
const TILE_DURATION_MS = 720;
const tiles = Array.from({ length: COLUMNS * ROWS }, (_, index) => {
  const row = Math.floor(index / COLUMNS);
  const col = index % COLUMNS;
  // Reveal one column at a time from right to left, with only subtle vertical variation.
  const delay = (COLUMNS - 1 - col) * 295 + row * 18 + ((row * 7 + col * 11) % 5) * 6;
  return { index, row, col, delay };
});
const REVEAL_DURATION_MS = Math.max(...tiles.map(({ delay }) => delay)) + TILE_DURATION_MS;

type PixelPortraitProps = { motionDisabled: boolean };

export function PixelPortrait({ motionDisabled }: PixelPortraitProps) {
  const [phase, setPhase] = useState<"idle" | "revealing" | "done">("idle");
  const [imageLoaded, setImageLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!portraitRef.current) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const revealThreshold = window.matchMedia("(max-width: 799px)").matches ? 0.68 : 0.3;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= revealThreshold) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: revealThreshold },
    );
    observer.observe(portraitRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (motionDisabled) {
      setPhase("done");
      return;
    }
    if (!imageLoaded || !inView || phase !== "idle") return;
    setPhase("revealing");
  }, [motionDisabled, imageLoaded, inView, phase]);

  useEffect(() => {
    if (phase !== "revealing") return;
    const timer = setTimeout(() => setPhase("done"), REVEAL_DURATION_MS);
    return () => clearTimeout(timer);
  }, [phase]);

  return (
    <div ref={portraitRef} className={`pf-pixel-portrait${phase !== "done" && !motionDisabled ? " is-pixelating" : ""}${phase === "revealing" && !motionDisabled ? " is-revealing" : ""}`}>
      <img
        className="pf-pixel-portrait-image"
        src={SOURCE}
        alt="Ahmed Ebrahem"
        width="960"
        height="1280"
        fetchPriority="high"
        onLoad={() => setImageLoaded(true)}
      />
      {phase === "revealing" && !motionDisabled && (
        <div className="pf-pixel-portrait-grid" aria-hidden="true">
          {tiles.map(({ index, row, col, delay }) => (
            <span
              className="pf-pixel-portrait-tile"
              key={index}
              style={{
                "--pixel-row": row,
                "--pixel-col": col,
                "--pixel-delay": `${delay}ms`,
              } as CSSProperties}
            >
              <img src={SOURCE} alt="" draggable={false} />
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
