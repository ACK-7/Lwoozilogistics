import React, { useState, useRef, useEffect } from "react";
import {
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Send,
  ChevronDown,
} from "lucide-react";

const INPUT_STYLE: React.CSSProperties = {
  width: "100%",
  padding: "10px 0",
  background: "transparent",
  border: "none",
  borderBottom: "1.5px solid rgba(26,46,90,0.15)",
  color: "var(--color-navy)",
  fontSize: "0.875rem",
  fontFamily: "'DM Sans', system-ui, sans-serif",
  outline: "none",
  transition: "border-color 0.3s",
};

const LABEL_STYLE: React.CSSProperties = {
  display: "block",
  fontSize: "0.7rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "var(--color-navy)",
  marginBottom: 2,
  opacity: 0.55,
};

const services = [
  "Supplier Sourcing",
  "Product Inspection",
  "LCL Shipping (Less Container Load)",
  "FCL Shipping (Full Container Load)",
  "Customs Clearance",
  "Consultations",
  "Car Importation",
  "Money Transfer",
  "Other",
];

const contactDetails = [
  {
    icon: <Phone size={15} stroke="#e87722" strokeWidth={2} />,
    primary: "+256 774 544866",
    secondary: "+190 9875 4305",
  },
  {
    icon: <MapPin size={15} stroke="#e87722" strokeWidth={2} />,
    primary: "Yuexiu District, Guangzhou, China",
    secondary: "Metro Line 5 — Xiaobei Station",
  },
  {
    icon: <Clock size={15} stroke="#e87722" strokeWidth={2} />,
    primary: "Mon – Sat: 8:00 AM – 6:00 PM (CST)",
    secondary: "Uganda · China",
  },
];

