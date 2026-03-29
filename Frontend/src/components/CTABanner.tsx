import React, { useRef, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const CTABanner: React.FC = () => {
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ background: "var(--color-navy)" }}
    >
      {/* Mobile background image */}
      <div
        className="absolute inset-0 pointer-events-none lg:hidden"
        style={{ zIndex: 0 }}
      >
        <img
          src="/img/WhatsApp%20Image%202026-03-14%20at%209.25.02%20PM%20%282%29.jpeg"
          alt="Background"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(13,27,56,0.78)" }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          zIndex: 1,
        }}
      />

      {/* Orange glow (desktop right) */}
      <div
        className="absolute pointer-events-none hidden lg:block"
        style={{
          right: 0,
          top: 0,
          width: "55%",
          height: "100%",
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(232,119,34,0.10) 0%, transparent 65%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-[5%] py-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* LEFT — text */}
        <div
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <h2
            className="font-black text-white leading-tight mb-3"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
            }}
          >
            Let's Meet Your Needs
            <br />
            <em style={{ color: "var(--color-orange)", fontStyle: "italic" }}>
              With Ease
            </em>
          </h2>
          <p
            className="mb-7 leading-relaxed text-sm"
            style={{ color: "rgba(255,255,255,0.6)", maxWidth: 380 }}
          >
            Get in touch with our team today. We'll handle the entire process —
            from sourcing and inspection to final delivery at your door.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-bold text-sm px-7 py-3 rounded-full transition-all duration-300 hover:-translate-y-1 group"
            style={{
              background: "white",
              color: "var(--color-navy)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              textDecoration: "none",
            }}
          >
            Let's Connect
            <ArrowRight
              size={15}
              strokeWidth={2.5}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
        </div>

        {/* RIGHT — two rotated photo cards (desktop only) */}
        <div
          className="relative hidden lg:block"
          style={{
            height: 220,
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateX(0)" : "translateX(40px)",
            transition: "opacity 0.8s 0.2s ease, transform 0.8s 0.2s ease",
          }}
        >
          {/* Card 1 — Package Delivery, rotated +6deg (back) */}
          <div
            className="absolute rounded-2xl overflow-hidden"
            style={{
              width: 200,
              height: 140,
              top: "-10%",
              right: "5%",
              zIndex: 10,
              transform: revealed
                ? "rotate(6deg) translateY(0)"
                : "rotate(6deg) translateY(20px)",
              transition:
                "transform 0.9s 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.7s 0.35s ease",
              opacity: revealed ? 1 : 0,
              boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <img
              src="/img/WhatsApp%20Image%202026-03-14%20at%209.25.02%20PM%20%282%29.jpeg"
              alt="Warehouse full of sourced products ready for shipment"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 px-3 py-2"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
              }}
            >
              <div className="text-xs font-bold text-white leading-none">
                Warehouse Operations
              </div>
              <div
                className="text-xs mt-0.5"
                style={{ color: "var(--color-orange-light)" }}
              >
                Products ready for shipment
              </div>
            </div>
          </div>

          {/* Card 2 — Ready to Drive, rotated -5deg (front) */}
          <div
            className="absolute rounded-2xl overflow-hidden"
            style={{
              width: 200,
              height: 140,
              top: "22%",
              right: "26%",
              zIndex: 20,
              transform: revealed
                ? "rotate(-5deg) translateY(0)"
                : "rotate(-5deg) translateY(20px)",
              transition:
                "transform 0.9s 0.5s cubic-bezier(0.34,1.56,0.64,1), opacity 0.7s 0.5s ease",
              opacity: revealed ? 1 : 0,
              boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            <img
              src="/img/WhatsApp%20Image%202026-03-14%20at%209.24.58%20PM%20%281%29.jpeg"
              alt="10x20M Military Frame Tents packaged at factory"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 px-3 py-2"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)",
              }}
            >
              <div className="text-xs font-bold text-white leading-none">
                10x20M Frame Tents
              </div>
              <div
                className="text-xs mt-0.5"
                style={{ color: "var(--color-orange-light)" }}
              >
                Packaged &amp; ready to ship
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
