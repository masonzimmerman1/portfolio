import { useState, useEffect } from "react";

// Mirrors the original site's onerror placeholder behaviour:
// if an image is missing, show a styled placeholder box instead of a broken icon.
export function Img({
  src,
  alt,
  phClass,
  phText,
  imgClass,
}: {
  src: string;
  alt: string;
  phClass: string;
  phText: string;
  imgClass?: string;
}) {
  const [failed, setFailed] = useState(false);
  // Reset when the source changes — otherwise one failed image (e.g. a project
  // with no preview) would latch the placeholder for every project shown after it.
  useEffect(() => setFailed(false), [src]);
  if (failed) return <div className={phClass}>{phText}</div>;
  return <img className={imgClass} src={src} alt={alt} onError={() => setFailed(true)} />;
}
