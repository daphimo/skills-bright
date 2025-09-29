import React from "react";
import ScrollVelocity from "./components/ui/ScrollVelocity";
import { brandColors } from "./components/Brandcolors";

const industries = [
  "IT & Software",
  "E-commerce",
  "Healthcare",
  "Retail",
  "Manufacturing",
  "Education",
  "Startups",
  "Sales & Telecalling",
];

const IndustriesSection: React.FC = () => {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: brandColors.background }}
    >
      {/* Section Title */}
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        style={{ color: brandColors.text }}
      >
        Industries We Support
      </h2>

      {/* Single Velocity Scroll */}
      <ScrollVelocity
        velocity={80}
        numCopies={12}
        scrollerClassName="flex items-center space-x-4"
        parallaxClassName="relative overflow-hidden"
        texts={[
          <div className="flex items-center space-x-4">
            {industries.map((industry, idx) => (
              <span
                key={idx}
                className="px-4 py-1 rounded-md text-base md:text-lg font-semibold whitespace-nowrap shadow-none"
                style={{ backgroundColor: "#fff", color: brandColors.primary }}
              >
                {industry}
              </span>
            ))}
          </div>,
        ]}
      />
    </section>
  );
};

export default IndustriesSection;
