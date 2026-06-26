import { useState } from "react";

// Shows an organization logo. If the image is missing or fails to load,
// it falls back to a clean monogram (the org's initials) so the layout
// always looks intentional — even before real logo files are dropped in.
export function Logo({
  src,
  name,
  className = "",
}: {
  src?: string;
  name: string;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  const initials =
    name
      .replace(/[^A-Za-z0-9 ]/g, "")
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0]?.toUpperCase())
      .join("") || "•";

  if (!src || failed) {
    return (
      <div className={`logo-box logo-ph ${className}`} aria-label={name} title={name}>
        {initials}
      </div>
    );
  }
  return (
    <div className={`logo-box ${className}`}>
      <img src={src} alt={`${name} logo`} onError={() => setFailed(true)} />
    </div>
  );
}
