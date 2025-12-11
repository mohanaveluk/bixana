"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Custom hook to detect mobile screen
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return isMobile;
};

export default function BixanaThroughYears() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const valueRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Only apply GSAP animations on desktop
    if (isMobile) return;

    gsap.registerPlugin(ScrollTrigger);

    const formatWithSuffix = (val: number, suffix: string) => {
      const rounded = Math.round(val);
      return `${rounded}${suffix}`;
    };

    valueRefs.current.forEach((el) => {
      if (!el) return;
      const target = Number(el.dataset.value || 0);
      const suffix = String(el.dataset.suffix || "");

      const state = { v: 0 } as { v: number };
      gsap.to(state, {
        v: target,
        duration: 1.6,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = formatWithSuffix(state.v, suffix);
        },
        scrollTrigger: {
          trigger: sectionRef.current as Element,
          start: "top 80%",
          once: true,
        },
      });
    });
  }, [isMobile]);
  return (
    <section className="bg-white" id="bixana-through-years">
      <div
        ref={sectionRef}
        className="mx-auto max-w-8xl px-4 md:px-10 lg:px-12 2xl:px-20 xl:px-16 py-24 md:py-28"
      >
        {isMobile ? (
          /* Mobile Layout: Cards */
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-3 h-3 bg-gradient-to-b from-blue-600 to-white rounded-full"></div>
                <span
                  className="text-black text-sm uppercase tracking-wide"
                  style={{ fontWeight: 300, fontFamily: "Inter Tight" }}
                >
                  Toothfairy through years
                </span>
              </div>
              <h2
                className="text-black leading-tight mb-6"
                style={{ fontWeight: 300, fontFamily: "Inter Tight" }}
              >
                <span className="block text-[32px] leading-[36px]">
                  The{" "}
                  <span
                    className="text-transparent bg-clip-text"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #0052CC 0%, #61A0FF 100%)",
                    }}
                  >
                    numbers
                  </span>{" "}
                  to back
                </span>
                <span className="block text-[32px] leading-[36px] mt-1">
                  it up.
                </span>
              </h2>
              <p
                className="text-[#585858] text-[16px] leading-[24px] max-w-2xl mx-auto"
                style={{
                  fontWeight: 300,
                  letterSpacing: "-0.02em",
                  fontFamily: "Inter Tight",
                }}
              >
                At Toothfairy, our numbers reflect the real impact we deliver
                for dental practices. From boosting patient flow to improving
                treatment acceptance and driving measurable ROI, each result
                demonstrates the power of our AI-driven tools to streamline
                operations, elevate patient engagement, and help clinics grow
                with confidence.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="space-y-4">
              {/* Completed Projects Card */}
              <div className="bg-white border border-[#E5E7EB] rounded-[16px] p-6 w-full">
                <div className="flex items-center justify-between">
                  <span
                    className="text-[#0A0F29] text-[18px]"
                    style={{
                      fontWeight: 300,
                      letterSpacing: "-0.02em",
                      fontFamily: "Inter Tight",
                    }}
                  >
                    Return on Investment
                  </span>
                  <span
                    className="text-black text-[40px]"
                    style={{
                      fontWeight: 300,
                      letterSpacing: "-0.02em",
                      fontFamily: "Inter Tight",
                    }}
                  >
                    6x
                  </span>
                </div>
              </div>

              {/* Customer Satisfaction Card */}
              <div className="bg-white border border-[#E5E7EB] rounded-[16px] p-6 w-full">
                <div className="flex items-center justify-between">
                  <span
                    className="text-[#0A0F29] text-[18px]"
                    style={{
                      fontWeight: 300,
                      letterSpacing: "-0.02em",
                      fontFamily: "Inter Tight",
                    }}
                  >
                    More New Patients
                  </span>
                  <span
                    className="text-black text-[40px]"
                    style={{
                      fontWeight: 300,
                      letterSpacing: "-0.02em",
                      fontFamily: "Inter Tight",
                    }}
                  >
                    40%
                  </span>
                </div>
              </div>

              {/* Expert Support Team Card */}
              <div className="bg-white border border-[#E5E7EB] rounded-[16px] p-6 w-full">
                <div className="flex items-center justify-between">
                  <span
                    className="text-[#0A0F29] text-[18px]"
                    style={{
                      fontWeight: 300,
                      letterSpacing: "-0.02em",
                      fontFamily: "Inter Tight",
                    }}
                  >
                    Higher Case Acceptance
                  </span>
                  <span
                    className="text-black text-[40px]"
                    style={{
                      fontWeight: 300,
                      letterSpacing: "-0.02em",
                      fontFamily: "Inter Tight",
                    }}
                  >
                    45%
                  </span>
                </div>
              </div>

              {/* Sales In Count Card */}
              {/* <div className="bg-white border border-[#E5E7EB] rounded-[16px] p-6 w-full">
                <div className="flex items-center justify-between">
                  <span
                    className="text-[#0A0F29] text-[18px]"
                    style={{
                      fontWeight: 300,
                      letterSpacing: "-0.02em",
                      fontFamily: "Inter Tight",
                    }}
                  >
                    Sales In Count
                  </span>
                  <span
                    className="text-black text-[40px]"
                    style={{
                      fontWeight: 300,
                      letterSpacing: "-0.02em",
                      fontFamily: "Inter Tight",
                    }}
                  >
                    78k
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        ) : (
          /* Desktop Layout: Original with animations */
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            {/* Left: Heading and copy */}
            <div className="flex-1 min-w-[500px]">
              <div className="flex flex-col gap-2 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-b from-blue-600 to-white rounded-full"></div>
                  <span
                    className="text-black text-sm uppercase tracking-wide"
                    style={{ fontWeight: 300, fontFamily: "Inter Tight" }}
                  >
                    Toothfairy through years
                  </span>
                </div>
                <h2
                  className="text-black leading-tight"
                  style={{ fontWeight: 300, fontFamily: "Inter Tight" }}
                >
                  <span className="block text-[48px] md:text-[56px] lg:text-[72px]">
                    The{" "}
                    <span
                      className="text-transparent bg-clip-text"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, #0052CC 0%, #61A0FF 100%)",
                      }}
                    >
                      numbers
                    </span>{" "}
                    to back
                  </span>
                  <span className="block text-[48px] md:text-[56px] lg:text-[72px] mt-1">
                    it up.
                  </span>
                </h2>

                <p
                  className="mt-8 text-[#585858] max-w-2xl"
                  style={{
                    fontWeight: 300,
                    fontSize: 18,
                    lineHeight: "32px",
                    letterSpacing: "-0.02em",
                    fontFamily: "Inter Tight",
                  }}
                >
                  At Toothfairy, our numbers reflect the real impact we deliver
                  for dental practices. From boosting patient flow to improving
                  treatment acceptance and driving measurable ROI, each result
                  demonstrates the power of our AI-driven tools to streamline
                  operations, elevate patient engagement, and help clinics grow
                  with confidence.
                </p>
              </div>
            </div>

            {/* Right: Stats list */}
            <div className="flex-1 w-full">
              <ul className="divide-y divide-[#E5E7EB]">
                <li className="flex items-center justify-between py-4">
                  <div className="flex flex-col gap-2">
                    <span
                      className="text-[#0A0F29]"
                      style={{
                        fontWeight: 400,
                        fontSize: 22,
                        letterSpacing: "-0.02em",
                        fontFamily: "Inter Tight",
                      }}
                    >
                      Return on Investment
                    </span>
                    <span
                      className="text-[#0A0F29]"
                      style={{
                        fontWeight: 300,
                        fontSize: 16,
                        letterSpacing: "-0.02em",
                        fontFamily: "Inter Tight",
                        // width: "350px",
                      }}
                    >
                      Clinics achieve 4-6x ROI within 12 months of using
                      Toothfairy AI.
                    </span>
                  </div>
                  <span
                    ref={(el) => {
                      valueRefs.current[0] = el;
                    }}
                    data-value="6"
                    data-suffix="x"
                    className="text-black"
                    style={{
                      fontWeight: 300,
                      fontSize: 56,
                      letterSpacing: "-0.02em",
                      fontFamily: "Inter Tight",
                    }}
                  >
                    0x
                  </span>
                </li>
                <li className="flex items-center justify-between py-4">
                  <div className="flex flex-col gap-2">
                    <span
                      className="text-[#0A0F29]"
                      style={{
                        fontWeight: 400,
                        fontSize: 22,
                        letterSpacing: "-0.02em",
                        fontFamily: "Inter Tight",
                      }}
                    >
                      More New Patients
                    </span>
                    <span
                      className="text-[#0A0F29]"
                      style={{
                        fontWeight: 300,
                        fontSize: 16,
                        letterSpacing: "-0.02em",
                        fontFamily: "Inter Tight",
                        // width: "350px",
                      }}
                    >
                      AI Powered reviews, scheduling and lead capture increase
                      patients flow.
                    </span>
                  </div>
                  <span
                    ref={(el) => {
                      valueRefs.current[1] = el;
                    }}
                    data-value="40"
                    data-suffix="%"
                    className="text-black"
                    style={{
                      fontWeight: 300,
                      fontSize: 56,
                      letterSpacing: "-0.02em",
                      fontFamily: "Inter Tight",
                    }}
                  >
                    0%
                  </span>
                </li>
                <li className="flex items-center justify-between py-4">
                  <div className="flex flex-col gap-2">
                    <span
                      className="text-[#0A0F29]"
                      style={{
                        fontWeight: 400,
                        fontSize: 22,
                        letterSpacing: "-0.02em",
                        fontFamily: "Inter Tight",
                      }}
                    >
                      Higher Case Acceptance
                    </span>
                    <span
                      className="text-[#0A0F29]"
                      style={{
                        fontWeight: 300,
                        fontSize: 16,
                        letterSpacing: "-0.02em",
                        fontFamily: "Inter Tight",
                        // width: "350px",
                      }}
                    >
                      Automated follow-ups and financing options boost treatment
                      conversions.
                    </span>
                  </div>

                  <span
                    ref={(el) => {
                      valueRefs.current[2] = el;
                    }}
                    data-value="45"
                    data-suffix="%"
                    className="text-black"
                    style={{
                      fontWeight: 300,
                      fontSize: 56,
                      letterSpacing: "-0.02em",
                      fontFamily: "Inter Tight",
                    }}
                  >
                    0%
                  </span>
                </li>
                {/* <li className="flex items-center justify-between py-4">
                  <span
                    className="text-[#0A0F29]"
                    style={{
                      fontWeight: 300,
                      fontSize: 22,
                      letterSpacing: "-0.02em",
                      fontFamily: "Inter Tight",
                    }}
                  >
                    Sales In Count
                  </span>
                  <span
                    ref={(el) => {
                      valueRefs.current[3] = el;
                    }}
                    data-value="78"
                    data-suffix="k"
                    className="text-black"
                    style={{
                      fontWeight: 300,
                      fontSize: 56,
                      letterSpacing: "-0.02em",
                      fontFamily: "Inter Tight",
                    }}
                  >
                    0k
                  </span>
                </li> */}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
