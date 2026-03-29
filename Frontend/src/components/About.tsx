import React, { useEffect, useRef, useState } from "react";
import {
  Globe,
  ShieldCheck,
  Zap,
  MessageCircle,
  Phone,
  Package,
} from "lucide-react";

const stats = [
  { value: "500+", label: "Orders Fulfilled" },
  { value: "3", label: "Source Countries" },
  { value: "1K+", label: "Products Shipped" },
  { value: "100%", label: "Client Satisfaction" },
];

const features = [
  {
    icon: <Globe size={18} stroke="#e87722" strokeWidth={1.8} />,
    title: "Global Reach",
    desc: "Sourcing from China",
  },
  {
    icon: <ShieldCheck size={18} stroke="#e87722" strokeWidth={1.8} />,
    title: "Trusted & Verified",
    desc: "All goods quality-inspected before dispatch",
  },
  {
    icon: <Zap size={18} stroke="#e87722" strokeWidth={1.8} />,
    title: "Fast Clearance",
    desc: "Mombasa to Kampala in as few as 3 days",
  },
  {
    icon: <MessageCircle size={18} stroke="#e87722" strokeWidth={1.8} />,
    title: "24/7 Support",
    desc: "Always available via WhatsApp for your queries",
  },
];

const tabs = ["Our Story", "What We Source"];

