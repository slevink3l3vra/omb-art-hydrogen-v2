import type { Composition } from "@/data/catalog";
import { cn } from "@/lib/cn";

type Props = {
  composition: Composition;
  palette: [string, string, string, string];
  title: string;
  className?: string;
};

export function Artwork({ composition, palette, title, className }: Props) {
  const [ground, a, b, c] = palette;
  const uid = composition;

  return (
    <svg
      viewBox="0 0 800 1100"
      className={cn("h-full w-full", className)}
      role="img"
      aria-label={title}
    >
      <defs>
        <filter id={`${uid}-grain`} x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="4" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0.28" />
          </feComponentTransfer>
        </filter>
        <linearGradient id={`${uid}-wash`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={a} />
          <stop offset="0.55" stopColor={b} />
          <stop offset="1" stopColor={c} />
        </linearGradient>
      </defs>
      <rect width="800" height="1100" fill={ground} />
      <Layers composition={composition} a={a} b={b} c={c} uid={uid} />
      <rect width="800" height="1100" filter={`url(#${uid}-grain)`} />
    </svg>
  );
}

function Layers({
  composition,
  a,
  b,
  c,
  uid,
}: {
  composition: Composition;
  a: string;
  b: string;
  c: string;
  uid: string;
}) {
  if (composition === "fire") {
    return (
      <g>
        <ellipse cx="400" cy="620" rx="260" ry="380" fill={a} opacity="0.85" />
        <ellipse cx="300" cy="480" rx="160" ry="220" fill={b} opacity="0.75" />
        <ellipse cx="500" cy="700" rx="180" ry="240" fill={c} opacity="0.7" />
        <path d="M120 200 C260 420 220 700 160 980" stroke={b} strokeWidth="46" fill="none" opacity="0.8" />
        <path d="M640 80 C520 360 700 640 560 1040" stroke={a} strokeWidth="70" fill="none" opacity="0.55" />
      </g>
    );
  }
  if (composition === "mist") {
    return (
      <g>
        <rect width="800" height="1100" fill={`url(#${uid}-wash)`} opacity="0.9" />
        <ellipse cx="420" cy="360" rx="300" ry="180" fill="#f7f4ee" opacity="0.55" />
        <path d="M80 700 C240 620 300 860 520 780 C680 720 700 900 760 860" stroke={c} strokeWidth="18" fill="none" />
        <path d="M140 240 L220 860" stroke={b} strokeWidth="8" opacity="0.7" />
        <circle cx="560" cy="640" r="18" fill={c} />
      </g>
    );
  }
  if (composition === "bloom") {
    return (
      <g>
        <circle cx="280" cy="420" r="180" fill={a} />
        <circle cx="470" cy="520" r="210" fill={b} opacity="0.9" />
        <circle cx="360" cy="700" r="160" fill={c} opacity="0.85" />
        <circle cx="520" cy="300" r="90" fill="#fff6e8" opacity="0.55" />
        <path d="M100 900 C300 760 480 980 720 820" stroke="#5a2418" strokeWidth="14" fill="none" opacity="0.45" />
      </g>
    );
  }
  if (composition === "mind") {
    return (
      <g>
        <rect width="800" height="1100" fill={`url(#${uid}-wash)`} />
        <path
          d="M80 180 C200 80 260 300 400 220 C560 130 600 400 720 300 C640 520 500 480 420 640 C300 820 180 700 120 900"
          stroke="#0e1c1c"
          strokeWidth="10"
          fill="none"
        />
        <path
          d="M160 400 C300 360 340 560 500 500 C640 450 680 680 600 860"
          stroke="#111"
          strokeWidth="6"
          fill="none"
          opacity="0.75"
        />
        <circle cx="400" cy="220" r="10" fill="#111" />
        <circle cx="500" cy="500" r="8" fill="#111" />
      </g>
    );
  }
  if (composition === "forest") {
    return (
      <g>
        <rect y="780" width="800" height="320" fill={b} opacity="0.35" />
        <path d="M60 1100 L180 220 L300 1100 Z" fill={a} opacity="0.9" />
        <path d="M240 1100 L420 120 L600 1100 Z" fill={c} opacity="0.55" />
        <path d="M480 1100 L640 360 L780 1100 Z" fill={a} opacity="0.7" />
        <rect y="160" width="800" height="8" fill={b} opacity="0.8" />
      </g>
    );
  }
  if (composition === "tide") {
    return (
      <g>
        <rect width="800" height="1100" fill={`url(#${uid}-wash)`} />
        <path d="M0 640 C160 560 240 760 400 680 C560 600 640 820 800 720 L800 1100 L0 1100 Z" fill={a} opacity="0.55" />
        <path d="M0 420 C200 480 280 300 480 380 C640 440 700 300 800 340" stroke={c} strokeWidth="22" fill="none" />
        <ellipse cx="400" cy="300" rx="220" ry="60" fill="#f4fffb" opacity="0.25" />
      </g>
    );
  }
  if (composition === "cups") {
    return (
      <g>
        <rect width="800" height="1100" fill={a} />
        <ellipse cx="220" cy="340" rx="90" ry="140" fill={b} />
        <ellipse cx="400" cy="520" rx="110" ry="170" fill={c} />
        <ellipse cx="580" cy="380" rx="80" ry="130" fill={b} opacity="0.85" />
        <ellipse cx="300" cy="780" rx="100" ry="150" fill="#2f6f6a" />
        <rect x="190" y="300" width="16" height="280" fill="#2a1a10" opacity="0.35" />
        <rect x="560" y="340" width="14" height="240" fill="#2a1a10" opacity="0.35" />
      </g>
    );
  }
  return (
    <g>
      <rect width="800" height="1100" fill={c} />
      {[80, 180, 280, 400, 520, 640, 740].map((x, i) => (
        <rect
          key={x}
          x={x}
          y={120 + (i % 3) * 40}
          width={i % 2 === 0 ? 36 : 18}
          height={860 - (i % 4) * 60}
          fill={i % 2 === 0 ? a : b}
          opacity={0.75}
        />
      ))}
      <rect y="860" width="800" height="240" fill={a} opacity="0.25" />
    </g>
  );
}
