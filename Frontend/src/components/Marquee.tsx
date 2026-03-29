import React, { useEffect } from "react";
import {
  Car,
  Anchor,
  Package,
  Banknote,
  Wrench,
  ClipboardList,
  Briefcase,
  BadgeCheck,
} from "lucide-react";

const Marquee: React.FC = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes marquee {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      
      .marquee-track {
        display: flex;
        animation: marquee 30s linear infinite;
        width: 200%;
      }
      
      .marquee-track:hover {
        animation-play-state: paused;
      }
      
      .marquee-item {
        flex-shrink: 0;
        width: 50%;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const items = [
    { icon: Package, label: "Supplier Sourcing" },
    { icon: BadgeCheck, label: "Product Inspection" },
    { icon: Anchor, label: "LCL & FCL Shipping" },
    { icon: Banknote, label: "Money Transfer" },
    { icon: Briefcase, label: "Customs Clearance" },
    { icon: ClipboardList, label: "Consultations" },
    { icon: Car, label: "Car Importation" },
    { icon: Wrench, label: "Freight Forwarding" },
  ];

  return (
    <div
      className="overflow-hidden py-3.5"
      style={{ background: "var(--color-orange)" }}
    >
      <div className="marquee-track">
        {/* First set */}
        <div className="flex items-center w-full">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={`first-${index}`}
                className="flex items-center gap-3 font-bold text-sm tracking-wide uppercase text-white px-6 whitespace-nowrap flex-shrink-0"
              >
                <Icon size={16} strokeWidth={2} />
                {item.label}
                <span
                  className="opacity-40 mx-1"
                  style={{ fontSize: "0.5rem" }}
                >
                  ◆
                </span>
              </div>
            );
          })}
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="flex items-center w-full">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={`second-${index}`}
                className="flex items-center gap-3 font-bold text-sm tracking-wide uppercase text-white px-6 whitespace-nowrap flex-shrink-0"
              >
                <Icon size={16} strokeWidth={2} />
                {item.label}
                <span
                  className="opacity-40 mx-1"
                  style={{ fontSize: "0.5rem" }}
                >
                  ◆
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
