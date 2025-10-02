import React from "react";
import { brandColors } from "./components/Brandcolors";

interface ServiceCardProps {
  title: string;
  content: string;
}

const services: ServiceCardProps[] = [
  { title: "HR Consultancy", content: "Recruitment, employee management, compliance & policy making." },
  { title: "Sales Training", content: "Sales techniques, negotiation skills & client handling." },
  { title: "Employee Training", content: "Workplace skills, motivation & team building." },
  { title: "HR Training", content: "Modern tools & practices for HR professionals." },
  { title: "Personality Development", content: "Confidence building, grooming & soft skills." },
  { title: "Payroll & Compliance", content: "Payroll, attendance & performance management." },
  { title: "Counseling", content: "Career guidance, personal development & emotional well-being." },
];

const CoreServicesSection: React.FC = () => {
  return (
    <section
      className="w-full py-16"
      style={{ backgroundColor: brandColors.card }}
    >
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2
          className="text-4xl font-bold mb-12"
          style={{ color: brandColors.primary }}
        >
          Our Core Services
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 min-w-[250px] max-w-[300px] bg-white rounded-lg shadow-lg p-6 text-center transition-transform"
              style={{ color: brandColors.text }}
            >
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-700">{service.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServicesSection;