const whatWeSource = [
  "Poultry & Livestock Equipment (Cages, Feeders, Drinkers)",
  "Industrial & Agricultural Machinery",
  "Frame Tents, Army Tents & Event Structures",
  "Steel & Metal Fabrication Products",
  "Forklifts, Loaders & Warehouse Equipment",
  "Chemicals, Gas Cylinders & Industrial Supplies",
  "Electronics, Solar & Electrical Equipment",
  "Vehicles (Cars, Trucks, Motorcycles)",
  "Clothing, Textiles & Fashion",
  "Furniture, Décor & Home Appliances",
  "Medical Equipment & Supplies",
  "Any product — just tell us what you need",
];

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0) translateX(0)";
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 },
    );
    const targets =
      sectionRef.current?.querySelectorAll<HTMLElement>("[data-reveal]");
    targets?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-label="About Rwoozi China-Uganda Logistics - Our Story, Mission, and What We Source"
      className="py-16 px-[5%] bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* ── Header ── */}
        <div
          data-reveal
          className="text-center mb-10"
          style={{
            opacity: 0,
            transform: "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "var(--color-orange)" }}
          >
            <span
              className="inline-block w-5 h-px"
              style={{ background: "var(--color-orange)" }}
            />
            Our Story
            <span
              className="inline-block w-5 h-px"
              style={{ background: "var(--color-orange)" }}
            />
          </div>
          <h2
            className="font-black leading-tight mb-3"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.9rem, 3.5vw, 2.7rem)",
              color: "var(--color-navy)",
            }}
          >
            About{" "}
            <span style={{ color: "var(--color-orange)" }}>
              Rwoozi China-Uganda Logistics
            </span>
          </h2>
          <p
            className="text-sm leading-relaxed max-w-xl mx-auto"
            style={{ color: "#6b7280" }}
          >
            Uganda's trusted partner for product sourcing, freight forwarding,
            and end-to-end logistics — connecting you to the best of global
            markets.
          </p>
        </div>

        {/* ── Stats ── */}
        <div
          data-reveal
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
          style={{
            opacity: 0,
            transform: "translateY(24px)",
            transition: "opacity 0.7s 0.1s ease, transform 0.7s 0.1s ease",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl p-5 text-center"
              style={{
                background:
                  "linear-gradient(135deg,var(--color-navy),var(--color-navy-light))",
                border: "1px solid rgba(232,119,34,0.2)",
              }}
            >
              <div
                className="font-black mb-1"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  color: "var(--color-orange)",
                }}
              >
                {s.value}
              </div>
              <div
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── 2-col: Image | Content ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-14">
          {/* LEFT — Ship image */}
          <div
            data-reveal
            className="hidden lg:block relative"
            style={{
              opacity: 0,
              transform: "translateX(-30px)",
              transition: "opacity 0.7s 0.2s ease, transform 0.7s 0.2s ease",
            }}
          >
            <div
              className="w-full rounded-3xl relative overflow-hidden flex items-center justify-center"
              style={{
                height: 450,
                background:
                  "linear-gradient(135deg,var(--color-navy) 0%,var(--color-navy-light) 50%,#8b1a3a 100%)",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 70% 30%, rgba(232,119,34,0.2), transparent 60%)",
                }}
              />
              <img
                src="/img/WhatsApp%20Image%202026-03-14%20at%209.25.16%20PM.jpeg"
                alt="Rwoozi China-Uganda Logistics operations — verification bay with cargo ready for clearance"
                className="relative z-10 w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <div
                  className="rounded-xl px-3 py-2"
                  style={{
                    background: "rgba(0,0,0,0.5)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <div
                    className="text-xs font-bold uppercase tracking-widest mb-0.5"
                    style={{ color: "var(--color-orange)" }}
                  >
                    Real Operations
                  </div>
                  <div className="text-xs font-semibold text-white">
                    Cargo Verification & Clearance — Guangzhou to Uganda
                  </div>
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -right-4 w-32 rounded-2xl px-3 py-2 z-20"
              style={{
                background:
                  "linear-gradient(135deg,var(--color-orange),var(--color-orange-light))",
                boxShadow: "0 10px 30px rgba(232,119,34,0.4)",
              }}
            >
              <div className="text-xl mb-1">📦</div>
              <div className="text-xs font-bold text-white uppercase tracking-wide">
                Any Product
              </div>
              <div className="text-xs text-white opacity-80">Any Quantity</div>
            </div>
            {/* Dot pattern */}
            <div
              className="absolute -top-3 -left-3 w-24 h-24 rounded-2xl opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(26,46,90,0.6) 1.5px, transparent 1.5px)",
                backgroundSize: "12px 12px",
              }}
            />
          </div>

          {/* RIGHT — Tabbed content */}
          <div
            data-reveal
            style={{
              opacity: 0,
              transform: "translateX(30px)",
              transition: "opacity 0.7s 0.25s ease, transform 0.7s 0.25s ease",
            }}
          >
            {/* Tabs */}
            <div
              className="inline-flex rounded-xl p-1 mb-7"
              style={{
                background: "rgba(26,46,90,0.06)",
                border: "1px solid rgba(26,46,90,0.08)",
              }}
            >
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className="px-5 py-2 rounded-lg text-sm font-bold capitalize transition-all duration-300"
                  style={
                    activeTab === i
                      ? {
                          background: "var(--color-navy)",
                          color: "white",
                          boxShadow: "0 2px 8px rgba(26,46,90,0.25)",
                        }
                      : {
                          background: "transparent",
                          color: "#6b7280",
                          boxShadow: "none",
                        }
                  }
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab: Our Story */}
            {activeTab === 0 && (
              <div>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "#6b7280" }}
                >
                  Rwoozi China-Uganda Logistics Limited is a China-based freight forwarding
                  and product sourcing company dedicated to connecting Uganda
                  and East Africa to the world's best manufacturers.
                </p>
                <p
                  className="text-sm leading-relaxed mb-6"
                  style={{ color: "#6b7280" }}
                >
                  Our team, based in Guangzhou, China, works directly with
                  verified suppliers across China and beyond to source
                  products of all kinds at competitive factory prices. We manage
                  the full logistics chain — inspection, LCL/FCL shipping,
                  customs clearance, and door-to-door delivery to Uganda.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {features.map((f, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div
                        className="w-9 h-9 min-w-[36px] rounded-lg flex items-center justify-center"
                        style={{ background: "rgba(232,119,34,0.1)" }}
                      >
                        {f.icon}
                      </div>
                      <div>
                        <h4
                          className="text-sm font-bold mb-0.5"
                          style={{ color: "var(--color-navy)" }}
                        >
                          {f.title}
                        </h4>
                        <p
                          className="text-xs leading-snug"
                          style={{ color: "#6b7280" }}
                        >
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab: What We Source */}
            {activeTab === 1 && (
              <div className="mb-6">
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "#6b7280" }}
                >
                  From poultry equipment and industrial machinery to tents,
                  chemicals, and electronics — we source it all directly from
                  verified factories in China. No order is too large
                  or too small.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {whatWeSource.map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          background: "rgba(232,119,34,0.15)",
                          border: "1px solid rgba(232,119,34,0.3)",
                        }}
                      >
                        <svg
                          className="w-3 h-3"
                          style={{ color: "var(--color-orange)" }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-sm" style={{ color: "#374151" }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-bold text-sm px-8 py-3.5 rounded-full text-white transition-all duration-300 hover:-translate-y-1 no-underline"
                style={{
                  background:
                    "linear-gradient(135deg,var(--color-navy),var(--color-navy-light))",
                  boxShadow: "0 4px 15px rgba(26,46,90,0.3)",
                }}
              >
                <Phone size={15} /> Talk to Us
              </a>
              <a
                href="#cars"
                className="inline-flex items-center gap-2 font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-1 no-underline"
                style={{
                  border: "1.5px solid rgba(26,46,90,0.2)",
                  color: "var(--color-navy)",
                }}
              >
                <Package size={15} /> View Our Products
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
