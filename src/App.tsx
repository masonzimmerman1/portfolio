import { useEffect, useState } from "react";
import "./styles.css";
import { Nav, type TabId } from "./components/Nav";
import { Home } from "./components/Home";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Credentials } from "./components/Credentials";
import { Contact } from "./components/Contact";

export default function App() {
  const [tab, setTab] = useState<TabId>("home");

  // Scroll-reveal: fade+rise any `.reveal` element as it enters the viewport.
  // A MutationObserver re-scans so elements mounted later (tab or project
  // switches) are picked up too. Respects prefers-reduced-motion.
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    const scan = () =>
      document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
        if (reduced) el.classList.add("in");
        else io.observe(el);
      });
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  function go(id: TabId) {
    setTab(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <Nav active={tab} onChange={go} />
      {tab === "home" && <Home onNavigate={go} />}
      {tab === "experience" && <Experience />}
      {tab === "projects" && <Projects />}
      {tab === "credentials" && <Credentials />}
      {tab === "contact" && <Contact />}
    </>
  );
}
