import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import config from "../config";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#cars" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

const serviceLinks = [
  "Supplier Sourcing",
  "Inspection",
  "Less Than Container Load (LCL)",
  "Full Container Load (FCL)",
  "Customs Clearance",
  "Consultations",
  "Car Importation",
];

const contactItems = [
  "+256 774 544866",
  "+190 9875 4305",
  "rwoozilogistics@gmail.com",
  "Yuexiu District, Guangzhou, China",
  "Next To Metro Line 5, Xiaobei",
  "Mon – Sat: 8:00 AM – 6:00 PM",
];

const LINK_STYLE: React.CSSProperties = {
  background: "transparent",
  border: "none",
  cursor: "pointer",
  padding: 0,
  fontSize: "0.875rem",
  color: "rgba(255,255,255,0.5)",
  textAlign: "left",
  textDecoration: "none",
  transition: "color 0.25s ease",
  fontFamily: "inherit",
};

const Footer: React.FC = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <footer
        className="pt-16 pb-8 px-[5%]"
        style={{
          background: "var(--color-navy-dark)",
          color: "rgba(255,255,255,0.6)",
        }}
      >
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10 mb-6"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          {/* ── Col 1: Logo + description + social ── */}
          <div className="md:col-span-1">
            <a
              href="#home"
              className="flex items-center gap-2.5 mb-4"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  flexShrink: 0,
                  background: "var(--color-orange)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "1rem",
                }}
              >
                RL
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="font-bold text-white tracking-wide"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "0.95rem",
                  }}
                >
                  {config.branding.fullName}
                </span>
                <span
                  className="font-medium tracking-widest uppercase"
                  style={{ fontSize: "0.75rem", color: "var(--color-orange)" }}
                >
                  {config.branding.suffix}
                </span>
              </div>
            </a>

            <p
              className="text-sm leading-relaxed max-w-xs mb-5"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Your trusted China-based sourcing and freight partner. We connect
              Uganda and East Africa to verified suppliers across China and —
              handling inspection, LCL/FCL shipping, customs clearance, and
              money transfer, all under one roof.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {/* Twitter / X */}
              <a
                href="https://x.com/rwoozi?s=11&t=eMGNNtNBbnJldDPxLkqSCg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.6)",
                }}
                aria-label="Twitter"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "var(--color-orange)";
                  (e.currentTarget as HTMLElement).style.color = "white";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.6)";
                }}
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="https://tiktok.com/@rwoozi1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.6)",
                }}
                aria-label="TikTok"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "var(--color-orange)";
                  (e.currentTarget as HTMLElement).style.color = "white";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.6)";
                }}
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 8.5a7.49 7.49 0 0 1-4.5-1.5v6.75a5.25 5.25 0 1 1-5.25-5.25c.3 0 .6.03.88.08v2.67a2.58 2.58 0 1 0 1.87 2.5V2h2.63a4.86 4.86 0 0 0 4.37 4.37v2.13z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/rwooziandrew?igsh=Z2FmeDdzZmc5ZjMx&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.6)",
                }}
                aria-label="Instagram"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "var(--color-orange)";
                  (e.currentTarget as HTMLElement).style.color = "white";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.6)";
                }}
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              {/* Snapchat */}
              <a
                href="https://snapchat.com/t/x427Xttw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.6)",
                }}
                aria-label="Snapchat"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "var(--color-orange)";
                  (e.currentTarget as HTMLElement).style.color = "white";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background =
                    "rgba(255,255,255,0.08)";
                  (e.currentTarget as HTMLElement).style.color =
                    "rgba(255,255,255,0.6)";
                }}
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.288.149-.195.031-.375.052-.54.052-.374 0-.509-.224-.569-.45-.06-.18-.09-.375-.135-.554-.045-.195-.105-.465-.164-.57-1.873-.268-2.906-.702-3.145-1.271-.03-.076-.045-.15-.045-.226.014-.238.195-.464.42-.508 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.333-.809-.136-.044-.256-.09-.345-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.18 0 .345.044.495.104.42.194.827.284 1.138.284.271 0 .451-.089.54-.149l-.029-.468c-.106-1.629-.24-3.654.291-4.847C7.786 1.04 11.236.793 12.206.793z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div>
            <h4
              className="font-bold text-white mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1rem",
              }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    style={LINK_STYLE}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color =
                        "var(--color-orange)")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color =
                        "rgba(255,255,255,0.5)")
                    }
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Services ── */}
          <div>
            <h4
              className="font-bold text-white mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1rem",
              }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <span
                    className="text-sm cursor-pointer transition-colors duration-300"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color =
                        "var(--color-orange)")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color =
                        "rgba(255,255,255,0.5)")
                    }
                  >
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Contact ── */}
          <div>
            <h4
              className="font-bold text-white mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1rem",
              }}
            >
              Contact
            </h4>
            <address className="not-italic">
              <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
                {contactItems.map((item) => (
                  <li
                    key={item}
                    className="text-sm"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </address>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            © 2026 Rwoozi China-Uganda Logistics. All rights reserved. Kampala, Uganda.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((t) => (
              <span
                key={t}
                className="text-xs cursor-pointer transition-colors duration-300"
                style={{ color: "rgba(255,255,255,0.35)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "var(--color-orange)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "rgba(255,255,255,0.35)")
                }
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </footer>

      {/* ── Floating WhatsApp button ── */}
      <a
        href="https://wa.me/256774544866"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed z-50 flex items-center justify-center transition-all duration-300"
        style={{
          bottom: 32,
          left: 32,
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: "#25D366",
          boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.transform = "scale(1.1)")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.transform = "scale(1)")
        }
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* ── Scroll-to-top button ── */}
      <button
        aria-label="Scroll to top"
        onClick={scrollTop}
        className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300"
        style={{
          background:
            "linear-gradient(135deg,var(--color-orange),var(--color-orange-light))",
          boxShadow: "0 4px 20px rgba(232,119,34,0.5)",
          opacity: showTop ? 1 : 0,
          transform: showTop ? "translateY(0)" : "translateY(20px)",
          pointerEvents: showTop ? "auto" : "none",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.transform =
            "translateY(-3px)")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.transform = showTop
            ? "translateY(0)"
            : "translateY(20px)")
        }
      >
        <ArrowUp size={20} strokeWidth={2.5} />
      </button>
    </>
  );
};

export default Footer;
