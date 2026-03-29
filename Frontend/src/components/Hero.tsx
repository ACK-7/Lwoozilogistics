import React, { useEffect } from "react";
import { MapPin } from "lucide-react";

const Hero: React.FC = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes rotateSlow {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      
      @keyframes rotateReverse {
        from {
          transform: rotate(360deg);
        }
        to {
          transform: rotate(0deg);
        }
      }
      
      @keyframes bounce0 {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-15px);
        }
      }
      
      @keyframes bounce1 {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-15px);
        }
      }
      
      @keyframes bounce2 {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-15px);
        }
      }
      
      .rotate-slow {
        animation: rotateSlow 60s linear infinite;
      }
      
      .rotate-reverse {
        animation: rotateReverse 12s linear infinite;
      }
      
      .rotate-reverse-slow {
        animation: rotateReverse 8s linear infinite;
      }
      
      .float-0 {
        animation: bounce0 3s ease-in-out infinite;
      }
      
      .float-1 {
        animation: bounce1 3.5s ease-in-out infinite 0.2s;
      }
      
      .float-2 {
        animation: bounce2 4s ease-in-out infinite 0.4s;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative flex items-center min-h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, var(--color-navy-dark) 0%, var(--color-navy) 50%, var(--color-navy-light) 100%)",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(232, 119, 34, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 26, 58, 0.10) 0%, transparent 40%)",
        }}
      ></div>
      <div className="absolute inset-0 hero-grid"></div>

      <div
        className="relative z-10 w-full max-w-7xl mx-auto px-[5%] grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        style={{ paddingTop: "70px", minHeight: "100vh" }}
      >
        {/* Left Content */}
        <div className="py-8" style={{ animation: "fadeInUp 0.8s ease both" }}>
          <div
            className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase mb-6 rounded-full"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
              padding: "0.5rem 0.85rem",
              backdropFilter: "blur(12px)",
              color: "var(--color-orange)",
              animation: "fadeInDown 0.8s ease both",
            }}
          >
            <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-orange-400 inline-block"></span>
            Uganda's Premier Sourcing & Freight Partner
          </div>

          <h1
            className="font-black leading-tight mb-6 text-white"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)",
              animation: "fadeInUp 0.8s 0.2s ease both",
            }}
          >
            Source. Ship. Deliver.{" "}
            <span style={{ color: "var(--color-orange)" }}>With Ease.</span>
          </h1>

          <p
            className="text-base leading-relaxed mb-10 max-w-lg"
            style={{
              color: "rgba(255, 255, 255, 0.7)",
              animation: "fadeInUp 0.8s 0.4s ease both",
            }}
          >
            Rwoozi China-Uganda Logistics connects businesses and individuals across Uganda
            directly to verified suppliers in China. We handle
            sourcing, inspection, LCL/FCL shipping, customs clearance, and money
            transfer — all under one roof.
          </p>

          <div
            className="flex flex-wrap gap-4 mb-12"
            style={{ animation: "fadeInUp 0.8s 0.6s ease both" }}
          >
            <a
              href="#cars"
              className="flex items-center gap-2 font-bold text-base px-8 py-3.5 rounded-full text-white transition-all duration-300 hover:-translate-y-1 no-underline"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-orange), var(--color-orange-light))",
                boxShadow: "0 4px 20px rgba(232, 119, 34, 0.4)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Explore Products
            </a>
            <a
              href="https://wa.me/256774544866"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-semibold text-base px-8 py-3.5 rounded-full text-white transition-all duration-300 hover:-translate-y-1 no-underline"
              style={{ border: "1.5px solid rgba(255, 255, 255, 0.3)" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-tags"
              >
                <path d="m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"></path>
                <path d="M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z"></path>
                <circle cx="6.5" cy="9.5" r=".5" fill="currentColor"></circle>
              </svg>
              Get a Quote
            </a>
          </div>
        </div>

        {/* Right - Rotating Globe */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative flex items-center justify-center w-full h-[450px]">
            {/* Outer Rotating Circle - Magenta */}
            <div
              className="absolute rotate-reverse"
              style={{
                width: "440px",
                height: "440px",
                borderRadius: "50%",
                borderColor: "rgba(139, 26, 58, 0.45)",
                borderStyle: "dotted",
                borderWidth: "2px",
              }}
            >
              <div
                className="absolute w-3 h-3 rounded-full"
                style={{
                  background: "#8b1a3a",
                  boxShadow: "0 0 10px #8b1a3a",
                  top: "-6px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              ></div>
            </div>

            {/* Middle Rotating Circle - Orange */}
            <div
              className="absolute rotate-reverse-slow"
              style={{
                width: "365px",
                height: "365px",
                borderRadius: "50%",
                borderColor: "rgba(232, 119, 34, 0.45)",
                borderStyle: "dashed",
                borderWidth: "2px",
              }}
            >
              <div
                className="absolute w-2.5 h-2.5 rounded-full"
                style={{
                  background: "var(--color-orange)",
                  boxShadow: "0 0 10px var(--color-orange)",
                  top: "-5px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              ></div>
            </div>

            {/* Globe Container */}
            <div
              className="relative flex items-center justify-center rounded-full overflow-hidden rotate-slow"
              style={{
                width: "290px",
                height: "290px",
                background:
                  "linear-gradient(135deg, var(--color-navy-dark) 0%, var(--color-navy) 50%, var(--color-navy-light) 100%)",
                border: "2px solid rgba(232, 119, 34, 0.3)",
                boxShadow:
                  "0 0 60px rgba(232, 119, 34, 0.2), inset 0 0 60px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(255, 255, 255, 0.05) 28px, rgba(255, 255, 255, 0.05) 29px), repeating-linear-gradient(90deg, transparent, transparent 28px, rgba(255, 255, 255, 0.05) 28px, rgba(255, 255, 255, 0.05) 29px)",
                }}
              ></div>
              <img
                src="https://i.ibb.co/006PtTt/globe.png"
                alt="Rwoozi Logistics global sourcing and freight routes — China to Uganda"
                className="w-full h-full object-cover rounded-full shadow-2xl"
                style={{ animation: "rotateSlow 60s linear infinite" }}
              />
            </div>

            {/* Product Sourcing Card - Top Right */}
            <div
              className="float-0"
              style={{
                position: "absolute",
                top: "8%",
                right: "2%",
                background: "rgba(255, 255, 255, 0.16)",
                border: "1px solid rgba(255, 255, 255, 0.35)",
                backdropFilter: "blur(18px)",
                borderRadius: "14px",
                padding: "14px 18px",
                minWidth: "160px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
              }}
            >
              <div
                style={{
                  fontSize: "0.65rem",
                  color: "rgba(255, 255, 255, 0.75)",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                Supplier Sourcing
              </div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  color: "white",
                  margin: "2px 0",
                }}
              >
                1 Country
              </div>
              <div
                className="flex items-center gap-1.5"
                style={{
                  fontSize: "0.7rem",
                  color: "var(--color-orange)",
                  fontWeight: "600",
                }}
              >
                <MapPin size={11} />
                China
              </div>
            </div>

            {/* Freight Card - Bottom Left */}
            <div
              className="float-1"
              style={{
                position: "absolute",
                bottom: "12%",
                left: "-4%",
                background: "rgba(255, 255, 255, 0.16)",
                border: "1px solid rgba(255, 255, 255, 0.35)",
                backdropFilter: "blur(18px)",
                borderRadius: "14px",
                padding: "14px 18px",
                minWidth: "160px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
              }}
            >
              <div
                style={{
                  fontSize: "0.65rem",
                  color: "rgba(255, 255, 255, 0.75)",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                LCL & FCL Freight
              </div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  color: "white",
                  margin: "2px 0",
                }}
              >
                Any Quantity
              </div>
              <div
                className="flex items-center gap-1.5"
                style={{
                  fontSize: "0.7rem",
                  color: "var(--color-orange)",
                  fontWeight: "600",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22V8"></path>
                  <path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>
                  <circle cx="12" cy="5" r="3"></circle>
                </svg>
                Door-to-door Uganda
              </div>
            </div>

            {/* Money Transfer Card - Right Middle */}
            <div
              className="float-2"
              style={{
                position: "absolute",
                top: "44%",
                right: "-3%",
                background: "rgba(255, 255, 255, 0.16)",
                border: "1px solid rgba(255, 255, 255, 0.35)",
                backdropFilter: "blur(18px)",
                borderRadius: "14px",
                padding: "14px 18px",
                minWidth: "160px",
                transform: "translateY(-50%)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
              }}
            >
              <div
                style={{
                  fontSize: "0.65rem",
                  color: "rgba(255, 255, 255, 0.75)",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                Money Transfer
              </div>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  color: "white",
                  margin: "2px 0",
                }}
              >
                Same Day
              </div>
              <div
                className="flex items-center gap-1.5"
                style={{
                  fontSize: "0.7rem",
                  color: "var(--color-orange)",
                  fontWeight: "600",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-banknote"
                >
                  <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                  <circle cx="12" cy="12" r="2"></circle>
                  <path d="M6 12h.01M18 12h.01"></path>
                </svg>
                Uganda · China
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
