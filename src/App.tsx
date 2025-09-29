import type { FC } from "react";
import Buttons from "./components/ui/Buttons.tsx";

const HeroSection: FC = () => {
  return (
    <section className="w-full">
      <div className="mx-auto  px-4 py-6 max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Content */}
        <div className="flex flex-col justify-center text-center md:text-left space-y-6">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug">
            Empowering Workplaces with Smart HR Solutions
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            From recruitment to training, we handle HR while you focus on
            business growth.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Buttons label="I want to Hire" link="#contact" variant="primary" />
            <Buttons
              label="I am looking for a Job"
              link="#contact"
              variant="secondary"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/files/hr_banner.jpg"
            alt="HR Banner"
            className="w-full h-auto max-w-md md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
