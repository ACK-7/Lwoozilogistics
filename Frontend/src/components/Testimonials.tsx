import React, { useState, useRef, useEffect } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "John Kato",
    initials: "JK",
    color: "#1a2e5a",
    rating: 4.9,
    date: "Oct, 2025",
    location: "Kampala, Uganda",
    quote:
      "I ordered construction materials from China and they handled everything from start to finish. The products were exactly as specified, well-inspected, and delivered to my site on time. Very professional team.",
  },
  {
    name: "Sarah Nambasa",
    initials: "SN",
    color: "#8b1a3a",
    rating: 5.0,
    date: "Oct, 2025",
    location: "Kampala, Uganda",
    quote:
      "Excellent service from start to finish. The team was professional, transparent about all costs, and delivered the goods exactly as promised. I highly recommend Rwoozi China-Uganda Logistics.",
  },
  {
    name: "Alice Achieng",
    initials: "AA",
    color: "#1e7a4a",
    rating: 4.8,
    date: "Jan, 2026",
    location: "Kampala, Uganda",
    quote:
      "I sourced a bulk order of electronics from China and they handled everything — from finding the supplier to delivery at my door. The process was smooth and the team kept me updated throughout. Very trustworthy.",
  },
  {
    name: "Michael Okello",
    initials: "MO",
    color: "#7a4e1a",
    rating: 5.0,
    date: "Jan, 2026",
    location: "Kampala, Uganda",
    quote:
      "I have used Rwoozi China-Uganda Logistics twice now. Both experiences were exceptional — fast, reliable and honest. The money transfer service is also very convenient for paying suppliers directly in China.",
  },
  {
    name: "Grace Mbabazi",
    initials: "GM",
    color: "#5a1a7a",
    rating: 5.0,
    date: "Feb, 2026",
    location: "Kampala, Uganda",
    quote:
      "Very satisfied with my order sourced through them. Documentation was handled correctly, customs was smooth, and the goods arrived in perfect condition. A company you can truly trust.",
  },
];

const N = reviews.length;

// 3 visible slots on the left panel
const SLOT = [
  {
    left: 50,
    top: 58,
    size: 44,
    opacity: 0.6,
    zIndex: 2,
    labelLeft: 106,
    labelTop: 64,
  }, // top (prev)
  {
    left: 68,
    top: 148,
    size: 64,
    opacity: 1,
    zIndex: 3,
    labelLeft: 144,
    labelTop: 158,
  }, // center (active)
  {
    left: 50,
    top: 258,
    size: 44,
    opacity: 0.6,
    zIndex: 2,
    labelLeft: 106,
    labelTop: 264,
  }, // bottom (next)
];
const HIDDEN = { left: -3000, top: 10000, opacity: 0, zIndex: 1, size: 44 };

function getSlotIndex(i: number, active: number): number {
  // Returns which slot this reviewer is in: 0=top, 1=center, 2=bottom, -1=hidden
  const prev = (active - 1 + N) % N;
  const next = (active + 1) % N;
  if (i === active) return 1;
  if (i === prev) return 0;
  if (i === next) return 2;
  return -1;
}

