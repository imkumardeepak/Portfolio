import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  r: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

interface OrbitParticle {
  angle: number;
  speed: number;
  radius: number;
  size: number;
  color: string;
}

export function HeroGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reducedMotion = mq.matches;

    let raf = 0;
    let time = 0;

    /* ---------- Stars ---------- */
    const NUM_STARS = 220;
    const stars: Star[] = Array.from({ length: NUM_STARS }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.4 + 0.2,
      opacity: Math.random() * 0.55 + 0.15,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      twinkleOffset: Math.random() * Math.PI * 2,
    }));

    /* ---------- Orbit particles ---------- */
    const orbits: OrbitParticle[] = [
      { angle: 0.0, speed: 0.007, radius: 1.55, size: 4, color: "rgba(180,130,255,0.95)" },
      { angle: Math.PI, speed: 0.007, radius: 1.55, size: 3, color: "rgba(130,180,255,0.85)" },
      { angle: 1.2, speed: 0.011, radius: 1.75, size: 2.5, color: "rgba(200,160,255,0.7)" },
      { angle: 3.5, speed: 0.011, radius: 1.75, size: 2, color: "rgba(150,220,255,0.65)" },
    ];

    /* ---------- Resize ---------- */
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    /* ---------- Draw ---------- */
    const draw = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);

      /* --- Stars --- */
      stars.forEach((s) => {
        const flicker = reducedMotion
          ? s.opacity
          : s.opacity + Math.sin(time * s.twinkleSpeed * 60 + s.twinkleOffset) * 0.15;
        ctx.beginPath();
        ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${Math.max(0, Math.min(1, flicker))})`;
        ctx.fill();
      });

      /* --- Globe parameters --- */
      const cx = W * 0.74;
      const cy = H * 0.5;
      const R = Math.min(W, H) * 0.31;
      const rot = reducedMotion ? 0.35 : time * 0.18;

      /* --- Outer atmospheric glow --- */
      const atmo = ctx.createRadialGradient(cx, cy, R * 0.65, cx, cy, R * 1.55);
      atmo.addColorStop(0, "rgba(110,70,230,0.22)");
      atmo.addColorStop(0.5, "rgba(90,50,200,0.09)");
      atmo.addColorStop(1, "rgba(60,20,160,0)");
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.55, 0, Math.PI * 2);
      ctx.fillStyle = atmo;
      ctx.fill();

      /* --- Globe surface gradient --- */
      const surf = ctx.createRadialGradient(cx - R * 0.25, cy - R * 0.25, R * 0.05, cx, cy, R);
      surf.addColorStop(0, "rgba(120,85,255,0.18)");
      surf.addColorStop(0.5, "rgba(80,50,200,0.12)");
      surf.addColorStop(1, "rgba(30,10,80,0.08)");
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = surf;
      ctx.fill();

      /* --- Clip to sphere for grid lines --- */
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R - 0.5, 0, Math.PI * 2);
      ctx.clip();

      /* Longitude lines (rotating) */
      const NUM_LON = 14;
      for (let i = 0; i < NUM_LON; i++) {
        const theta = (i / NUM_LON) * Math.PI + rot;
        const cosT = Math.cos(theta);
        const sinT = Math.sin(theta);
        const xR = Math.abs(cosT) * R;
        const xOff = sinT * R;
        const alpha = Math.max(0, cosT * 0.45 + 0.12);
        ctx.beginPath();
        ctx.ellipse(cx + xOff, cy, xR, R, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(160,110,255,${alpha})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      /* Latitude lines */
      const NUM_LAT = 9;
      for (let i = 1; i < NUM_LAT; i++) {
        const phi = (i / NUM_LAT) * Math.PI;
        const y = cy - R * Math.cos(phi);
        const rLat = R * Math.sin(phi);
        const alpha = 0.08 + 0.1 * Math.sin(phi);
        ctx.beginPath();
        ctx.ellipse(cx, y, rLat, rLat * 0.2, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(160,110,255,${alpha})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      /* Hotspot dots at grid intersections */
      for (let lon = 0; lon < NUM_LON; lon++) {
        const theta = (lon / NUM_LON) * Math.PI + rot;
        const cosT = Math.cos(theta);
        const sinT = Math.sin(theta);
        if (cosT < 0) continue; // back face
        for (let lat = 1; lat < NUM_LAT; lat++) {
          const phi = (lat / NUM_LAT) * Math.PI;
          const sinPhi = Math.sin(phi);
          const dotX = cx + R * sinPhi * sinT;
          const dotY = cy - R * Math.cos(phi);
          const alpha = cosT * sinPhi * 0.6;
          ctx.beginPath();
          ctx.arc(dotX, dotY, 1.3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200,160,255,${alpha})`;
          ctx.fill();
        }
      }
      ctx.restore();

      /* --- Globe border ring --- */
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(140,90,255,0.35)";
      ctx.lineWidth = 1.2;
      ctx.stroke();

      /* --- Orbit ring 1 (tilted) --- */
      const orbitR1 = R * 1.48;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(0.42);
      ctx.scale(1, 0.28);
      ctx.beginPath();
      ctx.arc(0, 0, orbitR1, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(140,90,255,0.22)";
      ctx.lineWidth = 1.5 / 0.28;
      ctx.stroke();
      ctx.restore();

      /* --- Orbit ring 2 (tilted differently) --- */
      const orbitR2 = R * 1.72;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-0.55);
      ctx.scale(1, 0.2);
      ctx.beginPath();
      ctx.arc(0, 0, orbitR2, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(100,160,255,0.15)";
      ctx.lineWidth = 1 / 0.2;
      ctx.stroke();
      ctx.restore();

      /* --- Orbit particles --- */
      orbits.forEach((p) => {
        const angle = p.angle + (reducedMotion ? 0 : time * p.speed * 60);
        const ringR = R * p.radius;

        /* tilt transform same as ring 1 */
        const cosA = Math.cos(angle);
        const sinA = Math.sin(angle);
        const tiltAngle = 0.42;
        const flattenY = 0.28;
        const px = cosA * ringR;
        const py = sinA * ringR * flattenY;
        const rx = px * Math.cos(tiltAngle) - py * Math.sin(tiltAngle);
        const ry = px * Math.sin(tiltAngle) + py * Math.cos(tiltAngle);

        /* glow */
        const glow = ctx.createRadialGradient(cx + rx, cy + ry, 0, cx + rx, cy + ry, p.size * 4);
        glow.addColorStop(0, p.color);
        glow.addColorStop(1, "rgba(140,90,255,0)");
        ctx.beginPath();
        ctx.arc(cx + rx, cy + ry, p.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(cx + rx, cy + ry, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      });

      /* --- Highlight shimmer on top-left of globe --- */
      const shimmer = ctx.createRadialGradient(
        cx - R * 0.38, cy - R * 0.38, 0,
        cx - R * 0.38, cy - R * 0.38, R * 0.45
      );
      shimmer.addColorStop(0, "rgba(255,255,255,0.07)");
      shimmer.addColorStop(1, "rgba(255,255,255,0)");
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = shimmer;
      ctx.fill();

      if (!reducedMotion) {
        time += 0.012;
        raf = requestAnimationFrame(draw);
      }
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.92 }}
    />
  );
}
