import React, { useEffect, useRef } from "react";
import { Factory, Search, ShieldCheck, Pin } from "lucide-react";

const features = [
  {
    icon: <Factory size={18} stroke="#e87722" strokeWidth={1.8} />,
    text: "Direct access to suppliers in China & worldwide",
  },
  {
    icon: <Search size={18} stroke="#e87722" strokeWidth={1.8} />,
    text: "Any product, any quantity — no minimums",
  },
  {
    icon: <ShieldCheck size={18} stroke="#e87722" strokeWidth={1.8} />,
    text: "Quality-inspected before shipment",
  },
  {
    icon: <Pin size={18} stroke="#e87722" strokeWidth={1.8} />,
    text: "Door-to-door delivery to Uganda",
  },
];

// Steps: large circles are at odd indices (0,2,4,6), small at even (1,3,5,7)
// Large circles have labels above; small circles have labels below — alternating zigzag
const steps = [
  {
    emoji: "💬",
    num: 1,
    color: "#e87722",
    size: "large",
    labelPos: "top",
    title: "Tell Us What You Need",
    sub: "Share product specs, quantity & budget",
  },
  {
    emoji: "🔍",
    num: 2,
    color: "#3498db",
    size: "small",
    labelPos: "bottom",
    title: "Market Research",
    sub: "We search our verified supplier network",
  },
  {
    emoji: "🏭",
    num: 3,
    color: "#1a2e5a",
    size: "large",
    labelPos: "top",
    title: "Supplier Selected",
    sub: "Best factory matched to your requirements",
  },
  {
    emoji: "💸",
    num: 4,
    color: "#27ae60",
    size: "small",
    labelPos: "bottom",
    title: "Payment & Order",
    sub: "Secure payment, order confirmed",
  },
  {
    emoji: "📋",
    num: 5,
    color: "#8b1a3a",
    size: "large",
    labelPos: "top",
    title: "Quality Inspection",
    sub: "Goods inspected before leaving factory",
  },
  {
    emoji: "🚢",
    num: 6,
    color: "#3498db",
    size: "small",
    labelPos: "bottom",
    title: "Shipping",
    sub: "Sea or air freight with full tracking",
  },
  {
    emoji: "🏗️",
    num: 7,
    color: "#e87722",
    size: "large",
    labelPos: "top",
    title: "Port Clearance",
    sub: "Mombasa clearance, taxes & URA handled",
  },
  {
    emoji: "✅",
    num: 8,
    color: "#1a2e5a",
    size: "small",
    labelPos: "bottom",
    title: "Delivered to You",
    sub: "Door-to-door delivery across Uganda",
  },
];

