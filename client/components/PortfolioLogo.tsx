type PortfolioLogoProps = {
  footer?: boolean;
  onClick?: () => void;
};

export function PortfolioLogo({ footer = false, onClick }: PortfolioLogoProps) {
  return (
    <a
      href="#home"
      className={`pf-logo${footer ? " pf-logo--footer" : ""}`}
      aria-label="Ahmed Ebrahem — home"
      onClick={onClick}
    >
      <span className="pf-logo-art" aria-hidden="true">
        <svg viewBox="0 0 680 390" width="110" height="64" focusable="false" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* Actual vector strokes: each segment draws, holds, then erases. */}
          <path className="pf-logo-stroke pf-logo-crossbar" pathLength="1" d="M 240 287 L 405 195" stroke="#c4fa57" strokeWidth="48" />
          <path className="pf-logo-stroke pf-logo-letter" pathLength="1" d="M 190 340 L 326 48 Q 340 20 354 48 L 490 340" stroke="#fffaf1" strokeWidth="64" />
          <path className="pf-logo-stroke pf-logo-bracket" pathLength="1" d="M 130 115 L 40 200 L 125 285" stroke="#c4fa57" strokeWidth="42" />
          <path className="pf-logo-stroke pf-logo-bracket" pathLength="1" d="M 550 115 L 640 200 L 555 285" stroke="#c4fa57" strokeWidth="42" />
        </svg>
      </span>
    </a>
  );
}
