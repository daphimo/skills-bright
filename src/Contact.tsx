import React, { useRef } from "react";
import { brandColors } from "./components/Brandcolors.tsx";
import emailjs from "@emailjs/browser";

const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        formRef.current,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      )
      .then(() => {
        alert("Message sent successfully!");
        formRef.current?.reset();
      })
      .catch((error) => {
        alert("Failed to send message, try again.");
        console.error(error);
      });
  };

  return (
    <section
      className="relative w-full py-20"
      style={{
        backgroundColor: brandColors.secondary,
        backgroundImage: `linear-gradient(0deg, rgba(255,255,255,0.05) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg mb-4">
            We'd love to hear from you! Fill out the form and we'll get back to
            you as soon as possible.
          </p>
          <p className="text-lg">
            Whether you have a question, feedback, or just want to say hello,
            our team is here to help.
          </p>
        </div>

        {/* Right Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg grid gap-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              required
            />
            <input
              type="tel"
              name="user_phone"
              placeholder="Phone"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            />
          </div>
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            required
          />
          <textarea
            name="message"
            rows={3}
            placeholder="Message"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
            required
          ></textarea>

          {/* Submit Button */}
          <div className="flex justify-start">
            <button
              aria-label="Form Submit"
              type="submit"
              className="inline-flex relative items-center justify-center px-4 py-1 font-medium rounded-[6px] border-2
              bg-[#1c3f74] border-[#1c3f74] text-white transition-transform duration-150"
            >
              <span className="flex items-center">Submit</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
