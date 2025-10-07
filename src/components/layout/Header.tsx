// src/components/layout/Header.tsx
import { useState, useEffect } from "react";
import { brandColors } from "../Brandcolors.tsx";
import { Menu, X } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import logo from "/files/company-logo.svg";
import Buttons from "../ui/Buttons";

const navItems = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "services", label: "Services", href: "#services" },
  { id: "benefits", label: "Benefits", href: "#benefits" },
  { id: "process", label: "Process", href: "#process" },
  { id: "industries", label: "Industries", href: "#industries" },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll progress effect
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 w-full shadow-sm z-50 overflow-x-hidden"
      style={{ backgroundColor: brandColors.background }}
    >
      <div className="relative w-full overflow-x-hidden">
        {/* Progress Bar Gutter */}
        <div
          className="absolute top-0 left-0 h-[3px] w-full"
          style={{ backgroundColor: brandColors.card }}
        >
          {/* Progress Line */}
          <div
            className="h-full transition-all duration-150 ease-linear"
            style={{
              width: `${scrollProgress}%`,
              backgroundColor: brandColors.accent,
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl w-full px-4 py-3 flex items-center justify-between relative z-10">
          <div className="container mx-auto max-w-7xl flex items-center justify-between relative z-10">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <a href="#home">
                <img src={logo} alt="Company Logo" className="h-10 w-auto" />
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  aria-label={item.label}
                  className="relative text-sm font-medium hover:opacity-90 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                  style={{ color: brandColors.text }}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Buttons
                label="Get HR Support"
                link="#contact"
                variant="primary"
              />
            </div>

            {/* Mobile Burger */}
            <button
              className="md:hidden"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={28} style={{ color: brandColors.text }} />
            </button>
          </div>

          {/* Overlay */}
          {drawerOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-40 z-40"
              onClick={() => setDrawerOpen(false)}
            />
          )}

          {/* Drawer */}
          <div
            className={`fixed top-0 right-0 h-full bg-white w-[90%] max-w-sm z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
              drawerOpen ? "translate-x-0" : "translate-x-full"
            }`}
            style={{ maxWidth: "100vw" }}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <div className="flex items-center space-x-2">
                <a href="#home" aria-label="Home">
                  <img src={logo} alt="Company Logo" className="h-7 w-auto" />
                </a>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
              >
                <X size={28} style={{ color: brandColors.text }} />
              </button>
            </div>

            {/* Drawer Nav */}
            <nav className="flex-1 flex flex-col text-left">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  aria-label={item.label}
                  href={item.href}
                  className="relative px-6 py-4 text-base font-medium border-b after:content-[''] after:absolute after:left-0 after:bottom-2 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                  style={{
                    color: brandColors.text,
                    borderColor: brandColors.highlight,
                  }}
                  onClick={(e) => {
                    e.preventDefault(); // prevent default anchor jump
                    setDrawerOpen(false); // close drawer

                    // Smooth scroll to target section
                    const target = document.querySelector(item.href);
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Drawer Footer */}
            <div
              className="px-6 py-4 border-t flex items-center justify-between"
              style={{ borderColor: brandColors.highlight }}
            >
              {/* Socials */}
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/skillbrighthr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram
                    size={22}
                    style={{ color: brandColors.secondary }}
                  />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61581639960890"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook
                    size={22}
                    style={{ color: brandColors.secondary }}
                  />
                </a>
              </div>

              {/* CTA */}

              <Buttons
                label="Get HR Support"
                link="#contact"
                variant="primary"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