const Sourcing: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els: HTMLElement[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "translateY(0) translateX(0) scale(1)";
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.12 },
    );

    const targets =
      sectionRef.current?.querySelectorAll<HTMLElement>("[data-reveal]");
    targets?.forEach((el) => {
      els.push(el);
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sourcing"
      ref={sectionRef}
      className="py-24 px-[5%]"
      style={{ background: "#f8f9fc" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* ── Header ── */}
        <div
          className="text-center mb-14"
          data-reveal
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
            Product Sourcing from China &amp; Worldwide
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
            Import{" "}
            <span style={{ color: "var(--color-orange)" }}>Any Product</span> to
            Uganda
          </h2>
          <p
            className="text-base leading-relaxed max-w-xl mx-auto"
            style={{ color: "#6b7280" }}
          >
            We work closely with the most reliable manufacturers and suppliers
            from China to source high-quality products at very
            pocket-friendly prices.
          </p>
        </div>

        {/* ── Feature Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {features.map((f, i) => (
            <div
              key={i}
              data-reveal
              className="rounded-2xl p-5 flex items-start gap-4"
              style={{
                background: "white",
                border: "1px solid rgba(26,46,90,0.08)",
                boxShadow: "0 2px 12px rgba(26,46,90,0.05)",
                opacity: 0,
                transform: "translateY(20px)",
                transition: `opacity 0.5s ${i * 0.1}s ease, transform 0.5s ${i * 0.1}s ease`,
              }}
            >
              <div
                className="w-10 h-10 min-w-[40px] rounded-xl flex items-center justify-center"
                style={{ background: "rgba(232,119,34,0.1)" }}
              >
                {f.icon}
              </div>
              <span
                className="text-sm leading-snug pt-1 font-medium"
                style={{ color: "#374151" }}
              >
                {f.text}
              </span>
            </div>
          ))}
        </div>

        {/* ── How It Works ── */}
        <div>
          {/* Sub-header */}
          <div
            className="text-center mb-16"
            data-reveal
            style={{
              opacity: 0,
              transform: "translateY(30px)",
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
              How It Works
              <span
                className="inline-block w-5 h-px"
                style={{ background: "var(--color-orange)" }}
              />
            </div>
            <h2
              className="font-black leading-tight mb-3"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
                color: "var(--color-navy)",
              }}
            >
              From{" "}
              <span style={{ color: "var(--color-orange)" }}>Sourcing</span> to
              Your{" "}
              <span style={{ color: "var(--color-orange)" }}>Doorstep</span>
            </h2>
            <p
              className="text-sm leading-relaxed max-w-xl mx-auto"
              style={{ color: "#6b7280" }}
            >
              Our end-to-end process — from finding the right supplier all the
              way to delivering your order in Uganda.
            </p>
          </div>

          {/* Desktop zigzag */}
          <div
            className="hidden lg:block relative mb-16"
            style={{ minHeight: 340 }}
          >
            {/* Dashed connecting line */}
            <div
              className="absolute left-0 right-0"
              style={{
                top: "50%",
                height: 3,
                background:
                  "repeating-linear-gradient(90deg, #cbd5e1 0px, #cbd5e1 10px, transparent 10px, transparent 20px)",
                transform: "translateY(-50%)",
              }}
            />

            <div
              className="relative flex items-center justify-between h-full px-4"
              style={{ minHeight: 340 }}
            >
              {steps.map((step, i) => {
                const isLarge = step.size === "large";
                const circleSize = isLarge ? 100 : 76;
                const fontSize = isLarge ? "2rem" : "1.4rem";
                const badgeSize = isLarge ? 28 : 22;
                const badgeFontSize = isLarge ? "0.7rem" : "0.6rem";
                const badgeOffset = isLarge ? -4 : -3;

                return (
                  <div
                    key={i}
                    className="flex flex-col items-center cursor-pointer"
                    style={{ flex: 1, position: "relative" }}
                  >
                    {/* Top label slot (120px) */}
                    <div
                      data-reveal
                      style={{
                        height: 120,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent:
                          step.labelPos === "top" ? "flex-end" : "flex-start",
                        paddingBottom: step.labelPos === "top" ? 14 : 0,
                        paddingTop: step.labelPos === "top" ? 0 : 14,
                        opacity: 0,
                        transform:
                          step.labelPos === "top"
                            ? "translateY(-15px)"
                            : "translateY(15px)",
                        transition: `opacity 0.5s ${i * 0.08}s ease, transform 0.5s ${i * 0.08}s ease`,
                      }}
                    >
                      {step.labelPos === "top" && (
                        <div className="text-center px-1">
                          <div
                            className="font-bold leading-snug mb-1"
                            style={{
                              color: "var(--color-navy)",
                              fontFamily: "'Playfair Display', serif",
                              fontSize: "0.78rem",
                            }}
                          >
                            {step.title}
                          </div>
                          <div
                            style={{ color: "#9ca3af", fontSize: "0.68rem" }}
                          >
                            {step.sub}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Circle */}
                    <div
                      data-reveal
                      style={{
                        width: circleSize,
                        height: circleSize,
                        borderRadius: "50%",
                        background: `radial-gradient(circle at 35% 35%, ${step.color}cc, ${step.color}88)`,
                        boxShadow: `0 0 0 4px ${step.color}20, 0 6px 18px ${step.color}30`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize,
                        position: "relative",
                        zIndex: 10,
                        cursor: "pointer",
                        flexShrink: 0,
                        opacity: 0,
                        transform: "scale(0.7)",
                        transition: `opacity 0.5s ${i * 0.08}s ease, transform 0.5s ${i * 0.08}s cubic-bezier(0.34,1.56,0.64,1)`,
                      }}
                    >
                      {step.emoji}
                      <div
                        style={{
                          position: "absolute",
                          bottom: badgeOffset,
                          right: badgeOffset,
                          width: badgeSize,
                          height: badgeSize,
                          borderRadius: "50%",
                          background: "white",
                          border: `2.5px solid ${step.color}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: badgeFontSize,
                          fontWeight: 900,
                          color: step.color,
                        }}
                      >
                        {step.num}
                      </div>
                    </div>

                    {/* Bottom label slot (120px) */}
                    <div
                      data-reveal
                      style={{
                        height: 120,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent:
                          step.labelPos === "bottom"
                            ? "flex-start"
                            : "flex-end",
                        paddingTop: step.labelPos === "bottom" ? 14 : 0,
                        paddingBottom: step.labelPos === "bottom" ? 0 : 14,
                        opacity: 0,
                        transform:
                          step.labelPos === "bottom"
                            ? "translateY(15px)"
                            : "translateY(-15px)",
                        transition: `opacity 0.5s ${i * 0.08}s ease, transform 0.5s ${i * 0.08}s ease`,
                      }}
                    >
                      {step.labelPos === "bottom" && (
                        <div className="text-center px-1">
                          <div
                            className="font-bold leading-snug mb-1"
                            style={{
                              color: "var(--color-navy)",
                              fontFamily: "'Playfair Display', serif",
                              fontSize: "0.78rem",
                            }}
                          >
                            {step.title}
                          </div>
                          <div
                            style={{ color: "#9ca3af", fontSize: "0.68rem" }}
                          >
                            {step.sub}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile: vertical list */}
          <div className="lg:hidden flex flex-col gap-4 mb-12">
            {steps.map((step, i) => (
              <div
                key={i}
                data-reveal
                className="flex items-start gap-4 rounded-2xl p-4"
                style={{
                  background: "white",
                  border: "1px solid rgba(26,46,90,0.08)",
                  boxShadow: "0 2px 8px rgba(26,46,90,0.05)",
                  opacity: 0,
                  transform: "translateX(-20px)",
                  transition: `opacity 0.4s ${i * 0.06}s ease, transform 0.4s ${i * 0.06}s ease`,
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    minWidth: 52,
                    borderRadius: "50%",
                    background: `${step.color}18`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    position: "relative",
                    flexShrink: 0,
                  }}
                >
                  {step.emoji}
                  <div
                    style={{
                      position: "absolute",
                      bottom: -2,
                      right: -2,
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      background: "white",
                      border: `2px solid ${step.color}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.55rem",
                      fontWeight: 900,
                      color: step.color,
                    }}
                  >
                    {step.num}
                  </div>
                </div>
                <div>
                  <div
                    className="font-bold text-sm mb-0.5"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "var(--color-navy)",
                    }}
                  >
                    {step.title}
                  </div>
                  <div
                    className="text-xs leading-relaxed"
                    style={{ color: "#6b7280" }}
                  >
                    {step.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="text-center"
            data-reveal
            style={{
              opacity: 0,
              transform: "translateY(20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <p
              className="text-sm font-medium mb-4"
              style={{ color: "#6b7280" }}
            >
              Ready to get started? It only takes one message.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold text-white transition-all hover:-translate-y-0.5"
              style={{
                background:
                  "linear-gradient(135deg,var(--color-orange),var(--color-orange-light))",
                boxShadow: "0 4px 15px rgba(232,119,34,0.35)",
              }}
            >
              Start Your Order
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sourcing;
