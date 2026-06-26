import { profile } from "../data/profile";

export type TabId = "home" | "experience" | "projects" | "credentials" | "contact";

const TABS: { id: TabId; label: string }[] = [
  { id: "home", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "credentials", label: "Credentials" },
  { id: "contact", label: "Contact" },
];

export function Nav({ active, onChange }: { active: TabId; onChange: (id: TabId) => void }) {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <div className="logo">
          {profile.logoFirst} <span>{profile.logoLast}</span>
        </div>
        <div className="tabs">
          {TABS.map((t) => (
            <button
              key={t.id}
              className={active === t.id ? "active" : ""}
              onClick={() => onChange(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
