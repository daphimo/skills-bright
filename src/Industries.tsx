import React from "react";
import { brandColors } from "./components/Brandcolors";

const industries = [
  {
    title: "IT & Software",
    desc: "Talent solutions for IT services, SaaS, and tech companies.",
  },
  {
    title: "E-commerce",
    desc: "HR support for online stores, logistics, and operations.",
  },
  {
    title: "Healthcare",
    desc: "Workforce management for hospitals, clinics, and healthcare staff.",
  },
  {
    title: "Retail",
    desc: "Scalable HR for retail chains, outlets, and offline stores.",
  },
  {
    title: "Manufacturing",
    desc: "HR solutions for factories, plants, and production industries.",
  },
  {
    title: "Education",
    desc: "Custom HR services for schools, colleges, and institutions.",
  },
  {
    title: "Startups",
    desc: "Agile HR support for fast-growing businesses and entrepreneurs.",
  },
  {
    title: "Sales & Telecalling",
    desc: "Recruitment and workforce management for sales teams.",
  },
];

const IndustriesSection: React.FC = () => {
  return (
    <section
      className="py-20 relative"
      style={{ backgroundColor: brandColors.background }}
    >
      {/* Section Title */}
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        style={{ color: brandColors.text }}
      >
        Industries We Support
      </h2>

      {/* Industry Cards */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6 px-6">
  {industries.map((industry, idx) => (
    <div
      key={idx}
      className="w-72 bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-blue-500 transition-all duration-300"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {industry.title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        {industry.desc}
      </p>
    </div>
  ))}
</div>

    </section>
  );
};

export default IndustriesSection;
