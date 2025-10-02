import React, { useEffect, useState } from "react";
import { brandColors } from "./components/Brandcolors.tsx";

const benefits = [
  {
    id: 1,
    type: "num",
    value: 40,
    suffix: "%",
    title: "Cost Reduction",
    desc: "Reduce HR expenses by up to 40% through efficient outsourcing and smart payroll automation.",
  },
  {
    id: 2,
    type: "num",
    value: "5–500+",
    title: "Scalable",
    desc: "From small teams to 500+ employees — scale HR services without rebuilding processes.",
  },
  {
    id: 3,
    type: "icon",
    value: "⚖️",
    title: "Compliance First",
    desc: "PF, ESI, gratuity and labour-law handling plus weekly HR audits and confidential support.",
  },
  {
    id: 4,
    type: "icon",
    value: "💻",
    title: "Modern HR Tech",
    desc: "Smart payroll, attendance, and reporting tools to reduce manual errors and speed reporting.",
  },
];

const comparisonRows = [
  {
    feature: "Cost",
    inhouse: "High (headcount + admin)",
    basic: "Medium",
    sb: "Up to 40% savings",
  },
  {
    feature: "Hiring Quality",
    inhouse: "Varies",
    basic: "Sometimes role-fit",
    sb: "Job-ready, trained candidates",
  },
  {
    feature: "Compliance",
    inhouse: "Needs internal expertise",
    basic: "Partial",
    sb: "Full (PF/ESI, gratuity, labour law) + weekly audits",
  },
  {
    feature: "Tech & Reporting",
    inhouse: "Depends on budget",
    basic: "Limited",
    sb: "Smart payroll, attendance & reporting tools",
  },
  {
    feature: "Scalability",
    inhouse: "Harder as you grow",
    basic: "Moderate",
    sb: "5 → 500+ employees supported",
  },
  {
    feature: "Training",
    inhouse: "Internal (variable)",
    basic: "Optional",
    sb: "Sales, HR, telecalling & personality training included",
  },
  {
    feature: "Counseling",
    inhouse: "Internal / Ad hoc",
    basic: "Limited",
    sb: "Career guidance, personal development & emotional well-being support",
  },
];

// Counter hook
const useCounter = (end: number, duration = 1500) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

const SkillBrightSection: React.FC = () => {
  const counter40 = useCounter(40);

  return (
    <section
      className="py-12 px-4"
      style={{
        background: brandColors.background,
        color: brandColors.text,
      }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        {/* Top: Benefits */}
        <div>
          <h2 className="text-2xl font-bold mb-2 text-center">
            Why choose SkillBright
          </h2>
          <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto">
            End-to-end HR services that lower cost, ensure compliance, and scale
            with your business.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {benefits.map((item) => (
              <article
                key={item.id}
                className="rounded-xl p-5 transition border"
                style={{
                  background: brandColors.card,
                  borderColor: brandColors.highlight,
                  boxShadow: `0 8px 20px ${brandColors.text}20`,
                }}
              >
                {item.type === "num" && typeof item.value === "number" ? (
                  <div
                    className="font-bold text-3xl bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${brandColors.primary}, ${brandColors.accent})`,
                    }}
                  >
                    {counter40}
                    {item.suffix}
                  </div>
                ) : item.type === "num" ? (
                  <div
                    className="font-bold text-2xl bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(90deg, ${brandColors.primary}, ${brandColors.accent})`,
                    }}
                  >
                    {item.value}
                  </div>
                ) : (
                  <div className="text-3xl">{item.value}</div>
                )}
                <h4 className="mt-2 text-lg font-semibold">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom: Comparison */}
        <div
          className="rounded-xl p-5"
          style={{
            background: brandColors.card,
            border: `1px solid ${brandColors.highlight}`,
            boxShadow: `0 8px 20px ${brandColors.text}20`,
          }}
        >
          <h3 className="text-lg mb-4 font-semibold text-center">
            At a glance — SkillBright vs alternatives
          </h3>

          {/* Desktop Table */}
          <div className="hidden md:flex flex-col gap-2">
            {/* Header */}
            <div
              className="grid grid-cols-4 p-2 rounded-lg font-semibold text-sm"
              style={{
                background: brandColors.highlight,
                color: brandColors.text,
              }}
            >
              <div>Feature</div>
              <div>In-house</div>
              <div>Basic Outsource</div>
              <div
                className="rounded-md px-2"
                style={{ background: brandColors.secondary, color: "#fff" }}
              >
                SkillBright
              </div>
            </div>

            {/* Rows */}
            {comparisonRows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-4 p-2 text-sm rounded-lg"
                style={{
                  background: brandColors.background,
                  border: `1px solid ${brandColors.highlight}`,
                }}
              >
                <div
                  className="font-semibold"
                  style={{ color: brandColors.primary }}
                >
                  {row.feature}
                </div>
                <div className="text-gray-700">{row.inhouse}</div>
                <div className="text-gray-700">{row.basic}</div>
                <div
                  className="rounded-md px-2"
                  style={{
                    background: brandColors.secondary,
                    color: "#fff",
                  }}
                >
                  {row.sb}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Cards */}
          <div className="flex flex-col gap-4 md:hidden">
            {comparisonRows.map((row, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg text-sm"
                style={{
                  background: brandColors.background,
                  border: `1px solid ${brandColors.highlight}`,
                }}
              >
                <div
                  className="font-semibold mb-2 text-base"
                  style={{ color: brandColors.primary }}
                >
                  {row.feature}
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <span className="font-medium">In-house: </span>
                    <span className="text-gray-700">{row.inhouse}</span>
                  </div>
                  <div>
                    <span className="font-medium">Basic Outsource: </span>
                    <span className="text-gray-700">{row.basic}</span>
                  </div>
                  <div
                    className="p-2 rounded"
                    style={{ background: brandColors.secondary, color: "#fff" }}
                  >
                    <span className="font-medium rounded px-1">
                      SkillBright:
                    </span>{" "}
                    <span>{row.sb}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillBrightSection;