// total approximate length of the SVG path for stroke-dashoffset animation
const PATH_LENGTH = 260;

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);
  const [quoteVisible, setQuoteVisible] = useState(true);
  const [displayedActive, setDisplayedActive] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeRef = useRef(0);
  const sectionRef = useRef<HTMLElement>(null);

  const switchTo = (i: number) => {
    if (i === activeRef.current) return;
    setQuoteVisible(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      activeRef.current = i;
      setActive(i);
      setDisplayedActive(i);
      setQuoteVisible(true);
    }, 280);
  };

  // Scroll-reveal via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      const next = (activeRef.current + 1) % N;
      switchTo(next);
    }, 5000);
    return () => {
      clearInterval(interval);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isPaused]);

  const review = reviews[displayedActive];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      aria-label="Client Reviews"
      className="py-16 px-[5%] bg-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-5xl mx-auto">
        {/* ── Header ── */}
        <div
          className="text-center mb-12"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(28px)",
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
            Client Reviews
            <span
              className="inline-block w-5 h-px"
              style={{ background: "var(--color-orange)" }}
            />
          </div>
          <h2
            className="font-black leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              color: "var(--color-navy)",
            }}
          >
            What Our{" "}
            <span style={{ color: "var(--color-orange)" }}>Clients</span> Say
          </h2>
        </div>

        {/* ── Main row ── */}
        <div className="flex flex-col lg:flex-row items-center gap-0">
          {/* ── LEFT: Curved reviewer panel (desktop only) ── */}
          <div
            className="hidden lg:flex relative flex-shrink-0 items-center justify-center"
            style={{
              width: 320,
              height: 360,
              overflow: "hidden",
              opacity: revealed ? 1 : 0,
              transform: revealed ? "translateX(0)" : "translateX(-40px)",
              transition: "opacity 0.8s 0.2s ease, transform 0.8s 0.2s ease",
            }}
          >
            {/* Curved dashed SVG path — animates on reveal */}
            <svg
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                overflow: "visible",
              }}
              viewBox="0 0 320 360"
              preserveAspectRatio="none"
            >
              <path
                d="M 100 30 C 50 80, 130 80, 80 130 C 30 180, 130 180, 80 230"
                fill="none"
                stroke="rgba(26,46,90,0.12)"
                strokeWidth="2"
                strokeDasharray={PATH_LENGTH}
                strokeDashoffset={revealed ? 0 : PATH_LENGTH}
                style={{
                  transition: `stroke-dashoffset 1.1s 0.5s cubic-bezier(0.4,0,0.2,1)`,
                }}
              />
            </svg>

            {/* Reviewer avatars */}
            {reviews.map((r, i) => {
              const slotIdx = getSlotIndex(i, active);
              const slot = slotIdx === -1 ? HIDDEN : SLOT[slotIdx];
              const isActive = i === active;
              const delay = `${0.4 + i * 0.08}s`;
              return (
                <React.Fragment key={i}>
                  {/* Avatar button */}
                  <button
                    onClick={() => switchTo(i)}
                    style={{
                      position: "absolute",
                      left: slot.left,
                      top: slot.top - slot.size / 2,
                      width: slot.size,
                      height: slot.size,
                      borderRadius: "50%",
                      border: isActive
                        ? "3px solid white"
                        : "2px solid #e5e7eb",
                      boxShadow: isActive
                        ? "0 6px 24px rgba(26,46,90,0.33)"
                        : "none",
                      opacity: revealed ? slot.opacity : 0,
                      transform: revealed ? "scale(1)" : "scale(0.5)",
                      overflow: "hidden",
                      padding: 0,
                      cursor: "pointer",
                      zIndex: slot.zIndex,
                      transition: `all 0.55s cubic-bezier(0.4,0,0.2,1), opacity 0.5s ${delay}, transform 0.5s ${delay}`,
                      pointerEvents: slotIdx === -1 ? "none" : "auto",
                      flexShrink: 0,
                    }}
                    aria-label={r.name}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        background: r.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontWeight: 700,
                        fontSize: slot.size * 0.35,
                        fontFamily: "'DM Sans', system-ui, sans-serif",
                        letterSpacing: "0.03em",
                        userSelect: "none",
                      }}
                    >
                      {r.initials}
                    </div>
                  </button>

                  {/* Name + rating label */}
                  {slotIdx !== -1 && (
                    <div
                      style={{
                        position: "absolute",
                        left: (SLOT[slotIdx] as (typeof SLOT)[0]).labelLeft,
                        top: (SLOT[slotIdx] as (typeof SLOT)[0]).labelTop - 14,
                        opacity: revealed ? slot.opacity : 0,
                        maxWidth: 160,
                        pointerEvents: "none",
                        transition: `all 0.55s cubic-bezier(0.4,0,0.2,1), opacity 0.5s ${delay}`,
                      }}
                    >
                      <div
                        style={{
                          fontWeight: isActive ? 700 : 500,
                          fontSize: isActive ? "0.85rem" : "0.75rem",
                          color: isActive ? "var(--color-navy)" : "#6b7280",
                          whiteSpace: "nowrap",
                          transition: "all 0.55s ease",
                        }}
                      >
                        {r.name}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 4,
                          marginTop: 2,
                        }}
                      >
                        <Star
                          size={isActive ? 12 : 10}
                          fill="#e87722"
                          stroke="#e87722"
                          strokeWidth={2}
                          style={{ transition: "all 0.4s ease" }}
                        />
                        <span style={{ fontSize: "0.68rem", color: "#9ca3af" }}>
                          {r.rating} in {r.date}
                        </span>
                      </div>
                      {isActive && (
                        <div
                          style={{
                            fontSize: "0.7rem",
                            color: "#9ca3af",
                            marginTop: 1,
                          }}
                        >
                          {r.location}
                        </div>
                      )}
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* ── RIGHT: Quote content ── */}
          <div
            className="flex-1 px-0 lg:px-10"
            style={{
              opacity: revealed && quoteVisible ? 1 : 0,
              transform:
                revealed && quoteVisible
                  ? "translateY(0) translateX(0)"
                  : revealed
                    ? "translateY(8px)"
                    : "translateX(40px)",
              transition: revealed
                ? "opacity 0.35s ease, transform 0.35s ease"
                : "opacity 0.8s 0.35s ease, transform 0.8s 0.35s ease",
            }}
          >
            {/* Large opening quote */}
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "3rem",
                color: "var(--color-navy)",
                lineHeight: 1,
                marginBottom: 8,
                userSelect: "none",
              }}
            >
              "
            </div>

            {/* Quote text */}
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
                color: "#374151",
                lineHeight: 1.85,
              }}
            >
              {review.quote}
            </p>

            {/* Author row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginTop: 24,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: review.color,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  flexShrink: 0,
                  border: "2px solid #e5e7eb",
                  userSelect: "none",
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                }}
              >
                {review.initials}
              </div>
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    color: "var(--color-navy)",
                  }}
                >
                  {review.name}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    marginTop: 3,
                  }}
                >
                  <Star
                    size={12}
                    fill="#e87722"
                    stroke="#e87722"
                    strokeWidth={2}
                  />
                  <span style={{ fontSize: "0.72rem", color: "#9ca3af" }}>
                    {review.rating} on {review.date}
                  </span>
                </div>
              </div>
            </div>

            {/* Progress bar — shows time until next auto-advance */}
            <div
              className="hidden lg:block mt-8 rounded-full overflow-hidden"
              style={{
                height: 2,
                background: "rgba(26,46,90,0.08)",
                width: "100%",
              }}
            >
              <div
                key={`${active}-progress`}
                style={{
                  height: "100%",
                  background:
                    "linear-gradient(90deg,var(--color-orange),var(--color-orange-light))",
                  borderRadius: 9999,
                  animation: isPaused
                    ? "none"
                    : "reviewProgress 5s linear forwards",
                }}
              />
            </div>

            {/* Mobile dot navigation */}
            <div className="flex lg:hidden items-center gap-2 mt-8">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => switchTo(i)}
                  style={{
                    width: i === active ? 20 : 7,
                    height: 7,
                    borderRadius: 4,
                    background:
                      i === active
                        ? "var(--color-orange)"
                        : "rgba(26,46,90,0.15)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    padding: 0,
                  }}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Keyframe for the progress bar */}
      <style>{`
        @keyframes reviewProgress {
          from { width: 0% }
          to   { width: 100% }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
