import React, { useEffect, useRef } from "react";
import {
  Zap,
  Percent,
  Lock,
  Phone,
  ShieldCheck,
  Clock,
  Send,
} from "lucide-react";

const whyUs = [
  {
    icon: <Zap size={16} stroke="#e87722" strokeWidth={2} />,
    title: "Same-Day Delivery",
    desc: "Funds arrive the same day or next business day",
  },
  {
    icon: <Percent size={16} stroke="#e87722" strokeWidth={2} />,
    title: "Best Exchange Rates",
    desc: "Competitive real-time rates, no hidden charges",
  },
  {
    icon: <Lock size={16} stroke="#e87722" strokeWidth={2} />,
    title: "Fully Secure",
    desc: "Every transaction is encrypted and tracked end-to-end",
  },
  {
    icon: <Phone size={16} stroke="#e87722" strokeWidth={2} />,
    title: "WhatsApp Support",
    desc: "Dedicated agent available via WhatsApp at all times",
  },
  {
    icon: <ShieldCheck size={16} stroke="#e87722" strokeWidth={2} />,
    title: "Verified & Trusted",
    desc: "Hundreds of successful transfers processed every month",
  },
  {
    icon: <Clock size={16} stroke="#e87722" strokeWidth={2} />,
    title: "Transfers active 24/7",
    desc: "Always here when you need us, not limited by office hours",
  },
];

const howItWorks = [
  {
    num: "01",
    title: "Contact Us",
    desc: "Reach out via WhatsApp or the contact form below",
  },
  {
    num: "02",
    title: "Get a Rate",
    desc: "We give you a real-time exchange rate and fee quote",
  },
  {
    num: "03",
    title: "Send Your Funds",
    desc: "Transfer to us and confirm the recipient details",
  },
  {
    num: "04",
    title: "Money Delivered",
    desc: "Recipient receives funds same day or next business day",
  },
];

const stats = [
  { value: "Same Day", label: "Transfer Speed" },
  {
    value: "Pay-out Options",
    label: "Mobile wallet, Bank account, Cash pickup",
  },
  { value: "100%", label: "Tracked Transactions" },
];

const MoneyTransfer: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
      id="money-transfer"
      ref={sectionRef}
      className="relative overflow-hidden py-24 px-[5%]"
      style={{ background: "var(--color-navy-dark)" }}
    >
      {/* Background glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 10% 50%, rgba(232,119,34,0.07) 0%, transparent 50%), radial-gradient(ellipse at 90% 20%, rgba(139,26,58,0.09) 0%, transparent 50%)",
        }}
      />
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ── Header ── */}
        <div
          data-reveal
          className="text-center mb-16"
          style={{
            opacity: 0,
            transform: "translateY(30px)",
            transition: "all 0.7s ease",
          }}
        >
          <div
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "rgba(253,186,116,0.9)" }}
          >
            <span
              className="inline-block w-5 h-px"
              style={{ background: "rgba(253,186,116,0.9)" }}
            />
            Money Transfer Uganda · China
            <span
              className="inline-block w-5 h-px"
              style={{ background: "rgba(253,186,116,0.9)" }}
            />
          </div>
          <h2
            className="font-black leading-tight mb-4 text-white"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)",
            }}
          >
            Fast &amp; Secure{" "}
            <span style={{ color: "var(--color-orange)" }}>
              Money Transfers
            </span>
          </h2>
          <p
            className="text-base leading-relaxed max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            Send money between Uganda and China fast and securely — ideal
            for settling supplier invoices or personal transfers.
          </p>
        </div>

        {/* ── 2-col grid: Why us | How it works ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* LEFT — Why transfer with us */}
          <div
            data-reveal
            style={{
              opacity: 0,
              transform: "translateX(-30px)",
              transition: "all 0.7s 0.15s ease",
            }}
          >
            <h3
              className="font-bold text-white mb-6 text-lg"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why transfer with us?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyUs.map((item, i) => (
                <div
                  key={i}
                  data-reveal
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 16,
                    padding: "16px 18px",
                    opacity: 0,
                    transform: "translateY(16px)",
                    transition: `opacity 0.5s ${0.2 + i * 0.07}s ease, transform 0.5s ${0.2 + i * 0.07}s ease`,
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center mb-3"
                    style={{ background: "rgba(232,119,34,0.15)" }}
                  >
                    {item.icon}
                  </div>
                  <div className="font-bold text-sm mb-1 text-white">
                    {item.title}
                  </div>
                  <div
                    className="text-xs leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                  >
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — How it works */}
          <div
            data-reveal
            style={{
              opacity: 0,
              transform: "translateX(30px)",
              transition: "all 0.7s 0.2s ease",
            }}
          >
            <h3
              className="font-bold text-white mb-6 text-lg"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              How it works
            </h3>
            <div className="flex flex-col gap-0">
              {howItWorks.map((step, i) => (
                <div
                  key={i}
                  data-reveal
                  className="flex gap-5 relative"
                  style={{
                    paddingBottom: i < howItWorks.length - 1 ? 28 : 0,
                    opacity: 0,
                    transform: "translateY(16px)",
                    transition: `opacity 0.5s ${0.3 + i * 0.1}s ease, transform 0.5s ${0.3 + i * 0.1}s ease`,
                  }}
                >
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center font-black text-sm z-10 text-white"
                      style={{
                        background:
                          "linear-gradient(135deg,var(--color-orange),var(--color-orange-light))",
                        boxShadow: "0 4px 16px rgba(232,119,34,0.4)",
                      }}
                    >
                      {step.num}
                    </div>
                    {i < howItWorks.length - 1 && (
                      <div
                        className="flex-1 w-px mt-2"
                        style={{
                          background: "rgba(232,119,34,0.2)",
                          minHeight: 28,
                        }}
                      />
                    )}
                  </div>
                  <div className="pt-2">
                    <div className="font-bold text-sm text-white mb-1">
                      {step.title}
                    </div>
                    <div
                      className="text-xs leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.45)" }}
                    >
                      {step.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div
              data-reveal
              className="mt-8 flex flex-wrap gap-3"
              style={{ opacity: 0, transition: "opacity 0.7s 0.7s ease" }}
            >
              <button
                className="inline-flex items-center gap-2 font-bold text-sm px-7 py-3.5 rounded-full text-white transition-all duration-300 hover:-translate-y-1"
                style={{
                  background:
                    "linear-gradient(135deg,var(--color-orange),var(--color-orange-light))",
                  boxShadow: "0 4px 20px rgba(232,119,34,0.45)",
                }}
              >
                <Send size={15} />
                Start a Transfer
              </button>
              <a
                href="https://wa.me/256774544866"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-1"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.2)",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                <Phone size={15} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* ── Stats bar ── */}
        <div
          data-reveal
          className="grid grid-cols-1 sm:grid-cols-3 gap-px rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.08)",
            opacity: 0,
            transform: "translateY(20px)",
            transition: "all 0.7s 0.5s ease",
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="text-center py-7 px-4"
              style={{ background: "rgba(13,27,56,0.5)" }}
            >
              <div
                className="font-black text-2xl mb-1"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "var(--color-orange)",
                }}
              >
                {s.value}
              </div>
              <div
                className="text-xs uppercase tracking-widest"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoneyTransfer;
