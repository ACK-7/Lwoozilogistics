import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import config from "../config";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "Products", id: "cars" },
  { label: "About", id: "about" },
];

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = [...navLinks.map((l) => l.id), "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%]"
      style={{
        height: "70px",
        background: "var(--color-nav-bg)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Logo */}
      <a href="#home" className="flex items-center gap-2.5 no-underline">
        <div
          style={{
            width: "42px",
            height: "42px",
            background: "var(--color-orange)",
          }}
          className="flex items-center justify-center rounded-full text-white font-bold text-lg"
        >
          RL
        </div>
        <div className="flex flex-col leading-none">
          <span
            className="font-bold text-white tracking-wide"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1rem",
            }}
          >
            {config.branding.fullName.toUpperCase()}
          </span>
          <span
            className="font-medium tracking-widest uppercase"
            style={{ fontSize: "1rem", color: "var(--color-orange)" }}
          >
            {config.branding.suffix}
          </span>
        </div>
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex items-center gap-8 list-none">
        {navLinks.map(({ label, id }) => {
          const isActive = activeSection === id;
          return (
            <li key={id} style={{ position: "relative" }}>
              <a
                href={`#${id}`}
                style={{
                  color: isActive
                    ? "var(--color-orange)"
                    : "rgba(255,255,255,0.75)",
                  fontWeight: isActive ? 700 : 500,
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  transition: "color 0.25s ease",
                  paddingBottom: "4px",
                  display: "inline-block",
                }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLElement).style.color = "white";
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255,255,255,0.75)";
                }}
              >
                {label}
              </a>
              {/* Active underline indicator */}
              <span
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "var(--color-orange)",
                  borderRadius: "1px",
                  transform: isActive ? "scaleX(1)" : "scaleX(0)",
                  transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
                  transformOrigin: "left",
                }}
              />
            </li>
          );
        })}
        <li>
          <a
            href="#contact"
            className="text-white font-semibold text-sm px-6 py-2 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background:
                activeSection === "contact"
                  ? "linear-gradient(135deg,var(--color-orange-light),var(--color-orange))"
                  : "linear-gradient(135deg,var(--color-orange),var(--color-orange-light))",
              boxShadow: "0 4px 15px rgba(232,119,34,0.35)",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Contact Us
          </a>
        </li>
      </ul>

      {/* Mobile toggle */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-1.5 bg-transparent border-0"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X className="text-white" size={24} />
        ) : (
          <Menu className="text-white" size={24} />
        )}
      </button>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed left-0 right-0 z-40 flex flex-col md:hidden overflow-hidden"
          style={{
            top: "70px",
            background: "var(--color-nav-bg)",
            backdropFilter: "blur(20px)",
            maxHeight: "calc(100vh - 70px)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {[...navLinks, { label: "Contact", id: "contact" }].map(
            ({ label, id }) => {
              const isActive = activeSection === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  style={{
                    color: isActive
                      ? "var(--color-orange)"
                      : "rgba(255,255,255,0.85)",
                    fontWeight: isActive ? 700 : 500,
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    borderLeft: isActive
                      ? "3px solid var(--color-orange)"
                      : "3px solid transparent",
                    paddingLeft: isActive ? "calc(5% - 3px)" : "5%",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    textDecoration: "none",
                    fontSize: "1rem",
                    transition: "color 0.2s, border-color 0.2s",
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </a>
              );
            },
          )}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
