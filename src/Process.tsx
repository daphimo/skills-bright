import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { brandColors } from "./components/Brandcolors";

interface ProcessStep {
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    title: "Consultation",
    description: "Understanding your business needs.",
  },
  {
    title: "Custom Plan",
    description: "Tailored HR strategy & roadmap.",
  },
  {
    title: "Implementation",
    description: "Recruitment, training & compliance.",
  },
  {
    title: "Ongoing Support",
    description: "Sustainable growth with HR audits.",
  },
];

const OurProcess: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      className="relative py-20 px-4 bg-white"
      style={{ backgroundColor: brandColors.background }}
    >
      {/* Section Title */}
      <h2
        className="text-3xl font-bold text-center mb-16"
        style={{ color: brandColors.text }}
      >
        Our Process
      </h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Vertical dotted line */}
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full border-l-4 border-dotted"
          style={{ borderColor: brandColors.highlight }}
        ></div>

        <div className="flex flex-col space-y-16">
          {processSteps.map((step, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative w-full flex ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`w-full sm:w-1/2 p-6 rounded-lg shadow-lg bg-white`}
                  data-aos={isLeft ? "fade-right" : "fade-left"}
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: brandColors.primary }}
                  >
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>

                {/* Dot on the line */}
                <div
                  className="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full hidden md:block"
                  style={{ backgroundColor: brandColors.primary }}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
