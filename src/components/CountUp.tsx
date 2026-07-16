import { useEffect, useRef, useState } from "react";

// Animates a stat like "171", "7.4×", "10%", "~$5B" or "+12.4%" counting up
// when it scrolls into view. Non-numeric values ("Live", "AI") render as-is.
export function CountUp({ value, duration = 1300 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    const m = value.match(/^([^0-9]*)([0-9][0-9,]*(?:\.[0-9]+)?)(.*)$/);
    if (!el || !m) {
      setDisplay(value);
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return;
    }
    const [, pre, numStr, suf] = m;
    const target = parseFloat(numStr.replace(/,/g, ""));
    const decimals = (numStr.split(".")[1] || "").length;
    const useCommas = numStr.includes(",");
    setDisplay(pre + (0).toFixed(decimals) + suf);

    let raf = 0;
    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || started) return;
        started = true;
        io.disconnect();
        const t0 = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / duration);
          const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
          let cur = (target * eased).toFixed(decimals);
          if (useCommas)
            cur = Number(cur).toLocaleString("en-US", {
              minimumFractionDigits: decimals,
            });
          setDisplay(pre + cur + suf);
          if (p < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return <span ref={ref}>{display}</span>;
}
