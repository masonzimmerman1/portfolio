import { useState } from "react";
import "./styles.css";
import { Nav, type TabId } from "./components/Nav";
import { Home } from "./components/Home";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Credentials } from "./components/Credentials";
import { Contact } from "./components/Contact";

export default function App() {
  const [tab, setTab] = useState<TabId>("home");

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
