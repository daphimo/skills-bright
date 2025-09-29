import React from "react";
import { brandColors } from "./components/Brandcolors";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AboutSection: React.FC = () => {
  // Hook for viewport detection
  const [ref, inView] = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.3,    // 30% of element must be visible
  });

  return (
    <section className="w-full">
      {/* Stats Section */}
      <div style={{ backgroundColor: brandColors.card }} className="py-12">
        <div ref={ref} className="max-w-7xl px-4 mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          <div>
            <p style={{ color: brandColors.primary }} className="text-3xl font-bold">
              {inView ? <CountUp end={120} duration={2} /> : 0}+
            </p>
            <p style={{ color: brandColors.text }}>Live Jobs</p>
          </div>
          <div>
            <p style={{ color: brandColors.primary }} className="text-3xl font-bold">
              {inView ? <CountUp end={40} duration={2} /> : 0}+
            </p>
            <p style={{ color: brandColors.text }}>Companies Supported</p>
          </div>
          <div>
            <p style={{ color: brandColors.primary }} className="text-3xl font-bold">
              {inView ? <CountUp end={500} duration={2} /> : 0}+
            </p>
            <p style={{ color: brandColors.text }}>Candidates Trained</p>
          </div>
          <div>
            <p style={{ color: brandColors.primary }} className="text-3xl font-bold">
              {inView ? <CountUp end={10} duration={2} /> : 0}+
            </p>
            <p style={{ color: brandColors.text }}>Industries Covered</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div style={{ backgroundColor: brandColors.background }} className="py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_2fr] gap-10 items-center px-4">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="/files/Kalpana Shetty.png"
              alt="About SkillBright HR Solutions"
              className="max-h-96 w-auto rounded-lg shadow-md object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 style={{ color: brandColors.secondary }} className="text-3xl font-bold mb-4">
              About Us
            </h2>
            <p style={{ color: brandColors.text }} className="leading-relaxed mb-4">
              At{" "}
              <span style={{ color: brandColors.accent, fontWeight: 600 }}>
                SkillBright HR Solutions
              </span>
              , we believe that people are the true strength of any organization.
              Our mission is to empower businesses with effective HR solutions,
              training, and guidance that create long-term growth and employee
              satisfaction.
            </p>
            <p style={{ color: brandColors.text }} className="leading-relaxed">
              Led by{" "}
              <span style={{ color: brandColors.accent, fontWeight: 600 }}>
                Kalpana Shetty
              </span>
              , a seasoned professional with 15+ years of experience in HR, Sales
              Training, Counseling, and Management, we bring deep expertise in
              building strong teams and enhancing workplace culture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
