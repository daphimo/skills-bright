import React from "react";
import { brandColors } from "./components/Brandcolors";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="w-full">
      {/* Stats Section */}
      <div style={{ backgroundColor: brandColors.card }} className="py-12">
        <div
          ref={ref}
          className="max-w-7xl px-4 mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center"
        >
          <div>
            <p
              style={{ color: brandColors.primary }}
              className="text-3xl font-bold"
            >
              {inView ? <CountUp end={120} duration={2} /> : 0}+
            </p>
            <p style={{ color: brandColors.text }}>Live Jobs</p>
          </div>
          <div>
            <p
              style={{ color: brandColors.primary }}
              className="text-3xl font-bold"
            >
              {inView ? <CountUp end={40} duration={2} /> : 0}+
            </p>
            <p style={{ color: brandColors.text }}>Companies Supported</p>
          </div>
          <div>
            <p
              style={{ color: brandColors.primary }}
              className="text-3xl font-bold"
            >
              {inView ? <CountUp end={500} duration={2} /> : 0}+
            </p>
            <p style={{ color: brandColors.text }}>Candidates Trained</p>
          </div>
          <div>
            <p
              style={{ color: brandColors.primary }}
              className="text-3xl font-bold"
            >
              {inView ? <CountUp end={10} duration={2} /> : 0}+
            </p>
            <p style={{ color: brandColors.text }}>Industries Covered</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div
        style={{ backgroundColor: brandColors.background }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-center px-4">
          {/* Left Section (Image) */}
          <div className="flex-auto md:flex-[1_1_40%] flex flex-col justify-center items-center md:items-center">
            <img
              src="/files/new_about.webp"
              alt="Kalpana Shetty"
              className="w-full h-auto mb-6 blob-shape"
            />

            <h3
              className="text-2xl mb-2"
              style={{ color: brandColors.primary }}
            >
              SkillBright
            </h3>
              <h3
              className="text-xl mb-2"
              style={{ color: brandColors.primary }}
            >
              Kalpana Shetty
            </h3>
            <p
              className="text-m font-medium"
              style={{ color: brandColors.secondary }}
            >
              Founder & CEO
            </p>
          </div>

          {/* Right Section (Content) */}
          <div className="flex-auto md:flex-[1_1_60%]">
            <h2
              style={{ color: brandColors.secondary }}
              className="text-3xl font-bold mb-4"
            >
              About Us
            </h2>
            <p
              style={{ color: brandColors.text }}
              className="leading-relaxed mb-4"
            >
              At{" "}
              <span style={{ color: brandColors.primary, fontWeight: 600 }}>
                SkillBright HR Solutions
              </span>
              , we believe that people are the true strength of any
              organization. Our mission is to empower businesses with effective
              HR solutions, training, and guidance that create long-term growth
              and employee satisfaction.
            </p>
            <p style={{ color: brandColors.text }} className="leading-relaxed">
              Led by{" "}
              <span style={{ color: brandColors.primary, fontWeight: 600 }}>
                Kalpana Shetty
              </span>
              , a seasoned professional with 15+ years of experience in HR,
              Sales Training, Counseling, and Management, we bring deep
              expertise in building strong teams and enhancing workplace
              culture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
