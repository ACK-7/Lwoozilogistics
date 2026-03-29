import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MessageCircle, Tag } from "lucide-react";

const Products: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const cars = [
    {
      id: 1,
      brand: "Livestock Equipment",
      origin: "China",
      name: "LIVI Automatic Poultry Cage System",
      description:
        "Complete automated poultry farming cage system with integrated egg collection conveyors, manure removal belts, and feeding systems. Direct from LIVI manufacturer in Zhengzhou, China.",
      specs: {
        engine: "20,000 Birds",
        transmission: "Galvanized Steel",
        year: "3 Yr Warranty",
      },
      specLabels: {
        engine: "Capacity",
        transmission: "Material",
        year: "Warranty",
      },
      image: "/img/WhatsApp%20Image%202026-03-14%20at%209.25.02%20PM.jpeg",
      badge: "IN STOCK",
      price: "From $8,000",
      features: [
        "Direct factory sourcing from LIVI China",
        "Complete installation guidance included",
        "Customizable cage configurations",
        "Quality-inspected before shipment",
      ],
    },
    {
      id: 2,
      brand: "Livestock Equipment",
      origin: "China",
      name: "Multi-Tier Egg Layer Cage System",
      description:
        "High-density automated egg laying cage system with automatic water supply, belt feeders, and centralized manure collection. Suitable for large-scale poultry farms.",
      specs: {
        engine: "10,000+ Birds",
        transmission: "Galvanized Steel",
        year: "2 Yr Warranty",
      },
      specLabels: {
        engine: "Capacity",
        transmission: "Material",
        year: "Warranty",
      },
      image:
        "/img/WhatsApp%20Image%202026-03-14%20at%209.25.01%20PM%20%282%29.jpeg",
      badge: "IN STOCK",
      price: "From $6,500",
      features: [
        "Automated feeding and watering systems",
        "Energy-efficient design",
        "Backed by factory support & spare parts",
        "Quality-inspected before shipment",
      ],
    },
    {
      id: 3,
      brand: "Warehouse Equipment",
      origin: "China",
      name: "2000KG Electric Stacker Forklift",
      description:
        "Heavy-duty electric stacker with 2000KG lifting capacity and 2000MM rise height. Perfect for warehouse operations, loading docks, and industrial facilities.",
      specs: {
        engine: "2,000 KG",
        transmission: "Battery (48V)",
        year: "2,000 MM Rise",
      },
      specLabels: {
        engine: "Capacity",
        transmission: "Power",
        year: "Max Rise",
      },
      image:
        "/img/WhatsApp%20Image%202026-03-14%20at%209.25.00%20PM%20%283%29.jpeg",
      badge: "IN STOCK",
      price: "From $4,200",
      features: [
        "Zero emissions, indoor-safe battery power",
        "Ergonomic control handle design",
        "Available in multiple capacity options",
        "Quality-inspected before shipment",
      ],
    },
    {
      id: 4,
      brand: "Military Structures",
      origin: "China",
      name: "10x20M Military Frame Tent",
      description:
        "Heavy-duty military-grade frame tent measuring 10x20 meters. Suitable for military deployments, emergency relief, outdoor events, and large-scale field operations. Sourced from Chenya Tent manufacturer.",
      specs: {
        engine: "10x20 Meters",
        transmission: "Canvas + Aluminum",
        year: "MOQ: 5 Units",
      },
      specLabels: {
        engine: "Size",
        transmission: "Material",
        year: "Min. Order",
      },
      image:
        "/img/WhatsApp%20Image%202026-03-14%20at%209.24.58%20PM%20%281%29.jpeg",
      badge: "IN STOCK",
      price: "From $2,800",
      features: [
        "Military-grade waterproof canvas",
        "Quick-assembly aluminum frame structure",
        "Fire-retardant treatment available",
        "Custom sizes and colors on request",
      ],
    },
    {
      id: 5,
      brand: "Industrial Machinery",
      origin: "China",
      name: "Steel Roll Forming & Fabrication Machines",
      description:
        "CNC-controlled roll forming machines for producing C-purlins, Z-purlins, roofing sheets, and wall panels — direct from Chinese manufacturers for construction and industrial use.",
      specs: {
        engine: "CNC Controlled",
        transmission: "Carbon Steel",
        year: "Custom Output",
      },
      specLabels: {
        engine: "Type",
        transmission: "Build",
        year: "Application",
      },
      image: "/img/WhatsApp%20Image%202026-03-14%20at%209.24.59%20PM.jpeg",
      badge: "HOT DEAL",
      price: "On Request",
      features: [
        "Precision CNC-controlled forming",
        "Various steel profiles available",
        "Full installation and operator training",
        "Quality-certified equipment",
      ],
    },
    {
      id: 6,
      brand: "Industrial Chemicals",
      origin: "China",
      name: "Industrial Chemical Drums (200L)",
      description:
        "UN-certified 200-litre steel drums for hazardous and non-hazardous industrial chemicals. Ideal for chemical manufacturers, distributors, and large-scale bulk buyers.",
      specs: {
        engine: "200 Liters",
        transmission: "Carbon Steel",
        year: "UN Certified",
      },
      specLabels: {
        engine: "Capacity",
        transmission: "Material",
        year: "Standard",
      },
      image: "/img/WhatsApp%20Image%202026-03-14%20at%209.25.03%20PM.jpeg",
      badge: "IN STOCK",
      price: "From $120/drum",
      features: [
        "UN-certified for hazardous materials",
        "Available in various drum sizes",
        "Chemical-resistant coating options",
        "Quality-inspected before shipment",
      ],
    },
    {
      id: 7,
      brand: "Industrial Gas",
      origin: "China",
      name: "SF6 Sulfur Hexafluoride Cylinders",
      description:
        "High-purity SF6 gas cylinders for electrical switchgear insulation, arc extinguishing, and industrial applications. Sourced from IEC-certified Chinese manufacturers.",
      specs: {
        engine: "99.999% Purity",
        transmission: "High Pressure",
        year: "IEC Certified",
      },
      specLabels: {
        engine: "Purity",
        transmission: "Pressure Type",
        year: "Standard",
      },
      image:
        "/img/WhatsApp%20Image%202026-03-14%20at%209.25.00%20PM%20%281%29.jpeg",
      badge: "IN STOCK",
      price: "On Request",
      features: [
        "Ultra-high purity SF6 gas",
        "Suitable for high-voltage switchgear",
        "IEC/ISO certified cylinders",
        "Full safety compliance in handling",
      ],
    },
    {
      id: 8,
      brand: "Chemical Packaging",
      origin: "China",
      name: "25L HDPE Liquid Chemical Containers",
      description:
        "UN-certified 25-litre blue HDPE jerricans for liquid chemicals, solvents, and industrial fluids. Packed and sealed for safe FCL and LCL shipping from China.",
      specs: {
        engine: "25 Liters",
        transmission: "HDPE Plastic",
        year: "UN Certified",
      },
      specLabels: {
        engine: "Capacity",
        transmission: "Material",
        year: "Standard",
      },
      image:
        "/img/WhatsApp%20Image%202026-03-14%20at%209.25.00%20PM%20%282%29.jpeg",
      badge: "IN STOCK",
      price: "From $18/unit",
      features: [
        "UN-certified for chemical transport",
        "Leak-proof seal and tamper-evident caps",
        "Stacked and shipped safely in containers",
        "Available in multiple sizes",
      ],
    },
    {
      id: 9,
      brand: "Auto Parts",
      origin: "China (Guangzhou)",
      name: "Guangzhou Vehicle Engine Assemblies",
      description:
        "Brand-new vehicle engine assemblies sourced directly from Guangzhou's top automotive manufacturers. Available for Toyota, Mitsubishi, Isuzu, and other popular brands.",
      specs: {
        engine: "Brand New",
        transmission: "Various Models",
        year: "1 Yr Warranty",
      },
      specLabels: {
        engine: "Condition",
        transmission: "Availability",
        year: "Warranty",
      },
      image: "/img/WhatsApp%20Image%202026-03-14%20at%209.25.01%20PM.jpeg",
      badge: "IN STOCK",
      price: "From $1,200",
      features: [
        "Direct from Guangzhou manufacturers",
        "Wide range of vehicle brands covered",
        "1-year warranty on all engines",
        "Cleared at Mombasa, delivered to Kampala",
      ],
    },
    {
      id: 10,
      brand: "Auto Parts",
      origin: "China",
      name: "Auto Parts & Machinery Warehouse Stock",
      description:
        "Access thousands of auto parts, gearboxes, transmissions, and mechanical assemblies from our Chinese warehouse network — wrapped and ready for immediate shipment.",
      specs: {
        engine: "Massive Stock",
        transmission: "All Brands",
        year: "7-Day Lead",
      },
      specLabels: {
        engine: "Availability",
        transmission: "Coverage",
        year: "Lead Time",
      },
      image:
        "/img/WhatsApp%20Image%202026-03-14%20at%209.25.01%20PM%20%281%29.jpeg",
      badge: "IN STOCK",
      price: "From $200",
      features: [
        "Thousands of parts in stock",
        "Gearboxes, engines & components",
        "Quality-wrapped, ready to ship",
        "Express sourcing for urgent orders",
      ],
    },
    {
      id: 11,
      brand: "Military Structures",
      origin: "China",
      name: "Army Field Canvas Tents",
      description:
        "Military-grade canvas field tents for army deployments, emergency response, and outdoor operations. Durable, weather-resistant, and fast to assemble in any terrain.",
      specs: {
        engine: "Various Sizes",
        transmission: "Canvas",
        year: "MOQ: 10 Units",
      },
      specLabels: {
        engine: "Sizes",
        transmission: "Material",
        year: "Min. Order",
      },
      image:
        "/img/WhatsApp%20Image%202026-03-14%20at%209.24.59%20PM%20%281%29.jpeg",
      badge: "IN STOCK",
      price: "From $350",
      features: [
        "Military-grade waterproof canvas",
        "Windproof pole structure",
        "Multiple size configurations",
        "Bulk orders welcome",
      ],
    },
    {
      id: 12,
      brand: "Custom Sourcing",
      origin: "Worldwide",
      name: "Custom Product Sourcing",
      description:
        "Don't see what you need? We source and import virtually anything from China or anywhere in the world — at factory prices. Just tell us what you need.",
      specs: {
        engine: "Any Product",
        transmission: "7-14 Days",
        year: "Door to Door",
      },
      specLabels: {
        engine: "Scope",
        transmission: "Lead Time",
        year: "Delivery",
      },
      image:
        "/img/WhatsApp%20Image%202026-03-14%20at%209.25.02%20PM%20%281%29.jpeg",
      badge: "ORDER NOW",
      price: "On Request",
      features: [
        "Source any product from anywhere",
        "Full importation & clearance handled",
        "We negotiate the best factory price",
        "Door-to-door delivery across Uganda",
      ],
    },
  ];

  const totalCars = cars.length;

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % totalCars);
  const handlePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + totalCars) % totalCars);

  // Auto-advance every 4s — uses functional updater so no stale closure
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalCars);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, totalCars]);

  // Scroll-reveal
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Inject keyframe
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes fadeSlideUp {
        from { opacity: 0; transform: translateY(14px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .car-info-animate { animation: fadeSlideUp 0.42s cubic-bezier(0.4,0,0.2,1) both; }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Compute card slot style
  const getCardStyle = (i: number): React.CSSProperties => {
    const N = totalCars;
    const raw = (((i - currentIndex) % N) + N) % N;
    const offset = raw > Math.floor(N / 2) ? raw - N : raw;

    const base: React.CSSProperties = {
      position: "absolute",
      left: 0,
      right: 0,
      margin: "0 auto",
      width: "65%",
      minWidth: "320px",
      maxWidth: "780px",
      transition: "all 0.55s cubic-bezier(0.4,0,0.2,1)",
    };

    if (offset === 0) {
      return {
        ...base,
        zIndex: 10,
        opacity: 1,
        transform: "translateX(0%) scale(1)",
        filter: "none",
        pointerEvents: "auto",
        cursor: "default",
      };
    } else if (offset === 1) {
      return {
        ...base,
        zIndex: 5,
        opacity: 0.45,
        transform: "translateX(60%) scale(0.80)",
        filter: "blur(1px) brightness(0.6)",
        pointerEvents: "auto",
        cursor: "pointer",
      };
    } else if (offset === 2) {
      return {
        ...base,
        zIndex: 2,
        opacity: 0.15,
        transform: "translateX(105%) scale(0.63)",
        filter: "blur(2.5px) brightness(0.4)",
        pointerEvents: "none",
        cursor: "default",
      };
    } else if (offset === -1) {
      return {
        ...base,
        zIndex: 5,
        opacity: 0.45,
        transform: "translateX(-60%) scale(0.80)",
        filter: "blur(1px) brightness(0.6)",
        pointerEvents: "auto",
        cursor: "pointer",
      };
    } else if (offset === -2) {
      return {
        ...base,
        zIndex: 2,
        opacity: 0.15,
        transform: "translateX(-105%) scale(0.63)",
        filter: "blur(2.5px) brightness(0.4)",
        pointerEvents: "none",
        cursor: "default",
      };
    } else {
      return {
        ...base,
        zIndex: 0,
        opacity: 0,
        transform: "translateX(0) scale(0.5)",
        filter: "none",
        pointerEvents: "none",
        cursor: "default",
      };
    }
  };

  const getBadgeColor = (badge: string) => {
    if (badge === "HOT DEAL") return "#8b1a3a";
    if (badge === "ORDER NOW") return "#9b59b6";
    return "var(--color-orange)";
  };

  const getCardBg = (badge: string) => {
    if (badge === "HOT DEAL")
      return "linear-gradient(135deg, rgba(139,26,58,0.3), rgba(26,46,90,0.85))";
    if (badge === "ORDER NOW")
      return "linear-gradient(135deg, rgba(155,89,182,0.25), rgba(26,46,90,0.85))";
    return "linear-gradient(135deg, rgba(232,119,34,0.25), rgba(26,46,90,0.85))";
  };

  const currentCar = cars[currentIndex];

  return (
    <section
      ref={sectionRef}
      id="cars"
      className="relative py-24 overflow-hidden"
      style={{ background: "var(--color-navy)" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 50%, rgba(232,119,34,0.07) 0%, transparent 40%), radial-gradient(circle at 90% 20%, rgba(139,26,58,0.09) 0%, transparent 40%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-[5%]">
        {/* Header */}
        <div
          className="text-center mb-10"
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? "none" : "translateY(24px)",
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
            ></span>
            Our Products
            <span
              className="inline-block w-5 h-px"
              style={{ background: "var(--color-orange)" }}
            ></span>
          </div>
          <h2
            className="font-black leading-tight mb-3 text-white"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.9rem, 3.5vw, 2.7rem)",
            }}
          >
            Products We Source &amp;{" "}
            <span style={{ color: "var(--color-orange)" }}>Supply</span>
          </h2>
          <p
            className="text-sm leading-relaxed max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Browse products we source directly from China &amp; worldwide
            <br />— quality-inspected, fully cleared, and delivered to your
            doorstep.
          </p>
        </div>

        {/* CAROUSEL */}
        <div
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? "none" : "translateY(24px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
          }}
        >
          <div className="w-full select-none">
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                height: "520px",
                marginBottom: "40px",
              }}
            >
              {cars.map((car, i) => {
                const style = getCardStyle(i);
                const isActive = i === currentIndex;
                const N = totalCars;
                const raw = (((i - currentIndex) % N) + N) % N;
                const slot = raw > Math.floor(N / 2) ? raw - N : raw;
                const isNext1 = slot === 1;
                const isPrev1 = slot === -1;
                const badgeColor = getBadgeColor(car.badge);
                return (
                  <div
                    key={car.id}
                    style={style}
                    onClick={
                      isNext1 ? handleNext : isPrev1 ? handlePrev : undefined
                    }
                  >
                    <div
                      className="rounded-3xl overflow-hidden w-full"
                      style={{
                        border: isActive
                          ? "1px solid rgba(232,119,34,0.55)"
                          : "1px solid rgba(255,255,255,0.08)",
                        boxShadow: isActive
                          ? "0 30px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(232,119,34,0.2)"
                          : "none",
                        transition: "border-color 0.5s, box-shadow 0.5s",
                      }}
                    >
                      <div
                        className="relative overflow-hidden"
                        style={{
                          height: "420px",
                          background: getCardBg(car.badge),
                        }}
                      >
                        <img
                          src={car.image}
                          alt={car.name}
                          className="object-cover"
                          style={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                          }}
                        />
                        {/* Gradient overlay */}
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              "linear-gradient(to bottom, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.65) 100%)",
                          }}
                        />
                        {/* Badge */}
                        <span
                          className="absolute top-4 right-4 text-white font-bold rounded-full z-10"
                          style={{
                            background: badgeColor,
                            fontSize: "0.65rem",
                            letterSpacing: "0.1em",
                            padding: "6px 16px",
                            boxShadow: `0 4px 12px ${badgeColor}80`,
                          }}
                        >
                          {car.badge}
                        </span>
                        {/* Name overlay */}
                        <div
                          className="absolute bottom-0 left-0 right-0 px-6 py-5"
                          style={{ zIndex: 10 }}
                        >
                          <div
                            className="font-bold uppercase mb-1"
                            style={{
                              fontSize: "0.7rem",
                              letterSpacing: "0.12em",
                              color: "rgba(255,255,255,0.6)",
                            }}
                          >
                            {car.brand} · {car.origin}
                          </div>
                          <div
                            className="font-black text-white"
                            style={{
                              fontFamily: "'Playfair Display', serif",
                              fontSize: "clamp(1.3rem,2vw,1.7rem)",
                            }}
                          >
                            {car.name}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* LOWER SECTION */}
        <div
          key={currentIndex}
          className="car-info-animate grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-8"
        >
          {/* LEFT — car details */}
          <div className="flex flex-col gap-5">
            <div>
              <div
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: "var(--color-orange)" }}
              >
                {currentCar.brand}· {currentCar.origin}
              </div>
              <h3
                className="font-black text-white"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.6rem, 2.5vw, 2.1rem)",
                }}
              >
                {currentCar.name}
              </h3>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              {currentCar.description}
            </p>
            {/* Features */}
            <div className="space-y-2.5">
              {currentCar.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(232,119,34,0.18)",
                      border: "1px solid rgba(232,119,34,0.35)",
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
                  <span
                    className="text-sm"
                    style={{ color: "rgba(255,255,255,0.72)" }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all hover:-translate-y-0.5 no-underline"
                style={{
                  background:
                    "linear-gradient(135deg,var(--color-orange),var(--color-orange-light))",
                  boxShadow: "0 4px 15px rgba(232,119,34,0.35)",
                }}
              >
                <MessageCircle size={14} />
                Inquire About This Product
              </a>
              <a
                href="https://wa.me/256774544866"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:-translate-y-0.5 no-underline"
                style={{
                  background: "transparent",
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  color: "white",
                }}
              >
                <Tag size={14} />
                Get a Price Quote
              </a>
            </div>
          </div>

          {/* RIGHT — image card + price + specs */}
          <div className="flex flex-col gap-4">
            {/* Car image card with price overlay */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                height: "240px",
                border: "1px solid rgba(232,119,34,0.3)",
                boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
              }}
            >
              <img
                src={currentCar.image}
                alt={currentCar.name}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(10,20,50,0.82) 0%, transparent 55%)",
                }}
              />
              {/* Badge */}
              <div
                className="absolute top-3 right-3 text-white text-xs font-bold px-3 py-1 rounded-full"
                style={{ background: getBadgeColor(currentCar.badge) }}
              >
                {currentCar.badge}
              </div>
              {/* Counter bottom-right */}
              <div
                className="absolute bottom-3 right-4 text-right"
                style={{ zIndex: 10 }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.5rem",
                    color: "var(--color-orange)",
                    fontWeight: 900,
                    lineHeight: 1,
                  }}
                >
                  {String(currentIndex + 1).padStart(2, "0")}
                </div>
                <div
                  style={{
                    fontSize: "0.65rem",
                    color: "rgba(255,255,255,0.45)",
                    letterSpacing: "0.1em",
                  }}
                >
                  / {String(totalCars).padStart(2, "0")}
                </div>
              </div>
              {/* Price bottom-left */}
              <div className="absolute bottom-3 left-4">
                <div
                  className="text-xs font-bold uppercase tracking-widest mb-0.5"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  Price / MOQ ——
                </div>
                <div
                  className="text-2xl font-black"
                  style={{
                    color: "var(--color-orange)",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {currentCar.price}
                </div>
              </div>
            </div>

            {/* Specs row */}
            <div
              className="grid grid-cols-3 rounded-xl overflow-hidden"
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              {[
                {
                  label: currentCar.specLabels.engine,
                  value: currentCar.specs.engine,
                },
                {
                  label: currentCar.specLabels.transmission,
                  value: currentCar.specs.transmission,
                },
                {
                  label: currentCar.specLabels.year,
                  value: currentCar.specs.year,
                },
              ].map((spec, i) => (
                <div
                  key={i}
                  className="py-3 px-4 text-center"
                  style={{
                    borderRight:
                      i < 2 ? "1px solid rgba(255,255,255,0.1)" : "none",
                  }}
                >
                  <div
                    className="text-xs uppercase font-bold tracking-wider mb-1"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {spec.label}
                  </div>
                  <div className="text-sm font-bold text-white">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between pt-2">
          <button
            onClick={handlePrev}
            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all hover:scale-105"
            style={{
              border: "1.5px solid rgba(255,255,255,0.25)",
              color: "white",
              background: "transparent",
            }}
          >
            <ChevronLeft size={16} />
          </button>
          <span
            className="text-sm font-bold"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(totalCars).padStart(2, "0")}
          </span>
          <button
            onClick={handleNext}
            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all hover:scale-105"
            style={{
              border: "1.5px solid rgba(255,255,255,0.25)",
              color: "white",
              background: "transparent",
            }}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
