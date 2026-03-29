import React, { useEffect, useRef, useState } from "react";
import {
  Truck,
  Anchor,
  Package,
  Banknote,
  Wrench,
  ClipboardList,
  Briefcase,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Service {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 4;

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .service-card {
        background: white;
        border-radius: 1rem;
        padding: 2rem;
        cursor: default;
        overflow: hidden;
        border: 1px solid rgba(26, 46, 90, 0.08);
        box-shadow: 0 2px 12px rgba(26, 46, 90, 0.05);
        position: relative;
        transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), 
                    opacity 0.45s ease, 
                    border-color 0.3s, 
                    box-shadow 0.3s;
      }
      
      .service-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        border-radius: 8px 8px 0 0;
        background: linear-gradient(90deg, var(--color-navy), var(--color-orange), var(--color-orange-light));
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .service-card:hover::before {
        transform: scaleX(1);
      }
      
      .service-icon {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.25rem;
        position: relative;
        z-index: 10;
        background: rgba(232, 119, 34, 0.10);
        transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      
      .service-card:hover .service-icon {
        transform: rotate(-5deg) scale(1.1);
      }
      
      .service-learn-more {
        margin-top: 1.25rem;
        display: flex;
        align-items: center;
        gap: 0.25rem;
        font-size: 0.75rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--color-orange);
        opacity: 0;
        transform: translateX(-10px);
        transition: all 0.3s ease;
        position: relative;
        z-index: 10;
      }
      
      .service-card:hover .service-learn-more {
        opacity: 1;
        transform: translateX(0);
      }
      
      .service-title {
        font-family: 'Playfair Display', serif;
        font-size: 1.125rem;
        font-weight: 700;
        margin-bottom: 0.625rem;
        color: var(--color-navy);
        position: relative;
        z-index: 10;
        transition: color 0.3s;
      }
      
      .service-description {
        font-size: 0.875rem;
        line-height: 1.5;
        color: #6b7280;
        position: relative;
        z-index: 10;
      }
      
      .bg-circle {
        position: absolute;
        pointer-events: none;
      }
    `;
    document.head.appendChild(style);

    // Make content visible when section comes into view
    if (sectionRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const section = entry.target as HTMLElement;
              const header = section.querySelector(
                ".services-header",
              ) as HTMLElement;
              const bgCircles = section.querySelectorAll(".bg-circle");
              const cards = section.querySelectorAll(".service-card");

              // Show header
              if (header) {
                header.style.opacity = "1";
                header.style.transform = "translateY(0)";
              }

              // Show background circles
              bgCircles.forEach((circle) => {
                (circle as HTMLElement).style.opacity = "1";
              });

              // Show cards with stagger - use !important to override inline styles
              cards.forEach((card, index) => {
                setTimeout(() => {
                  const cardElement = card as HTMLElement;
                  cardElement.style.setProperty("opacity", "1", "important");
                  cardElement.style.setProperty(
                    "transform",
                    "translateY(0) scale(1)",
                    "important",
                  );
                }, index * 90);
              });

              // Disconnect after animations complete
              observer.unobserve(section);
            }
          });
        },
        { threshold: 0.1 },
      );

      observer.observe(sectionRef.current);
      return () => observer.disconnect();
    }

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const services: Service[] = [
    {
      icon: Package,
      title: "Supplier Sourcing",
      description:
        "We identify and connect you to verified manufacturers in China and beyond — at factory-direct prices for any product category.",
    },
    {
      icon: BadgeCheck,
      title: "Product Inspection",
      description:
        "Pre-shipment quality checks conducted at the factory. Every order is inspected for defects and compliance before it leaves the supplier.",
    },
    {
      icon: Anchor,
      title: "LCL Shipping",
      description:
        "Less Container Load shipping — perfect for smaller orders. Share container space and only pay for what you ship, no minimums.",
    },
    {
      icon: Briefcase,
      title: "FCL Shipping",
      description:
        "Full Container Load shipping for bulk orders. Exclusive use of a full container ensures faster transit and better security for large shipments.",
    },
    {
      icon: ClipboardList,
      title: "Customs Clearance",
      description:
        "Complete customs clearance and documentation at Mombasa port. We handle all paperwork, duties, and URA tax filings for smooth delivery.",
    },
    {
      icon: Wrench,
      title: "Consultations",
      description:
        "Expert guidance on importation regulations, tax planning, supplier selection, and trade logistics tailored to your specific business needs.",
    },
    {
      icon: Truck,
      title: "Car Importation",
      description:
        "Source and import vehicles from Japan, China to Uganda. We manage the full process from purchase to port clearance.",
    },
    {
      icon: Banknote,
      title: "Money Transfer",
      description:
        "Fast, secure international money transfers between Uganda and China. Ideal for settling supplier invoices — same-day delivery.",
    },
  ];

  const totalPages = Math.ceil(services.length / cardsPerPage);
  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentServices = services.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-24 px-[5%] relative overflow-hidden"
      style={{ background: "#f8f9fc" }}
    >
      {/* Background Circles */}
      <div
        className="bg-circle absolute pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(232, 119, 34, 0.05), transparent 70%)",
          top: "-200px",
          right: "-200px",
          opacity: 0,
          transition: "opacity 1s",
        }}
      ></div>
      <div
        className="bg-circle absolute pointer-events-none"
        style={{
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(26, 46, 90, 0.05), transparent 70%)",
          bottom: "-100px",
          left: "-100px",
          opacity: 0,
          transition: "opacity 1s 0.3s",
        }}
      ></div>

      {/* Header */}
      <div
        className="services-header text-center mb-16"
        style={{
          opacity: 0,
          transform: "translateY(30px)",
          transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
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
          Our Services
          <span
            className="inline-block w-5 h-px"
            style={{ background: "var(--color-orange)" }}
          ></span>
        </div>

        <h2
          className="font-black leading-tight mb-3"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.9rem, 3.5vw, 2.7rem)",
            color: "var(--color-navy)",
          }}
        >
          Source, Ship & Deliver —{" "}
          <span style={{ color: "var(--color-orange)" }}>With Ease</span>
        </h2>

        <p
          className="text-base leading-relaxed max-w-lg mx-auto mb-5"
          style={{ color: "#6b7280" }}
        >
          End-to-end product sourcing, freight forwarding, customs clearance and
          money transfer — all tailored for Uganda and East Africa.
        </p>

        <div
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: "rgba(26, 46, 90, 0.4)" }}
        >
          8 services total
        </div>

        {/* Progress Bar */}
        <div
          className="w-full h-1 rounded-full overflow-hidden mx-auto"
          style={{ maxWidth: "200px", background: "rgba(26, 46, 90, 0.1)" }}
        >
          <div
            className="h-full rounded-full"
            style={{
              width: "100%",
              background:
                "linear-gradient(90deg, var(--color-navy), var(--color-orange))",
            }}
          ></div>
        </div>
      </div>

      {/* Services Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto"
        style={{ minHeight: "320px" }}
      >
        {currentServices.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="service-card"
              style={{
                opacity: 0,
                transform: "translateY(40px) scale(0.96)",
              }}
            >
              {/* Icon Container */}
              <div className="service-icon">
                <Icon size={24} strokeWidth={1.8} color="#1a2e5a" />
              </div>

              {/* Title */}
              <h3 className="service-title">{service.title}</h3>

              {/* Description */}
              <p className="service-description">{service.description}</p>

              {/* Learn More Button */}
              <div className="service-learn-more">
                <button
                  className="flex items-center gap-1"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--color-orange)",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                  }}
                >
                  Learn more <span>→</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center gap-6 mt-12 max-w-7xl mx-auto">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          className="p-2 rounded-lg transition-all duration-300"
          style={{
            background:
              currentPage === 0
                ? "rgba(26, 46, 90, 0.05)"
                : "rgba(232, 119, 34, 0.1)",
            color: currentPage === 0 ? "#ccc" : "var(--color-orange)",
            cursor: currentPage === 0 ? "not-allowed" : "pointer",
          }}
        >
          <ChevronLeft size={20} />
        </button>

        <div className="text-center flex items-center gap-2">
          <span
            className="text-sm font-semibold"
            style={{ color: "var(--color-navy)" }}
          >
            Page
          </span>
          <span
            className="text-sm font-bold"
            style={{ color: "var(--color-orange)", fontSize: "1.125rem" }}
          >
            {currentPage + 1}
          </span>
          <span
            className="text-sm font-semibold"
            style={{ color: "var(--color-navy)" }}
          >
            of
          </span>
          <span
            className="text-sm font-bold"
            style={{ color: "var(--color-navy)" }}
          >
            {totalPages}
          </span>
        </div>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
          className="p-2 rounded-lg transition-all duration-300"
          style={{
            background:
              currentPage === totalPages - 1
                ? "rgba(26, 46, 90, 0.05)"
                : "rgba(232, 119, 34, 0.1)",
            color:
              currentPage === totalPages - 1 ? "#ccc" : "var(--color-orange)",
            cursor: currentPage === totalPages - 1 ? "not-allowed" : "pointer",
          }}
        >
          <ChevronRight size={20} />
        </button>

        <span
          className="text-xs font-semibold uppercase tracking-widest"
          style={{ color: "rgba(26, 46, 90, 0.4)" }}
        >
          · {services.length} services total
        </span>
      </div>

      <div className="text-center mt-4">
        <p
          className="text-xs font-medium"
          style={{ color: "rgba(26, 46, 90, 0.5)" }}
        >
          Tap the arrows to see more services
        </p>
      </div>
    </section>
  );
};

export default Services;
