import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { brandColors } from "../Brandcolors.tsx";
import type { BrandColorKeys } from "../Brandcolors.tsx";

interface BackToTopButtonProps {
  color?: BrandColorKeys | string; // Accept brandColors key or any CSS color
  size?: number;
}

const BackToTopButton: React.FC<BackToTopButtonProps> = ({
  color = "primary",
  size = 50,
}) => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollTop / docHeight) * 100;

      setVisible(scrollTop > 300);
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Use brandColors if the key exists, otherwise fallback to color as string
  const backgroundColor =
    (brandColors as Record<string, string>)[color] || color;

  // Circular progress calculation
  const radius = 22;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "1rem",
        right: visible ? "2rem" : "-6rem",
        width: size,
        height: size,
        borderRadius: "50%",
        border: "none",
        padding: 0,
        backgroundColor,
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        cursor: "pointer",
        transition: "all 0.4s ease",
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      aria-label="Back to Top"
    >
      {/* Background circular track */}
      <svg
        width={size}
        height={size}
        style={{ position: "absolute", top: 0, left: 0, transform: "rotate(-90deg)" }}
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="rgba(255,255,255,0.2)"
          strokeWidth={4}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#fff"
          strokeWidth={4}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>

      <ArrowUp size={24} color="#fff" />
    </button>
  );
};

export default BackToTopButton;