const Contact: React.FC = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [serviceOpen, setServiceOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      )
        setServiceOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setForm({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
      setSubmitted(false);
    }, 3500);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Subtle gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 0% 50%, rgba(232,119,34,0.05) 0%, transparent 55%), radial-gradient(ellipse at 100% 20%, rgba(26,46,90,0.04) 0%, transparent 50%)",
        }}
      />
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(26,46,90,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-[5%] py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* ── LEFT: contact info ── */}
        <div
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
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
            Let's Connect
            <span
              className="inline-block w-5 h-px"
              style={{ background: "var(--color-orange)" }}
            />
          </div>
          <h3
            className="font-black leading-tight mb-3"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.8rem",
              color: "var(--color-navy)",
              letterSpacing: "-0.02em",
            }}
          >
            Let's Talk
            <br />
            <span style={{ color: "var(--color-navy)" }}>Business</span>
          </h3>
          <p
            className="text-sm leading-relaxed mb-10"
            style={{ color: "#6b7280", maxWidth: 340 }}
          >
            Whether you're looking to source products from China, ship goods to
            Uganda, or need freight and customs support — our team is ready to
            assist you every step of the way.
          </p>

          {/* Contact rows */}
          <div className="flex flex-col gap-0">
            {contactDetails.map((d, i) => (
              <div
                key={i}
                className="flex items-start gap-4 py-4"
                style={{ borderBottom: "1px solid rgba(26,46,90,0.07)" }}
              >
                <div
                  className="w-8 h-8 min-w-8 rounded-lg flex items-center justify-center mt-0.5"
                  style={{ background: "rgba(232,119,34,0.1)" }}
                >
                  {d.icon}
                </div>
                <div>
                  <div
                    className="text-sm font-semibold leading-snug"
                    style={{ color: "var(--color-navy)" }}
                  >
                    {d.primary}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "#6b7280" }}>
                    {d.secondary}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/256774544866"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 text-sm font-bold transition-all duration-300 group"
            style={{ color: "var(--color-orange)", textDecoration: "none" }}
          >
            <span>Chat on WhatsApp</span>
            <ArrowRight
              size={16}
              strokeWidth={2.5}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
        </div>

        {/* ── RIGHT: Form card ── */}
        <div
          className="rounded-2xl relative"
          style={{
            background: "white",
            border: "1px solid rgba(26,46,90,0.08)",
            boxShadow: "0 10px 50px rgba(26,46,90,0.08)",
            padding: "clamp(1.5rem, 3vw, 2.25rem)",
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.8s 0.15s ease, transform 0.8s 0.15s ease",
          }}
        >
          {/* Corner glow */}
          <div
            className="absolute top-0 right-0 w-24 h-24 pointer-events-none rounded-2xl overflow-hidden"
            style={{
              background:
                "radial-gradient(circle at top right, rgba(232,119,34,0.08), transparent 70%)",
            }}
          />

          {/* Form header */}
          <div className="mb-5">
            <div
              className="text-xs font-bold uppercase tracking-widest mb-1"
              style={{ color: "var(--color-orange)" }}
            >
              Send a Message
            </div>
            <div
              className="h-px w-10"
              style={{ background: "var(--color-orange)" }}
            />
          </div>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center gap-3">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-2"
                style={{ background: "rgba(232,119,34,0.1)" }}
              >
                <Send size={22} stroke="#e87722" />
              </div>
              <div
                className="font-bold text-base"
                style={{ color: "var(--color-navy)" }}
              >
                Message Sent!
              </div>
              <div className="text-sm" style={{ color: "#6b7280" }}>
                We'll get back to you as soon as possible.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Row 1: First + Last name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-5">
                <div>
                  <label style={LABEL_STYLE}>First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    required
                    value={form.firstName}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, firstName: e.target.value }))
                    }
                    style={INPUT_STYLE}
                    onFocus={(e) =>
                      (e.target.style.borderBottomColor = "var(--color-orange)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderBottomColor = "rgba(26,46,90,0.15)")
                    }
                  />
                </div>
                <div>
                  <label style={LABEL_STYLE}>Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    required
                    value={form.lastName}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, lastName: e.target.value }))
                    }
                    style={INPUT_STYLE}
                    onFocus={(e) =>
                      (e.target.style.borderBottomColor = "var(--color-orange)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderBottomColor = "rgba(26,46,90,0.15)")
                    }
                  />
                </div>
              </div>

              {/* Row 2: Phone + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-5">
                <div>
                  <label style={LABEL_STYLE}>Phone / WhatsApp</label>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      borderBottom: "1.5px solid rgba(26,46,90,0.15)",
                      gap: 0,
                      transition: "border-color 0.3s",
                    }}
                  >
                    <button
                      type="button"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        padding: "10px 6px 10px 0",
                        cursor: "pointer",
                        flexShrink: 0,
                        color: "var(--color-navy)",
                        fontFamily: "'DM Sans', system-ui, sans-serif",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                      }}
                    >
                      <span style={{ fontSize: "1rem" }}>🇺🇬</span>
                      <span>+256</span>
                      <ChevronDown
                        size={13}
                        stroke="#e87722"
                        strokeWidth={2.5}
                      />
                    </button>
                    <div
                      style={{
                        width: 1,
                        height: 16,
                        background: "rgba(26,46,90,0.15)",
                        marginRight: 8,
                        flexShrink: 0,
                      }}
                    />
                    <input
                      type="tel"
                      placeholder="700 000 000"
                      required
                      value={form.phone}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, phone: e.target.value }))
                      }
                      style={{
                        flex: 1,
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        padding: "10px 0",
                        color: "var(--color-navy)",
                        fontSize: "0.875rem",
                        fontFamily: "'DM Sans', system-ui, sans-serif",
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label style={LABEL_STYLE}>Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    style={INPUT_STYLE}
                    onFocus={(e) =>
                      (e.target.style.borderBottomColor = "var(--color-orange)")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderBottomColor = "rgba(26,46,90,0.15)")
                    }
                  />
                </div>
              </div>

              {/* Service dropdown */}
              <div
                className="mb-5"
                ref={dropdownRef}
                style={{ position: "relative" }}
              >
                <label style={LABEL_STYLE}>Service</label>
                <button
                  type="button"
                  onClick={() => setServiceOpen((o) => !o)}
                  className="w-full flex items-center justify-between text-left"
                  style={{
                    padding: "10px 0",
                    background: "transparent",
                    border: "none",
                    borderBottom: "1.5px solid rgba(26,46,90,0.15)",
                    color: form.service
                      ? "var(--color-navy)"
                      : "rgba(26,46,90,0.35)",
                    fontSize: "0.875rem",
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    outline: "none",
                    cursor: "pointer",
                    transition: "border-color 0.3s",
                  }}
                >
                  <span>{form.service || "Select a service..."}</span>
                  <ChevronDown
                    size={16}
                    stroke="#e87722"
                    strokeWidth={2}
                    style={{
                      transform: serviceOpen ? "rotate(180deg)" : "rotate(0)",
                      transition: "transform 0.25s",
                    }}
                  />
                </button>
                {serviceOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      right: 0,
                      zIndex: 50,
                      background: "white",
                      border: "1px solid rgba(26,46,90,0.1)",
                      borderRadius: 10,
                      boxShadow: "0 8px 30px rgba(26,46,90,0.12)",
                      overflow: "hidden",
                      marginTop: 4,
                    }}
                  >
                    {services.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => {
                          setForm((f) => ({ ...f, service: s }));
                          setServiceOpen(false);
                        }}
                        className="w-full text-left px-4 py-2.5 text-sm transition-colors duration-150 hover:bg-orange-50"
                        style={{
                          color:
                            form.service === s
                              ? "var(--color-orange)"
                              : "#374151",
                          fontWeight: form.service === s ? 600 : 400,
                          background: "transparent",
                          border: "none",
                          cursor: "pointer",
                          fontFamily: "'DM Sans', system-ui, sans-serif",
                        }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Message */}
              <div className="mb-6">
                <label style={LABEL_STYLE}>Message</label>
                <textarea
                  rows={2}
                  placeholder="Tell us what you need — product type, quantity, destination..."
                  required
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  style={{ ...INPUT_STYLE, resize: "none", lineHeight: 1.6 }}
                  onFocus={(e) =>
                    (e.target.style.borderBottomColor = "var(--color-orange)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderBottomColor = "rgba(26,46,90,0.15)")
                  }
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(135deg,var(--color-orange),var(--color-orange-light))",
                  color: "white",
                  boxShadow: "0 8px 24px rgba(232,119,34,0.4)",
                }}
              >
                <Send size={14} />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
